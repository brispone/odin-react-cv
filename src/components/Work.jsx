import { useState, useEffect } from "react"
import '../styles/General.css'

function Work({ onUpdate, editingEntry, resetEditingEntry }) {
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        companyname: '',
        title: '',
        location: '',
        startdate: '',
        enddate: '',
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
          companyname: '',
          title: '',
          location: '',
          startdate: '',
          enddate: '',
          id: null
        });
      }

    useEffect(() => {
        if(editingEntry && editingEntry.type === 'work') {
            setFormData({
                companyname: editingEntry.companyname,
                title: editingEntry.title,
                location: editingEntry.location,
                startdate: editingEntry.startdate,
                enddate: editingEntry.enddate,
                id: editingEntry.id
            });
            showForm();
        }
    }, [editingEntry]);

    function handleSubmit(event) {
        event.preventDefault();
        closeForm();

        onUpdate({ type: "work", data: formData });
    }

    if(!formVisible) {
        return (
            <button onClick={showForm}>Add Work</button>
        );
    } else return (
        <form onSubmit={handleSubmit}>
            <div className="closeFormButton" onClick={closeForm}><span>X</span></div>
            <div>
                <label for="companyname">Company Name</label>
                <input type="text" name="companyname" id="companyname" placeholder="Apple" value={formData.companyname} onChange={(e) => setFormData(prev => ({ ...prev, companyname: e.target.value }))} required></input>
            </div>
            <div>
                <label for="title">Position Title</label>
                <input type="text" name="title" id="title" placeholder="Web Developer" value={formData.title} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} required></input>
            </div>
            <div>
                <label for="location">Location</label>
                <input type="text" name="location" id="location" placeholder="Cupertino, CA" value={formData.location} onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))} required></input>
            </div>
            <div>
                <label for="startdate">Start Date</label>
                <input type="date" name="startdate" id="startdate" value={formData.startdate} onChange={(e) => setFormData(prev => ({ ...prev, startdate: e.target.value }))} required></input>
            </div>
            <div>
                <label for="enddate">End Date</label>
                <input type="date" name="enddate" id="enddate" value={formData.enddate} onChange={(e) => setFormData(prev => ({ ...prev, enddate: e.target.value }))} required></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Work