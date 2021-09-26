import React from 'react';
import Names from '../Components/TeacherName/Names';
import './Card.css'

const Card = (props) => {
    const {card} = props;
    //total sum reduce
    const total = card.reduce((preValue, currValue)=>{
        return preValue + currValue.Salary;
    }, 0)
    return (
        <div className="card-style">
            {/* total length */}
            <h1>Total Person: {props.card.length}</h1>
            <h3>Total Salary: $ {total}</h3>
            {
                card.map(names => <Names name={names}></Names>)
            }
        </div>
    );
};

export default Card;