import React from 'react';

function NewSkillForm() {
    return(
        <form className="NewSkillForm">
            <label htmlFor="">Skill</label>
            <input type="text"></input>
            <label htmlFor="">Level</label>
            <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    );
}

export default NewSkillForm;