import { NavLink } from "react-router-dom";
import resume from "../documents/resume.pdf"

export default function Navigation() {
    return (<>
        <div className="App-name-header">
            <h1>Tyler Green</h1>
        </div>
        <div className="App-nav-header">
            {getHome()}
            {getWorkExperience()}
            {getEducation()}
            {getProjects()}
            {getSeniorDesign()}
            {getReflections()}
            {getResume()}
            {getContact()}
        </div>
    </>
    );
}

function getHome() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"} to="/">Home</NavLink>
        </div>
    );
}

function getWorkExperience() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"} to="/work">Work Experience</NavLink>
        </div>
    );
}

function getEducation() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"}
                to="/education">Education
            </NavLink>
        </div>
    );
}

function getProjects() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"}
                to="/projects">Projects
            </NavLink>
        </div>
    );
}

function getResume() {
    return (
        <div className="nav-item">
            <a className="nav-item-link" href={resume}>Resume</a>
        </div>
    );
}

function getSeniorDesign() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"}
                to="/senior-design">Senior Design
            </NavLink>
        </div>
    );
}

function getReflections() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"}
                to="/reflections">Reflections
            </NavLink>
        </div>
    );
}

function getContact() {
    return (
        <div className="nav-item">
            <NavLink exact="true" className={({isActive, isPending }) => isPending ? "nav-item-link" : isActive ? "nav-item-link-active" : "nav-item-link"}
                to="/contact">Contact
            </NavLink>
        </div>
    );
}
