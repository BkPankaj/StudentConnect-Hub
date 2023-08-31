import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';
function Login(){
    const navigate = useNavigate()
    const [values,setValues] = useState({
        rollno:"",
        password:"",
    });

    const toastOptions = {
        position:"top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable:true,
        theme: "light",
    }

    useEffect(() =>{
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
          }
    },[]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        

        if(handleValidation()){
            // console.log("in validation",loginRoute);
            const {password,rollno} = values;
            const {data} = await axios.post(loginRoute,{
                rollno,
                password,
            });
            console.log(data.status);
            if(data.status === false){
                toast.error(data.msg,toastOptions);
            }
            if(data.status === true){
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                  );

                  
                  navigate("/");
            }
        }
        
    };

    const handleValidation = () => {
        const { password,rollno} = values;
        if(rollno === ""){
            toast.error(
                "Roll no is required",
                toastOptions
            );
            return false;
        }
        else if(password === ""){
            toast.error(
                "Password is required",
                toastOptions
            );
            return false;
        }
            
         return true;
    }
    const handleChange = (event) => {
        setValues({ ...values,[event.target.name]:event.target.value})
    }
    return (
        <>
        <FormContainer>
        <div className='brand'>
                    <h1>StudentConnect Hub</h1>
                </div>
            <form  onSubmit={(event) => handleSubmit(event)}>
                
                <input type="text" placeholder='Rollno' name='rollno' onChange={(e) => handleChange(e)} min = "3"/>
                <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
                <button type='submit'>Login</button>
                <span>Don't have an account ? <Link to="/register">Register</Link></span>
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
export default Login;