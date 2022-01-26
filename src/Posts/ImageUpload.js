import React, { useState } from 'react'
import './ImageUpload.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        height: 343,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #DDDFE2',
        outline: 'none',
        boxShadow: theme.shadows[5],
        borderRadius: '5px',
    },
}));

function ImageUpload({ username }) {
    const name=window.sessionStorage.Name;
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div className="imageupload">
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="imageupload__commentAssign">
                        <div className="imageupload__firstSectionModal">
                            <h3>Create Post</h3>
                        </div>
                        <div className="imageupload__secondSectionModal">
                            <Avatar
                                className="imageupload__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU" alt="" />
                            <input type="text" placeholder={`What's on your mind ${name} ?`} />
                        </div>
                        <hr />
                        <div className="imageupload__imageuploadModal" >
                            <img src="https://cdn-icons-png.flaticon.com/512/833/833453.png" className="imageupload__gallery" alt=""></img>
                            <input type="file" className="imageFile" />
                            <h3>Photo</h3>
                        </div>
                        <br />
                        <div className="imageupload__feedModal">
                            <label className="containerr">
                                <input type="checkbox" checked />
                                <span className="checkmark"></span>
                            </label>
                            <div className="imageupload__colorwrap1">
                                <img alt='' src="https://cdn-icons-png.flaticon.com/512/1946/1946355.png" className="imageupload__newsFeed" />
                            </div>
                            <h3>News Feed</h3>
                            <br />
                            <Button type="submit"  className="imageupload__submitButton">Post</Button>
                        </div>
                    </form>
                </div>
            </Modal>

            <div className="imageupload__container">
                <div className="imageupload__firstSection">
                    <h3>Create Post</h3>
                </div>

                <div className="imageupload__secondSection">
                    <Avatar
                        className="imageupload__avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU"
                        alt=""
                    />
                    <input type="text" onClick={handleOpen} placeholder={`What's on your mind ${name} ?`} />
                </div>
                <hr />
                <div className="uploadimage__options" onClick={setOpen}>
                    <div className="imageupload__imageupload">
                        <img src="https://cdn-icons-png.flaticon.com/512/833/833453.png" className="imageupload__gallery" alt=""></img>
                        <h3>Photo</h3>
                    </div>
                    <div className="imageupload__more">

                        <img src="https://cdn-icons.flaticon.com/png/512/2914/premium/2914192.png?token=exp=1642898895~hmac=e27f568c14e3f60ec59f4e4b61bbe012" className="imageupload__dots" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload
