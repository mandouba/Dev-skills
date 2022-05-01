import DevSkillsItem from "./DevSkillsItem";

export default function SkillsList({ skills }) {
    const devSkill = skills.map((skill, idx) => (
      <DevSkillsItem skill={skill} key={idx} />
    ));
    return <ul className="DevSkillsList">{devSkill}</ul>;
  }
  

