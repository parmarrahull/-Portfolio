import React from 'react'
import { SkillsData } from './data/Skills';
import Separator from './Separator';
import SkillCard from './Skill-Card';

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
            <Separator />
            <label className='section__title'>My Skill </label>
            <div className='skills__container'>
                {data.map((item) => {
                    return (
                        <div className="skills__section">
                            <label className="skills__section__title"> {item.type} </label>
                            <div className="skills__list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;
