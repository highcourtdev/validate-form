import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormContext, Controller, useFormState } from 'react-hook-form';

const Myform = () => {
    const formState = useFormState();
    console.log(formState)
  return (
    <div>
      <Controller
        name="firstName"
        render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField 
            name="firstName" 
            label="First Name" 
            variant="outlined" 
            size="small" 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            error={Boolean(formState.errors.firstName)}
            helperText={formState.errors.firstName?.message}
            />   
        )}
        rules={{required:"Required!"}}
      />

    <Controller
        name="lastName"
        render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField 
            name="lastName" 
            label="Last Name" 
            variant="outlined" 
            size="small" 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            error={Boolean(formState.errors.lastName)}
            helperText={formState.errors.lastName?.message}
            />   
        )}
        rules={{required:"Required!"}}
      />
      <br />
      <Button variant="contained" color="primary" type="submit">Save</Button>
    </div>
  )
}

export default Myform