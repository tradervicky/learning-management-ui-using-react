import React from 'react'

import styles from './Sidebar2.module.css';

function Sidebar2() {
  return (
    <div className={styles.sidebar}>
        
        <div className={styles.componentList}>
            <ul>
                <li> Admin</li>
                <li>Teacher</li>
                <li>Courses</li>
                <li>Students</li>
            </ul>
        </div>

    </div>
  )
}

export default Sidebar2