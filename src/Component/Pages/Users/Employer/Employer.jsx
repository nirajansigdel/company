import React from 'react'
import reset from './resetbutton.gif'
import './Employer.css'
import { Link } from 'react-router-dom'
import Nav from '../../../Navbar/Nav'
import Layout from '../../../layout/Layout'

export default function Employer() {
  return (
    <Layout>
    <div className='main'>
      <div className="containers">
        <div className="body">
         <div className="reset_gif">
          <img src={reset} alt="" srcset="" />
        </div> 
        <Link to='/reset' className="employer_Reset_button">
          <button >Reset</button>
        </Link>
        </div>


      </div>


    </div>
    </Layout>
  )
}
