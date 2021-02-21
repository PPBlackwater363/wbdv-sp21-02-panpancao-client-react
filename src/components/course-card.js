import React from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course}) =>
    <div className="col-3">
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">

                {/*<img src="https://i.ibb.co/BT8wL4N/Ekran-Resmi-2019-11-18-18-08-13.png"*/}
                {/*     alt="Ekran-Resmi-2019-11-18-18-08-13"*/}
                {/*     border="0"/>*/}

                <img src="https://i.ibb.co/3Y5q2j7/start-small.png"
                     alt="start-small"
                     border="0" />

                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>

                <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    </div>

export default CourseCard