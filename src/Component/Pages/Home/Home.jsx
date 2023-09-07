import React from 'react'
import './Home.css'
import { FaBuilding, FaFile, FaFileAlt, FaStoreAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Layout from '../../layout/Layout';
export const Home = () => {
    const demo = [
    {
        id: 1,
        icon: <FaBuilding />,
        name: "Organization",
        to: "/organization",
    },
    {
        id: 2,
        icon: <FaFileAlt />,
        name: "Darta",
        to: "/darta",

    },
    {
        id: 3,
        icon: <FaFile />,
        name: "Chalani",
        to: "/chalani",
    },
    {
        id: 4,
        icon: <FaStoreAlt />,
        name: "Storage",
        to: "/storage",
    }, 
    {
        id: 5,
        icon: <FaUser />,
        name: "User",
        to: "/user",
    },

    {
        id: 6,
        icon: <FaStoreAlt />,
        name: "Report",
        to: "/user",
    },
   

    {
        id: 7,
        icon: <FaStoreAlt />,
        name: "Other Document",
        to: "/user",
    }]
    return (
        <Layout>
            {/*=================== container (dashboard)==================== */}
            <div className="container">
                {/*=================== dashboard(description,card)==================== */}

                <div className="dashboard">
                    {/*=================== start of description==================== */}
                    <div className="description">

                        <span className='choosefor'>Choose the appropriate option </span>
                    </div>
                    {/*=================== start of card==================== */}
                    <div className="card">
                        <div className="card_body">
                            {
                                demo.map(demo => (
                                    <Link
                                    to={demo.to ? demo.to : ""}
                                    key={demo.id}
                                    // style={{ textDecoration: 'none', color: 'inherit' }}
                                  >
                                        <div className="card_item" >
                                            <div className="card_content">
                                                <div className="icon">
                                                    {demo.icon}
                                                </div>
                                                <div className="name">
                                                    {demo.name}
                                                </div>

                                            </div>
                                        </div>
                                    </Link>

                                ))

                            }

                        </div>


                    </div>
                </div>
            </div>

        </Layout>
      
    )
}
