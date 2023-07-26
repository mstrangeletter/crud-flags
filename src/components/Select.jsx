import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSize() {
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
    console.log(size);
  };

  return (
    <Box sx={{ 
        m:"1rem",
        width:"30%"
        }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Elije la resolución</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value={"32x32"}>Icono</MenuItem>
          <MenuItem value={"800x600"}>Media</MenuItem>
          <MenuItem value={"1024x768"}>Media alta</MenuItem>
          <MenuItem value={"1920x1080"}>Alta</MenuItem>
          <MenuItem value={"3840x2160"}>Media alta</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}