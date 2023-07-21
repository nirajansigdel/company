import React, { useState } from 'react';
import '../../../Commancss/Main2.css'
import View from '../View';
import Layout from "../../../layout/Layout"

export default function Corporate() {
  const [activestate, setactivestate] = useState('view')
  const handler = (state) => {
    setactivestate(state)

  }


  return (
    <Layout>
    <div className="main">
      <div className="container">
        <div className="body">
          <div className="grandchild">
            <div className="grandchild_body">
              <div className={`grandchild_item ${activestate === 'view' ? 'active' : ''}`} onClick={() => handler('view')}>View</div>
            </div>
            <div className="grandchild_body">
              <div className={`grandchild_item ${activestate === 'module' ? 'active' : ''}`} onClick={() => handler('module')} > Module </div>
              </div>
              <div className="grandchild_body">
              <div className={`grandchild_item ${activestate === 'department' ? 'active' : ''}`} onClick={() => handler('department')} > Department </div>
              </div>
                
              </div>

            <div className="state">
              {activestate === 'view' && <View />}
              {activestate === 'module' && "hello its module page"}
              {activestate === 'department' && "hello its department page" }
          
            </div>
            
            </div>
          </div>
        </div>
        </Layout>
      );
}

