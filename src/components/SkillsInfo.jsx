import { useState } from "react";
import { TbSquareRoundedMinusFilled } from 'react-icons/tb'
import { TbSquareRoundedPlusFilled } from 'react-icons/tb'

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
        <div>
          <h2>Technical Skills</h2>
          <div className="enter-skill">
            <input
              type="text"
              placeholder="Enter a skill"
              value={skill}
              onChange={handleSkillChange}
            />
            <button className="plus-button"onClick={addSkill}><TbSquareRoundedPlusFilled /></button>
          </div>
          <ul>
            {skillsList.map((s, index) => (
              <li key={index}>
                {s}
                <button className="remove-button" onClick={() => removeSkill(index)}>
                  <TbSquareRoundedMinusFilled />
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  

export default SkillsInfo