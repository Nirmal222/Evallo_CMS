import React, { useState } from 'react'
import SubmissionForm from './submission'
import styles from "./styles/cms.module.css";
import CSS from "css/css";
import { Navbar } from '../common-components';
import { MdManageSearch } from "react-icons/md";
const CMS = () => {
    const constrollerMenu = [{message:"Create Content", path: "/create"}, {message:"Manage Content", path:"manage"}, {message: "Preview Content", path: "/preview-"}]
    const [currentActive, setCurrentActive] = useState({ message:"Create Content", path: "/create" }) 
    const handleController = (item)=>{
        setCurrentActive(item);
    }
    return (
        <div className={styles.cmsMainContainer}>
            <Navbar />
            <div className={styles.cmsContainer}>
                <div className={styles.left}>
                    <div className={styles.title}>CONTENT DASHBOARD<MdManageSearch /></div>
                    <div className={styles.controllerMenu}>
                        {
                            constrollerMenu.map((item, index) => {
                                return <div style={{ borderLeft: item?.message===currentActive?.message?"2px solid orange": "" }} onClick={()=>handleController(item)} key={index} className={styles.controllerItem}>
                                    {item.message}
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.right}>
                    <CSS />
                </div>
            </div>
        </div>
    )
}

export default CMS