import { useState } from "react"
import '../styles/Resume.css'

function Resume({ data }) {
    

    return (
        <div className="resume">
            <h2>General Information</h2>
                <p>Name: {data.general.name}</p>
                <p>Phone: {data.general.phone}</p>
                <p>Email: {data.general.email}</p>
            <h2>Education</h2>
                {data.education.map((edu, index) => (
                    <div key={index}>
                        <p>School: {edu.schoolname}</p>
                        <p>Degree: {edu.degree}</p>
                        <p>Area of Study: {edu.study}</p>
                        <p>Date: {edu.date}</p>
                    </div>
                ))}
            <h2>Work History</h2>
                {data.work.map((work, index) => (
                    <div key={index}>
                        <p>Company: {work.companyname}</p>
                        <p>Title: {work.title}</p>
                        <p>Location: {work.location}</p>
                        <p>Start Date: {work.startdate}</p>
                        <p>End Date: {work.enddate}</p>
                    </div>
                ))}
            <h2>Skills</h2>
                {data.skills.map((skill, index) => (
                    <div key={index}>
                        <p>{skill}</p>
                    </div>
                ))}
        </div>
    );
}

export default Resume