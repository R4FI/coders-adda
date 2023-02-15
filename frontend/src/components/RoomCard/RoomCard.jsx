import React, { useState } from 'react';
import styles from './RoomCard.module.css';
import { useHistory } from 'react-router-dom';
import deleteroom from '../../http/index';
const RoomCard = ({ room }) => {
    const history = useHistory();
    const [rooms,setRooms] = useState([]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = deleteroom;
            fetch (url , {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount>0) {
                       alert('Deleted Successfully');
                        const remainingRooms = rooms.filter(room => room.id !== id);
                      setRooms(remainingRooms);
                    }
                   
                });
        }

    }
    return (
        <div
            onClick={() => {
                history.push(`/room/${room.id}`);
            }}
            className={styles.card}
        >
            <h3 className={styles.topic}>{room.topic}  </h3>
           
            <div
                className={`${styles.speakers} ${
                    room.speakers.length === 1 ? styles.singleSpeaker : ''
                }`}
            > 
                <div className={styles.avatars}>
                    {room.speakers.map((speaker) => (
                        <img
                            key={speaker.id}
                            src={speaker.avatar}
                            alt="speaker-avatar"
                        />
                    ))}
                </div>
                <div className={styles.names}>
               
                    {room.speakers.map((speaker) => (
                        <div key={speaker.id} className={styles.nameWrapper}>
                            <span>{speaker.name}</span>
                           
                            <img
                                src="/images/chat-bubble.png"
                                alt="chat-bubble"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.peopleCount}>
                <span>{room.totalPeople}</span>
                <img src="/images/user-icon.png" alt="user-icon" />
            </div>
            <button onClick={() => handleDelete(room.id)}>Delete</button>
        </div>
    );
};

export default RoomCard;
