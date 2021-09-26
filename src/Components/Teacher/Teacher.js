import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
//import css
import './Teacher.css'
const Teacher = (props) => {
    //distructuring
    const {picture, name, phone, age, gender, Salary} = props.details
    //icons
    const icons = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="teacher-bg">
            <img className="card-img" src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h5>Call: {phone}</h5>
            <h5>Age: {age}</h5>
            <h5>Gender: {gender}</h5>
            <h5>Salary: ${Salary} </h5>
            <div className="icons">
                <div>
                {/* button declare */}
                <button className="add-btn" onClick = {()=> props.clickHandaler(props.details)} >{icons}  add salary</button>
                </div>
                <div>
                <FontAwesomeIcon icon={faInfoCircle} />
                </div>
            </div>
        </div>
    );
};

export default Teacher;