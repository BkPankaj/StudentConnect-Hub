import React, {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';
export default function Register({ScreenChange}){
    const navigate = useNavigate()

    useEffect(() =>{
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
          }
    },[]);
    // alert('hello')
    const [values,setValues] = useState({
        name:"",
        rollno:"",
        email:"",
        idcard:"",
        password:"",
        confirmPassword: "",
        verify:false,
    });
    const toastOptions = {
        position:"top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable:true,
        theme: "light",
    }
    const handleChange = (event) => {
        setValues({ ...values,[event.target.name]:event.target.value})
    }
    const handleSubmit = async (event) =>{event.preventDefault();
        event.preventDefault();

        if(handleValidation()){
            // console.log("in validation",registerRoute);
            const {password,name,email,idcard,rollno,verify} = values;
            const {data} = await axios.post(registerRoute,{
                name,
                email,
                password,
                idcard,
                rollno,
                verify,
            });
            // console.log(data.status);
            if(data.status === false){
                toast.error(data.msg,toastOptions);
            }
            if(data.status === true){
                localStorage.setItem(
                    "validity",
                    false
                  );
                  console.log(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
                  toast.success('Your details have been send to Authorities', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000
                });
                setTimeout(() => {
                    navigate("/login"); 
                  }, 3200);
            }
        }
    };
    const handleValidation = () => {
        const { name,password, confirmPassword,email,idcard,rollno } = values;
        if (name === "") {
            toast.error("Name is required.", toastOptions);
            return false;
          }
          else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
          }
        else if (idcard === "") {
            toast.error("Idcard link is required.", toastOptions);
            return false;
          }
          else if (rollno === "") {
            toast.error("Roll no is required.", toastOptions);
            return false;
          }
        else if(password !== confirmPassword){
            toast.error("password and confirm password should be same.",
               toastOptions
            );
            return false;
        }else if(password.length <8){
            toast.error(
                "Password should be equal or greater than 8 characters",
                toastOptions
            );
            return false;
        }
          return true;
    }

    return(
        <>
        
        <FormContainer>
        <div className='brand'>
                    <h1>StudentConnect Hub</h1>
                    
                </div>
            <form  onSubmit={(event) => handleSubmit(event)}>
                
                <input type="text" placeholder='Name' name='name' onChange={(e) => handleChange(e)} />
                <input type="text" placeholder='Rollno' name='rollno' onChange={(e) => handleChange(e)} />
                <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
                <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
                <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} />
                <input type="text" placeholder='ID Card drive link' name='idcard' onChange={(e) => handleChange(e)} />
                <button type='submit'>Send for Verification</button>
                <span>already have an account ? <Link to="/login">Login</Link></span>
            </form>
          
        </FormContainer>
        <ToastContainer />
        </>
        
        
    );
}

const FormContainer = styled.div`
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #7091F5;
    .brand{
        padding-left: 1rem;
        h1{
            color:white ;
            text-transform:uppercase;
        }
    }
    form{
            display:flex;
            flex-direction:column;
            gap:1rem;
            padding: 0rem 5rem;
            input{
                background-color: transparent;
                padding: 1rem 0 1rem 1rem;
                border-radius: 0.4rem;
                font-size: 1rem;
                color:white;
                font-weight: bold;
                &:focus{
                    border:0.1rem solid white;
                    outline:none;
                }
            }
            button{
                background-color: green;
                color:white;
                padding: 1rem 2rem;
                font-weight: bold;
                cursor: pointer;
                border-radius: 0.4rem;
                font-size: 1rem;
                text-transform: uppercase;
                transition: 0.5s ease-in-out;
                &:hover{
                    background-color: black;
                }
            }
            span{
                
                color:white;
                text-transform:uppercase;
                a{
                    color:black;
                    text-decoration: none;
                    font-weight: bold;
                }
            }
        }
    `;