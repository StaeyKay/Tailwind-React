

import React from "react"

const NavMenu = () => {
    return (
        <div>
            <div className="grid grid-cols-7 bg-blue-950 text-white">
                <a href="Link" className="text-center p-2">ABOUT</a>
                <a href="Link" className="text-center p-2">ADMISSION</a>
                <a href="Link" className="text-center p-2">ACADEMICS</a>
                <a href="Link" className="text-center p-2">RESEARCH</a>
                <a href="Link" className="text-center p-2">LIBRARY</a>
                <a href="Link" className="text-center p-2">INTERNATIONAL PROGRAMMES</a>
                <a href="Link" className="text-center p-2">FRESHMEN INFO</a>
            </div>
        </div>
    )
}

export const NewsRow = () => {
    return (
        <div className="grid grid-cols-7 bg-blue-950 text-white">
            <a href="Link" className="text-center p-2">ABOUT</a>
            <a href="Link" className="text-center p-2">ADMISSION</a>
            <a href="Link" className="text-center p-2">ACADEMICS</a>
            <a href="Link" className="text-center p-2">RESEARCH</a>
            <a href="Link" className="text-center p-2">LIBRARY</a>
            <a href="Link" className="text-center p-2">INTERNATIONAL PROGRAMMES</a>
            <a href="Link" className="text-center p-2">FRESHMEN INFO</a>
        </div>
    )
}

