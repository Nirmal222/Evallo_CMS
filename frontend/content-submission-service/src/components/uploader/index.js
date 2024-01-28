import React, { useState } from 'react'
import styles from "./index.module.css";

const Uploader = ({ files, setFiles }) => {
    const styler = { fontSize: "18px", fontWeight: "normal", color: "#9c9494", marginLeft: "5%" }
    const handleFileChange = async (e) => {
        const formData = new FormData();
        const files = Array.from(e.target.files);
        files.forEach((file, index) => {
            formData.append(file?.name, file);
        });
        setFiles(formData);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const arr = Array.from(e.dataTransfer.files);
    };
    return (
        <div>
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className={styles.customFileInput}>
                <input
                    type="file"
                    id="fileInput"
                    accept=".png, .jpg, .jpeg, .doc, .docx, .xls, .ppt, .txt, .pdf, .zip, .rar, .7zip"
                    multiple
                    onChange={handleFileChange}
                />
                <label for={"fileInput"} className={styles.content}>
                    <img src="https://static.thenounproject.com/png/47347-200.png" alt="Upload Image" />
                    <span style={styler}>Click or Drag&Drop File</span>
                </label>
            </div>
        </div>
    )
};

export default Uploader;