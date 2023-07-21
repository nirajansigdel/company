import React from 'react'
 import '../../Commancss/Main.css'
import {  FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Nav from '../../Navbar/Nav';
import Layout from '../../layout/Layout';
export default function User() {
  return (
    <Layout>
       <div className="main">
    <div className='container'>
      <div className="child_card">
          <Link to='/setlevel' className="cards">
            <div className="card_items">
          <div className="icon"><FaUser/></div>
          <div className="name">Admin</div>
          </div> 
          </Link>
          <Link to ='/employer'className="cards">
            <div className="card_items">
          <div className="icon"><FaUser/></div>
          <div className="name">Employer</div>
          </div>
          </Link>
       
        
      </div>
        

        </div>
    </div>
    </Layout>
   
  )
}
