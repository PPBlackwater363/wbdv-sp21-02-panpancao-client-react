import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path={["/courses",
                "/courses/:layout",
                ]} exact={true}>
                    <CourseManager/>
                </Route>
                <Route path={["/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                ]} exact={true} render={(props) => <CourseEditor {...props}/>}/>

                {/*<Route path={["/courses/:layout/edit/:courseId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"*/}
                {/*]}*/}
                {/*       exact={true}>*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
