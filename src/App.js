import { useState } from "react";
import DevSkillsList from "./DevSkillsList";
import NewSkillForm from "./NewSkillForm";
import "./style.css";


export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  function addSkill(skill) {
    setSkills([...skills, skill]);
  }

  return (
    <div className="App">
      <h1>React Dev-Skills</h1>
      <DevSkillsList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}