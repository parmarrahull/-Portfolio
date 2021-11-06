import React from 'react'
import { ProjectData } from './data/Projects';
import ProjectCard from './Project-card';
import Separator from './Separator';

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="section__title"> Projects </label>
            <div className="">
                {data.map((project) => {
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects;
