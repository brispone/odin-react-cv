import { useState } from "react"

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
            <input type="text" id="name" placeholder="Name"></input>
            <input type="text" id="phone" placeholder="Phone Number"></input>
            <input type="text" id="email" placeholder="Email"></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default General