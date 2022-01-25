import React from 'react'
import SidebarRow from '../Row/SidebarRow'
import './LeftSideBar.css'

export default function LeftSideBar() {
    const name=window.sessionStorage.Name;
    return (
        <div className="sidebar">
            
            <SidebarRow avatar ImageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU" title={name} />
            <SidebarRow selected ImageLink="https://www.flaticon.com/premium-icon/icons/svg/1674/1674711.svg" title="News Feed" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png" title="Messenger" />
            <SidebarRow ImageLink="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch" />
            <h3>Explore</h3>
            <SidebarRow ImageLink="https://cdn2.iconfinder.com/data/icons/diwali-black-fill/512/Diwali_-_Black_Fill-13-512.png" title="Welcome" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" title="COVID-19 Information" />
            <SidebarRow ImageLink="https://www.flaticon.com/premium-icon/icons/svg/277/277658.svg" title="Pages" />
            <SidebarRow ImageLink="https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png" title="Events" />
            <SidebarRow ImageLink="https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups" />
        </div>
    )
}
