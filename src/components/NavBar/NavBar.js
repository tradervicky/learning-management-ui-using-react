import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.mainNav} >
        
        <div className={styles.logo}>
            <img src="/images/logo.png" alt="logo" />
        </div>
        
        <div className={ styles.menu}>
            <ul>
                <li>Courses</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li>Our Teachers</li>
                <li>Enrolled Courses</li>
            </ul>
        </div>
        <div className={styles.navbtn}>
          <input type="text" placeholder='Enter course' />
            <button>search</button>
        </div>
    </div>


  );
}

export default NavBar;
