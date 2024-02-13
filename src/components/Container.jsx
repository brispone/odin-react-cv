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

    const [ editingEntry, setEditingEntry ] = useState(null);

    function handleUpdateResumeData(newData) {
        setResumeData(prevData => {

            const {type, data} = newData;

            switch(newData.type) {
                case 'general':
                    return { ...prevData, general: newData.data };

                case 'education':
                case 'work':
                    if(data.id) {
                        // If the data has an ID already, update existing item
                        return {
                            ...prevData,
                            [type]: prevData[type].map(item => item.id === data.id ? { ...item, ...data } : item)
                        };
                    } else {
                        // Add new item with new ID
                        const newID = type === 'education' ? eduIDCounter + 1 : workIDCounter +1;
                        // Update ID counter
                        type === 'education' ? setEduIDCounter(newID) : setWorkIDCounter(newID);

                        return {
                            ...prevData,
                            [type]: [...prevData[type], { ...data, id: newID }]
                        };
                    }
                
                case 'skills':
                    return { ...prevData, skills: [...prevData.skills, newData.data] };
                default:
                    return prevData;
            }
        });
    }

    function editEntry(id, type) {
        const entryToEdit = resumeData[type].find(entry => entry.id === id);
        setEditingEntry({ ...entryToEdit, type: type });
    }

    function resetEditingEntry() {
        setEditingEntry(null);
    }

    function deleteEntry(id, type) {
        setResumeData(prevData => ({
            ...prevData,
            [type]: prevData[type].filter(entry => entry.id !== id)
        }));
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
                <Education onUpdate={handleUpdateResumeData} editingEntry={editingEntry && editingEntry.type === 'education' ? editingEntry : null} resetEditingEntry={resetEditingEntry} />
                <Work onUpdate={handleUpdateResumeData} editingEntry={editingEntry && editingEntry.type === 'work' ? editingEntry : null}  resetEditingEntry={resetEditingEntry} />
                <Skills onUpdate={handleUpdateResumeData} />
                <Clear clearResume={clearResumeData} />
            </div>
            <div className="resumeDiv">
                <Resume data={resumeData} onDelete={deleteEntry} onEdit={editEntry} />
            </div>
        </div>
    );
}

export default Container