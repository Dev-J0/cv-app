import './App.css'
import './styles/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BasicInfo from './components/BasicInfo'
import SkillsInfo from './components/SkillsInfo'
import Languages from './components/Languages'
import EducationInfo from './components/EducationInfo'

function App() {
  
  return (
    <>
   <div className="header">
       <Header />
  </div>
      <BasicInfo />
      <SkillsInfo />
      <Languages />
      <EducationInfo />

  <div className="footer">
    <Footer />
  </div>
    </>
  )
}

export default App;
//Basic info
//name
//email
//phone number
//submit info button


//Educational Experience
//School name
//title of study
//date of study
//submit info button

//Practical experience
//company name
//position title
//main responsabilities of your jobs
//date from and until when you worked for that company
//submit info butt