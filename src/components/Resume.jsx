import { useState } from "react"
import '../styles/Resume.css'

function Resume({ data }) {
    

    return (
        <div className="resume">
            <div className="gen">
                <h1>{data.general.name}</h1>
                <div className="contact-info">
                    <h3>Phone: {data.general.phone}</h3>
                    <h3>Email: {data.general.email}</h3>
                </div>
            </div>
            <h2 className="sectionheader">Education</h2>
                {data.education.map((edu, index) => (
                    <div key={index}>
                        <h3 className="headline">{edu.schoolname}</h3>
                        <p>Degree: {edu.degree}</p>
                        <p>Area of Study: {edu.study}</p>
                        <p>{edu.date}</p>
                    </div>
                ))}
            <h2 className="sectionheader">Work History</h2>
                {data.work.map((work, index) => (
                    <div key={index}>
                        <h3 className="headline">{work.companyname}</h3>
                        <p>{work.location}</p>
                        <p>{work.title}</p>
                        <p>{work.startdate} to {work.enddate}</p>
                    </div>
                ))}
            <h2 className="sectionheader">Skills</h2>
            <p>{data.skills.join('; ')}</p>
        </div>
    );
}

export default Resume