import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomizedRatings from './CustomizedRatings';
import AboutYou from './AboutYou';
import Image from '../img/bgsquestions.png'; // Import using relative path


const steps = [
  'Home', 
  'Lunch', 
  'Kitchen',
  'Me',
  'Cleanliness',
  'Parties',
  'Space',
  'Image',
  'Evening',
  'Morning',
  'Habit',
  'Friends',
  'Plants',
  'Summer',
  'Winter',
  'Alcohol',
  'Smoke',
];

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }
};

export const addMetric = async (name) => {
  const obj = {
    "metric": name
  }
  let response = await fetch("/api/addmetric", {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( obj ),
  });
  if (!response.ok) {
    throw new Error('HTTP error! status: ' + response.status)
  } else {
    return await response.json();
  }
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  //const [answers, setAnswers] = React.useState([].fill.call({ length: steps.length}, -1)); 
  const [answers, setAnswers] = React.useState({}); 


  const isStepOptional = (step) => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    const name = steps[activeStep]
    if (answers[name]) {
      addMetric(name)
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh'}} style={styles.paperContainer}>
      <Stepper activeStep={activeStep} style={{ width: "100%", overflow: "auto", display: "flex", marginTop: "10px" }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
          🏁 Congratulations, you have finished!
          </Typography>
          <Typography sx={{ mt: 2, mb: 1 }}>
          Leave us these informations so we can reach out to you 
          as soon as we are ready and we find the perfect roommate for you.
          </Typography>
          <AboutYou />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button href="/privacy" >Save</Button>
            <Button onClick={handleReset} >Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <CustomizedRatings activeStep={activeStep} step={steps[activeStep]} answers={answers} setAnswers={setAnswers} />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
