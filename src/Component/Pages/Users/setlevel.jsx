import React, { useState } from 'react';
import '../../Commancss/Main2.css'
import Layout from "../../layout/Layout"
import Level1 from './Admins/Set/Level1';
import Level2 from './Admins/Set/Level2';
import Level3 from './Admins/Set/Level3';
import Level4 from './Admins/Set/Level4';

export default function Setlevel() {
  const [activeLevel, setActiveLevel] = useState('level1');

  const handleLevelClick = (level) => {
    setActiveLevel(level);
  };

  return (
    <Layout>
     <div className="main">
     <div className="container">
        <div className="body">
          <div className="grandchild">
            <div className="grandchild_body">
              <div
                className={`grandchild_item ${activeLevel === 'level1' ? 'active' : ''}`}
                onClick={() => handleLevelClick('level1')}
              >
                Level 1
              </div>
            </div>
            <div className="grandchild_body">
              <div
                className={`grandchild_item ${activeLevel === 'level2' ? 'active' : ''}`}
                onClick={() => handleLevelClick('level2')}
              >
                Level 2
              </div>
            </div>
            <div className="grandchild_body">
              <div
                className={`grandchild_item ${activeLevel === 'level3' ? 'active' : ''}`}
                onClick={() => handleLevelClick('level3')}
              >
                Level 3
              </div>
            </div>
            <div className="grandchild_body">
              <div
                className={`grandchild_item ${activeLevel === 'level4' ? 'active' : ''}`}
                onClick={() => handleLevelClick('level4')}
              >
                Level 4
              </div>
            </div>
          </div>
          <div className="level">
            {activeLevel === 'level1' && <Level1 />}
            {activeLevel === 'level2' && <Level2 />}
            {activeLevel === 'level3' && <Level3 />}
            {activeLevel === 'level4' && <Level4 />}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
