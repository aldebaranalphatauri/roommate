import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';


export default function AboutYou() {
    const [value, setValue] = React.useState(new Date('2000-01-01T21:11:54'));
    
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TextField
          label="e-mail"
        />
         <MobileDatePicker
          label="Birth date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          label="Nationalities"
          multiline
          rows={4}
        />
        <TextField
          label="Allergies"
          multiline
          rows={4}
        />
        <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        defaultValue="unspecified"
        name="radio-buttons-gender"
      >
        <FormControlLabel value="unspecified" control={<Radio />} label="Unspecified" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Sexual orientation</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        defaultValue="unspecified"
        name="radio-buttons-sex"
      >
        <FormControlLabel value="unspecified" control={<Radio />} label="Unspecified" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="both" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
        <TextField
          label="Profession"
        />
         <TextField
          label="Religion"
        />
        <FormControl component="fieldset">
      <FormLabel component="legend">Are you a smoker?</FormLabel>
      <RadioGroup row name="radio-buttons-smoke" >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
      </LocalizationProvider>
    </Box>
  );
}
