import { useState } from "react"
import '../styles/Resume.css'

function Resume({ data }) {
    

    return (
        <div>
            <h2>General Information</h2>
            <p>Name: {data.general.name}</p>
            <p>Phone: {data.general.phone}</p>
            <p>Email: {data.general.email}</p>
        </div>
    );
}

export default Resume