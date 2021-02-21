import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {updateCourse} from "../services/course-service";
import './course-manager-style.css';

class CourseManager extends React.Component {
    state = {
        courses: [],
        newCourse: {
        title: "",
        owner: "me",
        lastModified:"6:45 PM"
        }
    }

    onCourseChange = (e) => {
        this.setState({
            newCourse: {
                title: e.target.value,
                owner: "me",
                lastModified:"6:45 PM"
            }
        })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //     if(c._id === course._id) {
                //         return course
                //     } else {
                //         return c
                //     }
                // })
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //         courses: actualCourses
        //     }))
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))


    addCourse = (event) => {
        const courseToAdd = this.state.newCourse

        courseService.createCourse(courseToAdd)
            .then(course => this.setState(
                (prevState) => ({
                ...prevState,
                courses: [
                    ...prevState.courses,
                    course
                ]
            })))
        // this.state.courses.push(newCourse)
        // this.setState(this.state)
        this.setState({newCourse: {title: "", owner: "me",
                lastModified:"6:45 PM" }})
        event.preventDefault()
    }

    deleteCourse = (courseToDelete) => {

        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //     courses: newCourses
                // })

                this.setState((prevState)=>{
                    let nextState = {}
                    nextState.courses =
                        prevState.
                            courses
                                .filter(course => course !== courseToDelete)
                    return nextState
                })
            })
        // console.log(course)

    }


    render() {
        return(
            <div>
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
                <body className="bg-light">
                <nav className="navbar bg-primary sticky-top">
                    <div className="col-md-3">
                        <a href="/index">
                            <i className="fas fa-bars fa-2x " style={{color: 'white'}}></i>
                        </a>
                        <label></label>
                        <label></label>
                        <label></label>
                        <label className="col-form-table  text-white h2">
                            Course Manager
                        </label>
                    </div>

                    <div className="col-md-6">
                        <input className=" homepage-input font-italic font-weight-bold text-white"
                               type="text"
                               size="60"
                               placeholder="New Course Title"
                               id="wbdv-new-course-title"
                               onChange={this.onCourseChange}
                               value={this.state.newCourse.title}
                        />
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                        <i onClick={this.addCourse}
                           className="fas fa-plus-circle fa-3x col-md-auto"
                           style={{color: 'red'}}>
                        </i>
                        </a>

                    </div>

                </nav>

                </body>

                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid">
                <CourseGrid
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse}
                    courses={this.state.courses}/>
                </Route>

                {/*<Route path="/courses/editor">*/}
                {/*<CourseEditor*/}
                {/*    courses={this.state.courses}/>*/}
                {/*</Route>*/}

                {/*<Route path="/courses/editor"*/}
                {/*       render={(props)=><CourseEditor props={props}/>}>*/}
                {/*</Route>*/}

                <Route path="/courses/editor"
                       render={(props)=><CourseEditor {...props}/>}>
                </Route>

                <a href="#">
                    <i onClick={this.addCourse}
                       className="fas fa-plus-circle fa-4x col-md-auto float-right"
                       style={{color: 'red'}}></i>
                </a>
            </div>
        )
    }
}


export  default CourseManager