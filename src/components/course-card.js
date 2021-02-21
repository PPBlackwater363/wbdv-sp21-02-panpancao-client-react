import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course, updateCourse, deleteCourse}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
    <div className="col-3">
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/3Y5q2j7/start-small.png"
                 alt="start-small"
                 border="0"/>
            <div className="card-body">
                {
                    !editing &&
                        <Link to="/courses/editor" className="card-title">{course.title}</Link>
                }

                {
                    editing &&
                    <input
                    onChange={(event)=> setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
                }
                {/*<h5 className="card-title">{course.title}</h5>*/}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>

                <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                {/*<i className="fas fa-trash"></i>*/}
            </div>
            <div className="card-footer">
                <div className="float-right">
                    {!editing && <i onClick={() => setEditing(true)}
                                    className="fas fa-edit"
                                    style={{color:'#0275d8'}}
                    ></i>}
                    {editing && <i onClick={() => deleteCourse(course)} className="fas fa-trash"
                                   style={{color:'#d9534f'}}
                    ></i>}
                    {editing && <i onClick={() => saveTitle()}
                                   className="fas fa-check" style={{color:'#5cb85c'}} ></i>}
                </div>
            </div>
        </div>
    </div>)
}
export default CourseCard