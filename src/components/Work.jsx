import { useState } from "react"
import '../styles/General.css'

function Work() {
    const [showForm, setShowForm] = useState(false);

    function toggleForm() {
        setShowForm(!showForm);
    }

    function handleSubmit(event) {
        event.preventDefault();
        toggleForm();
    }

    if(!showForm) {
        return (
            <button onClick={toggleForm}>Add Work</button>
        );
    } else return (
        <form onSubmit={handleSubmit}>
            <div className="closeFormButton" onClick={toggleForm}><span>X</span></div>
            <div>
                <label for="name">Company Name</label>
                <input type="text" name="schoolname" id="schoolname" placeholder="Odin University" required></input>
            </div>
            <div>
                <label for="degree">Position Title</label>
                <input type="text" name="degree" id="degree" placeholder="PhD" required></input>
            </div>
            <div>
                <label for="study">Location</label>
                <input type="text" name="study" id="study" placeholder="Web Development" required></input>
            </div>
            <div>
                <label for="startdate">Start Date</label>
                <input type="date" name="startdate" id="startdate" required></input>
            </div>
            <div>
                <label for="enddate">End Date</label>
                <input type="date" name="enddate" id="enddate" required></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Work