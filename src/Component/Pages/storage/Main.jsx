import React from 'react'
import { FaStoreAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../Commancss/Main.css'
import Nav from '../../Navbar/Nav';
export default function Storage() {
  return (
    <div className="main">
      <Nav/>
      <div className='container'>
        <div className="child_card">
          <div className="cards">
            <Link to='/bulk' className="card_items">
              <div className="icon"><FaStoreAlt/></div>
              <div className="name">Bulk File</div>
            </Link >
          </div>
          <Link  to='/handover' className="cards">
            <div className="card_items">
              <div className="icon"><FaStoreAlt/></div>
              <div className="name">Handover Temparory</div>
            </div>
          </Link>
          <Link className="cards">
            <div className="card_items">
              <div className="icon"><FaStoreAlt/></div>
              <div className="name">Handover Temparory</div>
            </div>
          </Link>

        </div>


      </div>
    </div>
  )
}
