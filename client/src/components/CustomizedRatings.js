import React from "react";
import { withStyles } from '@mui/styles';
import Rating from "@mui/material/Rating";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';


const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75"
  },
  iconHover: {
    color: "#ff3d47"
  },
})(Rating);

const questions = [
  'At home',
  'Usually for lunch I prefer to bring something cooked by me to eat, how much do you agree:',
  'In the kitchen I am',
  'At home I am',
  'in terms of cleanliness I am',
  'In the evening I like to organize parties with friends at my home, how much do you agree:',
  'My home:',
  'I am a person who is hyper careful of my image, how much do you agree:',
  'In the evening I paint the town red, how much do you agree:',
  'In the morning I',
  "I’m a creature of habit, how much do you agree:",
  'A 4-legged friend at home is',
  'My plants',
  'Summer time: the heat and humidity',
  'In winter the cold',
  'Regarding alcohol',
  'Regarding cigarttes',
];

const before = [
  'order delivery',
  'not at all',
  'a chef',
  'a neat freak',
  'germaphobic',
  'not at all',
  'hotel to live in company',
  'not at all',
  'not at all',
  'work hard',
  'not at all',
  'very good company',
  'barely survive',
  'kill me',
  'kills me',
  'Mr Smee',
  "don't mind them",
]

const after = [
  'spend hour in the kitchen',
  'completely',
  'a dishwasher',
  'a messy person',
  'disaster',
  'completely',
  'I need my space',
  'completely',
  'completely',
  'remain in bed',
  'completely',
  'dirt everywhere',
  'Amazon rainforest',
  "I don't feel them",
  "I don't feel it",
  'astemious',
  'I hate smoke',
]

export default function CustomizedRatings( {activeStep, answers, setAnswers} ) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue((answers[activeStep] === -1) ? 0 : answers[activeStep])
  }, [answers, activeStep] );

  const setGlobal = (newValue) => {
    let aw = answers;
    aw[activeStep] = newValue;
    setAnswers(aw);
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{questions[activeStep]}</Typography>
        <Grid container spacing={2}>
          <Grid item >
            <Typography >{before[activeStep]}</Typography>
          </Grid>
          <Grid item >
          <StyledRating
            name="customized-color"
            value={value}
            max={5}
            onChange={(event, newValue) => {
              setValue(newValue);
              setGlobal(newValue);
            }}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={1}
            icon={<FiberManualRecordIcon fontSize="inherit" />}
            emptyIcon={<FiberManualRecordOutlinedIcon fontSize="inherit" />}
          />
          </Grid>
          <Grid item >
            <Typography >{after[activeStep]}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
