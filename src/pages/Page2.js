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
        {/* <div style="padding: 10px;"></div> */}
        <div>
            {/* <h2 style="color: #153d6f;">UNIVERSITY</h2> */}
            <h2>UNIVERSITY</h2>
            {/* <h2 style="color: #153d6f;">OF GHANA</h2> */}
            <h2>OF GHANA</h2>
        </div>

        {/* <!-- navmenu styling --> */}
        <div class="navmenu">
            <a href="Link">ABOUT</a>
            <a href="Link">ADMISSION</a>
            <a href="Link">ACADEMICS</a>
            <a href="Link">RESEARCH</a>
            <a href="Link">LIBRARY</a>
            <a href="Link">INTERNATIONAL PROGRAMMES</a>
            <a href="Link">FRESHMEN INFO</a>
        </div>

        {/* <!-- topimage styling --> */}
        <div class="topimage">
            <img src= {undergrad} alt="undergraduate admissions image"/>
        </div>

        {/* <h3 style="padding: 10px; color:#FFA500;">News</h3> */}
        <h3>News</h3>

        {/* <!-- newsRow styling --> */}
        {/* <div style="display: grid; grid-template-columns: 18.75% 18.75% 18.75% 18.75% 25%;"></div> */}
        <div>
            <figure>
                <img src= {img1} alt="Image1"/>
                <figcaption>University of Ghana to host Turkish Cultural Institute</figcaption>
            </figure>

            <figure>
                <img src= {img2} alt="Image2"/>
                <figcaption>Outstanding Performance by UG Sportsmen and Women at...</figcaption>
            </figure>

            <figure>
                <img src= {img3} alt="Image3"/>
                <figcaption>GAUA-UG Hosts Annual General Meeting and Retiree’s Party</figcaption>
            </figure>

            <figure>
                <img src= {img4} alt="Image4"/>
                <figcaption>Installation of Electronic Access Control at Halls of...</figcaption>
            </figure>

            <figure>
                <img src= {newfile_ug} alt="Image5"/>
            </figure>

        </div>

        {/* <!-- upcoming events, announcements and featured links row styling --> */}
        <div class="row4">

            {/* <!-- upcoming events section --> */}
            <div>
            {/* <h3 class="row4Headings" style="margin-left: 0px;">Upcoming Events</h3> */}
                <h3 class="row4Headings">Upcoming Events</h3>
                <p>Launch of the Internship Policy of the University of Ghana, Legon</p>
                <p>Time: 10:00 am to 12:00 pm</p>
                <p>Great Hall, University of Ghana</p>
                <p>2023 Remembrance Day Christian Service and Muslim Prayers</p>
                <p>Time: 3:00 pm to 2:00 pm</p>
                <p>University of Ghana</p>
                <p>2023 OPEN DAY</p>
                <p>Time: 9:00 pm to 3:00 pm</p>
                <p>UG Sports Complex / Korle-Bu</p>
            </div>

            {/* <!-- announcements section --> */}
            <div>
                <h3 class="row4Headings">Announcements</h3>
                <p>Call for Abstracts - Research Week - University of Ghana Dental School</p>
                <hr/>
                <p>Akuafo Hall Agri-Fest 2023</p>
                <hr/>
                <p>Call for Applications - Building Capacity for Early Career Humanities Scholars in Africa</p>
                <hr/>
                <p>Admissions Into the Graduate Entry Medical Programme (GEMP) 2023/2024 Academic Year</p>
                <hr/>
                <p>Admissions into the Practice Proficiency Medical Programme (PPMP) 2023 Academic Year</p>
                <hr/>
                <p>Arrangements for Students’ Accommodation for 2023/2024 Academic Year</p>
                <hr/>
                <p>International Day for Older Persons</p>
                <hr/>
                <p>Logical Framework Approach and Result Framework Training</p>
                <hr/>
                <p>more announcements....</p>
            </div>

            {/* <!-- Featured links section --> */}
            <div>
            {/* <h3 class="row4Headings" style="width: 100%;">Featured Links</h3> */}
                <h3>Featured Links</h3>
                {/* <button style="background-color: #3d8b5f;"><b>August 2023 Congregation</b></button> */}
                <button><b>August 2023 Congregation</b></button>
                {/* <button style="background-color: #f76149;"><b>Course Lecturer Evaluation</b></button> */}
                <button><b>Course Lecturer Evaluation</b></button>
                {/* <button style="background-color: #7D7B7B;"><b>Mature Student Admissions (Second Batch)</b></button> */}
                <button><b>Mature Student Admissions (Second Batch)</b></button>
                {/* <button style="background-color: #00bdee;"><b>2ND Semester Examination Timetable</b></button> */}
                <button><b>2ND Semester Examination Timetable</b></button>
                {/* <button style="background-color: #DF8B0C;"><b>General Amnesty for Undergraduate Students yet to */}
                        {/* Graduate</b></button> */}
                <button><b>General Amnesty for Undergraduate Students yet to
                        Graduate</b></button>
                {/* <button style="background-color: #3d8b5f;"><b>Admission Status Checker</b></button> */}
                <button><b>Admission Status Checker</b></button>
                {/* <button style="background-color: #f76149;"><b>Join the UG Alumni Network</b></button> */}
                <button><b>Join the UG Alumni Network</b></button>
                {/* <button style="background-color: #7D7B7B;"><b>Donate to VC's Student Digitalisation */}
                        {/* Initiative</b></button> */}
                <button><b>Donate to VC's Student Digitalisation
                        Initiative</b></button>
                {/* <button style="background-color: #00bdee;"><b>Coronavirus Risk Assessment Form</b></button> */}
                <button><b>Coronavirus Risk Assessment Form</b></button>
                {/* <button style="background-color: #DF8B0C;"><b>Sakai LMS Login</b></button> */}
                <button><b>Sakai LMS Login</b></button>
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
