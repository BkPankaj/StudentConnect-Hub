import React, {useState,useEffect} from "react";
import '../css/dashboard.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import styled from "styled-components";
import Complaint from '../components/Complaint';
import Track from '../components/Track';
import { useNavigate } from "react-router-dom";


// import { useState } from 'react';
export default function Dashboard(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [currentScreen,setScreen] = useState(undefined);
    const [currentStudent,setcurrentStudent] = useState(undefined);
    const navigate = useNavigate();

    useEffect( () =>{
        const fetch = async () => {
            if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
                navigate("/login");
              } else {
                setcurrentStudent(
                  await JSON.parse(
                    localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
                  )
                  
                );
                console.log(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
              }
        }
        fetch();
        // alert(currentUser);
        // console.log(socket.current);
    },[]);
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    const handleScreenChange = (screenname) => {
        console.log(screenname);
        setScreen(screenname);
        
    };


    // alert('hello')
    return(
        <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} currentStudent = {currentStudent}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} ScreenChange={handleScreenChange}/>
        <div className="main-container">
        {
         currentScreen==="ComplainNow" ? (<Complaint currentStudent = {currentStudent} ScreenChange={handleScreenChange}/>) : 
         currentScreen==="Track" ? (<Track currentStudent = {currentStudent}/>) :
         (<Home currentStudent = {currentStudent}/>) 
        }
        </div>
        {/* <Home  /> */}
      </div>
    
   
    );
}

const Container = styled.div`
    
    // .whole{
    //     display: flex;
    //     flex-direction:row;
    //     background-color: red;
    //     height: 100vh;
    //     width: 100vw;
    //     .sideone{
    //         background-color: cyan;
    //         position: sticky;
    //         // top: 0%;
           
    //     }

    //     .main-container{
  
    //         width:100vw;
    //         background-color: yellow;
    //         display: flex;
    //         flex-direction:column;
    //         .header{
    //             grid-area: header;
    //             height: 60px;
    //             display: flex;
    //             align-items: center;
    //             justify-content: space-between;
    //             padding: 0 90px 0 30px;
    //             box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.35);
    //             // background-color: green;
    //             // height: 6vh;
    //             // width:100vw;
                
    //             // display: flex;
    //             // flex-direction:row;
    //             .title{
    //                 // display: flex;

    //                 width:90vw;
    //                 // align-items:left;
                    
    //             }
    //             .user{
    //                 display: flex;
    //                 // align-items:right;
    //                 width:10vw;
    //             }
    //         }
    //         .inside{
    //             background-color: blue;
    //             height: 94vh;
    //             width:100vw;
    //         }
    //     }
    // }
    // height: 100vh;
    // width: 100vw;
    
    // // justify-content: center;
    // // gap: 1rem;
    // // align-items: center;
    // overflow: hidden;
    // background-color: #434343;
    
    // .main-container {
    //     width:100vw;
    //     display: flex;
    //     justify-content: space-between;
    //     // align-items: center;
    //     padding: 0 2rem;
    //     background-color: #654545;
    //     border: 0.1rem solid #bf9b30;
    //     border-radius: 0.4rem;
    //     h3{
    //         color:white;
    //     }
    //   }
   


`;