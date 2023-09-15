import{ useState } from "react";

function Header() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  const handleEdit = () => {
    setIsRegistered(false);
  };

  return (
    <>
      <h1>Resume</h1>
      <h2 className="header-h2">
        Please fill in the information to put together a professional CV!
      </h2>
      <div className="name-info">
        {!isRegistered ? (
          <>
            <label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          <>
            <p className="title"> {title}</p>
            <p className="firstName"> {firstName}</p>
            <p className="lastName"> {lastName}</p>
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Header;