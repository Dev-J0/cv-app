import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";


function MainContent() {
    return(
        <div className="mainContent-container">
            <div className="mainContent-component"><EducationInfo /></div>
            <div className="mainContent-component"><ExperienceInfo /></div>
        </div>
    )
}

export default MainContent;