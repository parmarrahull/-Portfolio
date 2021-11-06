import React from 'react'
import SocialContact from './SocialContact';

function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__info">
                    Hello There 👋, I am
                    <br /> <span className="info__name">Rahul Parmar</span>
                    <br /> React-JS Developer 👨‍💻
                    <br />I love experimenting with the web.
                </div>
                <div className="about__photo">
                    <img src={require("../img/Coding.png").default} className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About;
