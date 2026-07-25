export interface AchievementImage {
  src: string
  alt: string
}

export interface AchievementTableRow {
  image: string
  name: string
  detail?: string
}

export interface AchievementSection {
  title: string
  description?: string
  images?: AchievementImage[]
  videos?: string[]
  standaloneImages?: string[]
  tableRows?: AchievementTableRow[]
  horizontalLayout?: boolean
}

export interface SportsMedalTable {
  year: string
  events: { name: string; gold: number; silver: number; bronze: number; total: number }[]
  total: { gold: number; silver: number; bronze: number; total: number }
  image?: string
}

export interface SportsAchievement {
  title: string
  description?: string
  images?: AchievementImage[]
}

export interface AchievementsData {
  academic: AchievementSection[]
  coCurricular: {
    medalTables: SportsMedalTable[]
    achievements: SportsAchievement[]
  }
}

export const achievementsData: AchievementsData = {
  academic: [
    {
      title: 'MHT CET Toppers 2025-26',
      images: [
        { src: '/images/academic-achievements/cet-toppers-25_26-1.webp', alt: 'MHT CET Toppers 2025-26' },
        { src: '/images/academic-achievements/cet-toppers-25_26-2.webp', alt: 'MHT CET Toppers 2025-26' },
        { src: '/images/academic-achievements/cet-toppers-25_26-3.webp', alt: 'MHT CET Toppers 2025-26' },
        { src: '/images/academic-achievements/cet-toppers-25_26-4.webp', alt: 'MHT CET Toppers 2025-26' },
      ],
    },
    {
      title: 'Commerce Toppers of HSC March 2026 Result',
      standaloneImages: ['/images/academic-achievements/commerce-toppers-of-hsc-march-2026.webp'],
    },
    {
      title: 'Science Toppers of HSC March 2026 Result',
      standaloneImages: ['/images/academic-achievements/science-toppers-of-hsc-march-2026.webp'],
    },
    {
      title: 'Self Assessment Completion Certificate',
      images: [
        { src: '/images/academic-achievements/self-assessment-completion-certificate.jpg', alt: 'Self Assessment Completion Certificate' },
      ],
    },
    {
      title: 'Symbi - Utsav 2025',
      description:
        'This year, our S.B. Patil College of Science and Commerce delivered a spectacular performance and achieved remarkable success by winning 1st Place in the Group Dance competition and 2nd Place in the Solo Dance category in Symbi - Utsav 2025, hosted by SOES\' Symbiosis Junior College Kiwale. In Group Dance Krishna Gharte (12th Commerce), Dhairya Patil, Avadh Bhalerao, Prajeet Tilak and Saksham Khupse (12th Science) gave their marvelous performances and brought pride to the college by winning 1st Prize. They showed the life Event of Eklavya. Where on the other hand a student from 12th Commerce Anisha Kadam wins 2nd prize in Solo Dance competition he danced on Song Rakta Charitra. Students achieved this success under the guidance of Mrs. Shital Shende, Cultural Incharge SBPCSC.',
      images: [
        { src: '/images/academic-achievements/symbi-utsav-2025-1.jpeg', alt: 'Symbi - Utsav 2025' },
        { src: '/images/academic-achievements/symbi-utsav-2025-2.jpeg', alt: 'Symbi - Utsav 2025' },
        { src: '/images/academic-achievements/symbi-utsav-2025-3.jpeg', alt: 'Symbi - Utsav 2025' },
        { src: '/images/academic-achievements/symbi-utsav-2025-4.jpeg', alt: 'Symbi - Utsav 2025' },
      ],
    },
    {
      title: 'Best Teacher Awards',
      description:
        'Dr. S. N. Patil, the Principal of S.B. Patil College of Science and Commerce in Ravet, Pune, was recently felicitated with the Late Shri Manohar Jambhekar Ideal Teacher Award 2025 by ATSS College of Business Studies and Computer Application. Mr. Patil has been known for his dedication and leadership in guiding the institution, which has a reputation for providing quality education and fostering holistic student development under the Pimpri Chinchwad Education Trust (PCET). His recognition with this prestigious award highlights his significant contributions to the field of education and exemplary service as an ideal Teacher and Principal.',
      images: [
        { src: '/images/academic-achievements/best-teacher-awards-01.jpg', alt: 'Best Teacher Awards' },
        { src: '/images/academic-achievements/best-teacher-awards-02.jpg', alt: 'Best Teacher Awards' },
      ],
    },
    {
      title: 'Eklavya Awards',
      description:
        'It was a proud day for SBPCSC. Excellent performing students from Science and Commerce were called upon by Mrs Reshu Agarwal for appreciation and felicitation by Eklavya Awards. A grand celebration of culture, creativity, and learning in association with Kalagram was organised!',
      images: [
        { src: '/images/academic-achievements/eklavya-awards-01.jpg', alt: 'Eklavya Awards' },
        { src: '/images/academic-achievements/eklavya-awards-02.jpg', alt: 'Eklavya Awards' },
        { src: '/images/academic-achievements/eklavya-awards-03.jpg', alt: 'Eklavya Awards' },
      ],
    },
    {
      title: 'Academic Achievements',
      description:
        'Our teachers were felicitated at ATSS College for their dedication and contribution to academic excellence.',
      standaloneImages: [
        '/images/academic-achievements/neet-toppers-2025-26.JPG',
        '/images/academic-achievements/cet-toppers-2025-26.JPG',
        '/images/academic-achievements/cet-pcb-toppers-2025-26.JPG',
        '/images/academic-achievements/hsc-12th-2025-topper-sci.jpg',
        '/images/academic-achievements/hsc-12th-2025-topper-commerce.jpg',
        '/images/academic-achievements/kalyani-bhondave-award.jpg',
      ],
    },
    {
      title: 'Commerce Toppers Feedback',
      videos: [
        'https://www.youtube.com/embed/yhDt9kPavuI?si=qXl6eytiMDJ2Pgys',
        'https://www.youtube.com/embed/kfSSXFfdmMg?si=zh0gC2oLkXYfNB77',
      ],
    },
    {
      title: 'Feedback of Science second Topper - Adarsh Shukla',
      description:
        'Adarsh Shukla, the Science second topper of HSC March 2024, shares his journey, preparation strategy, and experience at S.B. Patil College of Science and Commerce.',
      videos: ['https://www.youtube.com/embed/j-zdUf-gIDA?si=-KCiP6A9Eup_myuQ'],
    },
    {
      title: 'Felicitation of Toppers students of HSC March 2024',
      images: [
        { src: '/images/academic-achievements/toppers-students-2024-1.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-2.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-3.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-4.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-5.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-6.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-7.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-8.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-9.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-10.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-11.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
        { src: '/images/academic-achievements/toppers-students-2024-12.JPG', alt: 'Felicitation of Toppers HSC March 2024' },
      ],
    },
    {
      title: 'CET & NEET Achievements 2024',
      standaloneImages: [
        '/images/academic-achievements/cet-toppers-result-2024.jpg',
        '/images/academic-achievements/neet-result-2023-24.jpeg',
        '/images/academic-achievements/result-2023-24.jpg',
        '/images/academic-achievements/mast-ayush-pravin-avhad.jpg',
        '/images/academic-achievements/mht-cet-pcm-2023.jpg',
      ],
    },
    {
      title: 'HSC Result 2023',
      images: [
        { src: '/images/academic-achievements/toppers-science-23.jpg', alt: 'HSC Science Toppers 2023' },
        { src: '/images/academic-achievements/toppers-commerce-23.jpg', alt: 'HSC Commerce Toppers 2023' },
      ],
    },
    {
      title: 'Felicitation of students who passed MH-CET 2022 with high score',
      images: [
        { src: '/images/academic-achievements/SBPCSC-MHCET-RESULT-2022-1.jpg', alt: 'MH-CET 2022 Result' },
        { src: '/images/academic-achievements/SBPCSC-MHCET-RESULT-2022-2.jpg', alt: 'MH-CET 2022 Result' },
        { src: '/images/academic-achievements/SBPCSC-MHCET-RESULT-2022-3.jpg', alt: 'MH-CET 2022 Result' },
        { src: '/images/academic-achievements/SBPCSC-MHCET-RESULT-2022-4.jpg', alt: 'MH-CET 2022 Result' },
        { src: '/images/academic-achievements/SBPCSC-MHCET-RESULT-2022-5.jpg', alt: 'MH-CET 2022 Result' },
        { src: '/images/academic-achievements/SBPCSC-MHCET-RESULT-2022-6.jpg', alt: 'MH-CET 2022 Result' },
      ],
    },
    {
      title: 'Siddharth Wakchoure',
      standaloneImages: ['/images/academic-achievements/siddharth-wakchoure.jpg'],
    },
    {
      title: 'HSC RESULT 2022',
      images: [
        { src: '/images/academic-achievements/hsc-science-topper-2021-22.jpg', alt: 'HSC Science Topper 2021-22' },
        { src: '/images/academic-achievements/hsc-commerce-topper-2021-22.jpg', alt: 'HSC Commerce Topper 2021-22' },
      ],
    },
    {
      title: 'HSC RESULT 2021',
      images: [
        { src: '/images/academic-achievements/HSC-Results-2021-SBPCSC.jpg', alt: 'HSC Result 2021' },
      ],
    },
    {
      title: 'Felicitation of toppers students of both Science and Commerce by Honorable Trustees',
      images: [
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-1.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-2.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-3.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-4.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-5.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-6.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-7.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-8.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-9.jpg', alt: 'HSC Result 2021 Felicitation' },
        { src: '/images/academic-achievements/SBPCSC-HSC-RESULT-2021-10.jpg', alt: 'HSC Result 2021 Felicitation' },
      ],
    },
    {
      title: 'Gargee Dashputre',
      description:
        'Proud to announce that our student Miss Gargee Dashputre secured 98.37 percentile in JEE Main Paper 2 conducted in Feb 2021. Gargee is felicitated by Hon.PCETs Trustee for her achievement.',
      images: [
        { src: '/images/academic-achievements/gargee-dashputre-1.jpg', alt: 'Gargee Dashputre' },
      ],
    },
    {
      title: 'Toppers of CET 2020',
      standaloneImages: ['/images/academic-achievements/toppers-of-cet-2020-1.jpg'],
      images: [
        { src: '/images/academic-achievements/achi-1-2019.jpg', alt: 'CET 2020 Achievement' },
        { src: '/images/academic-achievements/achi-2-2019.jpg', alt: 'CET 2020 Achievement' },
        { src: '/images/academic-achievements/achi-3-2019.jpg', alt: 'CET 2020 Achievement' },
        { src: '/images/academic-achievements/achi-4-2019.jpg', alt: 'CET 2020 Achievement' },
        { src: '/images/academic-achievements/achi-5-2019.jpg', alt: 'CET 2020 Achievement' },
      ],
    },
    {
      title: 'HSC SCIENCE 2018 RANKERS',
      description:
        '1. Miss. Ashwini Gadade - 89.69%\n2. Mr. Chirag Doshi - 84.31%\n3. Mr. Daksh Patel - 82.46%',
    },
    {
      title: 'HSC BOARD 2018 RESULT',
      description: 'Scoring 100% Result in Science HSC BOARD 2018',
      images: [
        { src: '/images/academic-achievements/result18Img.jpg', alt: 'HSC Board 2018 Result' },
      ],
    },
    {
      title: 'HSC BOARD 2017 RESULT',
      description: 'Scoring 100% Result in Science HSC BOARD 2017',
      images: [
        { src: '/images/academic-achievements/achievments17.jpg', alt: 'HSC Board 2017 Result' },
      ],
    },
    {
      title: 'RESULT NEET 2017',
      tableRows: [
        { image: '/images/academic-achievements/akash.jpg', name: 'Aakash Bongane' },
        { image: '/images/academic-achievements/devika.jpg', name: 'Devika Chandrakant' },
        { image: '/images/academic-achievements/nehal.jpg', name: 'Nehal Waghchoure' },
        { image: '/images/academic-achievements/snehal.jpg', name: 'Snehal Patil' },
      ],
      horizontalLayout: true,
    },
    {
      title: 'HSC 2017 Rankers',
      description: 'Top rankers of HSC Science 2017:',
      tableRows: [
        { image: '/images/academic-achievements/akshara.jpg', name: 'Akshara Vineeth Edathara', detail: 'First Rank' },
        { image: '/images/academic-achievements/mahadik.jpg', name: 'Shubham Sanjay Mahadik', detail: 'Second Rank' },
        { image: '/images/academic-achievements/rutuja-kul.jpg', name: 'Rutuja Santosh Kulkarni', detail: 'Third Rank' },
        { image: '/images/academic-achievements/dhawade.jpg', name: 'Shruti Dhawade', detail: 'Fourth Rank' },
      ],
    },
  ],
  coCurricular: {
    medalTables: [
      {
        year: '2025-26',
        events: [
          { name: 'RollBall', gold: 0, silver: 0, bronze: 12, total: 12 },
          { name: 'Taekwondo', gold: 1, silver: 0, bronze: 2, total: 3 },
          { name: 'Weight Lifting', gold: 0, silver: 1, bronze: 1, total: 2 },
          { name: 'Judo', gold: 5, silver: 1, bronze: 1, total: 7 },
          { name: 'Roller Skating', gold: 2, silver: 2, bronze: 0, total: 4 },
          { name: 'Boxing', gold: 0, silver: 0, bronze: 1, total: 1 },
          { name: 'Wrestling', gold: 1, silver: 2, bronze: 1, total: 4 },
          { name: 'Athletics', gold: 1, silver: 1, bronze: 2, total: 4 },
          { name: 'Swimming', gold: 0, silver: 1, bronze: 0, total: 1 },
          { name: 'Kabbadi', gold: 0, silver: 0, bronze: 1, total: 1 },
          { name: 'Kick Boxing', gold: 0, silver: 0, bronze: 1, total: 1 },
          { name: 'Volley Ball', gold: 12, silver: 0, bronze: 0, total: 12 },
          { name: 'DodgeBall', gold: 0, silver: 12, bronze: 0, total: 12 },
        ],
        total: { gold: 22, silver: 20, bronze: 22, total: 64 },
        image: '/images/co-curricular-activities/zp-sports-competition-winners-2025-26.jpg',
      },
      {
        year: '2024-25',
        events: [
          { name: 'Archery(I R)', gold: 1, silver: 0, bronze: 0, total: 1 },
          { name: 'Judo', gold: 5, silver: 3, bronze: 2, total: 10 },
          { name: 'Weight Lifting', gold: 0, silver: 1, bronze: 0, total: 1 },
          { name: 'Boxing', gold: 1, silver: 0, bronze: 1, total: 2 },
          { name: 'Wrestling', gold: 3, silver: 4, bronze: 3, total: 10 },
          { name: 'Athletics', gold: 2, silver: 1, bronze: 5, total: 8 },
          { name: 'Cricket', gold: 0, silver: 0, bronze: 12, total: 12 },
          { name: 'Kabbadi', gold: 0, silver: 0, bronze: 12, total: 12 },
          { name: 'Kho Kho', gold: 0, silver: 12, bronze: 0, total: 12 },
          { name: 'Dodge Ball', gold: 0, silver: 0, bronze: 12, total: 12 },
        ],
        total: { gold: 12, silver: 21, bronze: 47, total: 80 },
        image: '/images/co-curricular-activities/zp-sports-competition-winners-felicitation.JPG',
      },
      {
        year: '2023-24',
        events: [
          { name: 'Archery(I R)', gold: 1, silver: 0, bronze: 1, total: 2 },
          { name: 'Cycling', gold: 1, silver: 0, bronze: 0, total: 1 },
          { name: 'Judo', gold: 3, silver: 2, bronze: 1, total: 6 },
          { name: 'Weight Lifting', gold: 2, silver: 1, bronze: 0, total: 3 },
          { name: 'Roller Skating', gold: 1, silver: 0, bronze: 0, total: 1 },
          { name: 'Fencing', gold: 0, silver: 0, bronze: 1, total: 1 },
          { name: 'Boxing', gold: 2, silver: 0, bronze: 1, total: 3 },
          { name: 'Wrestling', gold: 2, silver: 2, bronze: 3, total: 7 },
          { name: 'Tug of War', gold: 0, silver: 12, bronze: 0, total: 12 },
          { name: 'Athletics', gold: 0, silver: 1, bronze: 9, total: 10 },
          { name: 'Football', gold: 0, silver: 0, bronze: 16, total: 16 },
          { name: 'Cricket', gold: 0, silver: 0, bronze: 12, total: 12 },
          { name: 'Speedball', gold: 0, silver: 12, bronze: 0, total: 12 },
          { name: 'Kabbadi', gold: 0, silver: 12, bronze: 0, total: 12 },
          { name: 'Kho Kho', gold: 12, silver: 0, bronze: 0, total: 12 },
          { name: 'Aatya Patya', gold: 0, silver: 12, bronze: 0, total: 12 },
        ],
        total: { gold: 24, silver: 54, bronze: 44, total: 122 },
      },
      {
        year: '2019-20',
        events: [
          { name: 'Chess', gold: 2, silver: 1, bronze: 2, total: 5 },
          { name: 'Karate', gold: 5, silver: 1, bronze: 0, total: 6 },
          { name: 'Kick Boxing', gold: 3, silver: 0, bronze: 0, total: 3 },
          { name: 'Weight Lifting', gold: 0, silver: 1, bronze: 0, total: 1 },
          { name: 'Fencing', gold: 1, silver: 2, bronze: 1, total: 4 },
          { name: 'Boxing', gold: 1, silver: 1, bronze: 1, total: 3 },
          { name: 'Wrestling', gold: 2, silver: 0, bronze: 3, total: 5 },
          { name: 'Badminton', gold: 0, silver: 4, bronze: 3, total: 7 },
          { name: 'Speed Ball', gold: 12, silver: 12, bronze: 1, total: 25 },
          { name: 'Athletics', gold: 0, silver: 7, bronze: 3, total: 10 },
          { name: 'Football', gold: 0, silver: 0, bronze: 16, total: 16 },
          { name: 'Cricket', gold: 1, silver: 0, bronze: 0, total: 1 },
          { name: 'Handball', gold: 0, silver: 0, bronze: 10, total: 10 },
          { name: 'Kabbadi', gold: 0, silver: 12, bronze: 0, total: 12 },
        ],
        total: { gold: 27, silver: 41, bronze: 40, total: 108 },
      },
    ],
    achievements: [
      {
        title: 'Competition: Inter-College Competition',
        description: 'Host Institution: Indira College of Art, Commerce, and Science, Pune. Prize: First Place, Trophy, and ₹10,000 Cash Prize.',
        images: [
          { src: '/images/gallery/activities/2024-25/certification-inter-college-competition-01.webp', alt: 'Inter-College Competition' },
          { src: '/images/gallery/activities/2024-25/certification-inter-college-competition-02.webp', alt: 'Inter-College Competition' },
          { src: '/images/gallery/activities/2024-25/certification-inter-college-competition-03.webp', alt: 'Inter-College Competition' },
          { src: '/images/gallery/activities/2024-25/certification-inter-college-competition-04.webp', alt: 'Inter-College Competition' },
        ],
      },
      {
        title: 'Archery and Cycling both with GOLD Medal',
        images: [
          { src: '/images/co-curricular-activities/archery-and-cycling-g1.jpg', alt: 'Archery GOLD Medal' },
          { src: '/images/co-curricular-activities/archery-and-cycling-g2.jpg', alt: 'Cycling GOLD Medal' },
        ],
      },
      {
        title: 'Rajan Mahajan secured GOLD Medal in Roller Skating in Zilla Parishad Level',
        images: [
          { src: '/images/co-curricular-activities/rajan-mahajan.jpg', alt: 'Rajan Mahajan GOLD Medal Roller Skating' },
        ],
      },
      {
        title: 'Secured Bronze Medal 100 X 4 Relay in Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/medal-relay.jpg', alt: 'Bronze Medal 100x4 Relay' },
        ],
      },
      {
        title: 'Yash Sachin Gosavi secured GOLD Medal in Weight Lifting 90kg under 19yrs at Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/yash-sachin-gosavi.jpg', alt: 'Yash Sachin Gosavi GOLD Weight Lifting' },
          { src: '/images/co-curricular-activities/yash-sachin-gosavi-2.jpg', alt: 'Yash Sachin Gosavi GOLD Weight Lifting' },
        ],
      },
      {
        title: 'SILVER Medal in Football under 19 in Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/medal in-football.jpg', alt: 'SILVER Medal Football' },
        ],
      },
      {
        title: 'SILVER Medal in AAtyaPatya in Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/medal-in-aatyapatya.jpg', alt: 'SILVER Medal AAtyaPatya' },
        ],
      },
      {
        title: '2nd Prize in TugofWar at Symbi Utsav',
        images: [
          { src: '/images/co-curricular-activities/tugofwar-at-symbi.jpg', alt: '2nd Prize TugofWar' },
        ],
      },
      {
        title: 'Gold and Silver Medal in Wrestling at Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/gold-and-silver-medal-in-wrestling.jpg', alt: 'Gold and Silver Medal Wrestling' },
          { src: '/images/co-curricular-activities/gold-and-silver-medal-in-wrestling-2.jpg', alt: 'Gold and Silver Medal Wrestling' },
          { src: '/images/co-curricular-activities/gold-and-silver-medal-in-wrestling-3.jpg', alt: 'Gold and Silver Medal Wrestling' },
        ],
      },
      {
        title: 'GOLD Medal in Boxing under 17 & 19yrs at Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/boxing-gold-medal.jpg', alt: 'GOLD Medal Boxing' },
          { src: '/images/co-curricular-activities/boxing-gold-medal-2.jpg', alt: 'GOLD Medal Boxing' },
        ],
      },
      {
        title: 'Gold and Silver Medal in Judo at Zilla Parishad',
        images: [
          { src: '/images/co-curricular-activities/medal in-judo-1.jpg', alt: 'Gold and Silver Medal Judo' },
          { src: '/images/co-curricular-activities/medal in-judo-2.jpg', alt: 'Gold and Silver Medal Judo' },
        ],
      },
      {
        title: '1st Prize in KHO KHO',
        images: [
          { src: '/images/co-curricular-activities/prize-in-kho-kho.jpg', alt: '1st Prize KHO KHO' },
        ],
      },
      {
        title: "Sport's Teacher Achievement",
        images: [
          { src: '/images/co-curricular-activities/sport\'s-teacher-achievement-1.jpg', alt: 'Sport Teacher Achievement' },
          { src: '/images/co-curricular-activities/sport\'s-teacher-achievement-2.jpg', alt: 'Sport Teacher Achievement' },
          { src: '/images/co-curricular-activities/sport\'s-teacher-achievement-3.jpg', alt: 'Sport Teacher Achievement' },
        ],
      },
      {
        title: '12th Commerce student Mast.Rajan Mahajan secured Gold Medal in State level Cycling Road Race',
        images: [
          { src: '/images/co-curricular-activities/cycling-road-race-01.jpg', alt: 'Rajan Mahajan Gold Medal Cycling Road Race' },
        ],
      },
      {
        title: '12th Science student Mast.Yash Nanaware won 1st prize in Kickboxing Championship at National Level',
        images: [
          { src: '/images/co-curricular-activities/yash-nanaware-won-1st-prize-kickboxing.jpg', alt: 'Yash Nanaware 1st Prize Kickboxing National' },
          { src: '/images/co-curricular-activities/certificate-210907.JPG', alt: 'Yash Nanaware Certificate' },
        ],
      },
      {
        title: 'Sports Achievement in A.Y. 2019-20',
        images: [
          { src: '/images/co-curricular-activities/sports-achievement-2020-1.JPG', alt: 'Sports Achievement 2019-20' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-2.JPG', alt: 'Sports Achievement 2019-20' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-3.JPG', alt: 'Sports Achievement 2019-20' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-4.JPG', alt: 'Sports Achievement 2019-20' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-5.JPG', alt: 'Sports Achievement 2019-20' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-6.JPG', alt: 'Sports Achievement 2019-20' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-7.JPG', alt: 'Sports Achievement 2019-20' },
        ],
      },
      {
        title: 'GUNWANT KRIDA SHIKSHAK PURSKAR 2019-2020 to Mr. Pradeep Kasar',
        images: [
          { src: '/images/co-curricular-activities/sports-achievement-2020-8.JPG', alt: 'Gunwant Krida Shikshak Puraksar' },
          { src: '/images/co-curricular-activities/sports-achievement-2020-9.JPG', alt: 'Gunwant Krida Shikshak Puraksar' },
        ],
      },
      {
        title: 'Sport Achievement for Academic 2019-20 at District Level, Zone level, State Level',
        images: [
          { src: '/images/co-curricular-activities/achievement-1.jpeg', alt: 'Sport Achievement 2019-20' },
          { src: '/images/co-curricular-activities/achievement-2.jpeg', alt: 'Sport Achievement 2019-20' },
          { src: '/images/co-curricular-activities/distric-olympic-compition.jpg', alt: 'District Olympic Competition' },
          { src: '/images/co-curricular-activities/activity1.jpg', alt: 'Sport Activity' },
          { src: '/images/co-curricular-activities/activity2.jpg', alt: 'Sport Activity' },
          { src: '/images/co-curricular-activities/activity3.jpg', alt: 'Sport Activity' },
          { src: '/images/co-curricular-activities/activity4.jpg', alt: 'Sport Activity' },
          { src: '/images/co-curricular-activities/activity5.jpg', alt: 'Sport Activity' },
          { src: '/images/co-curricular-activities/activity6.jpg', alt: 'Sport Activity' },
        ],
      },
      {
        title: 'Won 2nd Prize in Mine Act and 3rd Prize in Short Film at Morya Youth Festival 2019',
        images: [
          { src: '/images/co-curricular-activities/achievements-morya-youth-festival-2019.jpg', alt: 'Morya Youth Festival 2019' },
        ],
      },
      {
        title: 'Sports News Article',
        images: [
          { src: '/images/co-curricular-activities/sportsArticle.jpg', alt: 'Sports News Article' },
          { src: '/images/co-curricular-activities/sportsAchievement1.jpg', alt: 'Sports Achievement' },
          { src: '/images/co-curricular-activities/sportsAchievement2.jpeg', alt: 'Sports Achievement' },
          { src: '/images/co-curricular-activities/achievement1.jpg', alt: 'Sports Achievement' },
          { src: '/images/co-curricular-activities/achievement3.jpg', alt: 'Sports Achievement' },
          { src: '/images/co-curricular-activities/achievement2.jpg', alt: 'Sports Achievement' },
          { src: '/images/co-curricular-activities/achievement4.jpg', alt: 'Sports Achievement' },
        ],
      },
      {
        title: 'Students of 11th IIT Won 2nd Runner in Aditya Birla Memorial Interschool Business Quiz',
        description: 'Miss. Muskan Shikalgar, Miss. Meghana Joshi, Mr. Yashwardhan Dixit',
        images: [
          { src: '/images/co-curricular-activities/aditya-birla-memorial-interschool-business-quiz.jpg', alt: 'Aditya Birla Memorial Interschool Business Quiz' },
        ],
      },
      {
        title: 'SPORTS 2017',
        description: 'YASH WALEHKAR won GOLD MEDAL in Kickboxing Championship conducted by Pune Zilla Parishad, September 2017',
        images: [
          { src: '/images/co-curricular-activities/gold-medal.jpg', alt: 'Yash Walehkar Gold Medal Kickboxing 2017' },
        ],
      },
      {
        title: 'District Level Sports Competitions',
        description:
          'Our S.B. Patil College of Science & Commerce shows remarkable performances in District level Sports Competitions conducted by Pimpri Chinchwad Co-operation in association with Zilha Krida Adhikari Karyalaya Pune & Krida Seva Sanchnalaya Maharashtra Rajya. The Details are as follows: Pruthaviraj Patil (XI) - Lawn Tennis - First; Ramananad Gawade (XII) - Athletics 200m - First; Ramananad Gawade (XII) - Athletics 100m - Second; Ms. Komal Chaudhari (XI) - Karate - Second; Vikrant Kulkarni (XI) - Karate - Third.',
        images: [
          { src: '/images/co-curricular-activities/achive-1.jpg', alt: 'District Level Sports' },
          { src: '/images/co-curricular-activities/achive-2.jpg', alt: 'District Level Sports' },
        ],
      },
    ],
  },
}