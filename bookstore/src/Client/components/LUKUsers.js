import React from 'react'
import {Link} from 'react-router-dom';
import "../css/LUKUsers.css"
import { useState, useEffect } from 'react';
import Axios from "axios"
const LUKUsers = () => {

    const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
      Axios.get("http://localhost:3001/luk/getUsers")
      .then((response) => {
        
          setListOfUsers(response.data);
          console.log("Poops", response.data)
        })
     
  }, []);

  const deleteUser = async (id) => {
    try {
      await Axios.delete(`http://localhost:3001/luk/deleteUser/${id}`);
      setListOfUsers(); // Fetch the updated user list after deletion
      alert("deleted")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='mt-5'>
        <div className='container'>
            <div className='add_btn mt-2 mb-2'>
                <Link to='/AddUser' className='btn btn-primary'>Add Users</Link>

            </div>
           
            <table class="table">
                <thead>
                    <tr className='table-dark'>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Shop</th>
                    <th scope="col">Address</th>
                    <th scope="col">Description</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {listOfUsers.map((users)=>{
            return(
                    <tr key={users._id}>
                    <td>{users._id}</td>
                    <td>{users.LUKName}</td>
                    <td>{users.LUKShop}</td>
                    <td>{users.LUKAddresss}</td>
                    <td>{users.LUKDescription}</td>
                    <td>{users.LUKEmail}</td>

                    <td className='d-flex justify-content-between'>
                        <button className='btn btn-success'><i class="fa-solid fa-pen"></i></button>
                        <button className='btn btn-danger' onClick={() => deleteUser(users._id)}>
                    <i className='fa-solid fa-trash'></i>
                  </button>

                    </td>
                    </tr>
                 )})}
                </tbody>
            </table>
           
            
        </div>
        
        </div>
  )
}

export default LUKUsers