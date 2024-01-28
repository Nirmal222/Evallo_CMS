// SubmissionForm.js

import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import styles from './styles/submissionform.module.css';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    contentType: 'test',
    title: '',
    description: '',
    category: '',
    tags: '',
    difficultyLevel: '',
    targetAudience: '',
    numberOfQuestions: '',
    numberOfPages: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form Data:', formData);
  };

  const renderDynamicFields = () => {
    if (formData.contentType === 'test') {
      return (
        <TextField
          label="Number of Questions"
          name="numberOfQuestions"
          value={formData.numberOfQuestions}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      );
    } else if (formData.contentType === 'worksheet') {
      return (
        <TextField
          label="Number of Pages"
          name="numberOfPages"
          value={formData.numberOfPages}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      );
    }
    return null;
  };

  return (
    <Container component="main" maxWidth="md" className={styles.container}>
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h5">Submission Form</Typography>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* ... rest of the form ... */}
          {renderDynamicFields()}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitButton}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SubmissionForm;
