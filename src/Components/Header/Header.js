import React from 'react';
import { openMenu } from '../../redux/actions/showMenuAction';
import Menu from '../Menu/Menu';
import { connect } from 'react-redux';
import './Header.css';

const Header = ({openMenu, showMenu}) => {
    return (
        <div>
        <div className='header_container'>
      
        <img className='header_menu-image' onClick={openMenu} src='https://www.logicify.com/media/media/html-dev-task/assets/Menu.svg' alt='menu'/>
        <img className='header_logo-title' src='https://www.logicify.com/media/media/html-dev-task/assets/Logo%20S.svg' alt='logo'/>
        <img className='header_box-image' src='https://www.logicify.com/media/media/html-dev-task/assets/Icon.svg' alt='dropbox'/>
        
        </div>
  
        {showMenu ?  <Menu/> : null}
        <div className='header_desktop'>
        <p className='header_desktop_title'>Follow us!</p>
            <a href='#' className='header_desktop-link'><span className='header_stick'>|</span> Help <span className='header_stick'>|</span></a>
            <span className='header_desktop-user'>Hello, User Name!</span>
            <img src='https://www.logicify.com/media/media/html-dev-task/assets/down.svg' alt='button'/>
        </div>
        </div>
   
    )
}

function mapStateToProps(state) {
    return {
        showMenu: state.showMenu,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openMenu: function() {
            dispatch(openMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);