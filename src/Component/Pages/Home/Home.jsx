import React from 'react'
import './Home.css'
import { FaBuilding, FaFile, FaFileAlt, FaStoreAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Nav from '../../Navbar/Nav';
export const Home = () => {
    const demo = [{
        id: 1,
        icon: <FaUser />,
        name: "User",
        to: "/user",
    },

    {
        id: 2,
        icon: <FaBuilding />,
        name: "Organization",
        to: "/organization",
    },
    {
        id: 3,
        icon: <FaFileAlt />,
        name: "Darta",
        to: "/darta",

    },
    {
        id: 4,
        icon: <FaFile />,
        name: "Chalani",
        to: "/chalani",
    },
    {
        id: 5,
        icon: <FaStoreAlt />,
        name: "Storage",
        to: "/storage",
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
        <div className='main'>
            <Nav />
            {/*=================== container (dashboard)==================== */}
            <div className="container">
                {/*=================== dashboard(description,card)==================== */}

                <div className="dashboard">
                    {/*=================== start of description==================== */}
                    <div className="description">
                        <span className='verification'>Kyc verification for</span>
                        <span className='choosefor'>Choose the appropriate option for your kyc verification type</span>
                    </div>
                    {/*=================== start of card==================== */}
                    <div className="card">
                        <div className="card_body">
                            {
                                demo.map(demo => (
                                    <Link to={demo.to ? demo.to : ""}>
                                        <div className="card_item" key={demo.id}>
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


        </div>
    )
}
