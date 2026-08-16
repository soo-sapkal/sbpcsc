import type { Metadata } from "next"
import Image from "next/image"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "About PCET",
  description:
    "Pimpri Chinchwad Education Trust (PCET) was established in 1990 by the visionary Late Shri. Shankarrao B. Patil.",
}

export default function PcetPage() {
  return (
    <>
      <PageHeading title="About PCET" />

      <h2 className="mb-4 text-2xl font-bold text-accent">Founders :</h2>

      <div className="flex flex-wrap">
        <div className="w-1/2 px-2 sm:w-1/3 md:w-1/3">
          <center><Image src="/images/founders/shankarraopatil.png" alt="PCET-Founder-President" width={140} height={150} className="img-responsive mx-auto" unoptimized /></center>
          <p style={{ textAlign: "center" as const, marginBottom: "20px" }}><strong>Late. Shri. Shankarrao B. Patil</strong><br /> Founder Chairman, PCET</p>
        </div>
        <div className="w-1/2 px-2 sm:w-1/3 md:w-1/3">
          <center><Image src="/images/founders/lilataipatil.png" alt="PCET-Ex-President" width={140} height={150} className="img-responsive mx-auto" unoptimized /></center>
          <p style={{ textAlign: "center" as const, marginBottom: "20px" }}><strong>Late. Smt. Lilatai Shankarrao Patil</strong><br /> Ex President, PCET</p>
        </div>
        <div className="w-1/2 px-2 sm:w-1/3 md:w-1/3">
          <center><Image src="/images/founders/mr-dnyaneshwar-landge.png" alt="Chairman of PCET Trust Mr.Dnyaneshwar P. Landge" width={140} height={150} className="img-responsive mx-auto" unoptimized /></center>
          <p style={{ textAlign: "center" as const, marginBottom: "20px" }}><strong>Shri. Dnyaneshwar P. Landge</strong><br /> First Mayor PCMC, Ex MLA,  Chairman, PCET</p>
        </div>
        <div className="w-1/2 px-2 sm:w-1/3 md:w-1/3">
          <center><Image src="/images/founders/mr-vitthal-kalbhor.png" alt="Secretary of PCET Trust Mr. Vitthal S. Kalbhor" width={140} height={150} className="img-responsive mx-auto" unoptimized /></center>
          <p style={{ textAlign: "center" as const, marginBottom: "20px" }}><strong>Shri. Vitthal S. Kalbhor</strong><br /> Secretary, PCET</p>
        </div>
        <div className="w-1/2 px-2 sm:w-1/3 md:w-1/3">
          <center><Image src="/images/founders/mr-shantaram-garade.png" alt="Treasurer of PCET Trust Mr. Shantaram D. Garade" width={140} height={150} className="img-responsive mx-auto" unoptimized /></center>
          <p style={{ textAlign: "center" as const, marginBottom: "20px" }}><strong>Shri. Shantaram D. Garade</strong><br /> Treasurer, PCET</p>
        </div>
        <div className="w-1/2 px-2 sm:w-1/3 md:w-1/3">
          <center><Image src="/images/founders/mr-bhaijan-kazi.png" alt="PCET-Ex-Trustee" width={140} height={150} className="img-responsive mx-auto" unoptimized /></center>
          <p style={{ textAlign: "center" as const, marginBottom: "20px" }}><strong>Late. Shri. Bhaijan Kazi</strong><br /> Ex Trustee, PCET</p>
        </div>
        <div className="w-full px-2">
          <p className="text-justify">Pimpri Chinchwad Education Trust (PCET) is proud to be one of those who have contributed in making Pune a hub of education. PCET was established in 1990 by visionary Late. Shri. Shankarrao B. Patil, Late. Smt. Lilatai Shankarrao Patil,  Shri. Dnyaneshwar P. Landge, Shri. Vitthal S. Kalbhor, Shri. Shantaram D. Garade, Late. Shri. Bhaijan Kazi with an idea of providing quality education from K.G. to P.G.</p>
          <p className="text-justify">{'Pimpri Chinchwad Education Trust'} is running 9 educational institutes in two campuses at Nigdi and Ravet such as Pimpri Chinchwad Polytechnic, Pimpri Chinchwad College of engineering, Pimpri Chinchwad college of Engineering and research, Pune business School, S.B. Patil Institute of Management, S.B. Patil College of Architecture and Design, S.B. Patil College of Science and Commerce, S.B. Patil Public school. And 2 engineering colleges at Talegaon are administered by PCET which is NMIET and NCER.</p>
        </div>
      </div>

      <br />

      <h2 className="mb-4 text-2xl font-bold text-accent">Honourable Trustee Members :</h2>

      <table className="mb-6 w-full border-collapse border border-border">
        <tbody>
          <tr>
            <td className="border border-border p-2 text-center align-middle">
              <Image src="/images/dnyaneshwar-landge.jpg" alt="Chairman of PCET Trust Mr.Dnyaneshwar P. Landge" width={140} height={150} className="mx-auto" unoptimized />
              <p className="pt-1">Shri. Dnyaneshwar P. Landge<br /><strong>Chairman, PCET</strong></p>
            </td>
            <td className="border border-border p-2 text-center align-middle">
              <Image src="/images/padma-bhosale.jpg" alt="Vice Chairman of PCET Trust Ms. Padmatai M. Bhosale" width={140} height={150} className="mx-auto" unoptimized />
              <p className="pt-1">Smt. Padmatai M. Bhosale<br /><strong>Vice Chairperson, PCET</strong></p>
            </td>
          </tr>
          <tr>
            <td className="border border-border p-2 text-center align-middle">
              <Image src="/images/vitthal-kalbhor.jpg" alt="Secretary of PCET Trust Mr. Vitthal S. Kalbhor" width={140} height={150} className="mx-auto" unoptimized />
              <p className="pt-1">Shri. Vitthal S. Kalbhor<br /><strong>Secretary, PCET</strong></p>
            </td>
            <td className="border border-border p-2 text-center align-middle">
              <Image src="/images/shantaram-garade.jpg" alt="Treasurer of PCET Trust Mr. Shantaram D. Garade" width={140} height={150} className="mx-auto" unoptimized />
              <p className="pt-1">Shri. Shantaram D. Garade<br /><strong>Treasurer, PCET</strong></p>
            </td>
          </tr>
          <tr>
            <td className="border border-border p-2 text-center align-middle">
              <Image src="/images/harshwardhan-patil.jpg" alt="Trustee of PCET Trust Mr. Harshwardhan S. Patil" width={140} height={150} className="mx-auto" unoptimized />
              <p className="pt-1">Shri. Harshwardhan S. Patil<br /><strong>Trustee, PCET</strong></p>
            </td>
            <td className="border border-border p-2 text-center align-middle">
              <Image src="/images/dr-girish-desai.webp" alt="Executive Director, PCET" width={140} height={150} className="mx-auto" unoptimized />
              <p className="pt-1">Dr. Girish Desai<br /><strong>Executive Director, PCET</strong></p>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2 className="mb-4 text-2xl font-bold text-accent">OTHER INSTITUTES MANAGED BY PIMPRI CHINCHWAD EDUCATION TRUST :</h2>

      <div className="mb-6 text-justify">
        <p>Institutions falling under the canopy of the PCET are stated as under :</p>

        <ul className="list-none pl-0">
          {/* PCP */}
          <li>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">Pimpri Chinchwad Polytechnic (PCP)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">&nbsp;</div>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/pcp.png" alt="Pimpri Chinchwad Polytechnic (PCP)" width={120} height={60} className="block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>The PCP was established in 1990. Located near the Akurdi railway station, it is the best diploma engineering colleges in the city. Spread over large expanse of land under the Pimpri Chinchwad New Town Development Authority, popularly known as Pradhikaran, it hosts its departments in spacious buildings, with an expansive sports ground, canteen and a mess, all to aid the hundreds of students who are under the tutelage of the renowned and devoted faculty.</p>
            <p>Situated about 20kms from the Pune railway station, on the Pune-Mumbai Railway line, the institute is in walkable distance from Akurdi railway station and is well connected by bus routes with many parts of Pune City.</p>
            <p>Courses offered include: Automobile Engineering, Civil Engineering, Computer Engineering, Electronics and Telecommunication, Mechanical Engineering, Information Technology. For further information, course details, and enrollment specifics please visit the website at : <a href="https://www.pcpolytechnic.com/" target="_blank" className="text-brand hover:underline">https://www.pcpolytechnic.com/</a></p>
          </li>

          {/* PCCoE */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">Pimpri Chinchwad College of Engineering (PCCoE)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/pccoe.jpg" alt="Pimpri Chinchwad College of Engineering (PCCOE)" width={120} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>The Pimpri Chinchwad College of Engineering is an autonomous institute approved by the AICTE, New Delhi; and the SPPU, Pune. Established in 1999, the Pimpri Chinchwad College of Engineering (PCCoE) is one of the premier engineering colleges in Pune. Nurtured and managed by the Pimpri Chinchwad Education Trust (PCET), the PCCoE functions proactively to provide the best professional environment to engineering and management students in terms of academics, industry oriented trainings, sports, co -and extracurricular activities, cultural activities, competitions, etc to create true aesthetically sensitive, socially committed and technologically competent engineers and management professionals.</p>
            <p>Courses offered include undergrad courses ranging from Mechanical Engineering, Computer Engineering, Information Technology, Civil Engineering to E&amp;TC Engineering. Postgrad courses offered include MEs in Mechanical: Heat Design, Design, Computers and Embedded Systems, VLSI, as well as MBA and MCA.</p>
            <p>To know more about the institute, and for further details on courses offered, contact information, please visit the website at : <a href="http://www.pccoepune.com/" target="_blank" className="text-brand hover:underline">http://www.pccoepune.com/</a></p>
          </li>

          {/* PCCoER */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">Pimpri Chinchwad College of Engineering and Research (PCCoER)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/pccoer.png" alt="Pimpri Chinchwad College of Engineering and Research (PCCoER)" width={120} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>Founded recently in 2014 as an extension of the PCCoE, the Pimpri Chinchwad College of Engineering and Research (PCCoER) offers courses in Computer, Civil, Mechanical, and Electronics and Telecommunication Engineering</p>
            <p>Feel free to visit the website at : <a href="https://www.pccoer.com/" target="_blank" className="text-brand hover:underline">https://www.pccoer.com/</a> to know more about the faculty, student-life, course details and admissions.</p>
          </li>

          {/* SBPPS */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">S.B. Patil Public School (SBPPS)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/sbpps.png" alt="S.B. Patil Public School(SBPPS)" width={120} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>Founded in 2012, S.B. Patil Public School (SBPPS) at Ravet, Pune is one of the leading and premier educational institutions whose sole purpose is not just to lead students towards an excellence in education but to reach every tangent and explore every facet of each individual student.</p>
            <p>Every instructor in this institute exists to teach, guide, mentor, develop and more importantly imbibe students with moral and character, instil within them values and respect, nurture every talent, strengthen every potential, and fortify them to confront and overcome every challenge they would encounter when they graduate into the world.</p>
            <p>For additional details on faculty, staff,  and enrolment, please visit the school website at : <a href="https://sbpatilschool.com/" target="_blank" className="text-brand hover:underline">https://sbpatilschool.com</a></p>
          </li>

          {/* SBPIM */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">S. B. Patil Institute Of Management (SBPIM)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/sbpim1.png" alt="S. B. Patil Institute Of Management (SBPIM)" width={120} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>Established in 2009 by the PCET, the S.B. Patil Institute of Management (SBPIM)&rsquo;s programmes are aimed for developing business mavens who, on graduation, will be covetously employable during this time when jobs are in scarcity.</p>
            <p>The university is blessed with having as its faculty - the cream of professional and adept instructors, who use an industry-focussed teaching-learning approach, and who are capacitated to use the best infrastructural facilities the campus is furnished with, all so as to create and develop entrepreneurs and ready to use employees.</p>
            <p>SBPIM has been functioning proactively to provide the best professional environment to MBA students in terms of academics, industry and business-oriented tailor-made trainings, sports, co-and extra-curricular activities, cultural events and various competitions, etc. to create holistically developed business professionals.</p>
            <p>The institute&rsquo;s website : <a href="https://www.sbpatilmba.com" target="_blank" className="text-brand hover:underline">https://www.sbpatilmba.com</a> offers insight into college life, campus details, staff profiles, infrastructure and amenities, admission specifics and contact information.</p>
          </li>

          {/* SBPCoAD */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">S.B. Patil College of Architecture and Design (SBPCoAD)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/sbpcoad.jpg" alt="S.B. Patil College of Architecture and Design (SBPCoAD)" width={120} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>The S.B. Patil College of Architecture and Design (SBPCoAD) was established by the Pimpri Chinchwad Education Trust (PCET) in 2014 with the vision to empower the students with knowledge, values, skills, creative lateral thinking, and also enable them to become entrepreneurial architects while safeguarding the global, societal and environmental issues with their innovative designs.</p>
            <p>Located at the Nigdi Campus at Akurdi, Pune, the college is running a full-time five-year degree course in architecture, augmented by a team of experienced, proficient and dedicated faculty of fulltime instructors, and part-time practicing architects and engineers. It backed by the approval of The Council of Architecture, Directorate of Technical Education, Government of Maharashtra, and is affiliated to Savtribai Phule Pune University.</p>
            <p>Infrastructure includes studios, smart-classrooms, lecture-halls, workshops, computer labs, and a sessional submission room. The college insists on the provision of academic freedom to the faculty so as to facilitate and encourage innovation and experimentation within the curricular framework stipulated by the University.</p>
            <p>With the agenda to develop technically sound professionals who will function as Entrepreneurial Individuals, students are imparted with knowledge-based skills, awareness of the latest building technology, and the capacity to create innovative designs using state-the-art technology and software.</p>
            <p>Instructors also stress on building student confidence while sensitising them to prevailing issues via the means of appropriate guidance, seminars and lectures on topics related to their course, as well as out-of-the-box environmental concerns like water crisis, global warming and disaster mitigations. Students are required to regularly submit class/ studio work, and undergo periodic and transparent assessments.</p>
            <p>To get to know more about institute, admissions, academics and career opportunities, the website can be reached at : <a href="http://www.sbpatilarchitecture.com" target="_blank" className="text-brand hover:underline">http://www.sbpatilarchitecture.com</a></p>
          </li>

          {/* PBS */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">Pune Business School (PBS)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/PBS-logo.png" alt="Pune Business School (PBS)" width={200} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p>The Pune Business School (PBS) is a comprehensive academic institution with a distinctive learning style and a global vision. In order to improve the student learning experience, a developed, innovative and focused plan has been prepared to enhance and enrich the student services and facilities.</p>
            <p>As a part of this strategic focus, PBS aims to ensure that all new and existing engagements become a quality-centered learning experience. PBS aims to meet student residential and social needs, provide effective student support services and promote the students&rsquo; personal development, and ultimately enhance their employability.</p>
            <p>For more information visit : <a href="https://www.punebusinessschool.com/" target="_blank" className="text-brand hover:underline">https://www.punebusinessschool.com/</a></p>
          </li>

          {/* PCACS */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">Pimpri Chinchwad College Of Arts, Commerce and Science (PCACS)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/pcacs-logo.webp" alt="PCACS" width={120} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p style={{ margin: "0px 0px 4px", fontSize: "15px", lineHeight: "25px" }}>The Pimpri Chinchwad College of Arts, Commerce and Science is committed to excellence in academic, co and extracurricular activities and performance. Offering an array of bachelor degree programmes such as BA, BCom etc., affiliated to Savitribai Phule Pune University and recognised by the Govt. of Maharashtra, PCACS believes in student empowerment by imparting quality education, pursuing knowledge and enriching academic experience.</p>
            <p style={{ margin: "0px 0px 4px", fontSize: "15px", lineHeight: "25px" }}>The college aims to offer the best of facilities and an environment that is suitable for students to nurture themselves, progress in life, and make prudent career choices.</p>
            <p style={{ margin: "0px 0px 4px", fontSize: "15px", lineHeight: "25px" }}>For more information visit : <a href="https://www.pcacspune.com/" target="_blank" className="text-brand hover:underline">https://www.pcacspune.com/</a></p>
          </li>

          {/* PCU */}
          <li>
            <div className="clear-both">&nbsp;</div>
            <p className="institutes-title m-0 mb-1 bg-brand px-2.5 py-0.5 text-[1.063rem] font-bold text-white">Pimpri Chinchwad University (PCU)</p>
          </li>
          <li>
            <div className="left-img-new float-left mr-2.5 mt-1.5 h-auto w-auto">
              <Image src="/images/logo/PCU-logo.png" alt="Pimpri Chinchwad University (PCU)" width={180} height={60} className="img-responsive block max-w-full border-0 pr-2.5 align-middle" unoptimized />
            </div>
            <p style={{ margin: "0px 0px 4px", fontSize: "15px", lineHeight: "25px" }}>The Pimpri Chinchwad University (PCU) is the PCET&rsquo;s latest crowning glory. It is a State private university situated at Sate, Mawal, Pune. The university will cater to academic facilities and other amenities for both students and faculty so that students are provided a technologically advanced, research-oriented, practically-driven education foundation.</p>
            <p style={{ margin: "0px 0px 4px", fontSize: "15px", lineHeight: "25px" }}>Situated amidst industrial areas and companies that will aid in practical experiences, the university provides an array of multi-disciplinary courses to help students from varied academic backgrounds to achieve their dreams.</p>
            <p style={{ margin: "0px 0px 4px", fontSize: "15px", lineHeight: "25px" }}>For more information visit : <a href="https://www.pcu.edu.in" target="_blank" className="text-brand hover:underline">https://www.pcu.edu.in</a></p>
          </li>
        </ul>
      </div>
    </>
  )
}
