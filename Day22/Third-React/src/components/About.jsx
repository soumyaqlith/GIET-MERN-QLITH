import React from 'react'
import { useNavigate } from 'react-router'

function About() {
    let navigate = useNavigate();

    function handleNavigate() {
        navigate("/dash");
    }
    return (
        <div>
            about
            <br />
            <button onClick={handleNavigate}>Click here go to Dashboard</button>
        </div>
    )
}

export default About