import { useState } from "react"
import '../styles/General.css'

function General() {
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
            <button onClick={toggleForm}>Add General Info</button>
        );
    } else return (
            <form onSubmit={handleSubmit}>
                <div className="closeFormButton" onClick={toggleForm}><span>X</span></div>
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Smith" required></input>
                </div>
                <div>
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="555-555-5555" required></input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="johnsmith@gmail.com" required></input>
                </div>
                <button type="submit">Submit</button>
            </form>
    );
}

export default General