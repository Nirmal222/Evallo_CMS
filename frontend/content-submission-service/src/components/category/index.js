// CategoryDropDown.js

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@mui/material';
import styles from "./index.module.css";

const CategoryDropDown = ({content, setContent}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setContent({ ...content, category: value });
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={styles.formControl}>
      <InputLabel className={styles.label} id="beautiful-dropdown-label">Select Category</InputLabel>
      <Select
        labelId="beautiful-dropdown-label"
        id="beautiful-dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        label="Select Category"
        name="category"
      >
        <MenuItem className={styles.label} value="maths">Maths</MenuItem>
        <MenuItem className={styles.label} value="biology">Biology</MenuItem>
        <MenuItem className={styles.label} value="science">Science</MenuItem>
        <MenuItem className={styles.label} value="history">History</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoryDropDown;
