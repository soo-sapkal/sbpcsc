export interface FacultyMember {
  name: string
  qualification?: string
  experience: string
  email?: string
  image: string
  pdf?: string
  youtube?: string
  blog?: string
}

export interface PdfLink {
  label: string
  href: string
}

export interface SubjectConfig {
  name: string
  slug: string
  stream: "science" | "commerce"
  description: string
  faculty: FacultyMember[]
  labAssistants?: FacultyMember[]
  hasLaboratories?: boolean
  hasCompetition?: boolean
  syllabusPdfs?: PdfLink[]
  questionPapers?: PdfLink[]
  downloads?: PdfLink[]
  aboutPdfs?: PdfLink[]
  aboutImages?: string[]
}

export const scienceSubjects: SubjectConfig[] = [
  {
    name: "Physics",
    slug: "physics",
    stream: "science",
    description:
      "<strong>Physics</strong> is 'knowledge of nature', the natural science that studies matter and its motion and behavior through space and time and that studies the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, and its main goal is to understand how the universe behaves.",
    faculty: [
      { name: "Mrs. Prajakta Joshi", experience: "11 years", email: "prajakta.joshi83@gmail.com", image: "prajakta-joshi.jpg", pdf: "pdf/Prajakta-Joshi.pdf", youtube: "https://youtube.com/channel/UCtiGF-5Ei5x86m9jXktLyrA", blog: "https://prajaktajoshi83.wixsite.com/website/post/30-june-international-asteroid-day" },
      { name: "Mrs. Anjali Rane", qualification: "M.Sc B.Ed", experience: "6 years", image: "anjali-rane.jpg" },
      { name: "Rita Rahul Gadewar", qualification: "M.E. Electronics and telecommunication", experience: "5 years", image: "rita-rahul-gadewar.jpg" },
    ],
    labAssistants: [
      { name: "Mr. Harshal Machindra Gavhane", qualification: "BCA", experience: "6 Months", email: "harshalgavhane18@gmail.com", image: "mr-harshal-machindra-gavhane.jpg" },
    ],
    hasLaboratories: true,
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/science/physics/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "Physics Question Paper 2024", href: "/pdf/science/physics/physics-science-question-papr-2024.pdf" },
      { label: "Paper Pattern Physics", href: "/pdf/science/physics/paper-pattren-physics.pdf" },
      { label: "March 2022 QP", href: "/pdf/science/physics/March-2022-QP.pdf" },
      { label: "HSC 2015 March October", href: "/pdf/science/physics/hsc-2015-october-physics.pdf" },
      { label: "HSC 2014 March October", href: "/pdf/science/physics/hsc-2014-october-physics.pdf" },
      { label: "HSC 2014 March Physics", href: "/pdf/science/physics/hsc-2014-march-physics.pdf" },
      { label: "HSC 2013 October Physics", href: "/pdf/science/physics/hsc-2013-october-physics.pdf" },
      { label: "HSC 2013 March Physics", href: "/pdf/science/physics/hsc-2013-march-physics.pdf" },
      { label: "HSC 2020 March Physics", href: "/pdf/science/physics/physics-march-2020-std-12th-science-hsc-maharashtra-board-question-paper.pdf" },
      { label: "HSC 2019 March Physics", href: "/pdf/science/physics/Physics-March-2019-Std-12th-Science-HSC-Maharashtra-Board-Question-Paper.pdf" },
      { label: "12th Class Paper Pattern", href: "/pdf/science/physics/12th-Class-Paper-Pattern-01.pdf" },
    ],
    downloads: [
      { label: "Journey of Physics", href: "/pdf/science/physics/imp-of-physics.pdf" },
      { label: "Rotational Dynamics PPT 1", href: "/pdf/science/physics/Rotational-Dynamics-ppt1.pdf" },
      { label: "Rotational Dynamics PPT 2", href: "/pdf/science/physics/Rotational-Dynamics-ppt2.pdf" },
      { label: "Rotational Dynamics PPT 3", href: "/pdf/science/physics/Rotational-Dynamics-ppt3.pdf" },
      { label: "Rotational Dynamics Assignment", href: "/pdf/science/physics/rotational-dynamics-assignment.pdf" },
      { label: "Rotational Dynamics Numericals", href: "/pdf/science/physics/Rotational-Dynamics-Numericals.pdf" },
      { label: "Mechanical Properties of Fluids Part 1", href: "/pdf/science/physics/Mechanical-Properties-of-Fluids-Part-1.pdf" },
      { label: "Mechanical Properties of Fluids Part 2", href: "/pdf/science/physics/Mechanical-Properties-of-Fluids-Part-2.pdf" },
      { label: "Mechanical Properties of Fluids Part 3", href: "/pdf/science/physics/Mechanical-Properties-of-Fluids-Part-3.pdf" },
      { label: "Mechanical Properties of Fluids Part 4", href: "/pdf/science/physics/Mechanical-Properties-of-Fluids-Part-4.pdf" },
      { label: "Mechanical Properties of Fluids Part 5", href: "/pdf/science/physics/Mechanical-Properties-of-Fluids-Part-5.pdf" },
      { label: "Mechanical Properties of Fluids Part 7", href: "/pdf/science/physics/Mechanical-Properties-of-Fluids-Part-7.pdf" },
      { label: "Puzzles", href: "/pdf/science/physics/PUZZLES.pdf" },
      { label: "Question Bank Class 12 A.Y. 2021-22", href: "/pdf/science/physics/physics-question-bank-class-12-2021-22.pdf" },
      { label: "Raj Vishwakarma (PPT Winner)", href: "/pdf/science/physics/Raj-Vishwakarma-1st-Winner.pdf" },
      { label: "Siddhi Marathe (PPT Winner)", href: "/pdf/science/physics/Siddhi-Marathe-2nd-Winner.pdf" },
      { label: "Snehal Wagh (PPT Winner)", href: "/pdf/science/physics/Snehal-Wagh-3rd-Winner.pdf" },
    ],
  },
  {
    name: "Chemistry",
    slug: "chemistry",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mrs. Kanchan Patil", experience: "5 years", email: "kanchanmpatil2014@gmail.com", image: "kanchan-patil.jpg" },
      { name: "Mrs. Bhagyashri Vitthalrao Dhopate", experience: "12.5 years", email: "bhagyashridhopate@gmail.com", image: "bhagyashri-dhopate.jpg", pdf: "pdf/bhagyashri-vitthalrao-dhopate.pdf" },
      { name: "Mrs. Anita Madhekar", qualification: "M.Sc B.Ed", experience: "8 years", email: "anitamadhekar@gmail.com", image: "anita-madhekar.jpg", pdf: "pdf/mrs-anita-madhekar.pdf" },
    ],
    hasLaboratories: true,
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/science/chemistry/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "12th class question paper 2026", href: "/pdf/science/chemistry/science-Chemistry-june-2026.pdf" },
      { label: "12th class question paper 2025", href: "/pdf/science/chemistry/science-Chemistry-2025-1.pdf" },
      { label: "12th class question paper 2025", href: "/pdf/science/chemistry/science-Chemistry-2025-2.pdf" },
      { label: "12th class question paper 2024", href: "/pdf/science/chemistry/science-Chemistry-2024.pdf" },
      { label: "12th class Board question paper", href: "/pdf/science/chemistry/12th-class-chemistry-board-question-paper.pdf" },
    ],
    downloads: [
      { label: "Ionic Equilibria", href: "/pdf/science/chemistry/Chemistry-IE.pdf" },
      { label: "Adarsh Gawade", href: "/pdf/science/chemistry/Adarsh-Gawade.pdf" },
      { label: "Rivers & Atmosphere", href: "/pdf/science/chemistry/Rivers-Atmosp.pdf" },
      { label: "Model Answer of HSC Board Ques Paper", href: "/pdf/science/chemistry/hsc-board-model-que-ans.pdf" },
      { label: "Model Answer of HSC Board Ques Paper-1", href: "/pdf/science/chemistry/hsc-board-model-que-ans-1.pdf" },
      { label: "Model Answer of HSC Board Ques Paper-2", href: "/pdf/science/chemistry/hsc-board-model-que-ans-2.pdf" },
    ],
  },
  {
    name: "Biology",
    slug: "biology",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mrs. Anjumara Mulla", experience: "10 years", email: "anjum204mulla@gmail.com", image: "anjumara-mulla.jpg" },
    ],
    hasLaboratories: true,
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/science/biology/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "Biology Question Paper June-2026", href: "/pdf/science/biology/Science-Biology-Question-Paper-june-2026.pdf" },
      { label: "Biology Question Paper March-2026", href: "/pdf/science/biology/Science-Biology-Question-Paper-march-2026.pdf" },
      { label: "Biology Question Paper 2025", href: "/pdf/science/biology/Science-Biology-Question-Paper-july-2025.pdf" },
      { label: "Biology Question Paper 2025", href: "/pdf/science/biology/Science-Biology-Question-Paper-march-2025.pdf" },
      { label: "Biology Question Paper 2024", href: "/pdf/science/biology/Science-Biology-Question-Paper-2024.pdf" },
      { label: "Class 12 Prelim Exam-2", href: "/pdf/science/biology/Class-XII-Biology-QP-Prelim-Test-2.pdf" },
    ],
    downloads: [
      { label: "Career In Biology", href: "/pdf/science/biology/careers-in-biology.pdf" },
      { label: "1. Reproduction in Plants", href: "/pdf/science/biology/1-reproduction-in-plants-assignment-notes.pdf" },
      { label: "2. Biotechnology", href: "/pdf/science/biology/12-biotechnology.pdf" },
      { label: "3. Inheritanc & Variation", href: "/pdf/science/biology/3-inheritanc-and-variation.pdf" },
      { label: "4. Molecular Basis of Inheritance", href: "/pdf/science/biology/4-molecular-basis-of-inheritance.pdf" },
      { label: "6. Plant Growth & Development", href: "/pdf/science/biology/7-plant-growth-and-development.pdf" },
      { label: "7. Respiration and Circulation", href: "/pdf/science/biology/8-respiration-and-circulation.pdf" },
      { label: "8. Organism and Population", href: "/pdf/science/biology/13-organism-and-population.pdf" },
      { label: "9. Ecosystem & Energy Flow", href: "/pdf/science/biology/14-ecosystem-and-energy-flow.pdf" },
      { label: "10. Biodiversity & its Conservation", href: "/pdf/science/biology/15-biodiversity-and-its-conservation.pdf" },
      { label: "11. Human Reproduction", href: "/pdf/science/biology/18-human-reproduction.pdf" },
    ],
  },
  {
    name: "Math",
    slug: "math",
    stream: "science",
    description: "",
    faculty: [
      { name: "Vinita Shriniwas Chandratre", qualification: "M.Sc.(Maths), B.Ed.", experience: "10 years", image: "vinita-chandratre.jpg" },
      { name: "Mrs. Pradnya Kulkarni", experience: "9 years", email: "pradnyapkulkarni10@gmail.com", image: "pradnya-kulkarni.jpg" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/science/math/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "Mathematics Question Paper 2024", href: "/pdf/science/math/Science-Maths-question-paper-2024.pdf" },
      { label: "Mathematics & Statistics Science", href: "/pdf/science/math/MathematicsStaticsScience40.pdf" },
      { label: "HSC Mathematics(Science)-2020", href: "/pdf/science/math/mathematics(science)-QP-20.pdf" },
      { label: "HSC Mathematics UT1-2021", href: "/pdf/science/math/12th-math-unit-test1-2021.pdf" },
    ],
    downloads: [
      { label: "12th Class Textbook Part 1", href: "/pdf/science/math/XII-Maths-I-New-Edition.pdf" },
      { label: "12th Class Textbook Part 2", href: "/pdf/science/math/XII-Maths-II-New-Edition.pdf" },
      { label: "11th Class Textbook Part 2", href: "/pdf/science/math/XI-Maths-II-New-Edition.pdf" },
      { label: "Differentiation Basics", href: "/pdf/science/math/Differentiation-Basics.pdf" },
    ],
  },
  {
    name: "Marathi",
    slug: "marathi",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mr. Pradeep Kasar", experience: "5 years", email: "pradeep31kasar@gmail.com", image: "pradip-kasar.jpg" },
    ],
    aboutPdfs: [
      { label: "Lekh Agralekh", href: "/pdf/science/marathi/Lekh-Agralekh.pdf" },
      { label: "Nibandh", href: "/pdf/science/marathi/Nibandh.pdf" },
    ],
    aboutImages: ["kusumagraj.jpg", "pratidnya-marathi.jpg", "narayan-surve.jpg"],
    syllabusPdfs: [
      { label: "12th Class Teaching Plan 2026-27", href: "/pdf/science/marathi/marathi-12th-class-Teaching-Plan-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "Marathi Question Paper 2025", href: "/pdf/science/marathi/Academic-Marathi-Question Paper -March-2025.pdf" },
      { label: "Marathi Question Paper 2024", href: "/pdf/science/marathi/Marathi-Question-Paper-2024.pdf" },
      { label: "Marathi Question Paper March 2022", href: "/pdf/science/marathi/marathi-question-paper-march-2022.pdf" },
      { label: "Marathi Question Paper 2021", href: "/pdf/science/marathi/marathi-question-paper-2021.pdf" },
    ],
    downloads: [
      { label: "मराठी निबंध", href: "/pdf/science/marathi/marathi_nibandha.pdf" },
      { label: "बा. भ.बोरकर", href: "/pdf/science/marathi/बा-भ-बोरकर.pdf" },
      { label: "12वी प्रयोग प्रकार", href: "/pdf/science/marathi/मराठी-12वी-प्रयोग-प्रकार-(एस बी पाटील ).pdf" },
      { label: "साहित्य प्रकार - कथा", href: "/pdf/science/marathi/साहित्य-प्रकार-कथा-(एस बी पाटिल कॉलेज ).pdf" },
      { label: "पद्य विभाग", href: "/pdf/science/marathi/पद्य-विभाग.jpg" },
      { label: "Interview", href: "/pdf/science/marathi/marathi-interview.pdf" },
    ],
  },
  {
    name: "English",
    slug: "english",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mr. Amar Ratnakar Shelke", qualification: "M.A. (English and Sociology), B.Ed., DET.", experience: "3 years", image: "Mr-Amar-Ratnakar-Shelke.jpg" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan 26-27", href: "/pdf/science/english/english-12th-Teaching-Plan-26-27.pdf" },
    ],
    questionPapers: [
      { label: "Question Paper 2024", href: "/pdf/science/english/English-Question-paper-2024.pdf" },
      { label: "Question Paper July 2022", href: "/pdf/science/english/Question-paper-July-2022.pdf" },
      { label: "Question Paper March 2022", href: "/pdf/science/english/Question-paper-March-2022.pdf" },
      { label: "English Paper Pattern", href: "/pdf/science/english/English-Paper-Pattern.pdf" },
      { label: "Assesment 12th - Writing Skills", href: "/pdf/science/english/assesment-12th.pdf" },
      { label: "12th Question SET-1", href: "/pdf/science/english/12-question-set-01.pdf" },
      { label: "12th Question SET-2", href: "/pdf/science/english/12-question-set-02.pdf" },
      { label: "12th Question SET-3", href: "/pdf/science/english/12-question-set-03.pdf" },
    ],
    downloads: [
      { label: "English Article - Charles Dickens", href: "/pdf/science/english/English-Article-Charles-Dickens.pdf" },
      { label: "Blog Writing", href: "/pdf/science/english/blog-writing.pdf" },
      { label: "1st Rank - Mast. Prashant Thorve", href: "/pdf/science/english/1st-Mast-Prashant-Thorve.pdf" },
      { label: "2nd Rank - Miss. Riya Deshmukh", href: "/pdf/science/english/2nd-Miss-Riya-Deshmukh.pdf" },
      { label: "3rd Rank - Miss. Gayatri Thombare", href: "/pdf/science/english/3rd-Miss-Gayatri-Thombare.pdf" },
      { label: "4th Rank - Mast. Auysh Awadh", href: "/pdf/science/english/4th-Mast-Auysh-Awadh.pdf" },
      { label: "5th Rank - Miss. Neha Choudhari", href: "/pdf/science/english/5th-Miss-Neha-Choudhari.pdf" },
      { label: "Class 12 History of Novel", href: "/pdf/science/english/Class-12-History-of-Novel.pdf" },
      { label: "Class 12 History of Novel Part 2", href: "/pdf/science/english/Class-12-History-of-Novel-Part-2.pdf" },
      { label: "Note Making (Writing Skills) Std 12", href: "/pdf/science/english/Note-Making-(Writing Skills)-Std-12.pdf" },
    ],
  },
  {
    name: "Hindi",
    slug: "hindi",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mrs. Harsha Umesh Banthia", qualification: "M.A.B.Ed.D.S.M.", experience: "19 years", email: "harshabanthia47@gmail.com", image: "mrs-harsha-banthia.jpg" },
    ],
    aboutPdfs: [
      { label: "New In Hindi", href: "/pdf/science/hindi/naye-shikhar-ke-aur.pdf" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/science/hindi/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "June 2026", href: "/pdf/science/hindi/Hindi-Question-Paper-June-2026.pdf" },
      { label: "12th Class Question Paper 2026", href: "/pdf/science/hindi/Hindi-Question-Paper-2026.pdf" },
      { label: "February 2025", href: "/pdf/science/hindi/hindi-feb-question-paper-2025_new.pdf" },
      { label: "July 2025", href: "/pdf/science/hindi/hindi-july-question-paper-2025.pdf" },
      { label: "12th Class Question Paper 2024", href: "/pdf/science/hindi/Hindi-Question-Paper-2024.pdf" },
      { label: "March 2023", href: "/pdf/science/hindi/hindi-march-2023.pdf" },
      { label: "12th Class Question Paper Pattern", href: "/pdf/science/hindi/12th-class-question-paper-pattern.pdf" },
      { label: "11th Hindi Paper Set-1", href: "/pdf/science/hindi/11th-hindi-paper-set-1-science.pdf" },
      { label: "11th Hindi Paper Set-2", href: "/pdf/science/hindi/11th-hindi-paper-set-2-science.pdf" },
      { label: "12th Hindi Paper Set-1&2", href: "/pdf/science/hindi/12th-hindi-paper-setA.pdf" },
    ],
    downloads: [
      { label: "हिंदी रस", href: "/pdf/science/hindi/हिंदी-रस.pdf" },
    ],
  },
  {
    name: "Geography",
    slug: "geography",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mrs. Sangita Kudale", experience: "7 years", email: "sangitaakudale@gmail.com", image: "sangita-kudale.jpg" },
    ],
    hasLaboratories: true,
    hasCompetition: true,
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/science/geography/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "12th Class Question paper March 2026", href: "/pdf/science/geography/science-Geography-march-26.pdf" },
      { label: "12th Class Question paper July 2025", href: "/pdf/science/geography/science-Geography-july-25.pdf" },
      { label: "12th Class Question paper March 2025", href: "/pdf/science/geography/science-Geography-march-25.pdf" },
      { label: "12th Class Question paper 2024", href: "/pdf/science/geography/science-Geography-2024.pdf" },
      { label: "12th Class Question paper Marathi 2024", href: "/pdf/science/geography/Geography-Marathi-science-2024.pdf" },
      { label: "12th Class Question Bank", href: "/pdf/science/geography/12th-Class-Question-Bank.pdf" },
      { label: "March 2020 Board Paper", href: "/pdf/science/geography/March-2020-Board-Paper.pdf" },
      { label: "Geography", href: "/pdf/science/geography/geography.pdf" },
      { label: "12th Geography Prelim paper-2", href: "/pdf/science/geography/12th-geography-prelim-paper-2.pdf" },
      { label: "SB-11th-Geography-AnnualExam-2020-2021", href: "/pdf/science/geography/sb-11th-geography-annualexam-2020-2021.pdf" },
    ],
    downloads: [
      { label: "Class 12 Textbook", href: "/pdf/science/geography/Geography-TextbooK-12th-English.pdf" },
      { label: "1 Population Part 1 Lecture 1", href: "/pdf/science/geography/1-Population-Part-1-Lecture-1.pdf" },
      { label: "Model of Different Land Forms", href: "/pdf/science/geography/model-of-different-land-forms.pdf" },
      { label: "World Population Day", href: "/pdf/science/geography/world-population-day.pdf" },
      { label: "World Population Day Raj", href: "/pdf/science/geography/world-population-day-raj.pdf" },
    ],
  },
  {
    name: "IT",
    slug: "it",
    stream: "science",
    description: "",
    faculty: [
      { name: "Mrs. Prachi Vishal Bhagat", qualification: "MCA", experience: "6 years", email: "prachibhagat.sbpcsc.@gmail.com", image: "prachi-vishal-bhagat.jpg" },
      { name: "Mrs. Shailaja Rajesh Pande", qualification: "B.SC., MCA", experience: "5 years", email: "shailajapande19@gmail.com", image: "mrs-shailaja-rajesh-pande.jpg" },
    ],
    syllabusPdfs: [],
    questionPapers: [
      { label: "11th Annual Exam Paper 2", href: "/pdf/science/it/11th-Annual-Exam-Paper2.pdf" },
      { label: "11th IT UNIT TEST first", href: "/pdf/science/it/11th-IT-UNIT-TEST-first.pdf" },
      { label: "11th Mid Term", href: "/pdf/science/it/11th-Mid-Term.pdf" },
    ],
    downloads: [
      { label: "CLASS 11th TEXTBOOK", href: "/pdf/science/it/class-11th-textbook.pdf" },
      { label: "Lesson 1 Advanced Web Design2", href: "/pdf/science/it/Lesson-1-Advanced-Web-Design2.pdf" },
      { label: "Lesson 6 Ecommerce & EGovernance", href: "/pdf/science/it/Lesson-6-Ecommerce-&-EGovernance-converted.pdf" },
      { label: "Digital Marketing", href: "/pdf/science/it/Digital-Marketing.pdf" },
      { label: "ERP", href: "/pdf/science/it/erp.pdf" },
      { label: "LIBRE OFFICE", href: "/pdf/science/it/libre-office.pdf" },
      { label: "TALLY ERP 9", href: "/pdf/science/it/tally-erp-9.pdf" },
    ],
  },
  {
    name: "CS",
    slug: "cs",
    stream: "science",
    description: "",
    faculty: [
      { name: "Prof. Kalyani Bhondave", experience: "7 years", email: "kalyaniyewale@gmail.com", image: "kalyani-bhondave.jpg" },
    ],
    hasLaboratories: true,
    aboutPdfs: [
      { label: "Student Success", href: "/pdf/science/cs/Student-Success.pdf" },
    ],
    questionPapers: [
      { label: "Computer Science Paper-1 2024", href: "/pdf/science/cs/CS-I-Board-2024.pdf" },
      { label: "Computer Science Paper-2 2024", href: "/pdf/science/cs/CS-2-Board-2024.pdf" },
      { label: "Computer Science Paper-1 2023", href: "/pdf/science/cs/Computer-Science-Paper-1-2023.pdf" },
      { label: "Computer Science Paper-2 2023", href: "/pdf/science/cs/Computer-Science-Paper-2-2023.pdf" },
      { label: "COMPUTER SCIENCE PAPER-1 (D9)-2020", href: "/pdf/science/cs/COMPUTER-SCIENCE-PAPER-1-(D9)-2020.pdf" },
      { label: "COMPUTER SCIENCE PAPER-2 (D9)-2020", href: "/pdf/science/cs/COMPUTER-SCIENCE-PAPER-2-(D9)-2020.pdf" },
      { label: "CS March 2025", href: "/pdf/science/cs/computer-sci-1-march-2025.pdf" },
      { label: "CS Paper July 01", href: "/pdf/science/cs/computer-sci-paper-july-01.pdf" },
      { label: "CS Paper July", href: "/pdf/science/cs/computer-sci-paper-july.pdf" },
      { label: "CS-1 July 2025", href: "/pdf/science/cs/computer-science-1-july-2025.pdf" },
      { label: "CS-1 March 2026", href: "/pdf/science/cs/computer-science-1-march-2026.pdf" },
      { label: "CS-2 July 2025", href: "/pdf/science/cs/computer-science-2-july-2025.pdf" },
      { label: "Computer Science Question Bank 12th", href: "/pdf/science/cs/Computer-Science-Question-Bank-12th.pdf" },
      { label: "CS QP 01", href: "/pdf/science/cs/computer-science-question-paper-01.pdf" },
      { label: "CS QP 02", href: "/pdf/science/cs/computer-science-question-paper-02.pdf" },
      { label: "CS QP 03", href: "/pdf/science/cs/computer-science-question-paper-03.pdf" },
      { label: "CS QP 04", href: "/pdf/science/cs/computer-science-question-paper-04.pdf" },
      { label: "Mar2019 CS-1 Qp", href: "/pdf/science/cs/Mar2019-computer-science-1-Qp(original).pdf" },
      { label: "Mar2019 CS-2 Qp", href: "/pdf/science/cs/Mar2019-computer-science-2-Qp(original).pdf" },
      { label: "Prelim-1 Papers 2021-22", href: "/pdf/science/cs/prelim-1-papers-2021-22.pdf" },
      { label: "Prelim-2 Papers 2021-22", href: "/pdf/science/cs/prelim-2-papers-2021-22.pdf" },
      { label: "CS Syllabus", href: "/pdf/science/cs/CS-science-syllabus.pdf" },
      { label: "CS 11th Teaching Plan 2022", href: "/pdf/science/cs/CS-11th-Teaching-Plan-2022.pdf" },
      { label: "CS 12th Teaching Plan 2023", href: "/pdf/science/cs/CS-12th-Teaching-Plan-2023.pdf" },
      { label: "CS 12th Exam Plan 2023", href: "/pdf/science/cs/CS-12th-Exam-Plan-2023.pdf" },
      { label: "CS 12th Teaching Plan 2024-25", href: "/pdf/science/cs/CS-12th-Teaching-Plan-2024-25.pdf" },
      { label: "CS 12th Teaching Plan 2025-26", href: "/pdf/science/cs/CS-12th-Teaching-Plan-2025-26.pdf" },
      { label: "CS Syllabus 11th Teaching Plan 2025-26", href: "/pdf/science/cs/CS-Syllabus-11th-Teaching-Plan-2025-26.pdf" },
      { label: "Marks Distribution", href: "/pdf/science/cs/marks-distribution.pdf" },
      { label: "Reduced Syllabus XI D9", href: "/pdf/science/cs/Reduced-Syllabus-of-XI-Standard-Computer-Science-D9.pdf" },
      { label: "Reduced Syllabus XII D9", href: "/pdf/science/cs/Reduced-Syllabus-of-XII-Standard-Computer-Science-D9.pdf" },
    ],
    downloads: [
      { label: "8085 Program to Exchange 2 Blocks", href: "/pdf/science/cs/8085-Program-to-Exchange-Blocks.pdf" },
      { label: "Function", href: "/pdf/science/cs/FUNCTION.pdf" },
      { label: "HTML List", href: "/pdf/science/cs/htmllist.pdf" },
      { label: "Input Output in C++", href: "/pdf/science/cs/input-output-in-c++.pdf" },
      { label: "Microprocessor Instructions", href: "/pdf/science/cs/Microprocessor-Instructions.pdf" },
      { label: "Program 8085", href: "/pdf/science/cs/Program-8085.pdf" },
    ],
  },
]

