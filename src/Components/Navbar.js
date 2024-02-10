import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Form from './Form'
import Services from './Services'
import Aboutus from './Aboutus'
import Table from './Table'
import logo from '../Assets/abstract-brand-logo.avif'
import Podcasts from './Podcasts'
import Home from './Home/Home'

function Navbar() {
  return (
    <div>
        <BrowserRouter>
        <ul>
            <li>
                <Link to = "/">
                <img src={logo} alt='' width={50} height={50} style={{marginRight : 600}}/>
            </Link>
            </li>
            <li><Link to="/login"> Login</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/table">Courses</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/podcasts">Podcasts</Link></li>
        </ul>
        <Routes>
            <Route path='/login' element={<Form/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/table" element={<Table/>}/>
            <Route path="/podcasts" element={<Podcasts/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar