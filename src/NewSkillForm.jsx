import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
    const [formData, setFormData] = useState({
        name: "",
        level: 1
    });

    function handleChange(evt) {
        evt.preventDefault();
        const newFormData = {
            ...formData,
            [evt.target.name]: evt.target.value,
            [evt.target.level]: evt.target.value
        };
        setFormData(newFormData);
    }

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(formData);
        setFormData({
            name: " ",
            level: 1
        });
    }

    return (
      <>
      <form className="NewSkillForm" onSubmit={handleAddSkill}>
        <label>
          Skill
          <input
          value={formData.name}
          onChange={handleChange}
          required
          name="name"
          ></input>
        </label>
        <label>
          Level
          <select onChange={handleChange} value={formData.level} name="level">
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
            <option value={5}> 5 </option>
          </select>
        </label>
        <button type="submit">ADD A SKILL</button>
      </form>
      </>
    );
  }
  