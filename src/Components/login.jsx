import React,{useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import {Link } from 'react-router-dom'; 
import Sign from './sign';
const Login =()=>{
    const navigate=useNavigate();
    const[email,setEmail]=React.useState('');
    const[password,setPassword]=React.useState('');
   useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        navigate("/hero")
    }
   },[])
    const handleLogin=async()=>{
    let result= await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result= await result.json();
     if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/hero")
     }
     else{
        alert('please enter correct detail');
     }
   }
    return(
        <div className="login1">
            <h1>Login</h1>
            <input type="text" className='inputBox' placeholder='Enter E-mail' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className='inputBox' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      
            <button onClick={handleLogin} className="inputButton" type='button' >Log-in</button>
           <p className='account'> Create an acount? <Link to="/Sign">Click here</Link></p>
        </div>
    )
}
export default Login