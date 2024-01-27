// this is teacher navbar faculty will se it only when logged in 
//logout functionality have not been completed yet
import React from 'react'
import "../pages/Teacher/style.css"

function TeacherNavBar() {
    return (
        <div>
            <div id="teachernavbar">
                <h1 id="header">Faculty</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/notice">Notice</a>
                    </li>
                    <li>
                        <a href="/updateinfo">Update</a>
                    </li>
                    <li>
                        <a href="/notification">notification</a>
                    </li>
                    <button onClick="" id="TeacherLogout">Logout</button>
                </ul>
            </div>
        </div>
    )
}

export default TeacherNavBar
