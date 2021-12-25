import React from 'react'
import "./tabs.css"
import All from "./All"
import Open from "./Open"
import Thank from "./Thank"
import Sale from "./Sale"
import Pickup from "./Pickup"
import Hiring from "./Hiring"
import { Link, Route, Routes } from "react-router-dom";



const TabLink = () => {

    return (
        <div className="tabs">
            <div className="container">

             
              
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                <li>
                    <Link className="link" to="/all">All</Link>
                </li>
                <li>
                    <Link className="link" to="/weareopen">We Are Open</Link>
                </li>
                <li>
                    <Link className="link" to="/thankyou">Thank You</Link>
                </li>
                <li>
                    <Link className="link" to="/sale">Sale</Link>
                </li>
                <li>
                    <Link className="link" to="/pickup">Pickup & Drive Thru</Link>
                </li>
                <li>
                    <Link className="link" to="/hiring">Now Hiring</Link>
                </li>
                </ul>
            </nav>
          <Routes>
            <Route path="/all" element={<All/>}/>
            <Route path="/weareopen" element={<Open/>}/>
            <Route path="/thankyou" element={<Thank/>}/>
            <Route path="/sale" element={<Sale/>}/>
            <Route path="/pickup" element={<Pickup/>}/>
            <Route path="/hiring" element={<Hiring/>}/>
        
            </Routes>
       
         

     
            </div>
        </div>
    )
}

export default TabLink
