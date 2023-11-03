import React from 'react'
import Card from './Card';
import styles from './Courses.module.css';
function Courses() {
  return (
    <div className={styles.courses}>
        <h1>Our Courses</h1>
        <div className={styles.grid}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>

    </div>
  )
}

export default Courses