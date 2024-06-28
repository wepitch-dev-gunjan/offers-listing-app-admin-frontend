import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function CategorySelect() {
  const [category, setCategory] = useState([]);

  const getcategory = async () => {
    const { data } = axios.get(`http://localhost:8080/category`);
    setCategory(data);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    getcategory();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          {category.map((category, i) => {
            return <MenuItem value={i}>hi</MenuItem>;
          })}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
