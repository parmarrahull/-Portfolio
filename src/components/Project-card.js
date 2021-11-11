import React from 'react'

function ProjectCard({ project }) {
    return (
        <div className="project__card">
            <div className="project__info">
                <label className="project__title">{project.title}</label>
                <div className="project__links">
                    {project.demo && (
                        <a className="project__link" target="_blank" rel="noreferrer" href={project.demo}>
                            <div className="link__button">
                                <i class="fi fi-rr-globe"></i>Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project__link" target="_blank" rel="noreferrer" href={project.github}>
                            <div className="link__button">
                                <i class="devicon-github-original colored"></i>Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project__tags">
                    {project.tags.map((tag) => {
                        return (
                            <label className="tag">{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} alt="img" rel="noreferrer" className="project__photo" />
        </div>
    )
}

export default ProjectCard;
