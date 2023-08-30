import React, { useState } from 'react';
import Layout from "../../../../layout/Layout";
import "./Coporatecssfile.css"
import View from '../Viewfolder/View';


export default function Corporate() {
  const [activestate, setactivestate] = useState('view')
  const handler = (state) => {
    setactivestate(state)

  }


  return (
    <Layout>
    <div className="main">
      <div className="container">
        <div className="coporatebody">
          <div className="bodylist">
            <div className="bodylistitem">
              <div className={`boydlistitemname ${activestate === 'view' ? 'active' : ''}`} onClick={() => handler('view')}>View</div>
            </div>
            <div className="bodylistitem">
              <div className={`boydlistitemname ${activestate === 'module' ? 'active' : ''}`} onClick={() => handler('module')} > Module </div>
              </div>
              <div className="bodylistitem">
              <div className={`boydlistitemname ${activestate === 'department' ? 'active' : ''}`} onClick={() => handler('department')} > Department </div>
              </div>
                
              </div> 

             <div className="state">
             {activestate === 'view' && <View/>}
              {/* {activestate === 'module' && <Module/>} */}
              {activestate === 'department' && "hello its department page" } 
         
            </div> 
            
            </div>
          </div>
        </div>
        </Layout>
      );
}

