import React,{useState} from 'react'
import {useNavigate} from 'react-router'
import './Login.css'
import axios from 'axios';
import {Link} from 'react-router-dom'


const validatePass=RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})')
const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$')

function Login() {
    const navigate=useNavigate();
    const [inputState,setInputstate]=useState({isError:{
        email:"",
        pass:""
      }})

      const handleChange=(event)=>{
        event.persist();
        let {name,value}=event.target;
        let isErr={...inputState.isError}
        switch (name) {
            case "email":
            isErr.email=
            validateEmail.test(value)?" ":"Wrong Input, Email pattern abc@defgh.ijk";
            break;
            case "pass":
            isErr.pass=
            value.length>4?" ":"Atleast 4 characters required";
            break;
        }
        setInputstate({...inputState,[name]:value,isError:isErr})
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
        <div className="login">
            <div className='left_container'>
                <h1>myBook</h1>
                <h5>myBook helps you connect and share with the people in your life.</h5>
            </div>
            <div className="login__container">
                <h3>Log In To myBook</h3>
                <form  onSubmit={submitHandler}>
                    <center>
                        <input type="text" name='email' placeholder="Email Address" onChange={handleChange} />
                        <br></br>
      {inputState.isError.email.length>0 && (
        <span className='err'>{inputState.isError.email}</span>
      )}
                    </center>
                    <center>
                        <input type="password" name='pass' placeholder="Password" onChange={handleChange} />
                        <br></br>
      {inputState.isError.pass.length>0 && (
        <span className='err'>{inputState.isError.pass}</span>
      )}
                    </center>
                    <center>
                        <button type="submit"  className="login__login" disabled={inputState.isError.pass.length>1 || inputState.isError.email.length>1 || !inputState.pass || !inputState.email}>Log In</button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to="/register">
                            <button className="login__createNewAccount">Create New Account</button>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login
