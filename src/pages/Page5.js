
import React, {pages} from "react"
import Greet from "../pages/Page4.js"

function BottNav () {
    return (
        <div className="grid grid-cols-6 bg-gray-200 p-2 text-blue-400">
            {/* <a style="color: #428BCA;" href="Link">MIS Web</a> */}
            <a href="Link">MIS Web</a>
            {/* <a style="color: #428BCA;" href="Link">Staff email</a> */}
            <a href="Link">Staff email</a>
            {/* <a style="color: #428BCA;" href="Link">Student email</a> */}
            <a href="Link">Student email</a>
            {/* <a style="color: #428BCA;" href="Link">Sakai LMS</a> */}
            <a href="Link">Sakai LMS</a>
            {/* <a style="color: #428BCA;" href="Link">Careers & Counselling</a> */}
            <a href="Link">Careers & Counselling</a>
            {/* <a style="color: #428BCA;" href="Link">Radio Univers</a> */}
            <a href="Link">Radio Univers</a>

        </div>
    );
}

export const ColAdmin = () => {
    return (
        <div className="grid grid-cols-5 bg-blue-950 p-2">
            <div>
                <h3 className="text-base text-yellow-500 font-semibold m-2">GET IN TOUCH WITH US</h3>
                <p className="text-white text-sm m-2">+233-(0)302-213820</p>
                <p className="text-white text-sm m-2">+233-(0)302-213820</p>
                <p className="text-white text-sm m-2">pad@ug.edu.gh</p>
                <p className="text-white text-sm m-2">P.O. Box LG 25</p>
                <p className="text-white text-sm m-2">Legon, Accra</p>
            </div>
            <div>
                <h3 className="text-base text-yellow-500 font-semibold m-2">COLLEGES</h3>
                <p className="text-white text-sm m-2">Basic & Applied Sciences</p>
                <p className="text-white text-sm m-2">Education</p>
                <p className="text-white text-sm m-2">Health Science</p>
                <p className="text-white text-sm m-2">Humanities</p>
                <p className="text-white text-sm m-2">School of Graduate Studies</p>
            </div>
            <div>
                <h3 className="text-base text-yellow-500 font-semibold m-2">ADMISSIONS</h3>
                <p className="text-white text-sm m-2">Undergraduate</p>
                <p className="text-white text-sm m-2">Postgraduate</p>
                <p className="text-white text-sm m-2">International</p>
                <p className="text-white text-sm m-2">Distance Education</p>
            </div>
            <div>
                <h3 className="text-base text-yellow-500 font-semibold m-2">QUICK LINKS</h3>
                <p className="text-white text-sm m-2">Academic</p>
                <p className="text-white text-sm m-2">Record Verification</p>
                <p className="text-white text-sm m-2">UG Journals</p>
                <p className="text-white text-sm m-2">Times Higher Education</p>
                <p className="text-white text-sm m-2">UG Intranet Portal</p>
                <p className="text-white text-sm m-2">The Pan-African Doctoral Academy (PADA)</p>
                <p className="text-white text-sm m-2">Employment Opportunities</p>
            </div>
            <div>
                <h3 className="text-base text-yellow-500 font-semibold m-2">ALUMNI</h3>
                <p className="text-white text-sm m-2">UG Alumni Relations Office</p>
                <p className="text-white text-sm m-2">UG Alumni Association (Ghana)</p>
                <p className="text-white text-sm m-2">UG Alumni Association (North America)</p>
                <p className="text-white text-sm m-2">Give to UG</p>
            </div>
        </div>
    )
}

export default BottNav;
