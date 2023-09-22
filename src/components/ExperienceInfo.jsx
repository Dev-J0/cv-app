import { useState } from "react";

function WorkExperience() {
  const [workPlaceList, setWorkPlaceList] = useState([]); // Use a different name for the state variable

  const [workPlace, setWorkPlace] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [workYear, setWorkYear] = useState("");
  const [quitWork, setQuitWork] = useState("");

  const handleWorkPlaceChange = (e) => {
    setWorkPlace(e.target.value);
  };

  const handleWorkTitleChange = (e) => {
    setWorkTitle(e.target.value);
  };

  const handleWorkYearChange = (e) => {
    setWorkYear(e.target.value);
  };

  const handleQuitWorkChange = (e) => {
    setQuitWork(e.target.value);
  };

  const addWork = () => {
    if (workPlace.trim() === "" || workYear === "" || quitWork === "") {
      return;
    }

    setWorkPlaceList([ // Update the state variable name to workPlaceList
      ...workPlaceList, // Use the correct state variable here
      {
        workPlace,
        workTitle,
        workYear,
        quitWork,
      },
    ]);

    // Clear input fields after adding work experience
    setWorkPlace("");
    setWorkTitle("");
    setWorkYear("");
    setQuitWork("");
  };

  return (
    <div className="job-container">
      <h2>Experience & Projects/Contributions</h2>
      <label>
        Work Place
        <input type="text" value={workPlace} onChange={handleWorkPlaceChange} />
      </label>
      <label>
        Title
        <input type="text" value={workTitle} onChange={handleWorkTitleChange} />
      </label>
      <label>
        Started job:
        <input type="text" value={workYear} onChange={handleWorkYearChange} />
      </label>
      <label>
        Moved on:
        <input type="text" value={quitWork} onChange={handleQuitWorkChange} />
      </label>
      <button onClick={addWork}>Add Work</button>

      <ul>
        {workPlaceList.map((item, index) => ( // Use workPlaceList to map the items
          <li key={index}>
            {item.workPlace} - {item.workTitle} - {item.workYear} to {item.quitWork}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperience;
