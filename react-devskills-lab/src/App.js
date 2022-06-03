import './Styles.css';
import SkillList from './SkillList';
import './SkillListItem.css';
import NewSkillForm from'./NewSkillForm';
import "./NewSkillForm.css";
import { useState } from "react";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);
  function addSkill(skill) {
    setSkills([...skills, skill]);
  }
  return (
    <div className="Styles">
      <h1 className="teal-text">React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr></hr>
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}

export default App;
