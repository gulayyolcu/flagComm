import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter as Router} from "react-router-dom"

const App = () => {
  return (
    <div>
       <Router>
        <Home/>
      </Router>
    </div>
  )
}

export default App
