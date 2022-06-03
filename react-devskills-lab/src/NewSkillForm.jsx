import React, {useState} from 'react';
// import React from 'react';
// import SkillsList from './SkillsList'

function NewSkillForm({addSkill}) {
    const [formData, setFormData] = useState(
        {
            name : '',
            level : 1
        }
    )

    function handleChange(event) {
        const newFormData = {...formData, [event.target.name]: event.target.value};
        setFormData(newFormData);
    }

    function handleNewSkill(event) {
        event.preventDefault();
        addSkill(formData);

    }

    return(
        <form onSubmit={handleNewSkill}>
            <label>
                Skill:
                    <input 
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    name="name"
                    pattern=".{4," />
            </label>
            <label>
                Level:
                    <select name='level' 
                    onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
            </label>
            <button type="submit">ADD SKILL</button>
        </form>
    );
}

export default NewSkillForm;