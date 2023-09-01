import React,{useEffect,useState} from 'react'
import { homeRoute } from "../utils/APIRoutes";
import axios from "axios";
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 export default function Home() {
  const [details,setdetails] = useState(undefined);
  const chart_data = [];
  useEffect( () =>{
      const readDetails = async (event) =>{
      const {data}= await axios.get(homeRoute,{});
      setdetails(data);
      
  }
  readDetails();
  },[]);
  
  
     

  return (
    <>
    {details!=undefined &&(
    <main>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPLAINT SENT</h3>
                    
                </div>
                <h1>{details.total_number}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SOLVED COMPLAINTS</h3>
                    
                </div>
                <h1>{details.solved_number}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>UNSOLVED COMPLAINTS</h3>
                    
                </div>
                <h1>{(details.total_number- details.solved_number)}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LAST LEVEL COMPLAINTS</h3>
                    
                </div>
                <h1>{details.level_number}</h1>
            </div>
        </div>

       
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={[{
            'COMPLAINT-SENT': details.total_number,
            'SOLVED-COMPLAINTS': details.solved_number,
            'UNSOLVED-COMPLAINTS': details.total_number- details.solved_number,
            'LAST-LEVEL-COMPLAINTS': details.level_number
          }]}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="COMPLAINT-SENT" fill="#890085" />
                <Bar dataKey="SOLVED-COMPLAINTS" fill="#2e7d32" />
                <Bar dataKey="UNSOLVED-COMPLAINTS" fill="#ff6d00" />
                <Bar dataKey="LAST-LEVEL-COMPLAINTS" fill="#d50000" />
                </BarChart>
            </ResponsiveContainer>

           

        </div>
        </main>
  )}
  
  </>
  )
};

