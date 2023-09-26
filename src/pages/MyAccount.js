import React from 'react'
import { Button } from 'react-bootstrap'

const MyAccount = () => {
  return (
    <div className='acc-container'>
      <h1>Account Summary</h1>
      <p>View and edit your account informatrion. </p>
      <h3 className='acc-header'>Account Information</h3>
        <div >
            <div className='acc-info'> 
            <p>Your Information</p>
            <p>Name: Siva</p>
            <p>Email: Siva@gmail.com</p>
            <Button>Edit My Account Information</Button></div>
           
        </div>
      
      <div>

      </div>
    </div>
  )
}

export default MyAccount
