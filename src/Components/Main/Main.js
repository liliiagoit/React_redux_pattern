import React from 'react';
import './Main.css';

const Main = () => {
    return(
        <div className='main_container'>
 
 <img className='main_picture' src='https://www.logicify.com/media/media/html-dev-task/assets/photo.png' alt='nature'/>
 <div className='main_text_content'>
 <h3 className='main_title'>Lorem Ipsum Dolor</h3>
 
 <p className='main_paragraph'>Vestibulum vehicula molestie augue, et suscipit risus ullamcorper ut. Ut felis lacus, laoreet a vehicula vitae, pulvinar iaculis est. Maecenas semper purus fringilla diam posuere, vel lacinia mi convallis. Proin euismod turpis orci, ut consectetur sem accumsan vel. Donec eu metus nec dolor venenatis ullamcorper. Duis eu ultrices elit. Suspendisse gravida urna quis mi efficitur elementum. Curabitur sagittis purus id nulla rhoncus, sit amet facilisis elit lacinia. Nunc turpis risus, accumsan ac sapien at, molestie malesuada eros. Fusce hendrerit rhoncus sapien at viverra.</p>
 </div>
 <div className='main_text_paragraph'>
 <p className='main_paragraph'>Mauris pretium ipsum in orci euismod pharetra sit amet eget orci. Integer tincidunt accumsan lectus, dictum scelerisque dolor ullamcorper sed. Quisque commodo elit non lectus maximus, a consequat orci cursus. Nunc malesuada quam id leo lacinia blandit. Praesent feugiat dolor vitae lectus sagittis, sit amet facilisis ipsum accumsan. </p>
 <p className='main_copyright'>Copyright<symbol>&copy;</symbol>2018</p>
 </div>
        </div>
        
    )
}
export default Main;