import { useState } from "react";
import { FaSquarePhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6'
import { BiSolidMessageSquareEdit } from 'react-icons/bi'
import { GrPowerReset } from "react-icons/gr"
import { BsFillCheckCircleFill } from "react-icons/bs"

function BasicInfo() {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value)
};

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
};

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  const handleEdit = () => {
    setIsRegistered(false);
  };

  const handleReset = () => {
    setEmail('');
    setLocation('');
    setPhoneNumber('');
    setWebsite('');
  };

  return (
    <div className="container-information">
       <h2>Personal information</h2>
      {isRegistered ? (
        <>
          <p><FaSquarePhone />{phoneNumber}</p>
          <p><MdEmail /> {email}</p>
          <p><CgWebsite /></p>
          <p><FaLocationDot /></p>
          <button className="edit-button" onClick={handleEdit}>
            <BiSolidMessageSquareEdit />
          </button>
          <button className="reset-button" onClick={handleReset}>
            <GrPowerReset />
          </button>
        </>
      ) : (
        <form className="form-personal"onSubmit={handleSubmit}>
          <label>
           {" "}
            <input
              type="number"
              placeholder="Phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <label>
           {" "}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        <label>
            {" "}
            <input type="text" placeholder="Website" value ={website} onChange={handleWebsiteChange}
            />
        </label>
        <label>
            {" "}
            <input type="text" placeholder="Location" value={location} onChange={handleLocationChange}
            />
        </label>

          <button className="submit-button" type="submit">
            <BsFillCheckCircleFill />
          </button>
        </form>
      )}
    </div>
  );
}


export default BasicInfo;