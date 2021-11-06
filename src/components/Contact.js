import React from 'react'
import Separator from './Separator';
import SocialContact from './SocialContact';

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section__title">Contact</label>
            <di className="contact__container">
                <div className="contact__left">
                    <p>Want to get in touch? me on the platform </p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../img/Resume Rahul.pdf").default}>
                        <i class="fi-rr-cloud-download download-icon" />
                        Download Resume
                    </a>
                </div>
            </di>
        </div>
    )
}

export default Contact;
