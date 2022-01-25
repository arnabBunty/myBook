import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {Modal,Button} from 'react-bootstrap'

export default function FakeAuth() {
    const navigate=useNavigate()
        // navigate('/login')
        const [show, setShow] = useState(false);
        useEffect(() => {
                setShow(true)
        }, [])
        const handleNavigate = () => navigate('/login'); 
        return (
          <>
    
            <Modal backdrop="static" size="sm" show={show} aria-labelledby="example-modal-sizes-title-sm" centered>
              <Modal.Header>
              <center><Modal.Title id="example-modal-sizes-title-sm"><center>Please Login First</center></Modal.Title></center>
              </Modal.Header>
              <Modal.Body><center><Button variant="primary" onClick={handleNavigate}>
                  Click to Login
                </Button></center></Modal.Body>
            </Modal>
          </>
        );
}
