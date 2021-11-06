import React from 'react'

function Web() {
    return (
        <div className="web">
            <div className="web__option">
                <a href="#project">
                <i class="fi fi-rr-edit-alt option__icon"></i>Projects
                </a>
            </div>
            <div className="web__option">
                <a href="#skills">
                <i class="fi fi-rr-laptop  option__icon"></i>Skills
                </a>
            </div>
            <div className="web__option">
                <a href="#work">
                <i class="fi fi-rr-briefcase  option__icon"></i>Work
                </a>
            </div>
            <div className="web__option">
                <a href="#contact">
                <i class="fi fi-rr-user option__icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web;
