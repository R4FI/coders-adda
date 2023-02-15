import React from 'react';
import './user.css';
const Usersingle = ({alldata}) => {
    const {name,phone,avatar} = alldata;
    return (
        <div className="userinfo">
            <div className="datacard">
                    <div>
                        <img src={avatar} alt='' className="infoimage"/>
                    </div>
                    <div className="infocontainer">
                            <h5>{name}</h5>
                            <p>{phone}</p>
                    </div>
            </div>
        </div>
    );
};

export default Usersingle;