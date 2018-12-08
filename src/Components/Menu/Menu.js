import React from 'react';
import { openMenu } from '../../redux/actions/showMenuAction';
import { connect } from 'react-redux';
import './Menu.css';

const Menu = ({openMenu}) => {
    return (
        <div className='menu_container'>
        <header className='menu_header'>
            <img src='https://www.logicify.com/media/media/html-dev-task/assets/Close.svg' onClick={openMenu} alt='close'/>
            <img src='https://www.logicify.com/media/media/html-dev-task/assets/Logo%20S.svg' alt='logo'/>
            <img src='https://www.logicify.com/media/media/html-dev-task/assets/User.svg' alt='user'/>
        </header>
        <ul className='menu_list'>
            <li className='menu_list_item'>Item One</li>
            <li className='menu_list_item'>Item Two</li>
            <li className='menu_list_item'>Item Three</li>
            <li className='menu_list_item'>Item Four</li>
            </ul>
            <p className='menu_text'>Need Some Help?</p>
            <ul className='menu_social-list'>
                <img className='menu_social-link' src='https://www.logicify.com/media/media/html-dev-task/assets/fb.svg' alt='facebook'/>
                <img className='menu_social-link' src='https://www.logicify.com/media/media/html-dev-task/assets/tw.svg' alt='twitter'/>
                <img className='menu_social-link' src='https://www.logicify.com/media/media/html-dev-task/assets/ut.svg' alt='youtube'/>
            </ul>
            <p className='menu_copyright'>Copyright<span>&copy;</span>2018</p>
       
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        openMenu: function(){
            dispatch(openMenu())
        }
    }
}

export default connect(null, mapDispatchToProps) (Menu);