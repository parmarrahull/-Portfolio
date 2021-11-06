import React from 'react'

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close__icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="fi fi-rr-cross-circle"></i>
            </div>
            <div className="mobile__options">
                <div className="mobile__option">
                    <a href="#project">
                        <i class="fi fi-rr-edit-alt option__icon"></i>Projects
                    </a>
                </div>
                <div className="mobile__option">
                    <a href="#skills">
                        <i class="fi fi-rr-laptop  option__icon"></i>Skills
                    </a>
                </div>
                <div className="mobile__option">
                    <a href="#work">
                        <i class="fi fi-rr-briefcase  option__icon"></i>Work
                    </a>
                </div>
                <div className="mobile__option">
                    <a href="#contact">
                        <i class="fi fi-rr-user option__icon"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;
