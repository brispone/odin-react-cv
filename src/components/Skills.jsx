import { useState } from "react"
import '../styles/General.css'

function Skills() {
    const [showForm, setShowForm] = useState(false);

    function toggleForm() {
        setShowForm(!showForm);
    }

    function handleSubmit(event) {
        event.preventDefault();
        toggleForm();

        const formData = event.target.skill.value;

        onUpdate({ type: "skill", data: formData });
    }

    if(!showForm) {
        return (
            <button onClick={toggleForm}>Add Skill</button>
        );
    } else return (
            <form onSubmit={handleSubmit}>
                <div className="closeFormButton" onClick={toggleForm}><span>X</span></div>
                <div>
                    <label for="skill">Skill</label>
                    <input type="text" name="skill" id="skill" placeholder="Basket Weaving" required></input>
                </div>
                <button type="submit">Submit</button>
            </form>
    );
}

export default Skills