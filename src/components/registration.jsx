import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './registration.css'
const Registration = () => {
  let result,average;
 
  const [studentdata,setstudentdata]=useState({
    firstname:'',lastname:"",grandfathername:'',birth:'',id:'',school:'',
    maths:"",chemistry:"",biology:"",physics:"",tigrigna:"",geography:"",history:"",civic:"",english:''

  })       
 
  
  console.log(average);
  function register(e){
    const value=e.target.value;
    const name=e.target.name
    setstudentdata(p=>({...p,[name]:value}));
  }
  
  function senddata(e){
    console.log(result);
    e.preventDefault();
    fetch("http://localhost:4000/posts",{
        method:"post",
        body:JSON.stringify(studentdata),
        headers:{"content-type":"application/json"}
      }).then((d)=>d.json()).then(dd=>console.log(dd)).catch(error=>console.log(error));
  }
  return (
    <div>
    <div className="logo">

      <img src="./src/logo.jpg" alt=""  />
        <h1 className='.mytext'> Student Registration Form
          </h1>
          <img src="./src/flag.png" alt="loading image" />
    </div>
    <h1 className='hed'><i>To register your student please fill the form below correctly!</i> </h1>
    <div className='grid-container'>
      
      <div className="grid-items">first name :<br />
      <input type="text" placeholder='student name' name='firstname' value={studentdata.firstname} onChange={register} required/></div>
      <div className="grid-items">father name :<br />
      <input type="text" placeholder='middle name' name='lastname' value={studentdata.lastname} onChange={register} required/></div>
      <div className="grid-items" >grand-father name: <br />
      <input type="text" placeholder='last name ' name='grandfathername'  value={studentdata.grandfathername} onChange={register} required /></div>
      <div className="grid-items birt" >birth date: <br />
      <input type="date" placeholder='date of birth' name='birth'  value={studentdata.birth} onChange={register} required/></div>
      <div className="grid-items">student id: <br />
      <input type="text"  placeholder='student id' name='id'  value={studentdata.id} onChange={register} required/></div>
      <div className="grid-items">student school :<br />
      <input type="text" placeholder='school of sudent' name='school'  value={studentdata.school} onChange={register} required/></div>

    
    </div><h1 className='hed'><i>Be carefull please when puting the result of student!</i> </h1>
    <div className="grid-container">
      <div className="grid-items" >English <br />
       <input type="number" name='english' value={studentdata.english}
       placeholder='ENGLISH' required onChange={register} />
      </div>
      <div className="grid-items">Mathematics  <br /><input type="number" name='maths'   value={studentdata.maths}
      placeholder='MATHS'required onChange={register}/></div>
      <div className="grid-items">Chemistry <br /> <input type="number"name='chemistry' value={studentdata.chemistry}
      placeholder='CHEMISTRY' required onChange={register}/></div>
      <div className="grid-items">Physics <br /> <input type="number" name='physics' value={studentdata.physics}
      placeholder='PHYSICS'required onChange={register}/></div> 
      <div className="grid-items">Biology <br /> <input type="number"name='biology' value={studentdata.biology}
       placeholder='BIOLOGY'required onChange={register}/></div>
      <div className="grid-items">Tigrigna  <br /><input type="number" name='tigrigna' value={studentdata.tigrigna}
      placeholder='TIGRIGNA'required onChange={register}/></div>
      <div className="grid-items">History <br /> <input type="number"name='history' value={studentdata.history}
      placeholder='HISTORY' required onChange={register}/></div>
      <div className="grid-items">Geography  <br /><input type="number"name='geography' value={studentdata.geogrphy}
      placeholder='GEOGRAPHY' required onChange={register}/></div>
      <div className="grid-items">civic <br /> <input type="number" name='civic' value={studentdata.civic}
      placeholder='CIVICS'required onChange={register}/></div>
    </div>
    <div className=' bu'><button onClick={senddata}> register</button>
    <br />
    <br /><br />
          <Link to='/'>aleready have an account login here</Link>   
    </div>
    </div>
  )
}

export default Registration