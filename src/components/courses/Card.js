import React from 'react'
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
            <div className={styles.img}>
                <img src="/images/course/css.jpg" alt="css" />
            </div>
            <div className={styles.Coursename}>
                <h3>Build Websites with CSS</h3>
            </div>
            <p id={styles.para}>Far advanced settling say finished raillery. Offered chiefly farther</p>
            <div className={styles.TeacherName}>
                <p>Angela Mathew</p>
                <span>72 hours</span>
            </div>
        </div>
  )
}

export default Card