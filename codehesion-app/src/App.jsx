//import { useState } from 'react'

import './App.css'

import { Home } from './componets/Home'
import { Login } from './componets/Login';
import { Register } from './componets/Register';

// routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/register' render={() => <Register />} />
      </Routes>
      */}
      <h1>Routes not working?</h1>
      <Router>
        <Routes>
          {/*<Route exact path='/' render={() => <Home />} />*/}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
