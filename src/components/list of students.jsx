import { Link } from 'react-router-dom'
import './studentlist.css'
import React, { useEffect, useState} from "react";
const Listofstudents = () => {
  const [students,setstudents]=useState([]);
  React.useEffect(()=>{
    fetch("http://localhost:4000/posts")
    .then((d)=>d.json()).then((dd)=>setstudents(dd)).catch(error=>console.log(error));
  },[])
  return (
    <div > 
    <div className='grid-co'>
      <div className="grid-item">student name</div>
      <div className="grid-item">student id </div>
      <div className="grid-item">total result</div>
      <div className="grid-item">average</div>
      <div className="grid-item">details </div>
    
    </div>
    
   {students.map((user)=>{
     const result=Number(user.maths)+Number(user.chemistry)+Number(user.biology)+Number(user.physics)+Number(user.tigrigna)+Number(user.geography)+Number(user.history)+Number(user.civic)+Number(user.english);
     const average=(result/9).toFixed();
    return(
      
      <div className="grid-co" key={Math.random()}>
        
        <p className="grid-item map">{user.firstname}</p>
        <p className="grid-item map">{user.id}</p>
        <p className="grid-item map">{result}</p>
        <p className="grid-item map">{average}</p>
         <p  className="grid-item map"><Link to={`/${user.id}`}>see detail</Link></p> 
        {/* <p  className="grid-item map"><Link to={`/cust/${user.id}`}>see detail</Link></p> */}
        
    
      </div>
    )
   })}
    </div>
  )
}

export default Listofstudents