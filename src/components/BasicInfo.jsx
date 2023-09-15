import { useState } from "react";

function BasicInfo() {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);



  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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

    setPhoneNumber('');
  };

  return (
    <div className="Basic-Info">
      {isRegistered ? (
        <>

          <p>Phone : {phoneNumber}</p>
          <p>Email : {email}</p>
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
         
    

          <label>
            Phone:{" "}
            <input
              type="number"
              placeholder="Phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <button className="submit-button" type="submit">
            Validate information
          </button>
        </form>
      )}
    </div>
  );
}

export default BasicInfo;