import '../css/track.css'
import { trackRoute } from "../utils/APIRoutes";
import {useState,useEffect} from 'react';
import axios from "axios";

export default function Track({currentStudent}){

const [trackdetail,settrackdetail] = useState()
// const arr = [[4,5],[7,8]];
useEffect( () =>{
    if(currentStudent){
    const readDetails = async (event) =>{
    const {data}= await axios.post(trackRoute,{
        f_rollno:currentStudent.rollno,
    });
    settrackdetail(data.documents);  
    // console.log(arr);
    // console.log(trackdetail);
}
readDetails();
    }
},[currentStudent]);

    
    return(
        <>
        <div className='main-title'>
            <h3>TRACK</h3>
        </div>
       {trackdetail!=undefined &&( 
        <div className="table-container">
        <table className="data-table">
          <thead>
                <tr>
                    <th>Description of Comp.</th>
                    <th>Level</th>
                    <th>Solve</th>
                    <th>Date of Comp.</th>
                </tr>
         </thead>
         <tbody>
                {trackdetail.map((document, index) => (
                    <tr key={index}>
                    <td>{document.description}</td>
                    <td>{document.level}</td>
                    <td>{(document.solve==false ? "Not solved": "Solved")}</td>
                    <td>{new Date(document.date).toLocaleDateString()}</td>
                    {/* Add more cells for additional fields */}
            </tr>
          ))}
          </tbody>
          </table>
    </div>
            )}
        </>
        
    )
}