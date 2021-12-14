global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const path = require('path');
const express = require("express");
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 
  "mongodb+srv://angeloerimoldi:s3cr3t@cluster0.ojq6n.mongodb.net/roommatedb?retryWrites=true&w=majority";

//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connectDb = async () => {
  return MongoClient.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
}


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

// Handle POST requests to /api/addmetric route
app.post("/api/addmetric", (req, res) => {
  console.log("req.body ", req.body)
  const metric = req.body.metric
  const rc = addOne(metric)
  res.json({ message: rc })
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

// All other GET requests not handled before will return our React app
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


async function addOne(fieldname) {
    const client = await connectDb();
    const statistics = client.db("roommatedb").collection("statistics");

    const session = client.startSession();

    const transactionOptions = {
      readPreference: 'primary',
      readConcern: { level: 'local' },
      writeConcern: { w: 'majority' }
    };

    try {
      const transactionResults = await session.withTransaction(async () => {
        let filter = new Object();
        filter[fieldname] = { $exists: true }
        console.log("filter: ", filter)

        let obj = await statistics.findOne(filter, { session });
        console.log("obj: ", obj)

        let rep = true;
        if (obj === null) {
          obj = {}
          rep = false
        }

        console.log("add obj: ", obj)
        console.log("obj[fieldname]: ", obj[fieldname])

        if (obj[fieldname] === undefined) {
          obj[fieldname] = 1
        } else {
          obj[fieldname]++
        }
        console.log("after obj: ", obj)
        console.log("rep: ", rep)

        const res = (rep) ? await statistics.replaceOne(filter, obj, { session }) :
          await statistics.insertOne( obj, { session })
        console.log("res: ", res)
      }, transactionOptions);
    } catch (e) {
      console.log("The transaction was aborted due to an unexpected error: " + e);
    } finally {
      await session.endSession();
    }
}
