import React from 'react'
import 
 {BsJustify}
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
        </div>
        <div className='header-right'>
            <Logout/>
        </div>
    </header>
    )}
    </>
  )
}

export default Header