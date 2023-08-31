import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar, ScreenChange}) {

    const changeCurrentScreen = (screenName) =>{
        // console.log(screenName)
        ScreenChange(screenName);
    };
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            StudentConnect Hub
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={()=>changeCurrentScreen("Dashboard")}>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item' onClick={()=>changeCurrentScreen("ComplainNow")}>
                
                    <BsFillArchiveFill className='icon'/> Complain Now
                
            </li>
            <li className='sidebar-list-item' onClick={()=>changeCurrentScreen("Urgenthelp")} > 
                <a href="">
                    <BsPeopleFill className='icon'/> Urgent help
                </a>
            </li>
            <li className='sidebar-list-item' onClick={()=>changeCurrentScreen("Track")}>
                <a href="">
                    <BsListCheck className='icon'/> Track
                </a>
            </li>
            <li className='sidebar-list-item' onClick={()=>changeCurrentScreen("Polls")}>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Polls
                </a>
            </li>

        </ul>
    </aside>
  )
}

export default Sidebar;