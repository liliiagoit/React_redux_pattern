import React from 'react';
import './Menu-Desktop.css';

const Menu_Desktop = () => {
    return (
        <div className='menu_desktop-container'>
            <img className='desktop_logo-title' src='https://www.logicify.com/media/media/html-dev-task/assets/Logo.svg' alt='logo'/>
         <ul className='desktop_list'>
            <li className='desktop_list_item'>Item One</li>
            <li className='desktop_list_item'>Item Two</li>
            <li className='desktop_list_item'>Item Three</li>
            <li className='desktop_list_item'>Item Four</li>
            </ul>
            <img src='https://www.logicify.com/media/media/html-dev-task/assets/Icon.svg'/>
            <span className='desktop_download_span'>Dropdown</span>
            <img className='desktop_download_icon' src='https://www.logicify.com/media/media/html-dev-task/assets/down.svg'/>
            <button className='desktop_download_btn'><span>LOGOUT</span><img className='desktop_logout_img' src='https://www.logicify.com/media/media/html-dev-task/assets/lg.svg' alt=''/></button>
        </div>

    )
}
export default Menu_Desktop;