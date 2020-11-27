import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { AiFillCaretDown } from 'react-icons/ai'
import './login.scss'

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className='loginContainer'>
        <div className='loginElements'>
          <FaRegUserCircle size='30px' style={{ margin: '0 auto' }} />
          <p>Sign in</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <p>Sign in</p>
          <hr />
          <p>Create account</p>
          <hr />
          <p className='pAlignLeft'>Orders <span style={{ float: 'right' }}>Track + Manage</span></p> 
          <hr />
          <p>Circle</p>
          <hr />
          <p className='pAlignLeft'>Gift Cards <span style={{ float: 'right' }}>Check balances</span></p>
          <hr />
          <p className='pAlignLeft'>RedCard <span style={{ float: 'right' }}>Apply now</span></p>
          <hr />
          <p className='pAlignLeft'>Buy it Again <span style={{ float: 'right' }}>Reorder items</span></p>
          <hr />
          <p className='pAlignLeft'>My store <span style={{ float: 'right' }}>Map link to closest store</span></p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Login
