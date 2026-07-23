import type { Metadata } from "next"
import Image from "next/image"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "About PCET",
  description:
    "Pimpri Chinchwad Education Trust (PCET) was established in 1990 by the visionary Late Shri. Shankarrao B. Patil.",
}

const founders = [
  { image: "/images/founders/shankarraopatil.png", name: "Late. Shri. Shankarrao B. Patil", role: "Founder Chairman, PCET" },
  { image: "/images/founders/lilataipatil.png", name: "Late. Smt. Lilatai Shankarrao Patil", role: "Ex President, PCET" },
  { image: "/images/founders/mr-dnyaneshwar-landge.png", name: "Shri. Dnyaneshwar P. Landge", role: "First Mayor PCMC, Ex MLA, Chairman, PCET" },
  { image: "/images/founders/mr-vitthal-kalbhor.png", name: "Shri. Vitthal S. Kalbhor", role: "Secretary, PCET" },
  { image: "/images/founders/mr-shantaram-garade.png", name: "Shri. Shantaram D. Garade", role: "Treasurer, PCET" },
  { image: "/images/founders/mr-bhaijan-kazi.png", name: "Late. Shri. Bhaijan Kazi", role: "Ex Trustee, PCET" },
]

const trustees = [
  { image: "/images/dnyaneshwar-landge.jpg", name: "Shri. Dnyaneshwar P. Landge", role: "Chairman, PCET" },
  { image: "/images/padma-bhosale.jpg", name: "Smt. Padmatai M. Bhosale", role: "Vice Chairperson, PCET" },
  { image: "/images/vitthal-kalbhor.jpg", name: "Shri. Vitthal S. Kalbhor", role: "Secretary, PCET" },
  { image: "/images/shantaram-garade.jpg", name: "Shri. Shantaram D. Garade", role: "Treasurer, PCET" },
  { image: "/images/harshwardhan-patil.jpg", name: "Shri. Harshwardhan S. Patil", role: "Trustee, PCET" },
  { image: "/images/dr-girish-desai.webp", name: "Dr. Girish Desai", role: "Executive Director, PCET" },
]