export const commerceSubjects: SubjectConfig[] = [
  {
    name: "Marathi",
    slug: "marathi",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mr. Pradeep Kasar", experience: "5 years", email: "pradeep31kasar@gmail.com", image: "pradip-kasar.jpg" },
    ],
    aboutPdfs: [
      { label: "Lekh Agralekh", href: "/pdf/commerce/marathi/Lekh-Agralekh.pdf" },
      { label: "Nibandh", href: "/pdf/commerce/marathi/Nibandh.pdf" },
    ],
    aboutImages: ["kusumagraj.jpg", "pratidnya-marathi.jpg", "narayan-surve.jpg"],
    syllabusPdfs: [
      { label: "12th Class Teaching Plan 2026-27", href: "/pdf/commerce/marathi/marathi-12th-class-Teaching-Plan-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "Marathi Question Paper 2025", href: "/pdf/commerce/marathi/Academic-Marathi-Question Paper -March-2025.pdf" },
      { label: "Marathi Question Paper 2024", href: "/pdf/commerce/marathi/Marathi-Question-Paper-2024.pdf" },
      { label: "Marathi Question Paper March 2022", href: "/pdf/commerce/marathi/marathi-question-paper-march-2022.pdf" },
      { label: "Marathi Question Paper 2021", href: "/pdf/commerce/marathi/marathi-question-paper-2021.pdf" },
    ],
    downloads: [
      { label: "मराठी निबंध", href: "/pdf/commerce/marathi/marathi_nibandha.pdf" },
      { label: "बा. भ.बोरकर", href: "/pdf/commerce/marathi/बा-भ-बोरकर.pdf" },
      { label: "12वी प्रयोग प्रकार", href: "/pdf/commerce/marathi/मराठी-12वी-प्रयोग-प्रकार-(एस बी पाटील ).pdf" },
      { label: "साहित्य प्रकार - कथा", href: "/pdf/commerce/marathi/साहित्य-प्रकार-कथा-(एस बी पाटिल कॉलेज ).pdf" },
      { label: "पद्य विभाग", href: "/pdf/commerce/marathi/पद्य-विभाग.jpg" },
      { label: "Interview", href: "/pdf/commerce/marathi/marathi-interview.pdf" },
    ],
  },
  {
    name: "English",
    slug: "english",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mr. Sharanappa Manik Ausekar", experience: "10 years", email: "sharan.ausekar@gmail.com", image: "sharanappa-manik-ausekar.JPG", pdf: "pdf/Sharanappa-Manik-Ausekar.pdf" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/commerce/english/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "English Question Paper 2024", href: "/pdf/commerce/english/English-Question-paper-2024.pdf" },
      { label: "Question Paper July 2022", href: "/pdf/commerce/english/Question-paper-July-2022.pdf" },
      { label: "Question Paper March 2022", href: "/pdf/commerce/english/Question-paper-March-2022.pdf" },
      { label: "English Paper Pattern", href: "/pdf/commerce/english/English-Paper-Pattern.pdf" },
    ],
    downloads: [
      { label: "Do schools really kill creativity", href: "/pdf/commerce/english/do-schools-really-kill-creativity-sbpcsc.pdf" },
      { label: "Have You Earned Your Tomorrow", href: "/pdf/commerce/english/Have-you-earnrd-your-tommorow-sbpcsc.pdf" },
      { label: "Mind Mapping", href: "/pdf/commerce/english/mind-mapping-sbpcsc.pdf" },
      { label: "Summary Writing", href: "/pdf/commerce/english/summary-writing-sbpcsc.pdf" },
    ],
  },
  {
    name: "Hindi",
    slug: "hindi",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mrs. Harsha Umesh Banthia", qualification: "M.A.B.Ed.D.S.M.", experience: "19 years", email: "harshabanthia47@gmail.com", image: "mrs-harsha-banthia.jpg" },
    ],
    aboutPdfs: [
      { label: "New In Hindi", href: "/pdf/commerce/hindi/naye-shikhar-ke-aur.pdf" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/commerce/hindi/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "June 2026", href: "/pdf/commerce/hindi/Hindi-Question-Paper-June-2026.pdf" },
      { label: "12th Class Question Paper 2026", href: "/pdf/commerce/hindi/Hindi-Question-Paper-2026.pdf" },
      { label: "February 2025", href: "/pdf/commerce/hindi/hindi-feb-question-paper-2025_new.pdf" },
      { label: "July 2025", href: "/pdf/commerce/hindi/hindi-july-question-paper-2025.pdf" },
      { label: "12th Class Question Paper 2024", href: "/pdf/commerce/hindi/Hindi-Question-Paper-2024.pdf" },
      { label: "March 2023", href: "/pdf/commerce/hindi/hindi-march-2023.pdf" },
      { label: "12th Class Question Paper Pattern", href: "/pdf/commerce/hindi/12th-class-question-paper-pattern.pdf" },
      { label: "11th Hindi Paper Set-1", href: "/pdf/commerce/hindi/11th-hindi-paper-set-1.pdf" },
      { label: "11th Hindi Paper Set-2", href: "/pdf/commerce/hindi/11th-hindi-paper-set-2.pdf" },
      { label: "12th Hindi Paper Set-1&2", href: "/pdf/commerce/hindi/12th-hindi-paper-setA-commerce.pdf" },
    ],
    downloads: [
      { label: "हिंदी रस", href: "/pdf/commerce/hindi/हिंदी-रस.pdf" },
    ],
  },
  {
    name: "Math",
    slug: "math",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Vinita Shriniwas Chandratre", qualification: "M.Sc.(Maths), B.Ed.", experience: "10 years", image: "vinita-chandratre.jpg" },
      { name: "Mrs. Mayura Lalit Patel", qualification: "Msc (maths)", experience: "7.5 years", email: "mayurapatel1234@gmail.com", image: "Mayura-lalit-patel.jpg" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/commerce/math/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "12th Mathematics Question Paper - March 2026", href: "/pdf/commerce/math/commerce-maths-questionpaper-march-2026.pdf" },
      { label: "12th Mathematics Question Paper - July 2025", href: "/pdf/commerce/math/commerce-maths-questionpaper-july-2025.pdf" },
      { label: "12th Mathematics Question Paper - March 2025", href: "/pdf/commerce/math/commerce-maths-questionpaper-march-2025.pdf" },
      { label: "12th Mathematics Question Paper -2024", href: "/pdf/commerce/math/commerce-maths-questionpaper-2024.pdf" },
      { label: "12th Mathematics Paper Pattern", href: "/pdf/commerce/math/2th-Mathematics-Paper-Pattern.pdf" },
      { label: "12th Mathematics Question Paper - March 2023", href: "/pdf/commerce/math/12th-Mathematics-Question-Paper-2023.pdf" },
      { label: "12th Mathematics Question Paper - March 2022", href: "/pdf/commerce/math/12th-Mathematics-Question-Paper-2022.pdf" },
      { label: "March 2019 Mathematics Paper-1", href: "/pdf/commerce/math/Comm Maths Paper-1-March-2019.pdf" },
      { label: "March 2019 Mathematics Paper-2", href: "/pdf/commerce/math/Mathematics-Paper-2-March-2019.pdf" },
      { label: "March 2020 Mathematics Paper", href: "/pdf/commerce/math/Mathematics-march-2020-paper.pdf" },
    ],
    downloads: [
      { label: "Properties of Transpose Matrix", href: "/pdf/commerce/math/properties-of-transpose.pdf" },
      { label: "Use Of Maths In Commerce", href: "/pdf/commerce/math/Use-of-maths-in-commerece.pdf" },
      { label: "12th Commerce Part 1", href: "/pdf/commerce/math/12th-commerce-part1-textbook.pdf" },
      { label: "12th Commerce Part 2", href: "/pdf/commerce/math/12th-commerce-part2-text-book.pdf" },
      { label: "Mathematics Department Activity", href: "/pdf/commerce/math/Mathematics-Department-Activity.pdf" },
    ],
  },
  {
    name: "Economics",
    slug: "economics",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mrs. SHITAL NILESH SHENDE", qualification: "B.COM, B.ED, MBA", experience: "3 years (ECONOMICS)", email: "shitalshende228@gmail.com", image: "shital-shende.jpg" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/commerce/economics/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "JULY 2026", href: "/pdf/commerce/economics/economics_july_2026.pdf" },
      { label: "HSC Commerce 2024 March Economics", href: "/pdf/commerce/economics/Commerce-Economics-Question-Paper-2024.pdf" },
      { label: "HSC Commerce 2021 March Economics", href: "/pdf/commerce/economics/Economics-12th-March-21.pdf" },
      { label: "HSC Commerce 2021 Economics Que. Paper", href: "/pdf/commerce/economics/12th-Economics-que-paper-30.01.21.pdf" },
      { label: "HSC Commerce 2021 Economics Que Paper1", href: "/pdf/commerce/economics/12th-Com-U1-july-21.pdf" },
      { label: "HSC Commerce 2023 Economics Que Paper1", href: "/pdf/commerce/economics/HSC-Economics-2023-01.pdf" },
    ],
    downloads: [
      { label: "NITI AAYOG", href: "/pdf/commerce/economics/niti-aayog.pdf" },
      { label: "12th Five Year Plan", href: "/pdf/commerce/economics/12th-five-year-plan.pdf" },
      { label: "UnitWise Marks Distribution & Board Paper Pattern", href: "/pdf/commerce/economics/UnitWise-Marks-Distribution-&-Board-Paper-Pattern.pdf" },
    ],
  },
  {
    name: "OCM",
    slug: "ocm",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mrs. Swati Gavasane", experience: "15 years (7 in Jr college)", email: "gavasaneswati@gmail.com", image: "swati-gavasane.jpg", pdf: "pdf/swati-vijaykumar-gavasane..pdf", youtube: "https://youtu.be/STXXyP-I1m8" },
    ],
    syllabusPdfs: [],
    questionPapers: [
      { label: "Class 12 Question Paper 2024", href: "/pdf/commerce/ocm/OCM-Question-Paper-March-2024.pdf" },
      { label: "Class 12 HSC Question Bank", href: "/pdf/commerce/ocm/HSC-Question-Bank-Class-12.pdf" },
      { label: "HSC Commerce 2020 February OCM", href: "/pdf/commerce/ocm/HSC-Commerce-2020-February-OCM.pdf" },
      { label: "HSC Commerce 2019 February OCM", href: "/pdf/commerce/ocm/HSC-Commerce-2019-February-OCM.pdf" },
    ],
    downloads: [
      { label: "11th Class Textbook", href: "/pdf/commerce/ocm/OCM-11th-Class-Textbook.pdf" },
      { label: "12th Class Textbook", href: "/pdf/commerce/ocm/OCM-12th-Class-Textbook.pdf" },
    ],
  },
  {
    name: "Secretarial Practise",
    slug: "secretarial",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Sandhya Mhaske", experience: "7 years", email: "sandhyamhaske88@gmail.com", image: "sandhya-mhaske.jpg", pdf: "pdf/Sandhya-Mhaske.pdf" },
    ],
    syllabusPdfs: [
      { label: "12th Syllabus 2026-27", href: "/pdf/commerce/sp/12th-syllabus-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "12th Question Paper - 2024", href: "/pdf/commerce/sp/commerce-SP-2024.pdf" },
      { label: "12th topic weightege", href: "/pdf/commerce/sp/12th-topic-weightege.pdf" },
      { label: "12th Question Paper - March 2023", href: "/pdf/commerce/sp/12th-SP-march-2023-Secretarial-Practice.pdf" },
      { label: "12th Question Paper - March 2022", href: "/pdf/commerce/sp/12th-SP-2022-Secretarial-Practice.pdf" },
      { label: "12th Question Paper - July 2022", href: "/pdf/commerce/sp/12th-SP-July-2022-Question-Paper.pdf" },
    ],
    downloads: [
      { label: "HSC Result 2023", href: "/pdf/commerce/sp/hsc-result-2023.pdf" },
      { label: "Joint Stock Company", href: "/pdf/commerce/sp/joint-stock-company.pdf" },
      { label: "Corporate Finance", href: "/pdf/commerce/sp/Corporate-Finance.pdf" },
      { label: "HSC Secretarial Practice Book", href: "/pdf/commerce/sp/HSC-Secretarial-Practice-book-commerce.pdf" },
      { label: "Class 11 Textbook", href: "/pdf/commerce/sp/class-11-textbook.pdf" },
    ],
  },
  {
    name: "Account & Book Keeping",
    slug: "account",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mrs Sujata Seelam", qualification: "Mcom B.Ed.", experience: "5 years", email: "sujataseelam@gmail.com", image: "mrs-sujata-seelam.jpg", pdf: "pdf/mrs-sujata-seelam.pdf" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/commerce/account-book-keeping/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "HSC board Feb-2026 bookkeeping and accountancy questionpaper", href: "/pdf/commerce/account-book-keeping/HSC-board-Feb-2026-bookkeeping-and-accountancy-questionpaper.pdf" },
      { label: "HSC BOARD Feb -2025 Book keeping and Accountancy", href: "/pdf/commerce/account-book-keeping/HSC-BOARD-Feb-202-Book-keeping-and-Accountancy.pdf" },
      { label: "HSC BOARD July -2025 Bookkeeping and Accountancy", href: "/pdf/commerce/account-book-keeping/HSC-BOARD-July-2025-Bookkeeping-and-Accountancy.pdf" },
      { label: "Commerce Accounts Question Paper 2024", href: "/pdf/commerce/account-book-keeping/commerce-Accounts-2024.pdf" },
      { label: "HSC Commerce 2019 March Book Keeping", href: "/pdf/commerce/account-book-keeping/Book-Keeping-&-Accountancy-March-2019-Std-12th-Commerce-HSC.pdf" },
      { label: "HSC Commerce 2020 March Book Keeping", href: "/pdf/commerce/account-book-keeping/book-keeping-and-accountancy-march-2020-std-12th-commerce-hsc.pdf" },
      { label: "HSC Commerce Question Paper-01", href: "/pdf/commerce/account-book-keeping/Accounts-HSC-Q-P-2022.pdf" },
      { label: "HSC Commerce Question Paper-02", href: "/pdf/commerce/account-book-keeping/Accounts-HSC-Q-P-2023.pdf" },
      { label: "Bkaccountancy Paper Pattern Weightage", href: "/pdf/commerce/account-book-keeping/Bkaccountancy-paper-pattern-weightage.pdf" },
    ],
    downloads: [
      { label: "Class 12 Textbook", href: "/pdf/commerce/account-book-keeping/12th-class-textbook.pdf" },
      { label: "Class 11 Textbook", href: "/pdf/commerce/account-book-keeping/11th-class-textbook.pdf" },
      { label: "Problem No-1 (Book Keeping & Accountancy)", href: "/pdf/commerce/account-book-keeping/Problem-no-1.pdf" },
      { label: "Problem No-2 (Book Keeping & Accountancy)", href: "/pdf/commerce/account-book-keeping/Problem-no-2.pdf" },
      { label: "Problem No-3 (Book Keeping & Accountancy)", href: "/pdf/commerce/account-book-keeping/Problem-no-3.pdf" },
    ],
  },
  {
    name: "IT",
    slug: "it",
    stream: "commerce",
    description: "",
    faculty: [
      { name: "Mrs. Prachi Vishal Bhagat", qualification: "MCA", experience: "6 years", email: "prachibhagat.sbpcsc.@gmail.com", image: "prachi-vishal-bhagat.jpg" },
      { name: "Mrs. Shailaja Rajesh Pande", qualification: "B.SC., MCA", experience: "5 years", email: "shailajapande19@gmail.com", image: "mrs-shailaja-rajesh-pande.jpg" },
    ],
    syllabusPdfs: [
      { label: "12th Teaching Plan AY 2026-27", href: "/pdf/commerce/it/12th-Teaching-Plan-AY-2026-27.pdf" },
    ],
    questionPapers: [
      { label: "11th Annual Exam Paper 2", href: "/pdf/commerce/it/11th-Annual-Exam-Paper2.pdf" },
      { label: "11th IT UNIT TEST first", href: "/pdf/commerce/it/11th-it-unit-test-first.pdf" },
      { label: "11th Mid Term", href: "/pdf/commerce/it/11th-Mid-Term.pdf" },
      { label: "12th Commerce Prelim Paper 2", href: "/pdf/commerce/it/12th-Commerce-Prelim-Paper2.pdf" },
      { label: "12th Unit Test 1 Commerce", href: "/pdf/commerce/it/12th-Unit-Test-1-commerce.pdf" },
      { label: "12th Commerce Prelim Paper 1", href: "/pdf/commerce/it/12th-commerce-Prelim-paper1.pdf" },
    ],
    downloads: [
      { label: "CLASS 11th TEXTBOOK", href: "/pdf/commerce/it/class-11th-textbook.pdf" },
      { label: "Lesson 1 Advanced Web Design2", href: "/pdf/commerce/it/Lesson1-Advanced-Web-Design2.pdf" },
      { label: "Lesson 6 Ecommerce & EGovernance converted", href: "/pdf/commerce/it/Lesson6-Ecommerce-&-EGovernance-converted.pdf" },
      { label: "Digital Marketing", href: "/pdf/commerce/it/Digital-Marketing.pdf" },
      { label: "ERP", href: "/pdf/commerce/it/erp.pdf" },
      { label: "LIBRE OFFICE", href: "/pdf/commerce/it/libre-office.pdf" },
      { label: "TALLY ERP 9", href: "/pdf/commerce/it/tally-erp-9.pdf" },
    ],
  },
]

export const allSubjects: Record<string, SubjectConfig> = {}

for (const s of scienceSubjects) {
  allSubjects[`science-${s.slug}`] = s
}
for (const s of commerceSubjects) {
  allSubjects[`commerce-${s.slug}`] = s
}

export function getSubject(stream: string, slug: string): SubjectConfig | undefined {
  return allSubjects[`${stream}-${slug}`]
}
