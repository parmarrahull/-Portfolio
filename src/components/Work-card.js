import React from 'react'


function WorkCard({ item }) {
    return (
        <div className="work__card">
            <img src={item.companyLogo} className="work__logo" />
            <div className="work__info">
                <label className="company__name"> {item.company} </label>
                <div className="work__dates">
                    <label> {item.dateJoining} </label>-<label> {item.dateEnd} </label>
                </div>
                <div className='work__desc'>
                    <p> {item.work} </p>
                </div>
            </div>
        </div>
    )
};

export default WorkCard;
