import React, { useState } from "react";
import Layout from "../../../../layout/Layout";
import "./Coporatecssfile.css";
import View from "../Viewfolder/View";

export default function Corporate() {
  const [activestate, setactivestate] = useState("view");
  const handler = (state) => {
    setactivestate(state);
  };

  return (
    <Layout>
      {/* coporatebody has bodylist and  state */}
      <div className="coporatebody">
        {/*  bodylist has bodylist*/}
        <div className="bodylist">
          {/*  bodylist has bodylistitem*/}
          <div className="bodylistitem">
            <div
              className={`boydlistitemname ${
                activestate === "view" ? "active" : ""
              }`}
              onClick={() => handler("view")}
            >
              View
            </div>
          </div>
          <div className="bodylistitem">
            <div
              className={`boydlistitemname ${
                activestate === "module" ? "active" : ""
              }`}
              onClick={() => handler("module")}
            >
              {" "}
              Module{" "}
            </div>
          </div>
          <div className="bodylistitem">
            <div
              className={`boydlistitemname ${
                activestate === "department" ? "active" : ""
              }`}
              onClick={() => handler("department")}
            >
              {" "}
              Department{" "}
            </div>
          </div>
        </div>

        {/*        state has view, module and  departmen */}
        <div className="state">
          {/*  view import */}
          {activestate === "view" && <View />}
          {/*  module import */}
          {/* {activestate === "module" && <Module />} */}
          {/*  department import */}
          {activestate === "department" && "hello its department page"}
        </div>
      </div>
    </Layout>
  );
}
