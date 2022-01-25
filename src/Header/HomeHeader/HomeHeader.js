import React from 'react'
import './HomeHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useNavigate } from 'react-router-dom'

export default function HomeHeader(props) {
    const name=window.sessionStorage.Name;
    const navigate=useNavigate()
    const signout=()=>{
        window.sessionStorage.clear();
        console.log("Token removed");
        navigate("/login")
      }
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
                <Link to="/">
                    <img src="../../../Images/myBook.jpg" alt="myBook Logo" className="homeHeader__logo" title='myBook' />
                </Link>
            </div>

            <div className="homeHeader__inputSearch">
                <input type="text" placeholder="Search" />
                <SearchIcon className="homeHeader__inputButton" />
            </div>
            <div className="homeHeader__icons">
               
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/profile/${window.sessionStorage.ID}`}><section>
                    
                    <Avatar className="homeHeader__avatar" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU" title={name} />
                    <h3 className="homeHeader__name">{name}</h3>
                    
                </section></Link>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Home</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Find Friends</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Create</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <GroupAddIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <TelegramIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <NotificationsIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <AssignmentIndIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <div className="dropdown">
                        <ArrowDropDownIcon className="dropdown" />
                        <div className="dropdown-content">
                            <button className='themebtn' onClick={props.theme}>Switch to {props.color==="dark"?"Light":"Dark"} Theme</button>
                            <br></br>
                            <hr></hr>
                            <Button className='logout' onClick={signout}>Logout</Button>
                        </div>
                    </div>
                </section>

                <h3 className="homeHeader__dash"> | </h3>
            </div>
        </div>
    )
}
