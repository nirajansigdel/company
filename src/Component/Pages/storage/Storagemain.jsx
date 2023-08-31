import React from 'react'
import { FaStoreAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../Commancss/Main.css'
import Layout from '../../layout/Layout';
export default function Storage() {
  return (
    <Layout>
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
              <div className="name">HandOver</div>
            </div>
          </Link>

        </div>
    </Layout>
   
  )
}
