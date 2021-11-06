import React from 'react'
import { WorkData } from './data/Work';
import Separator from './Separator';
import WorkCard from './Work-card';

function Work() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator />
            <label className="section__title"> Work </label>
            <div className="work__list">
                {data.map((item) => {
                    return (
                        <WorkCard item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;
