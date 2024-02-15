import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import newfile_ug from "../assets/images/newfile_ug.png";
import undergrad from "../assets/images/undergrad admissions.png";

function Page2() {
    return (
        // <!-- mainContainer styling -->
    <div>
        {/* <!-- topnav styling --> */}
        <div className="grid grid-cols-3 text-center bg-blue-950 text-white p-3">
            {/* <a href="Link" style="text-align: right; padding-right: 20px;">Staff</a> */}
            <a href="Link">Staff</a>
            <a href="Link">Student</a>
            <a href="Link">Alumni</a>
        </div>

        {/* <!-- mainHeader styling --> */}
        <div className="text-blue-950 text-3xl p-3 font-bold">
            {/* <h2 style="color: #153d6f;">UNIVERSITY</h2> */}
            <h2>UNIVERSITY</h2>
            {/* <h2 style="color: #153d6f;">OF GHANA</h2> */}
            <h2>OF GHANA</h2>
        </div>

        {/* <!-- navmenu styling --> */}
        <div className="grid grid-cols-7 bg-blue-950 text-white">
            <a href="Link" className="text-center p-2">ABOUT</a>
            <a href="Link" className="text-center p-2">ADMISSION</a>
            <a href="Link" className="text-center p-2">ACADEMICS</a>
            <a href="Link" className="text-center p-2">RESEARCH</a>
            <a href="Link" className="text-center p-2">LIBRARY</a>
            <a href="Link" className="text-center p-2">INTERNATIONAL PROGRAMMES</a>
            <a href="Link" className="text-center p-2">FRESHMEN INFO</a>
        </div>

        {/* <!-- topimage styling --> */}
        <div>
            <img src= {undergrad} alt="undergraduate admissions image" className="object-cover w-full"/>
        </div>

        
        <h3 className="text-yellow-500 font-bold text-lg p-5">News</h3>

        {/* <!-- newsRow styling --> */}
        {/* <div style="display: grid; grid-template-columns: 18.75% 18.75% 18.75% 18.75% 25%;"></div> */}
        <div className="grid grid-cols-5">
            <figure className="ms-1 me-2">
                <img src= {img1} alt="Image1"/>
                <figcaption className="text-blue-400">University of Ghana to host Turkish Cultural Institute</figcaption>
            </figure>

            <figure className="ms-1 me-2">
                <img src= {img2} alt="Image2"/>
                <figcaption className="text-blue-400">Outstanding Performance by UG Sportsmen and Women at...</figcaption>
            </figure>

            <figure className="ms-1 me-2">
                <img src= {img3} alt="Image3"/>
                <figcaption className="text-blue-400">GAUA-UG Hosts Annual General Meeting and Retiree’s Party</figcaption>
            </figure>

            <figure className="ms-1 me-2">
                <img src= {img4} alt="Image4"/>
                <figcaption className="text-blue-400">Installation of Electronic Access Control at Halls of...</figcaption>
            </figure>

            <figure>
                <img src= {newfile_ug} alt="Image5"/>
            </figure>

        </div>

        {/* <!-- upcoming events, announcements and featured links row styling --> */}
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
                <hr/>
                <p className="text-blue-400 px-3">Akuafo Hall Agri-Fest 2023</p>
                <hr/>
                <p className="text-blue-400 px-3">Call for Applications - Building Capacity for Early Career Humanities Scholars in Africa</p>
                <hr/>
                <p className="text-blue-400 px-3">Admissions Into the Graduate Entry Medical Programme (GEMP) 2023/2024 Academic Year</p>
                <hr/>
                <p className="text-blue-400 px-3">Admissions into the Practice Proficiency Medical Programme (PPMP) 2023 Academic Year</p>
                <hr/>
                <p className="text-blue-400 px-3">Arrangements for Students’ Accommodation for 2023/2024 Academic Year</p>
                <hr/>
                <p className="text-blue-400 px-3">International Day for Older Persons</p>
                <hr/>
                <p className="text-blue-400 px-3">Logical Framework Approach and Result Framework Training</p>
                <hr/>
                <p className="text-blue-400 px-3">more announcements....</p>
            </div>

            {/* <!-- Featured links section --> */}
            <div>
            {/* <h3 class="row4Headings" style="width: 100%;">Featured Links</h3> */}
                <h3 className="text-xl font-semibold text-white bg-blue-950 p-3 m-2 ml-0">Featured Links</h3>
                {/* <button style="background-color: #3d8b5f;"><b>August 2023 Congregation</b></button> */}
                <p className="bg-teal-500 text-white"><b>August 2023 Congregation</b></p>
                {/* <button style="background-color: #f76149;"><b>Course Lecturer Evaluation</b></button> */}
                <p className="bg-orange-400 text-white"><b>Course Lecturer Evaluation</b></p>
                {/* <button style="background-color: #7D7B7B;"><b>Mature Student Admissions (Second Batch)</b></button> */}
                <button className="bg-gray-400 text-white"><b>Mature Student Admissions (Second Batch)</b></button>
                {/* <button style="background-color: #00bdee;"><b>2ND Semester Examination Timetable</b></button> */}
                <button className="bg-blue-400 text-white"><b>2ND Semester Examination Timetable</b></button>
                {/* <button style="background-color: #DF8B0C;"><b>General Amnesty for Undergraduate Students yet to */}
                        {/* Graduate</b></button> */}
                <button className="bg-yellow-500 text-white"><b>General Amnesty for Undergraduate Students yet to
                        Graduate</b></button>
                {/* <button style="background-color: #3d8b5f;"><b>Admission Status Checker</b></button> */}
                <button className="bg-teal-500 text-white"><b>Admission Status Checker</b></button>
                {/* <button style="background-color: #f76149;"><b>Join the UG Alumni Network</b></button> */}
                <button className="bg-orange-400 text-white"><b>Join the UG Alumni Network</b></button>
                {/* <button style="background-color: #7D7B7B;"><b>Donate to VC's Student Digitalisation */}
                        {/* Initiative</b></button> */}
                <button className="bg-gray-400 text-white"><b>Donate to VC's Student Digitalisation
                        Initiative</b></button>
                {/* <button style="background-color: #00bdee;"><b>Coronavirus Risk Assessment Form</b></button> */}
                <button className="bg-blue-400 text-white"><b>Coronavirus Risk Assessment Form</b></button>
                {/* <button style="background-color: #DF8B0C;"><b>Sakai LMS Login</b></button> */}
                <button className="bg-yellow-500 text-white"><b>Sakai LMS Login</b></button>
                {/* <button style="background-color: #3d8b5f;"><b>Vacancy Announcements</b></button> */}
                <button><b>Vacancy Announcements</b></button>
                {/* <button style="background-color: #f76149;"><b>Steps for Online Registration</b></button> */}
                <button><b>Steps for Online Registration</b></button>
                {/* <button style="background-color: #7D7B7B;"><b>SCHEDULE OF FEES</b></button> */}
                <button><b>SCHEDULE OF FEES</b></button>
                {/* <button style="background-color: #00bdee;"><b>Academic Calendar</b></button> */}
                <button><b>Academic Calendar</b></button>
                {/* <button style="background-color: #DF8B0C;"><b>University Regulations for Junior Members</b></button> */}
                <button><b>University Regulations for Junior Members</b></button>
            </div>
        </div>

        {/* <!-- bottom navigation bar styling --> */}
        <div class="bottomNavBar">
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

        {/* <!-- colleges, admissions, quick links section styling --> */}
        <div class="CollegesAdmiss">
            <div>
                <h3 class="CollegesAdmissHeadings">GET IN TOUCH WITH US</h3>
                <p class="CollegesAdmissPara">+233-(0)302-213820</p>
                <p class="CollegesAdmissPara">+233-(0)302-213820</p>
                <p class="CollegesAdmissPara">pad@ug.edu.gh</p>
                <p class="CollegesAdmissPara">P.O. Box LG 25</p>
                <p class="CollegesAdmissPara">Legon, Accra</p>
            </div>
            <div>
                <h3 class="CollegesAdmissHeadings">COLLEGES</h3>
                <p class="CollegesAdmissPara">Basic & Applied Sciences</p>
                <p class="CollegesAdmissPara">Education</p>
                <p class="CollegesAdmissPara">Health Science</p>
                <p class="CollegesAdmissPara">Humanities</p>
                <p class="CollegesAdmissPara">School of Graduate Studies</p>
            </div>
            <div>
                <h3 class="CollegesAdmissHeadings">ADMISSIONS</h3>
                <p class="CollegesAdmissPara">Undergraduate</p>
                <p class="CollegesAdmissPara">Postgraduate</p>
                <p class="CollegesAdmissPara">International</p>
                <p class="CollegesAdmissPara">Distance Education</p>
            </div>
            <div>
                <h3 class="CollegesAdmissHeadings">QUICK LINKS</h3>
                <p class="CollegesAdmissPara">Academic</p>
                <p class="CollegesAdmissPara">Record Verification</p>
                <p class="CollegesAdmissPara">UG Journals</p>
                <p class="CollegesAdmissPara">Times Higher Education</p>
                <p class="CollegesAdmissPara">UG Intranet Portal</p>
                <p class="CollegesAdmissPara">The Pan-African Doctoral Academy (PADA)</p>
                <p class="CollegesAdmissPara">Employment Opportunities</p>
            </div>
            <div>
                <h3 class="CollegesAdmissHeadings">ALUMNI</h3>
                <p class="CollegesAdmissPara">UG Alumni Relations Office</p>
                <p class="CollegesAdmissPara">UG Alumni Association (Ghana)</p>
                <p class="CollegesAdmissPara">UG Alumni Association (North America)</p>
                <p class="CollegesAdmissPara">Give to UG</p>
            </div>
        </div>

        {/* <!-- final footer styling --> */}
        <div class="finalFooter">
            {/* <p style="padding: 5px; color: aliceblue; margin: 0px;">Copyright ©, 2023 University of Ghana</p> */}
            <p>Copyright ©, 2023 University of Ghana</p>
        </div>
    </div>
    );
}

export default Page2;
