import React, { useEffect, useState } from 'react'
import { useParams ,useSearchParams} from 'react-router-dom'
import './userdetail.css'
import { Link } from 'react-router-dom'

// setcu is assigning the data to from database to user using usestate 
const Userdetail = (props) => {
    const [user,setcu]=useState({});
    const {Userdetail}=useParams();
    console.log(Userdetail);
    useEffect(()=>{
  fetch('http://localhost:4000/posts/'+Userdetail).then((dd)=>dd.json()).then(d=>setcu(d)).catch(e=>console.log(e))
    },[])
    const result=Number(user.maths)+Number(user.chemistry)+Number(user.biology)+Number(user.physics)+Number(user.tigrigna)+Number(user.geography)+Number(user.history)+Number(user.civic)+Number(user.english);
    const average=(result/9).toFixed();
  return (
    <div>
      <div className="logo">

<img src="./src/logo.jpg" alt=""  />
<h1 className='heading'>the student with Id={user.id} has the following information</h1>
    <img src="./src/flag.png" alt="loading image" />
</div>
      <div className='mygrid'>
       <div className='info'>student Id </div><div className="info">{user.id}</div>
     <div className='info'> first name </div><div className="info">{user.firstname}</div>
     <div className='info'> father name</div>  <div className="info">{user.lastname}</div>
     <div className='info'> grandfather name </div> <div className="info">{user.grandfathername}</div>
     <div className='info'> birth date</div><div className="info">{user.birth}</div>
     <div className='info'> student school</div><div className="info">{user.school}</div>
      
      </div>
      <h1 className='heading'>the result of student {user.firstname} is :</h1>
      <div className="mygrid">
       <div className="info">maths</div> <div className="info">{user.maths}</div>
       <div className="info">english </div><div className="info">{user.english}</div>
      <div className="info"> physics </div><div className="info">{user.physics}</div>
       <div className="info">chemistry</div> <div className="info">{user.chemistry}</div>
       <div className="info">biology</div> <div className="info">{user.biology}</div>
      <div className="info"> geography </div><div className="info">{user.geography}</div>
      <div className="info"> history </div><div className="info">{user.history}</div>
       <div className="info">civics</div> <div className="info">{user.civic}</div>
       <div className="info">tigrigna</div> <div className="info">{user.tigrigna}</div>
       <div className="info"> total result</div><div className="info">{result}</div>
       <div className="info"> average result</div><div className="info">{average}</div>
       <div className="info">persentaile </div><div className="info"></div>
      </div>
       <button className='update'>  <Link to='/updatedata'>edit student datas</Link> </button> 
       
    </div>
  )
}

export default Userdetail