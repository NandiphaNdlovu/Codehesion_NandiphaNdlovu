//import { useState } from 'react'

import './App.css'

import Home from './componets/Home'
import { Login } from './componets/Login';
import { Register } from './componets/Register';

// routes
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div>
    {/*
    <h1>Home Page</h1>
    <div>
      <Login />
      <Register/>
    </div>
      */}
      {/* old and not work 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      */}
      <h1>Routes not working?</h1>
      <Router>
        <Route exact path='/' render={()=><Home/>}/>
        <Route exact path='/login' render={()=><Login/>}/>
        <Route exact path='/register' render={()=><Register/>}/>
      </Router>
    </div>
  )
}

export default App
