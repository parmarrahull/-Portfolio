import React from 'react'
import { SocialData } from './data/Social';

function SocialContact() {
    const data = SocialData;
    return (
        <div className="social__contact">
            {data.map((item) => {
                return (
                    <a href={item.link} target="_blank" rel="noreferrer">
                        <div className="social__icon_div">
                            <img src={item.icon} alt="icon Img" rel="noreferrer" className="social__icon" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact;
