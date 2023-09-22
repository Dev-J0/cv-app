import { useState } from "react"

//education background
//university/institution/organization/school
//program/degree
//starting year - ending year 
//button for (still in school)
//additional educational info

function EducationInfo() {
    const [university, setUniversity] = useState("");
    const [enrollmentYear, setEnrollmentYear] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [universities, setUniversities] = useState([]);


    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
      };

    const handleEnrollmentYearChange = (e) => {
        setEnrollmentYear(e.target.value);
      };
      
      const handleGraduationYearChange = (e) => {
        setGraduationYear(e.target.value);
      };

      const addUniversity = () => {
        if (university.trim() === "" || enrollmentYear === "" || graduationYear === "") {
         
          return;
        }
      
        setUniversities([
          ...universities,
          {
            university,
            enrollmentYear,
            graduationYear,
          },
        ]);
        setUniversity("");
        setEnrollmentYear("");
        setGraduationYear("");
      };

      return (
        <div>
          <h2>Education Background</h2>
          <label>
          College/Institute/School
            <input
              type="text"
              value={university}
              onChange={handleUniversityChange}
            />
          </label>
          <label>
            Enrollment Year:
            <input
              type="text"
              value={enrollmentYear}
              onChange={handleEnrollmentYearChange}
            />
          </label>
          <label>
            Graduation Year:
            <input
              type="text"
              value={graduationYear}
              onChange={handleGraduationYearChange}
            />
          </label>
          <button onClick={addUniversity}>Add University</button>  
       
          <ul>
            {universities.map((item, index) => (
              <li key={index}>
                {item.university} - {item.enrollmentYear} to {item.graduationYear}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default EducationInfo;