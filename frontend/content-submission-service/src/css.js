import React, { useState } from 'react'
import styles from "./styles/cms.module.css";
import CategoryDropDown from './components/category';
import TagsDropDown from './components/tags';
import ContentDropDown from './components/content';
import DataInput from './components/title';
import Uploader from './components/uploader';
import { useStore } from "store/store";
const CSS = () => {
  const {createContent} = useStore();
  const [content, setContent] = useState({
    category: "",
    tag: "",
    content: "",
    title: "",
    description: "",
  });
  const [files, setFiles] = useState({});
  const handleSubmit = ()=>{
    console.log("ww2");
    try{
      createContent(content);
    }catch(err){
      console.log(err.message, "error");
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.heading}>CREATE / SUBMIT (Content) : </div>
      <div className={styles.mainContainer}>
        <div className={styles.dropdowncontainerLeft}>
          <div>
            <label className={styles.label}>SELECT CATEGORY</label>
            <CategoryDropDown content={content} setContent={setContent} />
          </div>

          <div>
            <label className={styles.label}>SELECT TAG</label>
            <TagsDropDown content={content} setContent={setContent} />
          </div>

          <div>
            <label className={styles.label}>SELECT CONTENT TYPE</label>
            <ContentDropDown content={content} setContent={setContent} />
          </div>


        </div>
        <div className={styles.dropdowncontainerRight}>
          <div>
            <label className={styles.label}>ENTER TITLE</label>
            <DataInput content={content} setContent={setContent} />
          </div>
          <div>
            <label className={styles.label}>SELECT FILES</label>
            <Uploader files={files} setFiles={setFiles}/>
          </div>
          <div className={styles.submitButton}>
            <label className={styles.label}>CLICK HERE TO SUBMIT</label>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSS