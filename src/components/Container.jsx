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

    function handleUpdateResumeData(newData) {
        setResumeData(prevData => {
            switch(newData.type) {
                case 'general':
                    return { ...prevData, general: newData.data };
                case 'education':
                    return { ...prevData, education: [...prevData.education, newData.data] };
                case 'work':
                    return { ...prevData, work: [...prevData.work, newData.data] };
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