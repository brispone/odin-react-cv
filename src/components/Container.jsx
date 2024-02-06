import { useState } from "react"

function Container() {
    const [resumeData, setResumeData] = useState({
        general: {},
        education: [],
        work: [],
        skills: []
    });

    function handleUpdateResumeData(newData) {
        // This is where the newData is added to the resume data (you would want to call setResumeData for this)
    }

    return (
        <>
        </>
    );
}

export default Container