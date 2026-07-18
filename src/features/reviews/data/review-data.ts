export interface Review {
  id: string;
  name: string;
  role: string;
  type: "student" | "parent";
  stream: "science" | "commerce" | "general";
  content: string;
  batch?: string;
  rating?: number;
}

export const reviewsData: Review[] = [
  {
    id: "1",
    name: "Miss. Anisha Mahesh Kale",
    role: "Science Stream Topper",
    type: "student",
    stream: "science",
    content: "I am grateful to S.B. Patil Junior College, Ravet, for playing a significant role in my academic journey and success in MHT-CET. The college provides an excellent learning environment with highly supportive and experienced teachers who are always ready to guide students. The faculty members explain concepts clearly, conduct regular tests, and provide valuable feedback that helps students improve continuously. The well-planned academic schedule, doubt-solving sessions and consistent motivation from teachers helped me stay focused and disciplined throughout my preparation. The college also ensures a balance between academics and extracurricular activities.",
    rating: 5
  },
  {
    id: "2",
    name: "Miss. Anushka Somnath Pol",
    role: "Science Stream 1st Topper",
    type: "student",
    stream: "science",
    content: "My experience at S.B. Patil Junior College, Ravet, has been extremely positive and enriching. The college has always focused on academic excellence while ensuring that students receive the right guidance and support. The faculty members are knowledgeable, approachable, and dedicated to helping students achieve their goals. Regular lectures, tests, and doubt-solving sessions played an important role in strengthening my concepts and improving my performance in competitive examinations like MHT-CET. I sincerely thank all my teachers and the management of S.B. Patil Junior College for their continuous support and guidance.",
    rating: 5
  },
  {
    id: "3",
    name: "Miss. Pranjal Vijaykumar Thorat",
    role: "Science Stream 3rd Topper",
    type: "student",
    stream: "science",
    content: "I've been studying at S.B. Patil Junior College for my 12th and overall it's been a good experience for academics and discipline. The teachers are experienced. They focus on clearing concepts rather than just rushing through the syllabus, which really helps for board exams and CET prep. Regular tests, exams and prelims keep you on track. The college is strict about attendance and uniform which keeps the environment focused. The campus is clean and well-maintained. Labs are good for Physics, Chemistry and I.T. Classrooms are spacious with good ventilation. There's also a good balance of extracurriculars — sports, cultural events, exhibitions happen regularly.",
    rating: 5
  },
  {
    id: "4",
    name: "Prasad Anil Fegade",
    role: "Commerce Stream Student",
    type: "student",
    stream: "commerce",
    content: "I have passed my 11th and 12th in Commerce stream from S.B. Patil College of Science and Commerce, Ravet. S.B. Patil College of Science and Commerce is a very good college with very humble and excellent facilities. I had a very good experience in this college as the teachers here are very supportive in nature and they put a lot of effort so that we can clearly understand every concept. Our principal, Mr. Sandip Patil sir, is also very supportive, and he always motivated and encouraged us throughout the years to give our best. I am very thankful to every faculty.",
    rating: 5
  },
  {
    id: "5",
    name: "Amruta Prashant Nehete",
    role: "Commerce Stream Topper",
    type: "student",
    stream: "commerce",
    content: "It is with great pride & privilege that I write this feedback as a student who had recently completed 12th grade at S.B. Patil College. As the topper of my batch, I feel honored to share my experience from the outstanding academic journey. I recognize how college had been offering me a strong foundation in my subjects. It not only benefit me for my 12th exams but also for preparing for my next phase of education. One of the standout aspects of my experience was dedication & support from faculty, my all the teachers. They were a mentor & were always available to clear my doubts. The teachers arranged some mentor sessions before the exams which help us in clearing our doubts & provided a valuable time management in our exams.",
    rating: 5
  },
  {
    id: "6",
    name: "Niharika Bora",
    role: "Commerce Stream Student",
    type: "student",
    stream: "commerce",
    content: "As a student of SB Patil Junior college for almost 2 years, I had a truly positive and wonderful experience. The faculty members were always supportive and guided us through both academics and personal growth. The college, along with the teachers, took initiatives and always encouraged participation in various events, which helped me build confidence and skills. I'm grateful for the learning environment and opportunities I received here.",
    rating: 5
  },
  {
    id: "7",
    name: "Mr. Aditya Shelar",
    role: "Science Stream 1st Topper (CS)",
    type: "student",
    stream: "science",
    content: "My name is Aditya Shelar, I have passed my 12th Science with Computer Science from S.B Patil College of Science & Commerce, here my college experience is so good. Teachers have helped us in all types of work and studies and also arranging the fest and other activities. So I prefer other aspirants who want to take admission go ahead. It has Excellent Staff. It has really helped me to grow.",
    rating: 5
  },
  {
    id: "8",
    name: "Mr. Prashant Thorve",
    role: "Science Stream 2nd Topper",
    type: "student",
    stream: "science",
    content: "As a student of SBPCSC, I can proudly say that SBPCSC is one of the best junior colleges in PCMC. The Principal as well as all the teachers are very supportive and ready to solve each and every problem of the students. The teaching quality is really amazing. The college has very well developed laboratories for each subject. I will definitely recommend every student to join SBPCSC.",
    rating: 5
  },
  {
    id: "9",
    name: "Miss. Khushi Deshmukh",
    role: "Science Stream 3rd Topper",
    type: "student",
    stream: "science",
    content: "The college provides good infrastructure which composes of projectors in respective classrooms, effective labs, libraries, work space, peaceful environment and a healthy time for other cultural activities. The college also has a playground and a canteen. Good faculties. Teachers help the students with resources and their own experience. The staff is supportive and encouraging. Principal Sir also guide the students time to time to boost their moral and pays attention to every student personally.",
    rating: 5
  },
  {
    id: "10",
    name: "Miss. Arpita Agarwal",
    role: "Commerce Stream 1st Topper",
    type: "student",
    stream: "commerce",
    content: "I, Arpita Agarwal from batch of 2022-2023, am very grateful for the immense support of all the teachers. S.B. Patil College of Science & Commerce is a very good college with very humble and excellent facilities. I had a very good experience in this college as the teachers here are very supportive in nature and they put a lot of efforts so that we can clearly understand each and every concept. The college has a very good infrastructure and the environment for studies is also suitable. I have learnt many new things from this college and their career guidance sessions have brought a great spirit in me to become successful in my life.",
    batch: "2022-2023",
    rating: 5
  },
  {
    id: "11",
    name: "Miss. Harshita Dave",
    role: "Commerce Stream 2nd Topper",
    type: "student",
    stream: "commerce",
    content: "I would like to share my 2 years of experience of college. S.B Patil College of Science and Commerce is a very good college. It has an excellent faculty preparing and motivating its students for a better future. It is a student oriented institute whose sole purpose is student's success. It has a very good infrastructure and best environment for student to study. College not only focuses on academics but also on the child's development. Taking admission in this college is like moving towards success and achieving our goal with best experiences.",
    rating: 5
  },
  {
    id: "12",
    name: "Miss. Sana Shaikh",
    role: "Commerce Stream 3rd Topper",
    type: "student",
    stream: "commerce",
    content: "I am writing to express my gratitude and appreciation for the time I spent at S. B. Patil College of Science and Commerce. I am proud to say that I recently completed my 12th from commerce stream with 89.33 percentage. This achievement of mine is possible because of the guidance and efforts of talented teachers of our esteemed college. Throughout my time at SBPCSC I had the opportunity to participate in several extracurricular activities, such as sports and commerce day events. It provides quality education to the students which is the most important aspect. Surroundings and equipment are best for the purpose of good education.",
    rating: 5
  },
  {
    id: "13",
    name: "Mr. Yogesh Belsare",
    role: "Parent of Ridhisha Belsare (Science)",
    type: "parent",
    stream: "science",
    content: "As a parent, I sincerely wish to express my gratitude for all the teachers, admin / accounts staff and of course for the respected principal sir. This batch perhaps was special and filled with challenge to bring the students back on track from the COVID phase especially from online mode to offline mode, gradually. All the teachers, coordinators have done their best to streamline it with frequently changing guidelines during the first 1.5 years. The staff and teachers were always supportive to listen to student / parents queries and address them for appropriate resolution. Respected Principal sir always boosted the spirit of students not only for studies but also for their mental health and physical fitness. His kind words of guidance would be helpful for years ahead.",
    rating: 5
  }
];
