import React, { useState } from 'react';
import '../../Commancss/Main2.css'
import ResetLevel1 from './Admins/Resetpassword/Resetlevel1';
import ResetLevel2 from './Admins/Resetpassword/Resetlevel2';
import ResetLevel3 from './Admins/Resetpassword/Resetlevel3';
import ResetLevel4 from './Admins/Resetpassword/Resetlevel4';
import Layout from '../../layout/Layout';

export default function Resetlevel() {
  const [activeLevel, setActiveLevel] = useState('Resetlevel1');

  const handleLevelClick = (levelss) => {
    setActiveLevel(levelss);
  };

  return (
    <Layout>
    <div className="main">
      <div className="container">
        <div className="body">
          <div className="grandchild">
            <div className="grandchild_body">
              <div to='/reset' 
                className={`grandchild_item ${activeLevel === 'Resetlevel1' ? 'active' : ''}`}
                onClick={() => handleLevelClick('Resetlevel1')}
              >
                Resetlevel 1
              </div>
            </div>
            <div className="grandchild_body">
              <div 
                className={`grandchild_item ${activeLevel === 'Resetlevel2' ? 'active' : ''}`}
                onClick={() => handleLevelClick('Resetlevel2')}
              >
            Resetlevel 2
              </div>
            </div>
            <div className="grandchild_body">
              <div
                className={`grandchild_item ${activeLevel === 'Resetlevel3' ? 'active' : ''}`}
                onClick={() => handleLevelClick('Resetlevel3')}
              >
               Resetlevel 3
              </div>
            </div>
            <div className="grandchild_body">
              <div 
                className={`grandchild_item ${activeLevel === 'Resetlevel4' ? 'active' : ''}`}
                onClick={() => handleLevelClick('Resetlevel4')}
              >
                Resetlevel 4
              </div>
            </div>
          </div>
          <div className="level">
            {activeLevel === 'Resetlevel1' && <ResetLevel1 />}
            {activeLevel === 'Resetlevel2' && <ResetLevel2 />}
            {activeLevel === 'Resetlevel3' && <ResetLevel3 />}
            {activeLevel === 'Resetlevel4' && <ResetLevel4 />}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
