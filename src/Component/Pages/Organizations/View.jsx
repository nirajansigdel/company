import React, { useState } from 'react';
import { FaEye, FaPlus } from 'react-icons/fa';
import './view.css';

export default function View() {
    const nameofcontent = [
        {
            id: 1,
            name: "Registartion"
        }
        ,
        {
            id: 2,
            name: "Pan No"
        },
        {
            id: 3,
            name: "Tax Clearance"
        },
        {
            id: 4,
            name: "Bidhan"
        },
        {
            id: 5,
            name: "Employer Profile"
        },
        {
            id: 6,
            name: "Company name"
        },
        {
            id: 7,
            name: "Logo"
        },
        {
            id: 8,
            name: "Address"
        },
        {
            id: 9,
            name: "Email address"
        }
    ]

    const [file, setFile] = useState(null);

    const handleAdd = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleView = () => {
        if (file) {
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        } else {
            alert('No file selected.');
        }
    };

    return (

        <div className="contents">
            {nameofcontent.map(name => (
                <div className="content-bodys">
                    <div className="names">{name.name}</div>
                    <div className="add_see">
                        <label htmlFor="upload" className="add">
                            <FaPlus />
                        </label>
                        <div className="view" onClick={handleView}>
                            <FaEye />
                        </div>
                    </div>
                </div>))}


            <input
                id="upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleAdd}
            />
        </div>
    );
}


