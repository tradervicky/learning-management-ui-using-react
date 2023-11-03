import React from 'react'
import styles from './Students.module.css';

function Students() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h3>Students List</h3>
        </div>
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Enrolled Courses</th>
  </tr>
  <tr>
    <td>Alfred Doe</td>
    <td>alfred@doe.com</td>
    <td >
        JavaScript
    </td>
  </tr>
  
</table>


    </div>
  )
}

export default Students