import React,{lazy,Suspense,} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Login from '../Auth/Login/Login'
import Registration from '../Auth/Registration/Registration'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import LoginHeader from '../Header/LoginHeader/LoginHeader'
import RHeader from '../Header/RegistrationHeader/RHeader'
import PNF from '../PNF'
import Posts from '../Posts/Posts'
import {Spinner} from 'react-bootstrap'
import LeftSideBar from '../SideBar/LeftSideBar/LeftSideBar'
import Footer from '../SideBar/RightSideBar/RightSideBar'
import FakeAuth from './isAuth'
import Protect from './Protect'
import ProtectedRoute from './ProtectedRoute'

const Profile=lazy(()=>{  
    return new Promise(resolve => {
      setTimeout(() => resolve(import('../Profile/Profile')), 1000);
    });
      
  });

export const RootRoute = (props) => {
    return (
        <Router>
            <Suspense fallback={<center>
            <Spinner animation="border" role="status" className='loading'>
                <span className="visually-hidden">Loading...</span>
            </Spinner></center>}>
            <Routes>
                <Route path="auth" element={<FakeAuth/>}></Route>
                <Route path="login" element={<><Protect/><LoginHeader/><Login/></>}></Route>
                <Route path="register" element={<><Protect/><RHeader/><Registration/></>}></Route>
                <Route path="/"  element={<><ProtectedRoute/><HomeHeader theme={props.theme} color={props.color}/><div className="app__page"><LeftSideBar/><div className="app__posts"><Posts/></div><Footer/></div></>}></Route>
                <Route path="profile/:id" element={<><ProtectedRoute/><HomeHeader theme={props.theme} color={props.color}/><Profile/></>}></Route>  
                <Route path="*" element={<PNF/>}></Route>                
            </Routes>
            </Suspense>
        </Router>
    )
}
