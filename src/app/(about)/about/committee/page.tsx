import type { Metadata } from "next"
import { PageHeading } from "@/components/sections/PageHeading"
import { NavPills } from "@/components/sections/NavPills"

export const metadata: Metadata = {
  title: "Committees at S. B. Patil College of Science and Commerce | Pimpri Chinchwad | Pune",
  description:
    "S. B. Patil College of Science and Commerce have formed committee for Vishakha Committee, Anti Ragging Committee, Discipline Committee, Examination Committee, Academic Excellence Committee and PTA committee.",
}

export default function CommitteePage() {
  const tabs = [
    {
      id: "vishakha",
      label: "Vishakha Committee",
      content: (
        <>
          <p className="text-justify">
            S. B. Patil College of Science & Commerce has set up Women&rsquo;s Grievances Cell named as Vishakha
            Committee for maintaining the healthy and safe environment for girls and women employees in the campus. In
            order to maintain safety and security to the girls and women, a cell has been constituted for redressal of
            grievances. Our women grievance cell stays alerted all the time to prevent any sexual abuse towards the
            students and female workers. If the female students face any harassment from the staff or workers, then they
            can complain at our women grievance cell. The members will look into the issues, gather the evidence, and
            take the necessary action against the guilty. We also focus on preventing this kind of harassment by using
            secret monitor services, which keep a keen eye on the entire campus. The functions of the cell are to purely
            safeguard the rights of female students, women faculty and also to provide a platform for listening to
            complaints.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border border-border p-2 text-left">Staff Name</th>
                  <th className="border border-border p-2 text-left">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">Mrs. Swati Gawasnane</td>
                  <td className="border border-border p-2">Incharge - Vishakha Committee</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Kanchan Patil</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Anjum Mulla</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Pradnya Kulkarni</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Shailaja Pande</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Sujata Seelam</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Rita Gadewar</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Raginee Sonawane</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Prachi Bhagat</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Mrs. Kanchan Landge</td>
                  <td className="border border-border p-2">Member</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="mb-2 mt-4 text-lg font-bold">Objectives of the Cell:</h4>
          <ul className="mb-4 list-disc pl-6">
            <li>To prevent sexual harassment and to promote the general well-being of female students/employees of the Institute.</li>
            <li>To provide the healthy and safe environment in the Institute for the female students/employees.</li>
            <li>To provide guidelines for the redressal of grievances related to sexual harassment of female students/employees of the institution.</li>
          </ul>

          <p className="text-justify">
            This cell is meant for maintaining the records of grievances, actions taken thereon and settlement of
            grievances. The cell is headed by the Principal, Lady faculty members. The grievance box is placed in the
            girl&rsquo;s waiting rooms where students have to drop their grievances if any. The box is opened once in a
            month and checked. Any grievance found in it is scrutinized and necessary actions are immediately taken by
            the Cell. In the case of emergency, the Principal calls a meeting and addresses the problems immediately.
            During the last two years, the cell is resolving the difficulties of the girl students&rsquo; grievances. It
            was settled amicably.
          </p>
        </>
      ),
    },
    {
      id: "anti-ragging",
      label: "Anti Ragging Committee",
      content: (
        <>
          <p>The College stands with Anti Ragging Committee with following members.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border border-border p-2 text-left">NAME OF MEMBERS</th>
                  <th className="border border-border p-2 text-left">POSITION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mr. Sandip N Patil", "Chairman"],
                  ["Mr. Pradeep Kasar", "Member"],
                  ["Mrs. Rita Gadewar", "Member"],
                  ["Mrs. Pradnya Kulkarni", "Member"],
                  ["Mrs. Bhaghshree Dhopate", "Member"],
                  ["Mrs. Kanchan Patil", "Member"],
                  ["Mrs. Anita Madhekar", "Member"],
                ].map(([name, position], i) => (
                  <tr key={i}>
                    <td className="border border-border p-2">{name}</td>
                    <td className="border border-border p-2">{position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-justify">
            If a student is found to be indulging/involved in any ragging activity then College can take any action
            which includes rustication from college, debar from representation in events, expulsion from the hostel,
            debar from appearing in the examination(s) and any other punishment that the inquiry committee may
            recommend. The Anti-Ragging Committee depending on the nature and gravity of the guilt may award, following
            punishments namely:
          </p>

          <ul className="list-disc pl-6">
            <li>Suspension from attending classes and academic privileges.</li>
            <li>Withholding/withdrawing scholarship/fellowship and other benefits.</li>
            <li>Debarring from appearing in any test/examination or another evaluation process.</li>
            <li>Debarring from representing the institution in any tournament, youth festival, etc.</li>
            <li>Withholding results.</li>
            <li>Cancellation of admission.</li>
            <li>Rustication from the institution for period ranging from one or more years.</li>
          </ul>
        </>
      ),
    },
    {
      id: "discipline",
      label: "Discipline Committee",
      content: (
        <>
          <p className="text-justify">
            Students who are engaged in academic misconduct or violate the rules and regulations of the college in other
            ways may be brought before the Colleges disciplinary committee. The discipline committee is comprised of
            several faculty members and two student representatives. If students are found guilty of misconduct, the
            disciplinary committee has the right to impose sanctions ranging from probation to suspension or expulsion.
          </p>

          <h4 className="mb-2 text-lg font-bold">Committee members:</h4>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border border-border p-2 text-left">NAME OF MEMBERS</th>
                  <th className="border border-border p-2 text-left">POSITION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mr. Pradeep Kasar", "Chairman"],
                  ["Mrs. Sandhya Mhaske", "Member"],
                  ["Mrs. Sheetal Shende", "Member"],
                  ["Mrs. Anjum Mulla", "Member"],
                  ["Mrs. Prajakta Joshi", "Member"],
                  ["Mrs. Kalyani Bhondave", "Member"],
                  ["Mr. Amar Shelke", "Member"],
                  ["Mrs. Shailaja Pande", "Member"],
                ].map(([name, position], i) => (
                  <tr key={i}>
                    <td className="border border-border p-2">{name}</td>
                    <td className="border border-border p-2">{position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "examination",
      label: "Examination Committee",
      content: (
        <>
          <p className="text-justify">
            Examination committee is one of the important committees of our Institute. The main function of the
            committee is to carry out the exam, publish results, keep records of every issue related to the
            examination.
          </p>

          <h4 className="mb-2 text-lg font-bold">Committee members:</h4>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border border-border p-2 text-left">NAME OF MEMBERS</th>
                  <th className="border border-border p-2 text-left">POSITION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mrs. Harsha Banthia", "In-Charge"],
                  ["Mrs. Mayura Patel", "Member"],
                  ["Mrs. Raginee Sonawane", "Member"],
                  ["Mrs. Anita Madhekar", "Member"],
                  ["Mrs. Prachi Bhagat", "Member"],
                ].map(([name, position], i) => (
                  <tr key={i}>
                    <td className="border border-border p-2">{name}</td>
                    <td className="border border-border p-2">{position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "academic-excellence",
      label: "Academic Excellence Committee",
      content: (
        <>
          <p className="text-justify">
            In today&rsquo;s global knowledge economy a college is no more limited to creating, integrating and
            applying knowledge. Moreover, a college has a larger role and must respond to a changing society and adapt
            to the realities of today&rsquo;s world. Quality is a process and not a destination. SBPCSC is a well-known
            college which impacts quality education and is raising its standard by regular monitoring through structural
            feedback.
          </p>

          <h4 className="mb-2 text-lg font-bold">Committee members:</h4>

          <div className="overflow-x-auto">
            <table className="mb-4 w-full border-collapse border border-border">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border border-border p-2 text-left">Department</th>
                  <th className="border border-border p-2 text-left">Faculty Name</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Geography Department", "Mrs. Sangita Kudale"],
                  ["Hindi Department", "Mrs. Harsha Banthia"],
                  ["Marathi Department", "Mr. Pradeep Kasar"],
                  ["Physical Education Department", "Mr. Pradeep Kasar"],
                ].map(([dept, name], i) => (
                  <tr key={i}>
                    <td className="border border-border p-2">{dept}</td>
                    <td className="border border-border p-2">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border border-border p-2 text-left">Department</th>
                  <th className="border border-border p-2 text-left">Faculty Name</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Physics Department", "Mrs. Prajakta Joshi"],
                  ["Chemistry Department", "Mrs. Kanchan Patil"],
                  ["Biology Department", "Mrs. Anjumara Mulla"],
                  ["Mathematics Department", "Mrs. Pradnya Kulkarni"],
                  ["Computer Science & IT Department", "Mrs. Kalyani Bhondave"],
                  ["English Department", "Mr. Sharanappa Ausekar"],
                  ["OCM Department", "Mrs. Swati Gawasane"],
                  ["Economics Department", "Mrs. Sheetal Shende"],
                  ["Book Keeping & Accountancy Department", "Mrs. Sujata Seelam"],
                  ["Secretarial Practices Department", "Mrs. Sandhya Mhaske"],
                ].map(([dept, name], i) => (
                  <tr key={i}>
                    <td className="border border-border p-2">{dept}</td>
                    <td className="border border-border p-2">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "code-of-conduct",
      label: "Students Code of Conduct",
      content: (
        <ul className="list-disc pl-6">
          <li>Students are hereby informed that they should come to college 10 minutes before the commencement of their classes.</li>
          <li>Students should take their lunch / meals in college premises and not leave the campus before the schedule.</li>
          <li>Students should not go out of the classes frequently, citing the excuse of wash room &amp; drinking water.</li>
          <li>Students should not linger in corridor after finishing their classes and disturb other classes.</li>
          <li>It has been noted that students are coming to college without textbooks and notebook. Students should come with required study material.</li>
          <li>In no way damage to property would be tolerated in case any student is found guilty he would be subjected to punishment (financially as well academically).</li>
          <li>No students should leave the class in between to meet their parents or guardians only In between allotted time.</li>
          <li>In case of any academic query, it should be settled in office with Principal&rsquo;s permission.</li>
          <li>No crowing outside the gate and creating nuisance is allowed. After finishing of the classes, students should move to their respective buses or go to home quietly.</li>
          <li>No friend or relatives allowed without prior permission in college premise. In case of some official work, they should contact office first.</li>
          <li>Student should come in perfect uniform, well trimmed hair, and shoes. &lsquo;I&rsquo; card is compulsory.</li>
          <li>Students should not remain absent unless some emergency. If they want to take a leave, they should informed to class teacher by giving written application. In case of medical leave, student should come with medical certificate.</li>
          <li>80% attendance is compulsory considering all lectures. Student failing to fulfill this condition should not be allowed to appear for H.S.C. Exams, as per rule of H.S.C. board.</li>
          <li>Students should not come to the college with Mobile, if found severe action will be taken against the students.</li>
          <li>Healthy Academic atmosphere should be maintained for upbringing of overall development of students.</li>
        </ul>
      ),
    },
    {
      id: "pta",
      label: "PTA Committee",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-brand text-white">
                <th className="border border-border p-2 text-left">Sr.No</th>
                <th className="border border-border p-2 text-left">Name of the Parent</th>
                <th className="border border-border p-2 text-left">Name of the student</th>
                <th className="border border-border p-2 text-left">Class</th>
                <th className="border border-border p-2 text-left">Div</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Mr Sandip Bhalerao", "Avadh Bhalerao", "12th", "Sci A"],
                ["2", "Mrs Ashruba Chavan", "Sayali Chavan", "12th", "Sci A"],
                ["3", "Mr Raju Dongre", "Ritu Dongre", "12th", "Sci B"],
                ["4", "Mrs Rupali Marathe", "Harshwardhan Marathe", "12th", "Sci B"],
                ["5", "Mr Manisha Ranawade", "Omkar Ranawade", "12th", "Sci C"],
                ["6", "Mrs Tejaswini Ovhal", "Aditi Ovhal", "12th", "Sci C"],
                ["7", "Mr Jitendra Joshi", "Swarali Joshi", "12th", "Com A"],
                ["8", "Mrs Smita Mate", "Tanisha Mate", "12th", "Com A"],
                ["9", "Mrs Uma Adsule", "Atharva Adsule", "12th", "Com B"],
                ["10", "Mr Anjanayya Ramoshi", "Manisha Ramoshi", "12th", "Com B"],
                ["11", "Mr. Anil Gajanan Taras", "Sanika Taras", "11th", "Com B"],
                ["12", "Mrs. Nilam Rahul Naik", "Aditya Naik", "11th", "Com B"],
                ["13", "Mrs. Supriya Kulkarni", "Saanvi Kulkarni", "11th", "Com A"],
                ["14", "Mrs. Punam Sapkal", "Aryan Sapkal", "11th", "Com A"],
                ["15", "Mr. Swapnil Potdar", "Aryan Potdar", "11th", "Sci B"],
                ["16", "Mrs. Ashwini Pisal", "Suhani Pisal", "11th", "Sci B"],
                ["17", "Mrs Sujata Patil", "Dhanashree Patil", "11th", "Sci C"],
                ["18", "Mr. Navnath Kamble", "Tanvi Kamble", "11th", "Sci C"],
                ["19", "Mr. Sharad Kadam", "Ananya Kadam", "11th", "Sci A"],
                ["20", "Mrs. Madhura Vispute", "Divya Vispute", "11th", "Sci A"],
              ].map(([sr, parent, student, cls, div], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-muted/50"}>
                  <td className="border border-border p-2">{sr}</td>
                  <td className="border border-border p-2">{parent}</td>
                  <td className="border border-border p-2">{student}</td>
                  <td className="border border-border p-2">{cls}</td>
                  <td className="border border-border p-2">{div}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ]

  return (
    <>
      <PageHeading title="Committee" />
      <NavPills tabs={tabs} />
    </>
  )
}
