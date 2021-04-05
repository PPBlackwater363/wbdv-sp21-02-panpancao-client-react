import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor";
import React from "react";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

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
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/:widgetId"
                ]} exact={true} render={(props) => <CourseEditor {...props}/>}/>

                {/*<Route path={["/courses/:layout/edit/:courseId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"*/}
                {/*]}*/}
                {/*       exact={true}>*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList></QuizzesList>
                </Route>

                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>

            </div>
        </BrowserRouter>
    );
}

export default App;
