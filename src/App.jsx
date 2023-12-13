import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './components/registration'
import Login from './components/login'
import  Listofsudents from'./components/list of students'
import Userdetail from './components/Userdetail'
import  Updatedata from './components/Updatedata'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/listofstudents' element={< Listofsudents/>}/>
      <Route path='/updatedata'    element={<Updatedata/>}/>
      <Route path='/:Userdetail'  element={<Userdetail/>} />

     {/*  <Route path='/cust/:Userdetail'  element={<Userdetail/>} /> */}
      
      
       
      </Routes>
      </BrowserRouter>
     

 

    </div>
  )
}

export default App