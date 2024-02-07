import { useState } from "react"
import '../styles/General.css'

function Education({ onUpdate }) {
    const [showForm, setShowForm] = useState(false);

    function toggleForm() {
        setShowForm(!showForm);
    }

    function handleSubmit(event) {
        event.preventDefault();
        toggleForm();

        const formData = {
            schoolname: event.target.schoolname.value,
            degree: event.target.degree.value,
            study: event.target.study.value,
            date: event.target.date.value
        };

        onUpdate({ type: "education", data: formData });
    }

    if(!showForm) {
        return (
            <button onClick={toggleForm}>Add Education</button>
        );
    } else return (
        <form onSubmit={handleSubmit}>
            <div className="closeFormButton" onClick={toggleForm}><span>X</span></div>
            <div>
                <label for="name">School Name</label>
                <input type="text" name="schoolname" id="schoolname" placeholder="Odin University" required></input>
            </div>
            <div>
                <label for="degree">Degree</label>
                <input type="text" name="degree" id="degree" placeholder="PhD" required></input>
            </div>
            <div>
                <label for="study">Area of Study</label>
                <input type="text" name="study" id="study" placeholder="Web Development" required></input>
            </div>
            <div>
                <label for="date">Date</label>
                <input type="date" name="date" id="date" required></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Education