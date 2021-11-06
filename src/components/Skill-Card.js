import React from 'react'

function SkillCard({ skill }) {
    return (
        <div className="skill__card">
            <div className='skill__icon'> {skill.icon} </div>
            <label className="skill__name"> {skill.name} </label>
        </div>
    )
}

export default SkillCard;
