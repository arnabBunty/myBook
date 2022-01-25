import React from 'react';
import './Profile.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PeopleIcon from '@mui/icons-material/People';
import PhotoIcon from '@mui/icons-material/Photo';
import ExploreIcon from '@mui/icons-material/Explore';
import ArchiveIcon from '@mui/icons-material/Archive';
import SubjectIcon from '@mui/icons-material/Subject';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import db from '../Database/db.json'
import Post from '../Posts/Post'
import { useParams } from 'react-router'

function Profile() {
  const name=window.sessionStorage.Name;
  const id=useParams()
  let user={};
  const user1=db.person.find(a=>a.id===id.id)
  if(!user1){
    user=db.person.find(a=>a.user_name==="Arnab Gupta")
  }else{
    user=user1;
  }
  
  return <main>
  <div id="profile-upper">
    <div id="profile-banner-image">
      <img className="prfimg"  src={user.user_cvr_imgurl} alt="Banner image"></img>
    </div>
    <div id="profile-d">
      <div id="profile-pic">
        <img className="prfimg"  src={user.user_imgurl}></img>
      </div>
      <div id="u-name">{user.user_name}</div>
      <div className="tb" id="m-btns">
        <div className="td">
          <div className="m-btn"><FormatListBulletedIcon/><span>Activity log</span></div>
        </div>
        <div className="td">
          <div className="m-btn"><AcUnitIcon/><span>Privacy</span></div>
        </div>
      </div>
      <div id="edit-profile"><CameraAltIcon/></div>
    </div>
    <div id="black-grd"></div>
  </div>
  <div id="main-content">
    <div className="tb">
      <div className="td" id="l-col">
        <div className="l-cnt">
          <div className="cnt-label">
            <i className="l-i" id="l-i-i"></i>
            <span>Intro</span>
            <div className="lb-action"><EditIcon/></div>
          </div>
          <div id="i-box">
            <div id="intro-line">{user.user_qualification}</div>
            <div id="u-occ">{user.user_bio}</div>
            <div id="u-loc"><LocationOnIcon/><a href="#">{user.user_loc}</a></div>
          </div>
        </div>
        <div className="l-cnt l-mrg">
          <div className="cnt-label">
            <i className="l-i" id="l-i-p"></i>
            <span>Photos</span>
            <div className="lb-action" id="b-i"><KeyboardArrowDownIcon/></div>
          </div>
          <div id="photos">
            <div className="tb">
              <div className="tr">
                <div className="td"></div>
                <div className="td"></div>
                <div className="td"></div>
              </div>
              <div className="tr">
                <div className="td"></div>
                <div className="td"></div>
                <div className="td"></div>
              </div>
              <div className="tr">
                <div className="td"></div>
                <div className="td"></div>
                <div className="td"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-cnt l-mrg">
          <div className="cnt-label">
            <i className="l-i" id="l-i-k"></i>
            <span>Did You Know<i id="k-nm">1</i></span>
          </div>
          <div>
            <div className="q-ad-c">
              <a href="#" className="q-ad">
                <img className="prfimg"  src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png"></img>
                <span>My favorite superhero is...</span>
              </a>
            </div>
            <div className="q-ad-c">
              <a href="#" className="q-ad" id="add_q">
                <AddIcon/>
                <span>Add Answer</span>
              </a>
            </div>
          </div>
        </div>
        <div id="t-box">
        <div className="sidebar2__policies">
                <p>Privacy · </p>
                <p>Terms · </p>
                <p>Advertising · </p>
                <p>AdChoices · </p>
                <p>Cookies · </p>
                <p>More</p>
            </div>
            <p className="copyright">myBook © 2022</p>
        </div>
      </div>
      <div className="td" id="m-col">
        <div className="m-mrg" id="p-tabs">
          <div className="tb">
            <div className="td">
              <div className="tb" id="p-tabs-m">
                <div className="td active"><AvTimerIcon/><span>TIMELINE</span></div>
                <div className="td"><PeopleIcon/><span>FRIENDS</span></div>
                <div className="td"><PhotoIcon/><span>PHOTOS</span></div>
                <div className="td"><ExploreIcon/><span>ABOUT</span></div>
                <div className="td"><ArchiveIcon/><span>ARCHIVE</span></div>
              </div>
            </div>
            <div className="td" id="p-tab-m"><KeyboardArrowDownIcon/></div>
          </div>
        </div>
        <div className="m-mrg" id="composer">
          <div id="c-tabs-cvr">
            <div className="tb" id="c-tabs">
              <div className="td active"><SubjectIcon/><span>Make Post</span></div>
              <div className="td"><PhotoIcon/><span>Photo/Video</span></div>
              <div className="td"><VideocamIcon/><span>Live Video</span></div>
              <div className="td"><EventIcon/><span>Life Event</span></div>
            </div>
          </div>
          <div id="c-c-main">
            <div className="tb">
              <div className="td" id="p-c-i"><img className="prfimg"  src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" alt="Profile pic"/></div>
              <div className="td" id="c-inp">
                <input type="text" placeholder="What's on your mind?"/>
              </div>
            </div>
            <div id="insert_emoji"><InsertEmoticonIcon/></div>
          </div>
        </div>
        <Post username={id.id}/>
      </div>
      
    </div>
  </div>
</main>
}

export default Profile;
