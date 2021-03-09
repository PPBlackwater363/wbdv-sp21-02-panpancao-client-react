import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import CourseService from "../services/course-service"
import {connect, Provider} from "react-redux"


const CourseEditorNavbar = ({course, findCourseById}) => {
    const {layout, courseId, moduleId} = useParams();

    useEffect(() => {
        findCourseById(courseId)
    }, [findCourseById, courseId])

    return (
        <div>
            <br/>
            <h2>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor: {course.title}
                {/*<i onClick={() => history.goBack()} className="fas fa-times float-right" ></i>*/}
                <Link to="">
                    <i className="fas fa-home float-right"></i>
                </Link>
            </h2>
            <hr/>
        </div>
    )
}
const stpm = state => {
    return {
        course: state.courseReducer.course
    }
}

const dtpm = dispatch => ({
    findCourseById: (courseId) => {
        CourseService.findCourseById(courseId)
            .then(theCourse => dispatch({
                type: "FIND_COURSE",
                course: theCourse
            }))
    }
})


export default connect(stpm, dtpm)(CourseEditorNavbar)