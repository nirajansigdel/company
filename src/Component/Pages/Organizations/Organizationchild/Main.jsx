 import React from 'react'
import '../../../Commancss/Main.css'

import { FaBuilding } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Nav from '../../../Navbar/Nav';
 export default function Organization() {
  return (
    <div className="main">
      <Nav/>
    <div className='container'>
      <div className="child_card">
       <Link  to='/corporate' className="cards" >
        <div className="card_items">
      <div className="icon"><FaBuilding /></div>     
        <div className="name">Corporate</div>
      </div>
      </Link>
      <Link  to ='/branch'className="cards">
      <div  className="card_items">
      <div className="icon"><FaBuilding /></div>     
        <div className="name">Branch</div>
          </div>
          </Link>
          <Link  to ='/branch'className="cards">
      <div  className="card_items">
      <div className="icon"><FaBuilding /></div>     
        <div className="name">Registration</div>
          </div>
          </Link>
        
       </div>
        

        </div>
    </div>
  )
 }






















// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../Main2.css';

// // export default function Corporate() {
// //   const demo = [
// //     {
// //       id: 1,
// //       name: 'View',
// //       link: '/employer',
// //     },
// //     {
// //       id: 2,
// //       name: 'Department',
// //       link: '/organization',
// //     },
// //     {
// //       id: 3,
// //       name: 'Module',
// //       link: '',
// //     },
// //   ];

// //   return (
// //     <div className="body">
// //       <div className="grandchild">
// //         {demo.map((demo) => (
// //           <Link
// //             to={demo.link}
// //             className="grandchild_body"
// //             key={demo.id}
// //           >
// //             <div className="grandchild_content">
// //               <div className="grandchild_item">{demo.name}</div>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //       <div className="admin">
// //         <button>Back</button>
// //       </div>
// //     </div>
// //   );
// // }
// // In the updated code, I added a link property to each item of the demo array, which specifies the URL that the item should navigate to on click. Then I wrapped each grandchild_body div inside a Link component, passing the URL from the corresponding demo item to the to prop of the Link. When a grandchild_body div is clicked, it will navigate to the URL specified in the corresponding demo item.




















