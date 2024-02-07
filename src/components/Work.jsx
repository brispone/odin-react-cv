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

        const formData = {
            companyname: event.target.companyname.value,
            title: event.target.title.value,
            location: event.target.location.value,
            startdate: event.target.startdate.value,
            enddate: event.target.enddate.value
        };

        onUpdate({ type: "education", data: formData });
    }

    if(!showForm) {
        return (
            <button onClick={toggleForm}>Add Work</button>
        );
    } else return (
        <form onSubmit={handleSubmit}>
            <div className="closeFormButton" onClick={toggleForm}><span>X</span></div>
            <div>
                <label for="companyname">Company Name</label>
                <input type="text" name="companyname" id="companyname" placeholder="Apple" required></input>
            </div>
            <div>
                <label for="title">Position Title</label>
                <input type="text" name="title" id="title" placeholder="Web Developer" required></input>
            </div>
            <div>
                <label for="location">Location</label>
                <input type="text" name="location" id="location" placeholder="Cupertino, CA" required></input>
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