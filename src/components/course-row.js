import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";


const CourseRow = (
    {deleteCourse,
        updateCourse,
        title,
        owner,
        lastModified,
        course
    }) => {
        const [editing, setEditing] = useState(false)
        const [newTitle, setNewTitle] = useState(title)
        const saveTitle = () => {
            setEditing(false)
            const newCourse = {
                ...course,
                title:newTitle
            }
            updateCourse(newCourse)
        }

        return (<tr>
            <td> </td>
            <td scope="col-2" style={{width: '25%'}}>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {title}
                </Link>}
                {editing && <input
                    onChange={(event)=> setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>}
            </td>

            <td scope="col-2" style={{width: '25%'}}>{owner}</td>
            <td>{lastModified}</td>
            <td >

                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit"
                                style={{color:'primary'}}
                ></i>}
                {editing && <i onClick={() => deleteCourse(course)} className="fas fa-trash"
                               style={{color:'red'}}
                ></i>}
                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check" style={{color:'green'}} ></i>}
            </td>
        </tr>)
}

export default CourseRow
