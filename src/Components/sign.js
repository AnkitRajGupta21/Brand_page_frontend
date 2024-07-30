import React,{useEffect, useState} from "react";
import Login from "./login";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const Sign = ()=>{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[re,setre]=useState("");
    const[email,setEmail]=useState("");
    const navigate = useNavigate();
 
    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth){
            navigate('/hero')
        }
    })
const collectData=async()=>{
        console.warn(name,email,password);
        let result= await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        
        console.warn( result);
        localStorage.setItem("user",JSON.stringify(result))
        if(result){
            navigate('/Hero');
        }
    }
        return (
        <div className='reg'>
            <h1 >Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>  
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter New Password"/>    
            
            <button onClick={collectData} className="inputButton" type='button' >Sign-up</button>
            <p className='account'> Already have an acount? <Link to="/">Click here</Link></p>
        </div>
    )
}
export default Sign;