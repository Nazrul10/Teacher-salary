import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import Teacher from '../Teacher/Teacher';
//import css
import './Teachers.css'
const Teachers = () => {
    //use state
    const [salary, setSalary] = useState([])
    const [teachers, setTeachers] = useState([])
    //useEffect
    useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[]) 
    //btn-handaler
    const clickHandaler = (details) =>{
        const newSalay = [...salary, details]
        setSalary(newSalay);
    }
    return (
        <div className="teachers-container">
            <div className="teacher-grid">
            {
                //details map
                teachers.map(teacher => <Teacher
                    key={teacher._id}
                    clickHandaler={clickHandaler}
                    details={teacher}
                    ></Teacher> )
            }
            </div>
            <div className="cart-container">
                <Card card={salary}></Card>
            </div>
        </div>
    );
};

export default Teachers;