import React from 'react'
import './RightSideBar.css'

export default function RightSideBar() {
    return (
        <div className="sidebar2">
            <div className="sidebar2__languages">
                <p className="sidebar2__selected">English (UK) · </p>
                <p>English (US) · </p>
                <p>हिन्दी · </p>
                <p>বাংলা · </p>
            </div>
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
    )
}
