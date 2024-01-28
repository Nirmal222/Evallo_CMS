// DataInput.js

import React, { useState } from 'react';
import { TextField, Container } from '@mui/material';
import styles from './index.module.css'; // Import the CSS file

const DataInput = ({content, setContent}) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (event) => {
    setInputData(event.target.value);
    setContent( {...content, title: event.target.value} )
  };

  return (
    <Container component="main" maxWidth="xs" className={styles.container}>
      <form className={styles.form}>
        <TextField
          label="Enter Title"
          variant="outlined"
          fullWidth
          className="input"
          value={inputData}
          onChange={handleInputChange}
        />
      </form>
    </Container>
  );
};

export default DataInput;
