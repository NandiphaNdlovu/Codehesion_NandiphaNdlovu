//import { useState } from 'react'

import './App.css'

import Home from './componets/Home'
import { Login } from './componets/Login';
import { Register } from './componets/Register';

// routes
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    {/*
    <h1>Home Page</h1>
    <div>
      <Login />
      <Register/>
    </div>
      */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
