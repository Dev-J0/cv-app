import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BiSolidMessageSquareEdit } from "react-icons/bi"
import { GrPowerReset } from "react-icons/gr"
import html2pdf from "html2pdf.js";
import { FaFilePdf } from "react-icons/fa";
import { useRef } from "react"
 

function Header() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const componentRef = useRef(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setEditMode(true); 
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setEditMode(true); 
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setEditMode(true); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
    setEditMode(false); 
  };

  const handleEdit = () => {
    setEditMode(true);
    setIsRegistered(false);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setTitle('');
    setEditMode(false); 
  };

  
  const handleDownload = () => {
    const pdfOptions = {
      margin: 10,
      filename: "your_resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(componentRef.current)
      .set(pdfOptions)
      .outputPdf()
      .then((pdf) => {
        pdf.save();
      });
  };

  return (
    <div className="Basic-Info">
      <div className="resume-title">
        <h1 className="the-title">Resume</h1>
      </div>
      <h2 className="header-h2">
        Please fill in the information to put together a professional CV!
      </h2>
      <div className="name-info">
        {isRegistered ? (
          <>
          <div className="name-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <div className="title-container">
            <p>{title}</p>
          </div>
          <div className="header-buttons">
            <button className="edit-button" onClick={handleEdit}>
             <BiSolidMessageSquareEdit />
            </button>
            <button className="reset-button" onClick={handleReset}>
              <GrPowerReset />
            </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                className={editMode ? "edit-mode" : ""}
              />
            </label>
            <label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                className={editMode ? "edit-mode" : ""}
              />
            </label>
            <label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                className={editMode ? "edit-mode" : ""}
              />
            </label>
            <button className="submit-button" type="submit">
               <BsFillCheckCircleFill />
            </button>
            <button className="download" onClick={handleDownload}>
              <FaFilePdf /> 
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;