const institutes = [
  {
    title: "Pimpri Chinchwad Polytechnic (PCP)",
    logo: "/images/logo/pcp.png",
    desc: `The PCP was established in 1990. Located near the Akurdi railway station, it is the best diploma engineering colleges in the city. Spread over large expanse of land under the Pimpri Chinchwad New Town Development Authority, popularly known as Pradhikaran, it hosts its departments in spacious buildings, with an expansive sports ground, canteen and a mess, all to aid the hundreds of students who are under the tutelage of the renowned and devoted faculty. Situated about 20kms from the Pune railway station, on the Pune-Mumbai Railway line, the institute is in walkable distance from Akurdi railway station and is well connected by bus routes with many parts of Pune City. Courses offered include: Automobile Engineering, Civil Engineering, Computer Engineering, Electronics and Telecommunication, Mechanical Engineering, Information Technology.`,
    url: "https://www.pcpolytechnic.com/",
  },
  {
    title: "Pimpri Chinchwad College of Engineering (PCCoE)",
    logo: "/images/logo/pccoe.jpg",
    desc: `The Pimpri Chinchwad College of Engineering is an autonomous institute approved by the AICTE, New Delhi; and the SPPU, Pune. Established in 1999, the Pimpri Chinchwad College of Engineering (PCCoE) is one of the premier engineering colleges in Pune. Nurtured and managed by the Pimpri Chinchwad Education Trust (PCET), the PCCoE functions proactively to provide the best professional environment to engineering and management students in terms of academics, industry oriented trainings, sports, co -and extracurricular activities, cultural activities, competitions, etc to create true aesthetically sensitive, socially committed and technologically competent engineers and management professionals. Courses offered include undergrad courses ranging from Mechanical Engineering, Computer Engineering, Information Technology, Civil Engineering to E&TC Engineering. Postgrad courses offered include MEs in Mechanical: Heat Design, Design, Computers and Embedded Systems, VLSI, as well as MBA and MCA.`,
    url: "http://www.pccoepune.com/",
  },
  {
    title: "Pimpri Chinchwad College of Engineering and Research (PCCoER)",
    logo: "/images/logo/pccoer.png",
    desc: `Founded recently in 2014 as an extension of the PCCoE, the Pimpri Chinchwad College of Engineering and Research (PCCoER) offers courses in Computer, Civil, Mechanical, and Electronics and Telecommunication Engineering.`,
    url: "https://www.pccoer.com/",
  },
  {
    title: "S.B. Patil Public School (SBPPS)",
    logo: "/images/logo/sbpps.png",
    desc: `Founded in 2012, S.B. Patil Public School (SBPPS) at Ravet, Pune is one of the leading and premier educational institutions whose sole purpose is not just to lead students towards an excellence in education but to reach every tangent and explore every facet of each individual student. Every instructor in this institute exists to teach, guide, mentor, develop and more importantly imbibe students with moral and character, instil within them values and respect, nurture every talent, strengthen every potential, and fortify them to confront and overcome every challenge they would encounter when they graduate into the world.`,
    url: "https://sbpatilschool.com/",
  },
  {
    title: "S. B. Patil Institute Of Management (SBPIM)",
    logo: "/images/logo/sbpim1.png",
    desc: `Established in 2009 by the PCET, the S.B. Patil Institute of Management (SBPIM)'s programmes are aimed for developing business mavens who, on graduation, will be covetously employable during this time when jobs are in scarcity. The university is blessed with having as its faculty - the cream of professional and adept instructors, who use an industry-focussed teaching-learning approach, and who are capacitated to use the best infrastructural facilities the campus is furnished with, all so as to create and develop entrepreneurs and ready to use employees. SBPIM has been functioning proactively to provide the best professional environment to MBA students in terms of academics, industry and business-oriented tailor-made trainings, sports, co-and extra-curricular activities, cultural events and various competitions, etc. to create holistically developed business professionals.`,
    url: "https://www.sbpatilmba.com",
  },
  {
    title: "S.B. Patil College of Architecture and Design (SBPCoAD)",
    logo: "/images/logo/sbpcoad.jpg",
    desc: `The S.B. Patil College of Architecture and Design (SBPCoAD) was established by the Pimpri Chinchwad Education Trust (PCET) in 2014 with the vision to empower the students with knowledge, values, skills, creative lateral thinking, and also enable them to become entrepreneurial architects while safeguarding the global, societal and environmental issues with their innovative designs. Located at the Nigdi Campus at Akurdi, Pune, the college is running a full-time five-year degree course in architecture, augmented by a team of experienced, proficient and dedicated faculty of fulltime instructors, and part-time practicing architects and engineers. It backed by the approval of The Council of Architecture, Directorate of Technical Education, Government of Maharashtra, and is affiliated to Savtribai Phule Pune University.`,
    url: "http://www.sbpatilarchitecture.com",
  },
  {
    title: "Pune Business School (PBS)",
    logo: "/images/logo/PBS-logo.png",
    desc: `The Pune Business School (PBS) is a comprehensive academic institution with a distinctive learning style and a global vision. In order to improve the student learning experience, a developed, innovative and focused plan has been prepared to enhance and enrich the student services and facilities. As a part of this strategic focus, PBS aims to ensure that all new and existing engagements become a quality-centered learning experience. PBS aims to meet student residential and social needs, provide effective student support services and promote the students' personal development, and ultimately enhance their employability.`,
    url: "https://www.punebusinessschool.com/",
  },
  {
    title: "Pimpri Chinchwad College Of Arts, Commerce and Science (PCACS)",
    logo: "/images/logo/pcacs-logo.webp",
    desc: `The Pimpri Chinchwad College of Arts, Commerce and Science is committed to excellence in academic, co and extracurricular activities and performance. Offering an array of bachelor degree programmes such as BA, BCom etc., affiliated to Savitribai Phule Pune University and recognised by the Govt. of Maharashtra, PCACS believes in student empowerment by imparting quality education, pursuing knowledge and enriching academic experience. The college aims to offer the best of facilities and an environment that is suitable for students to nurture themselves, progress in life, and make prudent career choices.`,
    url: "https://www.pcacspune.com/",
  },
  {
    title: "Pimpri Chinchwad University (PCU)",
    logo: "/images/logo/PCU-logo.png",
    desc: `The Pimpri Chinchwad University (PCU) is the PCET's latest crowning glory. It is a State private university situated at Sate, Mawal, Pune. The university will cater to academic facilities and other amenities for both students and faculty so that students are provided a technologically advanced, research-oriented, practically-driven education foundation. Situated amidst industrial areas and companies that will aid in practical experiences, the university provides an array of multi-disciplinary courses to help students from varied academic backgrounds to achieve their dreams.`,
    url: "https://www.pcu.edu.in",
  },
]

