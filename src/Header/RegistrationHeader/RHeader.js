import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './RHeader.css';


function RHeader() {
    const navigate=useNavigate();
    const [inputState,setInputstate]=useState()
      const handleChange=(event)=>{
        event.persist();
        let {name,value}=event.target;
        setInputstate({...inputState,[name]:value})
      }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(inputState);
        let user= {email:inputState.email,password:inputState.pass}
        axios.post('https://project-node-1.herokuapp.com/postLoginData',user)
        .then(result=>{
          console.log("Axios",result);
          window.sessionStorage.setItem("Token",result.data.token)
          window.sessionStorage.setItem("Name",result.data.result.userName)
          window.sessionStorage.setItem("ID",result.data.result._id)
          navigate('/')
        }).catch(err=>{
          console.log(err);
          alert("Wrong Email or Password!!")
        })
      }
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img src="../../../Images/myBook.jpg" alt="Facebook Logo" className="header__logo" title='myBook'/>
                </Link>
            </div>
            <div className="header__right">
                <form onSubmit={submitHandler}> 
                    <input className="header__input1" name='email' type="email" placeholder="Email" onChange={handleChange}/>

                    <input className="header__input2" name='pass' type="password" placeholder="Password" onChange={handleChange}/>

                    <button type="submit" className="header__submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default RHeader
