import React from "react";
import CourseManager from "./components/course-manager";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <CourseManager/>
        </div>
      </BrowserRouter>
  );
}

export default App;
