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
                        <h3 className="headline">{edu.schoolname}</h3>
                        <p>Degree: {edu.degree}</p>
                        <p>Area of Study: {edu.study}</p>
                        <p>{edu.date}</p>
                    </div>
                ))}
            <h2>Work History</h2>
                {data.work.map((work, index) => (
                    <div key={index}>
                        <h3 className="headline">{work.companyname}</h3>
                        <p>{work.location}</p>
                        <p>{work.title}</p>
                        <p>{work.startdate} to {work.enddate}</p>
                    </div>
                ))}
            <h2>Skills</h2>
            <p>{data.skills.join('; ')}</p>
        </div>
    );
}

export default Resume