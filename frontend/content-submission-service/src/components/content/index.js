// ContentDropDown.js

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@mui/material';
import styles from "./index.module.css";

const ContentDropDown = ({content,setContent}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setContent({ ...content, content: value });
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
        name='content'
      >
        <MenuItem className={styles.label} value="tests">Tests</MenuItem>
        <MenuItem className={styles.label} value="worksheets">Worksheets</MenuItem>
        <MenuItem className={styles.label} value="workbooks">Work Books</MenuItem>
        <MenuItem className={styles.label} value="questionbanks">Question Banks</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ContentDropDown;
