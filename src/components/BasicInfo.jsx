import { useState } from "react"

function BasicInfo() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState ('');
    const [title, setTitle] = useState ('');
    const [summary, setSummary] = useState ('');
    const [isRegistered, setIsRegistered] = useState(false);
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

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
    setTitle('');
    setEmail(''),
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setSummary('');
   }

    return (
        <div className="Basic-Info">
        {isRegistered ? (
            <>
            <p>Title : {title}</p>
            <p>Summary {summary}</p>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Phone : {phoneNumber}</p>
            <p>Email : {email}</p>           
            <button onClick={handleEdit}>Edit</button> 
            <button onClick={handleReset}>Reset</button>
            </>
        ) : (
            <form onSubmit={handleSubmit}>
                <label>
                    Title : <input type="text" value={title} onChange={handleTitleChange}
                    />
                </label>
                <label>
                    Summary: <input type="textarea" value={summary} onChange={handleSummaryChange}
                    />
                </label>
                <label>
                    First Name: <input type="text" value={firstName} onChange={handleFirstNameChange}
                    />
                </label>
                <label>
                   Last Name: <input type="text" value={lastName} onChange={handleLastNameChange}
                    />
                </label>
                <label>
                   Phone: <input type="number" value={phoneNumber} onChange={handlePhoneNumberChange}
                    />
                </label>
                <label>
                    Email: <input type="email" value={email} onChange={handleEmailChange}
                    />
                </label>
                <button type="submit">Validate information</button>

                </form>
            )}
        </div>
    )
}


export default BasicInfo;