export default function PcetPage() {
  return (
    <>
      <PageHeading title="About PCET" />

      <h2 className="mb-4 text-2xl font-bold text-[#cf2b1f]">Founders</h2>
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {founders.map((f, i) => (
          <div key={i} className="text-center">
            <Image src={f.image} alt={f.name} width={140} height={150} className="mx-auto mb-2" unoptimized />
            <p className="text-sm font-semibold">{f.name}</p>
            <p className="text-xs text-gray-600">{f.role}</p>
          </div>
        ))}
      </div>

      <p className="mb-4 text-justify">
        Pimpri Chinchwad Education Trust (PCET) is proud to be one of those who have contributed in making Pune a hub
        of education. PCET was established in 1990 by visionary Late. Shri. Shankarrao B. Patil, Late. Smt. Lilatai
        Shankarrao Patil, Shri. Dnyaneshwar P. Landge, Shri. Vitthal S. Kalbhor, Shri. Shantaram D. Garade, Late.
        Shri. Bhaijan Kazi with an idea of providing quality education from K.G. to P.G.
      </p>
      <p className="mb-8 text-justify">
        &apos;Pimpri Chinchwad Education Trust&apos; is running 9 educational institutes in two campuses at Nigdi and
        Ravet such as Pimpri Chinchwad Polytechnic, Pimpri Chinchwad College of engineering, Pimpri Chinchwad college
        of Engineering and research, Pune business School, S.B. Patil Institute of Management, S.B. Patil College of
        Architecture and Design, S.B. Patil College of Science and Commerce, S.B. Patil Public school. And 2 engineering
        colleges at Talegaon are administered by PCET which is NMIET and NCER.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-[#cf2b1f]">Honourable Trustee Members</h2>
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {trustees.map((t, i) => (
          <div key={i} className="text-center">
            <Image src={t.image} alt={t.name} width={140} height={150} className="mx-auto mb-2" unoptimized />
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-gray-600">{t.role}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-[#cf2b1f]">
        Other Institutes Managed by Pimpri Chinchwad Education Trust
      </h2>
      <p className="mb-6 text-justify">Institutions falling under the canopy of the PCET are stated as under:</p>

      <div className="space-y-8">
        {institutes.map((inst, i) => (
          <div key={i}>
            <h3 className="mb-2 bg-[#146ab5] px-3 py-1.5 text-lg font-bold text-white">{inst.title}</h3>
            <div className="mb-2 flex items-start gap-4">
              <Image src={inst.logo} alt={inst.title} width={120} height={60} className="shrink-0" unoptimized />
            </div>
            <p className="mb-2 text-justify">{inst.desc}</p>
            <p className="text-justify">
              For more information visit:{" "}
              <a href={inst.url} target="_blank" rel="noopener noreferrer" className="text-[#337ab7] hover:underline">
                {inst.url}
              </a>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
