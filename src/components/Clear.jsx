import { useState } from "react"
import '../styles/General.css'

function Clear({ clearResume }) {
    const [showForm, setShowForm] = useState(false);

    function toggleForm() {
        setShowForm(!showForm);
    }

    return (
        <button className="danger" onClick={clearResume}>Clear Resume</button>
    );
}

export default Clear