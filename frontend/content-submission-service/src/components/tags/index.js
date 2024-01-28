// TagsDropDown.js

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@mui/material';
import styles from "./index.module.css";

const TagsDropDown = ({content,setContent}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setContent({ ...content, tag: value });
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
        name="tag"
      >
        <MenuItem className={styles.label} value="difficult">Difficult</MenuItem>
        <MenuItem className={styles.label} value="medium">Medium</MenuItem>
        <MenuItem className={styles.label} value="easy">Easy</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TagsDropDown;
