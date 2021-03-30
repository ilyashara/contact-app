import React from 'react';
import "./contact.css";

const Contact = ({ image, name, online }) => {
    return (
        <div className="Contact">
            <img class="avatar" src={image} alt="" />
            <div className="status">
                <h3 className="name">{name}</h3>
                <div className="status-online"></div>
                <p className="status-text">{online}</p>
            </div>
        </div>
    );
}

export default Contact;