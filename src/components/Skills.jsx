import { useState } from "react"
import '../styles/General.css'

function Skills({ onUpdate }) {
    const [formVisible, setFormVisible] = useState(false);

    function showForm() {
        setFormVisible(true);
    }

    function closeForm() {
        setFormVisible(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        closeForm();

        const formData = event.target.skill.value;

        onUpdate({ type: "skills", data: formData });
    }

    if(!formVisible) {
        return (
            <button onClick={showForm}>Add Skill</button>
        );
    } else return (
            <form onSubmit={handleSubmit}>
                <div className="closeFormButton" onClick={closeForm}><span>X</span></div>
                <div>
                    <label for="skill">Skill</label>
                    <input type="text" name="skill" id="skill" placeholder="Basket Weaving" required></input>
                </div>
                <button type="submit">Submit</button>
            </form>
    );
}

export default Skills