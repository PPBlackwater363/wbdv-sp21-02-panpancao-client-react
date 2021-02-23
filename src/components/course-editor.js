import React from 'react';
import {Link} from "react-router-dom";
import './course-editor.style.client.css';

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <div>
        {/*<h2>*/}
        {/*    <Link to="/courses/table">*/}
        {/*        <i className="fas fa-arrow-left"></i>*/}
        {/*    </Link>*/}
        {/*    Course Editor*/}
        {/*    <i onClick={() => history.goBack()} className="fas fa-times float-right"></i>*/}
        {/*</h2>*/}

        <nav className="navbar navbar-dark bg-secondary row">
            <Link to="/courses/table">
                <i className="fas fa-arrow-left fa-2x" style={{color:"white"}}></i>
            </Link>

            {/*<a href="../homepage/homepage.template.client.html">*/}
            {/*    <i className="fas fa-times fa-2x col-md-auto" style={{color:'white'}}></i>*/}
            {/*</a>*/}

            <label className="col-form-label col-md-3 text-white h2" style={{font: '25px'}}>
                Course Editor
            </label>

            <ul className="nav nav-pills nav-fill col-md-8">
                <li className="nav-item">
                    <a className="nav-link bg-secondary text-white-50 font-weight-hold"
                       href="#" style={{font: '25px'}}>Build</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link bg-secondary text-white-50 font-weight-hold"
                       href="#" style={{font: '25px'}}>Pages</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link bg-secondary text-white-50 font-weight-hold"
                       href="#" style={{font: '25px'}}>Themes</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link bg-secondary text-white-50 font-weight-hold"
                       href="#" style={{font: '25px'}}>Store</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link bg-secondary text-white-50 font-weight-hold"
                       href="#" style={{font: '25px'}}>Apps</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link bg-secondary text-white-50 font-weight-hold"
                       href="#" style={{font: '25px'}}>Settings</a>
                </li>
            </ul>
            {/*<i className="fas fa-plus fa-2x col-md-auto" style={{color:'white'}}></i>*/}

            <i onClick={() => history.goBack()}
               className="fas fa-times float-right fa-2x"
               style={{color:"white"}}></i>
        </nav>

        <div className="container-fluid row">
            <div className="row">
                <nav className="col-md-3 d-none d-md-block bg-dark ">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <div className="container">

                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div>
                                            <div className="row">
                                                <i className="offset-1 col col-8 align-middle">
                                                    Module 1 - JQuery
                                                </i>
                                                <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 2 - React
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 3 - Redux
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 4 - Native
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 5 - Angular
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 6 - Node
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"></label>
                                <label className="row"></label>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 7 - Mongo
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color:'white'}}></i>
                                        </div>
                                    </button>
                                </li>

                                <label className="row"></label>
                                <label className="row"></label>
                                <i className="fas fa-plus offset-10 fa-2x col-md-auto" style={{color:'white'}}></i>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>
                                <label className="row"></label>

                                <label className="row"></label>
                                <label className="row"></label>

                            </div>
                        </ul>
                    </div>
                </nav>

                <div className="row col">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <label className="row"></label>
                                <button type="button" className="btn btn-secondary">Topic 1</button>
                                <i className="col col-md-1"></i>
                                <button type="button" className="btn btn-secondary">Topic 2</button>
                                <i className="col col-md-1"></i>
                                <button type="button" className="btn btn-secondary">Topic 3</button>
                                <i className="col col-md-1"></i>
                                <button type="button" className="btn btn-secondary">Topic 4</button>
                                <i className="col col-md-1"></i>
                                <i className="fas fa-plus-square fa-3x align-middle" style={{color:'#767676'}}></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>content intentionally leave blank</h1>
                    </div>

                </div>
            </div>
        </div>

    </div>

export default CourseEditor