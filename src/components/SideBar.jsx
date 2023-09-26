import SkillsInfo from './SkillsInfo.jsx'
import BasicInfo from './BasicInfo.jsx'
import Languages from './Languages.jsx'


function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-component"><BasicInfo /></div>
      <div className="sidebar-component"><SkillsInfo /></div>
      <div className="sidebar-component"><Languages /></div>
    </div>
  );
}

export default SideBar;