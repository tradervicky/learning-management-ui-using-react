import React from 'react'
import Sidebar2 from './Sidebar2'
import styles from './Dashboard2.module.css';
import { MdDensityMedium } from "react-icons/md";

function DashBoard2() {
  return (
    <div className={styles.dashboard2}>
        <div className={styles.navbar2}>
        <div className={styles.icon}>
            <img src="/images/logo.png" alt="logo" />
         <MdDensityMedium style={{ color: 'black', fontSize: '32px', cursor: 'pointer' }}/>
        </div>
            <h1>Admin Dashboard</h1>
        </div>

        <Sidebar2/>
        

    </div>
  )
}

export default DashBoard2