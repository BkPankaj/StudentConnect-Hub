import { useState } from "react"
import styled from "styled-components";
import { complaintRoute } from "../utils/APIRoutes";
import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

export default function Complaint({currentStudent,ScreenChange}){
    const navigate = useNavigate();
    const [firstOption,setfirstOption] = useState("f0")
    const [secondOption,setsecondOption] = useState('f10')
    const [description,setdescription] = useState('')
    const [Time, setTime] = useState(new Date());
    var curr_t = "";
    var curr_d="";
    console.log(firstOption);
    console.log(description);


    const toastOptions = {
        position:"bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable:true,
        theme: "light",
    }
    const values = {
        rollno: currentStudent.rollno,
        firstOption:firstOption,
        secondOption: secondOption,
        description: description,
        time:curr_t,
        date:curr_d,
        level:1,
        solve:false,
    }

    const sendComplaint = async (event) =>{
        event.preventDefault();


        if(handleValidation()){
            setTime(new Date());
            curr_t = Time.toLocaleTimeString();
            curr_d = Time;
            values.time = curr_t;
            values.date = curr_d;
            console.log(values);
            const {rollno,firstOption,secondOption,description,time,date,level,solve} = values;
        // console.log(rollno);
            const {data} = await axios.post(complaintRoute,{
                rollno,
                firstOption,
                secondOption,
                description,
                time,
                date,
                level,
                solve
            });
            console.log(data.status);
            if(data.status === false){
                toast.error(data.msg,toastOptions);
            }
            if(data.status === true){
                toast.success('Complaint sent to Authorities', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
                setTimeout(() => {
                    ScreenChange("home");  
                  }, 3200);
                
            }
        }
        }
        const handleValidation = () => {
            const {description} = values;
        if(description === ""){
            toast.error(
                "Description required",
                toastOptions
            );
            return false;
        }
        return true;
        }

    return(
        <>
        <div className='main-title'>
            <h3>COMPLAINT NOW</h3>
        </div>
        <FormContainer>
        <form onSubmit={(event) => sendComplaint(event)}>
            <select name="firstOption" id="" onChange={(e) => setfirstOption(e.target.value)}>
            <option value="fO" >Select option from below</option>
            <option value="f1" >Hostel Problem</option>
            <option value="f2">Mess Problem</option>

            </select>
            
            {firstOption === "f1"?
            (
            <>
            <select name="secondOption" onChange={(e) => setsecondOption(e.target.value)}>
            <option value="f10">Select sub-category</option>
            <option value="f11">Light Issue</option>
            <option value="f12">LAN Issue</option>
            <option value="f13">Water Issue</option>
            <option value="f14">Cleaning Issue</option>
            </select>

            <input type="text" placeholder='Description' name='description' onChange={(e) => setdescription(e.target.value)}/>
            <button type='submit'>Submit Complaint</button>
            </>
            ):
            firstOption === "f2"?
            (
            <>
            <select name="secondOption" onChange={(e) => setsecondOption(e.target.value)} >
            <option value="f10">Select sub-category</option>
            <option value="f21">Food is not hygenic</option>
            <option value="f22">Water Issue</option>
            <option value="f23">Change food menu</option>
            </select>
            
            <input type="text" placeholder='Description' name='description' onChange={(e) => setdescription(e.target.value)}/>
            <button type='submit'>Submit Complaint</button>
            </>
            ):
            <h3>We are here to help</h3>
        }
            
           
        </form>
        </FormContainer>
        <ToastContainer />
        </>
        
    )
    
};

const FormContainer = styled.div`
padding: 5% 25%;
gap: 1rem;
h3{
    text-align: center;
}
form{
            display:flex;
            flex-direction:column;
            gap:1rem;
            padding: 0rem 5rem;
            input,select{
                background-color: transparent;
                box-shadow: 5px 6px 70px -3px white;
                padding: 1rem 0 1rem 1rem;
                border:0.1rem solid white;
                // border-radius: 0.4rem;
                font-size: 1rem;
                color:black;
                font-weight: bold;
                &:focus{
                    border:0.1rem solid white;
                    outline:none;
                }
            }
            button{
                background-color: violet;
                box-shadow: 0px -1px 7px 3px black;
                color:white;
                padding: 1rem 2rem;
                font-weight: bold;
                cursor: pointer;
                // border-radius: 0.4rem;
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