export const UpEvents = () => {
    return (
        <div className="grid grid-cols-3 m-2">

            {/* <!-- upcoming events section --> */}
            <div>
                {/* <h3 class="row4Headings" style="margin-left: 0px;">Upcoming Events</h3> */}
                <h3 className="text-xl font-semibold text-white bg-blue-950 p-3 m-2 ml-0">Upcoming Events</h3>
                <p className="text-blue-400 px-3">Launch of the Internship Policy of the University of Ghana, Legon</p>
                <p className="text-blue-400 px-3">Time: 10:00 am to 12:00 pm</p>
                <p className="text-blue-400 px-3">Great Hall, University of Ghana</p>
                <p className="text-blue-400 px-3">2023 Remembrance Day Christian Service and Muslim Prayers</p>
                <p className="text-blue-400 px-3">Time: 3:00 pm to 2:00 pm</p>
                <p className="text-blue-400 px-3">University of Ghana</p>
                <p className="text-blue-400 px-3">2023 OPEN DAY</p>
                <p className="text-blue-400 px-3">Time: 9:00 pm to 3:00 pm</p>
                <p className="text-blue-400 px-3">UG Sports Complex / Korle-Bu</p>
            </div>

            {/* <!-- announcements section --> */}
            <div>
                <h3 className="text-xl font-semibold text-white bg-blue-950 p-3 m-2 ml-0">Announcements</h3>
                <p className="text-blue-400 px-3">Call for Abstracts - Research Week - University of Ghana Dental School</p>
                <hr />
                <p className="text-blue-400 px-3">Akuafo Hall Agri-Fest 2023</p>
                <hr />
                <p className="text-blue-400 px-3">Call for Applications - Building Capacity for Early Career Humanities Scholars in Africa</p>
                <hr />
                <p className="text-blue-400 px-3">Admissions Into the Graduate Entry Medical Programme (GEMP) 2023/2024 Academic Year</p>
                <hr />
                <p className="text-blue-400 px-3">Admissions into the Practice Proficiency Medical Programme (PPMP) 2023 Academic Year</p>
                <hr />
                <p className="text-blue-400 px-3">Arrangements for Students’ Accommodation for 2023/2024 Academic Year</p>
                <hr />
                <p className="text-blue-400 px-3">International Day for Older Persons</p>
                <hr />
                <p className="text-blue-400 px-3">Logical Framework Approach and Result Framework Training</p>
                <hr />
                <p className="text-blue-400 px-3">more announcements....</p>
            </div>

            {/* <!-- Featured links section --> */}
            <div>
                {/* <h3 class="row4Headings" style="width: 100%;">Featured Links</h3> */}
                <h3 className="text-xl font-semibold text-white bg-blue-950 p-3 m-2 ml-0 mb-2">Featured Links</h3>
                {/* <button style="background-color: #3d8b5f;"><b>August 2023 Congregation</b></button> */}
                <p className="bg-teal-500 text-white mb-2 p-2 text-center"><b>August 2023 Congregation</b></p>
                {/* <button style="background-color: #f76149;"><b>Course Lecturer Evaluation</b></button> */}
                <p className="bg-orange-400 text-white mb-2 p-2 text-center"><b>Course Lecturer Evaluation</b></p>
                {/* <button style="background-color: #7D7B7B;"><b>Mature Student Admissions (Second Batch)</b></button> */}
                <p className="bg-gray-400 text-white mb-2 p-2 text-center"><b>Mature Student Admissions (Second Batch)</b></p>
                {/* <button style="background-color: #00bdee;"><b>2ND Semester Examination Timetable</b></button> */}
                <p className="bg-blue-400 text-white mb-2 p-2 text-center"><b>2ND Semester Examination Timetable</b></p>
                {/* <button style="background-color: #DF8B0C;"><b>General Amnesty for Undergraduate Students yet to */}
                {/* Graduate</b></button> */}
                <p className="bg-yellow-500 text-white mb-2 p-2 text-center"><b>General Amnesty for Undergraduate Students yet to
                    Graduate</b></p>
                {/* <button style="background-color: #3d8b5f;"><b>Admission Status Checker</b></button> */}
                <p className="bg-teal-500 text-white mb-2 p-2 text-center"><b>Admission Status Checker</b></p>
                {/* <button style="background-color: #f76149;"><b>Join the UG Alumni Network</b></button> */}
                <p className="bg-orange-400 text-white mb-2 p-2 text-center"><b>Join the UG Alumni Network</b></p>
                {/* <button style="background-color: #7D7B7B;"><b>Donate to VC's Student Digitalisation */}
                {/* Initiative</b></button> */}
                <p className="bg-gray-400 text-white mb-2 p-2 text-center"><b>Donate to VC's Student Digitalisation
                    Initiative</b></p>
                {/* <button style="background-color: #00bdee;"><b>Coronavirus Risk Assessment Form</b></button> */}
                <p className="bg-blue-400 text-white mb-2 p-2 text-center"><b>Coronavirus Risk Assessment Form</b></p>
                {/* <button style="background-color: #DF8B0C;"><b>Sakai LMS Login</b></button> */}
                <p className="bg-yellow-500 text-white mb-2 p-2 text-center"><b>Sakai LMS Login</b></p>
                {/* <button style="background-color: #3d8b5f;"><b>Vacancy Announcements</b></button> */}
                <p className="bg-teal-500 text-white mb-2 p-2 text-center"><b>Vacancy Announcements</b></p>
                {/* <button style="background-color: #f76149;"><b>Steps for Online Registration</b></button> */}
                <p className="bg-orange-400 text-white mb-2 p-2 text-center"><b>Steps for Online Registration</b></p>
                {/* <button style="background-color: #7D7B7B;"><b>SCHEDULE OF FEES</b></button> */}
                <p className="bg-gray-400 text-white mb-2 p-2 text-center"><b>SCHEDULE OF FEES</b></p>
                {/* <button style="background-color: #00bdee;"><b>Academic Calendar</b></button> */}
                <p className="bg-blue-400 text-white mb-2 p-2 text-center"><b>Academic Calendar</b></p>
                {/* <button style="background-color: #DF8B0C;"><b>University Regulations for Junior Members</b></button> */}
                <p className="bg-yellow-500 text-white mb-2 p-2 text-center"><b>University Regulations for Junior Members</b></p>
            </div>
        </div>
    )
}

export default NavMenu