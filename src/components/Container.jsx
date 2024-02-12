import React, { useState } from "react";
import General from './General';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Clear from "./Clear";
import Resume from './Resume';

function Container() {
    const [resumeData, setResumeData] = useState({
        general: {},
        education: [],
        work: [],
        skills: []
    });

    const [ eduIDCounter, setEduIDCounter ] = useState(0);
    const [ workIDCounter, setWorkIDCounter ] = useState(0);

    function handleUpdateResumeData(newData) {
        setResumeData(prevData => {
            switch(newData.type) {
                case 'general':
                    return { ...prevData, general: newData.data };
                case 'education':
                    const newEduID = eduIDCounter + 1;
                    setEduIDCounter(newEduID);
                    return { ...prevData, education: [...prevData.education, { ...newData.data, id: newEduID }] };
                case 'work':
                    const newWorkID = workIDCounter + 1;
                    setWorkIDCounter(newWorkID);
                    return { ...prevData, work: [...prevData.work, { ...newData.data, id: newWorkID }] };
                case 'skills':
                    return { ...prevData, skills: [...prevData.skills, newData.data] };
                default:
                    return prevData;
            }
        });
    }

    function clearResumeData() {
        setResumeData(prevData => {
            return { ...prevData, education: [], work: [], skills: [] };
        });
    }

    return (
        <div className="container">
            <div className="formsDiv">
                <h2>Create  Your Resume</h2>
                <General onUpdate={handleUpdateResumeData} />
                <Education onUpdate={handleUpdateResumeData} />
                <Work onUpdate={handleUpdateResumeData} />
                <Skills onUpdate={handleUpdateResumeData} />
                <Clear clearResume={clearResumeData} />
            </div>
            <div className="resumeDiv">
                <Resume data={resumeData} />
            </div>
        </div>
    );
}

export default Container