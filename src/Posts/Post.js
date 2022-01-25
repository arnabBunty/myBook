import React,{useState} from 'react'
import { Avatar } from '@material-ui/core';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
import VerifiedIcon from '@mui/icons-material/Verified';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import db from '../Database/db.json'
import {Link, useParams} from 'react-router-dom'

function Post(props) {
    const name=window.sessionStorage.Name;
    const [propsState,setPropsState]=useState(props.username)
    console.log(props);
    return (
        <>
        {
            db.person.filter((username)=>{
                if(!propsState){
                    return username
                  }else if(username.id.includes(propsState)){
                    return username
                  }
            }).map((user)=>(
                user.posts.map((post)=>(
        <div className="post" key={post.post_id}>
            <div className="post__header">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/profile/${user.id}`}>
                <Avatar
                    className="post__avatar"
                    alt=""
                    src={user.user_imgurl}
                />
                </Link>
                <h3><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/profile/${user.id}`}>{user.user_name}</Link></h3>
                <i className="post__verified"><VerifiedIcon/></i>
                
            </div>

            <h4 className="post__text">{post.caption}</h4>

            <img src={post.imgurl} className="post__image" />

            <div className="post__likeandlove">
                <i className="post__like"><RecommendIcon/></i>
                <i className="post__heart"><FavoriteIcon/></i>
                <p>
                    {/* {noLikes}  */}
                    {post.likes}</p>
            </div>

            <hr />

            <div className="post__likeoptions">
                <div className="like" 
                // onClick={likeHandle}
                >
                    <i className="like2"><ThumbUpIcon/></i>
                    <h3 className="{show2}">Like</h3>
                </div>
                <div className="comment">
                    <i className="comment2"><CommentIcon/></i>
                    <h3 className="dope">Comment</h3>
                </div>
                <div className="share">
                    <i className="share2"><ReplyIcon/></i>
                    <h3>Share</h3>
                </div>
            </div>
            <form 
            // onSubmit={postComment}
            >

                <div className="commentBox">
                    <Avatar
                        className="post__avatar2"
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU"
                    />
                    <input className="commentInputBox" type="text" placeholder="Write a comment ... " 
                    // onChange={(e) => setComment(e.target.value)} 
                    />
                    <input type="submit" 
                    // disabled={!comment} 
                    className="transparent__submit" />
                </div>
                <p className="pressEnterToPost">Press Enter to post</p>
            </form>

            {
                post.comments.map((comment) => (
                    <div className={`comments__show myself`} key={comment.comment_person_name}>
                        <Avatar
                            className="post__avatar2"
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU"
                        />
                        <div className="container__comments">
                            <p><span>{comment.comment_person_name}</span><i className="post__verified"></i>&nbsp; {comment.comment}</p>
                        </div>
                    </div>
                 ))
            }
        </div>
        ))
            )
        )
   }
   </>
    )

}

export default Post
