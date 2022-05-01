import "./DevSkillsItem.css";
export default function DevSkillsItem({ skill }) {
  return (
    <li className="DevSkillsItem">
      {skill.name}<span className="level">Level:{skill.level}</span>
    </li>
  );
}