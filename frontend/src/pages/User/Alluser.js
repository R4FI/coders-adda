import React, { useEffect, useState } from 'react';
import { getuser } from '../../http';
import Usersingle from './Usersingle';
import './Alluser.css';
const Alluser = () => {
    const [user,setUser] = useState([]);
    useEffect(() => {
        const fetchRoom = async () => {
            const { data } = await getuser();
            setUser((prev) => data);
        };

        fetchRoom();
    }, []);
    return (
        <div>
                <h3 className="users">All User</h3>
                <div className="offercard">
                        {
                            user.map(alldata=>
                                
                                <Usersingle
                                key={alldata.id}
                                 alldata = {alldata}
                                >
                                </Usersingle>
                                )
                        }
                </div>
        </div>
    );
};

export default Alluser;