import React, { useState } from 'react';
import { FaBackspace, FaPlusSquare } from "react-icons/fa";
import Nav from '../../Navbar/Nav';
import '../Darta/darta_chalani.css'


export default function Chalani() {
  const toggleform = () => {
    setShowForm(!showForm);
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    sn: '',
    number: '',
    date: '',
    miti: '',
    totalReceivedLetter: '',
    receivedDate: '',
    letterIssueCompany: '',
    subject: '',
    previousRefNo: '',
    ticket: '',
    remark: ''
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleAddItem = () => {
    setTableData([...tableData, formData]);
    setFormData({
      sn: '',
      number: '',
      date: '',
      miti: '',
      totalReceivedLetter: '',
      receivedDate: '',
      letterIssueCompany: '',
      subject: '',
      previousRefNo: '',
      ticket: '',
      remark: ''
    });
    setShowForm(false);
    alert('Data has been applied successfully.');
  }

  return (
    <div className='main'>
      <Nav />
      <div className="container">
        <div className="add">
          <button onClick={toggleform}>
            <FaPlusSquare className='icon' />
          </button>
        </div>

        <table border={1}>
          <thead>
            <tr>
              <th className='s_n_d_m'>S.N</th>
              <th className='s_n_d_m'>Number</th>
              <th className='s_n_d_m'>Date</th>
              <th className='s_n_d_m'>Miti</th>
              <th className='s_n_d_m'>Total recieve Letter</th>
              <th className='s_n_d_m'>Received Date</th>
              <th className='le_su'>Letter issue company</th>
              <th className='le_su'>Subject</th>
              <th className='s_n_d_m'> Previous Ref No. </th>
              <th className='s_n_d_m'>Ticket</th>
              <th className='s_n_d_m'>Remark</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.number}</td>
                <td>{item.date}</td>
                <td>{item.miti}</td>
                <td>{item.totalReceivedLetter}</td>
                <td>{item.receivedDate}</td>
                <td>{item.letterIssueCompany}</td>
                <td>{item.subject}</td>
                <td>{item.previousRefNo}</td>
                <td>{item.ticket}</td>
                <td>{item.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <form onSubmit={(e) => e.preventDefault()}>
              <div className="cancel" onClick={toggleform}>
                  <FaBackspace className='icon' />
                </div>
                <div className="formitem">
                <div className="input_label">
                  <label htmlFor="sn">Sn</label>
                  <input type="text" name="sn" value={formData.sn} className='sn' onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="number">Number</label>
                  <input type="text" name="number" value={formData.number} className='sn' onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="date">Date</label>
                  <input type="text" name="date" value={formData.date} className='sn' onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="miti">Miti</label>
                  <input type="text" name='miti' value={formData.miti} className='sn' onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="totalReceivedLetter">Total received lettter</label>
                  <input type="text" name='totalReceivedLetter' className='sn' value={formData.totalReceivedLetter} onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="receivedDate">Received Date</label>
                  <input type="text" name='receivedDate' className='sn' value={formData.receivedDate} onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="letterIssueCompany">Letter issus company</label>
                  <input type="text" name='letterIssueCompany' className='sn' value={formData.letterIssueCompany} onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" name='subject' lassName='sn' value={formData.subject} onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="previousRefNo">Previous ref num</label>
                  <input type="text" name='previousRefNo' className='sn' value={formData.previousRefNo} onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="checkerdate">Ticket</label>
                  <input type="text" name='ticket' className='ticket' value={formData.ticket} onChange={handleInputChange} />
                </div>
                <div className="input_label">
                  <label htmlFor="remark">Remark</label>
                  <input type="text" name='remark' className='remark' value={formData.remark} onChange={handleInputChange} />
                </div>

                </div>
              </form>
              <div className="formbutton">
                  <button type="submit" onClick={handleAddItem}>Apply</button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
