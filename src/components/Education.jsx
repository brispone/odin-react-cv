import { useState, useEffect } from "react"
import '../styles/General.css'

function Education({ onUpdate, editingEntry, resetEditingEntry }) {
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        schoolname: '',
        degree: '',
        study: '',
        date: '',
        id: null
    });

    function showForm() {
        setFormVisible(true);
    }

    function closeForm() {
        setFormVisible(false);
        resetForm();

        if(editingEntry) {
            resetEditingEntry();
        }
    }

    function resetForm() {
        setFormData({
          schoolname: '',
          degree: '',
          study: '',
          date: '',
          id: null
        });
      }

    useEffect(() => {
        if(editingEntry && editingEntry.type === 'education') {
            setFormData({
                schoolname: editingEntry.schoolname,
                degree: editingEntry.degree,
                study: editingEntry.study,
                date: editingEntry.date,
                id: editingEntry.id
            });
            showForm();
        }
    }, [editingEntry]);

    function handleSubmit(event) {
        event.preventDefault();
        closeForm();

        onUpdate({ type: "education", data: formData });
    }

    if(!formVisible) {
        return (
            <button onClick={showForm}>Add Education</button>
        );
    } else return (
        <form onSubmit={handleSubmit}>
            <div className="closeFormButton" onClick={closeForm}><span>X</span></div>
            <div>
                <label for="name">School Name</label>
                <input type="text" name="schoolname" id="schoolname" placeholder="Odin University" value={formData.schoolname} onChange={(e) => setFormData(prev => ({ ...prev, schoolname: e.target.value }))} required></input>
            </div>
            <div>
                <label for="degree">Degree</label>
                <input type="text" name="degree" id="degree" placeholder="PhD" value={formData.degree} onChange={(e) => setFormData(prev => ({ ...prev, degree: e.target.value }))} required></input>
            </div>
            <div>
                <label for="study">Area of Study</label>
                <input type="text" name="study" id="study" placeholder="Web Development" value={formData.study} onChange={(e) => setFormData(prev => ({ ...prev, study: e.target.value }))} required></input>
            </div>
            <div>
                <label for="date">Date</label>
                <input type="date" name="date" id="date" value={formData.date} onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))} required></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Education