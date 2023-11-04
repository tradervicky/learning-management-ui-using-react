import React from 'react'
import styles from './StudentCourse.module.css';

function StudentCourse() {
  return (
    <div className={styles.mainCourseContainer}>
        <div className={styles.description}>
        <div className={styles.Coursetext}>
                <p>Welcome to @supreme-dev Family</p>
                <h1>Data Structure & Algorithm Bootcamp</h1>
                <p>A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures and exercises to help students design and implement efficient solutions. This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.</p>
                <div className={styles.language}>
                    <p>Hindi</p>
                    <p>100+ Lectures</p>
                </div>
            </div>
        </div>
        <div className="courseDetail">
            <div className={styles.accordianCourse}>

            </div>
        </div>
    </div>
  )
}

export default StudentCourse