import React from 'react'
import styles from './Teacher.module.css';
import { IoCreateOutline } from "react-icons/io5";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
function Teacher() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h3>Teachers List</h3>
            <span><IoCreateOutline size={24}/> Create</span>
        </div>
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>Alfred Doe</td>
    <td>alfred@doe.com</td>
    <td >
        <AiFillEye size={24}/>
        <BiEdit size={24} style={{color:"#6674cc"}}/>
        <AiOutlineDelete size={24} style={{color:"red"}}/>
    </td>
  </tr>
  
</table>


    </div>
  )
}

export default Teacher