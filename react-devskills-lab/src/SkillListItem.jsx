import React from 'react';

function SkillListItem({skill, index}) {

    return(
        <li className='SkillListItem'> 
        {skill.name}
        <span className='level'> LEVEL {skill.level} </span>
        </li>
    );
}

export default SkillListItem;