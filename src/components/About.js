import React, {useEffect, useRef} from 'react'
import SocialContact from './SocialContact';
import Typed from 'typed.js'

function About() {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
      const options = {
        strings: [
          '&nbsp;Rahul Parmar :)',
          '&nbsp;a <span class="text-red-500">MERN Stack Developer</span>',
        //   '&nbsp;a Freelancer',
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true,
      };
      typed.current = new Typed(el.current, options);
  
      return () => {
        typed.current.destroy();
      };
    }, []);
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__info">
                    Hello There 👋, I am
                    <span ref={el} />
                    {/* <br /> <span className="info__name">Rahul Parmar</span>
                    <br /> React-JS Developer 👨‍💻
                    <br />I love experimenting with the web. */}
                </div>
                <div className="about__photo">
                    <img src={require("../img/Coding.png").default} alt="imgge" className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About;
