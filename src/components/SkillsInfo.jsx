import { useState } from "react";
import { AiFillMinusSquare } from 'react-icons/ai'
import { BsFillPlusSquareFill } from 'react-icons/bs'

function SkillsInfo() {
    const [skill, setSkill] = useState("");
    const [skillsList, setSkillsList] = useState([]);
 
    const handleSkillChange = (e) => {
      setSkill(e.target.value);
    };
  
    const addSkill = () => {
      if (skill.trim() !== "") {
        setSkillsList([...skillsList, skill]);
        setSkill(""); 
      }
    };
  
    const removeSkill = (index) => {
      const updatedSkills = [...skillsList];
      updatedSkills.splice(index, 1);
      setSkillsList(updatedSkills);
    };
  
    return (
        <div className="skills-container">
          <h2>Technical Skills</h2>
          <div className="enter-skill">
            <input
              type="text"
              placeholder="Enter a skill"
              value={skill}
              onChange={handleSkillChange}
            />
            <button className="plus-button"onClick={addSkill}><BsFillPlusSquareFill /></button>
          </div>
          <ul>
            {skillsList.map((s, index) => (
              <li key={index}>
                {s}
                <button className="remove-button" onClick={() => removeSkill(index)}>
                  <AiFillMinusSquare />
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
  

    function Languages() {
      const [language, setLanguage] = useState("");
      const [languageList, setLanguageList] = useState([]);

      const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
      };

      const addLanguage = () => {
        if(language.trim() !=="") {
          setLanguageList([...languageList,language]);
          setLanguage("");
        };
      };

      const removeLanguage = (index) => {
        const updatedLanguage = [...languageList];
        updatedLanguage.splice(index, 1);
        setLanguageList(updatedLanguage);
      };

      return (
        <div className="language-container">
          <h2>Languages</h2>
          <div className="enter-language">
            <input type="text" placeholder="Enter a language" value={language} onChange={handleLanguageChange}
            />
          </div>
        </div>
      )

    }

export default SkillsInfo;