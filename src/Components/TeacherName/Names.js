import React from 'react';
import './Name.css'

const Names = (props) => {
    const {name} = props.name;
    return (
        <div className="name-style">
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default Names;