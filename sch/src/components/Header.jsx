import React from 'react'
import { BiSolidLogOut, BiSolidLogOutCircle } from 'react-icons/bi'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import Logout from './logout';
function Header({OpenSidebar,currentStudent}) {
  return (
    <>
    {currentStudent && (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          
            {currentStudent.name}
          
            <BsFillBellFill className='icon icon_noti'/>
            
          
        </div>
        <div className='header-right'>
            <Logout/>
            {/* <BiSolidLogOut className='icon icon_header'  onClick={<Logout/>}/> */}
        </div>
    </header>
    )}
    </>
  )
}

export default Header