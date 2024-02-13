import { useState } from "react"
import '../styles/Resume.css'

function Resume({ data, onDelete, onEdit }) {
    

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
                    <div className="info-block" key={edu.id}>
                        <h3 className="headline">{edu.schoolname} <span className="resume-btns">- <span className="edit-btn" onClick={()=> onEdit(edu.id, 'education')}>EDIT</span> // <span className="delete-btn" onClick={()=> onDelete(edu.id, 'education')}>REMOVE</span></span></h3>
                        <p>Degree: {edu.degree}</p>
                        <p>Area of Study: {edu.study}</p>
                        <p>{edu.date}</p>
                    </div>
                ))}
            <h2 className="sectionheader">Work History</h2>
                {data.work.map((work, index) => (
                    <div className="info-block" key={work.id}>
                        <h3 className="headline">{work.companyname} <span className="resume-btns">- <span className="edit-btn" onClick={()=> onEdit(work.id, 'work')}>EDIT</span> // <span className="delete-btn" onClick={()=> onDelete(work.id, 'work')}>REMOVE</span></span></h3>
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