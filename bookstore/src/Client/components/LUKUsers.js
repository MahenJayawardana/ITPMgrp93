import React from 'react'
import {Link} from 'react-router-dom';
import "../css/LUKUsers.css"

const LUKUsers = () => {
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><i class="fa-solid fa-pen"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  
  </tbody>
</table>
        </div>
        
        </div>
  )
}

export default LUKUsers