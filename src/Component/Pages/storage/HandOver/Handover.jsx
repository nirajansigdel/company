import React, { useState } from "react";
import "./Handover.css";
import Layout from "../../../layout/Layout";

export default function Handover() {
  const [openHandOverForm, setOpenHandOverForm] = useState(false);
  const toggleform=()=>{
    setOpenHandOverForm(!openHandOverForm)
  }
  const handOverForm = () => {
    setOpenHandOverForm(!openHandOverForm);
  };
  const isAllFieldsFilled = () => {
    const {
      date,
      fname,
      handovertype,
      remployer,
      gemployer,
      approved,
      remark,
    } = getinput;
    return (
      date &&
      fname &&
      handovertype &&
      remployer &&
      gemployer &&
      approved &&
      remark
    );
  };
  const submitHandler = () => {

    if (isAllFieldsFilled()) {
      console.log(getinput);
      setSubmittedData([...submittedData, getinput]);
      setinput({
        fname: "",
        handovertype: "",
        date: "",
        remployer: "",
        gemployer: "",
        approved: "",
        remark: "",
      });
   setOpenHandOverForm(false);
    }
   
    
    
    else {
      alert("Please fill in all the required fields.");
    }
  };
  const [getinput, setinput] = useState({
    date: "",
    fname: "",
    handovertype: "",
    remployer: "",
    gemployer: "",
    approved: "",
    remark: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const inputhandler = (e) => {
    setinput({
      ...getinput,
      [e.target.name]: e.target.value,
    });
  };

  const isValidDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj instanceof Date && !isNaN(dateObj);
  };

  return (
    <Layout>
      <div className="main">
        <div className="container">
          <div className="startofhandoverpage">
              <div className="search_add">
                <div className="searching">
                  <input
                    type="text"
                    placeholder="Searching"
                    className="input"
                  />
                  <button className="serching_done">Search</button>
                </div>
                <div className="addlist">
                  <button onClick={handOverForm} className="addlist">
                    ADDLIST
                  </button>
                </div>
              </div>

              {openHandOverForm && (
                <div className="handoverpopup">
                  <div className="handoverpopup_body">
                <form>
                <div className="cancelbutton">
                <button  onClick={toggleform}>cancel</button>
                </div> 
                <div className="handoverinputitem">
                  <div className="section">
                    <label htmlFor="date">Date:</label>
                    <input
                      type="text"
                      name="date"
                      className="name"
                      value={getinput.date}
                      onChange={inputhandler}
                    />
                  </div>
                  <div className="section">
                    <label htmlFor="name">File Name/No:</label>
                    <input
                      type="text"
                      name="fname"
                      value={getinput.fname}
                      className="fname"
                      onChange={inputhandler}
                    />
                  </div>
                  <div className="section">
                    <label htmlFor="remployer">Receiving:</label>
                    <input
                      type="text"
                      name="remployer"
                      value={getinput.remployer}
                      className="fname"
                      onChange={inputhandler}
                    />
                  </div>
                  <div className="section">
                    <label htmlFor="gemployer">Giving:</label>
                    <input
                      type="text"
                      name="gemployer"
                      value={getinput.gemployer}
                      className="fname"
                      onChange={inputhandler}
                    />
                  </div>
                  <div className="section">
                    <label htmlFor="handovertype">Type of HandOver:</label>
                    <select
                      name="handovertype"
                      id=""
                      value={getinput.handovertype}
                      onChange={inputhandler}
                    >
                      <option value="">Select</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Permanent">Permanent</option>
                    </select>
                  </div>
                  <div className="section">
                    <label htmlFor="approved">Approved </label>
                    <input
                      type="text"
                      name="approved"
                      value={getinput.approved}
                      className="fname"
                      onChange={inputhandler}
                    />
                  </div>
                  <div className="section">
                    <label htmlFor="remark">Remark:</label>
                    <input
                      type="text"
                      name="remark"
                      value={getinput.remark}
                      className="fname"
                      onChange={inputhandler}
                    />
                  </div>
                  </div>
                  <div className="handoverapplybutton">
                    <button className="sumbit" onClick={submitHandler}>
                      Submit
                    </button>
                  </div>
                </form>
                </div>
                </div>
              )}
            </div>

            <table border={1}>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>File Name</td>
                  <td>Giving</td>
                  <td>Receiving</td>
                  <td>Handover Type</td>
                  <td>Approved</td>
                  <td>Remark</td>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.date}</td>
                    <td>{data.fname}</td>
                    <td>{data.remployer}</td>
                    <td>{data.gemployer}</td>
                    <td
                      className={
                        data.handovertype === "Temporary"
                          ? "temporary-cell"
                          : "permanent-cell"
                      }
                    >
                      {data.handovertype}{" "}
                    </td>
                    <td>{data.approved}</td>
                    <td>{data.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </Layout>
  );
}
