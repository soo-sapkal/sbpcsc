import type { GalleryImage, GalleryYear } from "@/types/gallery"

function img(src: string, alt: string): GalleryImage {
  return { src, alt }
}

function mkImages(
  basePath: string,
  prefix: string,
  count: number,
  eventName: string,
  pad = 0,
  ext = ".webp"
): GalleryImage[] {
  const result: GalleryImage[] = []
  for (let i = 1; i <= count; i++) {
    const num = pad > 0 ? String(i).padStart(pad, "0") : String(i)
    result.push(img(`${basePath}${prefix}${num}${ext}`, `${eventName} - Photo ${i}`))
  }
  return result
}

function mkImagesCustom(
  basePath: string,
  filenames: string[],
  eventName: string
): GalleryImage[] {
  return filenames.map((f, i) => img(`${basePath}${f}`, `${eventName} - Photo ${i + 1}`))
}

export const activitiesGallery: GalleryYear[] = [
  // =========================================================================
  // 2026-27
  // =========================================================================
  {
    year: "2026-27",
    label: "2026-27",
    events: [
      {
        name: "International Yoga Day Celebration",
        anchorId: "international-yoga-day-celebration",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2026-27/",
          "yoga-day-celebration-",
          7,
          "International Yoga Day Celebration"
        ),
      },
      {
        name: "Celebration of World Environment Day",
        anchorId: "celebration-of-world-environment-day",
        type: "activities",
        description:
          "S B Patil college of Science & Commerce, Ravet celebrated World Environment Day with enthusiasm and purpose. The program aimed to spread awareness about plastic pollution and encourage sustainable habits among students and staff.",
        images: mkImages(
          "/images/gallery/activities/2026-27/",
          "celebration-environment-day-",
          7,
          "Celebration of World Environment Day"
        ),
      },
    ],
  },

  // =========================================================================
  // 2025-26
  // =========================================================================
  {
    year: "2025-26",
    label: "2025-26",
    events: [
      {
        name: "SBPCSC Students Trip to Wet n Joy, Kamshet",
        anchorId: "sbpcsc-students-trip-to-wet-n-joy-kamshet",
        type: "activities",
        images: [
          img(
            "/images/gallery/activities/2025-26/trip-to-wet-n-joy.webp",
            "SBPCSC Students Trip to Wet n Joy, Kamshet"
          ),
        ],
      },
      {
        name: "Celebration of Vasundhara Diwas",
        anchorId: "celebration-of-vasundhara-diwas",
        type: "activities",
        description:
          "Vasundhara Diwas highlights the need to protect the planet from pollution and climate change, encouraging actions like tree planting, cleaning, and adopting eco-friendly habits. SBPCSC Celebrated this day by cleaning the Pawana river side area along with PCMC team. Students joined hands with PCMC members and cleaned the riverside area.",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "celebration-vasundhara-diwas-",
          6,
          "Celebration of Vasundhara Diwas"
        ),
      },
      {
        name: "Pariksha Pe Charcha",
        anchorId: "pariksha-pe-charcha",
        type: "activities",
        description:
          "At Pariksha Pe Charcha, PM Modi engaged in a lively chat with students at New Delhi. From tackling exam stress to mastering time, PM Modi shared wisdom on leadership, wellness, and chasing dreams. SBPCSC students of class 12th got engross in listening our Hon. Prime Minister.",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "pariksha-pe-charcha-",
          3,
          "Pariksha Pe Charcha",
          2
        ),
      },
      {
        name: "Celebration of 77th Republic Day",
        anchorId: "celebration-of-77th-republic-day",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "celebration-of-77th-republic-day-",
          4,
          "Celebration of 77th Republic Day",
          2
        ),
      },
      {
        name: "Cultural Annual Gathering: Navarasa Utsav",
        anchorId: "navarasa-utsav",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "navarasa-utsav-",
          10,
          "Cultural Annual Gathering: Navarasa Utsav",
          2
        ),
      },
      {
        name: "Visit to S.B. Patil College of Architecture and Design, Akurdi",
        anchorId: "visit-to-sb-patil-college-of-architecture-and-design-akurdi",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "visit-to-sbpcoad-",
          5,
          "Visit to S.B. Patil College of Architecture and Design, Akurdi"
        ),
      },
      {
        name: "Visit to Tolani Maritime Institute",
        anchorId: "visit-to-tolani-maritime-institute",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "visit-to-tolani-maritime-institute-",
          10,
          "Visit to Tolani Maritime Institute"
        ),
      },
      {
        name: "BRAINWAVES 2025",
        anchorId: "brainwaves-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "brainwaves-2025-",
          15,
          "BRAINWAVES 2025"
        ),
      },
      {
        name: "FunFair 2025",
        anchorId: "funfair-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "sbpcsc-fun-fair-2025-",
          10,
          "FunFair 2025"
        ),
      },
      {
        name: "SBPCSC visits PCU",
        anchorId: "sbpcsc-visits-pcu",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "sbpcsc-visits-pcu-",
          10,
          "SBPCSC visits PCU",
          2
        ),
      },
      {
        name: "Poster Making Competition",
        anchorId: "poster-making-competition-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "poster-making-competition-",
          9,
          "Poster Making Competition",
          2
        ),
      },
      {
        name: "Dandiya Raas with SBPCSC Science and Commerce students",
        anchorId: "dandiya-raas-with-sbpcsc-science-and-commerce-students",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "dandiya-raas-",
          7,
          "Dandiya Raas",
          2
        ),
      },
      {
        name: "Teachers Day Celebration",
        anchorId: "teachers-day-celebration-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "teachers-day-celebration-",
          3,
          "Teachers Day Celebration",
          2
        ),
      },
      {
        name: "Ganpati Idol Making Competition",
        anchorId: "ganpati-idol-making-competition",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "ganpati- idol-making-competition-",
          5,
          "Ganpati Idol Making Competition"
        ),
      },
      {
        name: "Rakhi Celebration with Masti ki Pathshala",
        anchorId: "rakhi-celebration-with-masti-ki-pathshala",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "rakhi-celebration-2025-",
          11,
          "Rakhi Celebration with Masti ki Pathshala"
        ),
      },
      {
        name: "Induction Program AY 2025-26",
        anchorId: "induction-program-ay-2025-26",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "induction-program-ay-2025-26-",
          15,
          "Induction Program AY 2025-26"
        ),
      },
      {
        name: "Celebration of Independence Day",
        anchorId: "celebration-of-independence-day-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "independence-day-",
          10,
          "Celebration of Independence Day",
          2
        ),
      },
      {
        name: "Dental Checkup Camp",
        anchorId: "dental-checkup-camp",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "dental-checkup-camp-",
          8,
          "Dental Checkup Camp",
          2
        ),
      },
      {
        name: "Guru Purnima Celebration",
        anchorId: "guru-purnima-celebration",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "guru-pornima-celebration-",
          12,
          "Guru Purnima Celebration",
          2
        ),
      },
      {
        name: "Fun Fair Celebration on 24th June 2025",
        anchorId: "fun-fair-celebration-on-24th-june-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "fun-fair-celebration-",
          6,
          "Fun Fair Celebration on 24th June 2025",
          2
        ),
      },
      {
        name: "Extempore Competition",
        anchorId: "extempore-competition",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "extempore-competition-",
          5,
          "Extempore Competition",
          2
        ),
      },
      {
        name: "Celebration of International Yoga Day",
        anchorId: "celebration-of-international-yoga-day-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "celebration-of-international-yoga-day-",
          14,
          "Celebration of International Yoga Day",
          2
        ),
      },
      {
        name: "World Environment Day Celebration",
        anchorId: "world-environment-day-celebration-2025",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2025-26/",
          "world-environment-day-celebration-",
          10,
          "World Environment Day Celebration",
          2
        ),
      },
    ],
  },

  // =========================================================================
  // 2024-25
  // =========================================================================
  {
    year: "2024-25",
    label: "2024-25",
    events: [
      {
        name: "Happy Thoughts Meditation Session",
        anchorId: "happy-thoughts-meditation-session",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "happy-thoughts-meditation-session-",
          6,
          "Happy Thoughts Meditation Session",
          2
        ),
      },
      {
        name: "SBPCSC College picnic of class 11th Science and Commerce to Wet n Joy Water Park",
        anchorId: "sbpcsc-college-picnic-of-class-11th-science-and-commerce-to-wet-n-joy-water-park",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "sbpcsc-picnic-2025-",
          5,
          "SBPCSC College picnic of class 11th Science and Commerce to Wet n Joy Water Park",
          2
        ),
      },
      {
        name: "Celebration of Mahatma Jyotiba Phule Jayanti",
        anchorId: "celebration-of-mahatma-jyotiba-phule-jayanti",
        type: "activities",
        images: [
          img(
            "/images/gallery/activities/2024-25/celebration-mhatma-phule-jayanti-2025.webp",
            "Celebration of Mahatma Jyotiba Phule Jayanti"
          ),
        ],
      },
      {
        name: "National Science Day - poster making competition",
        anchorId: "national-science-day-poster-making-competition",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "national-science-day-",
          5,
          "National Science Day - poster making competition",
          2
        ),
      },
      {
        name: "Celebration on Sant Gadge Baba Jayanti",
        anchorId: "celebration-on-sant-gadge-baba-jayanti",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "sant-gadge-baba-jayanti-",
          8,
          "Celebration on Sant Gadge Baba Jayanti",
          0
        ),
      },
      {
        name: "Pariksha Pe Charcha Live Session",
        anchorId: "pariksha-pe-charcha-live-session",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "exam-warriors-",
          6,
          "Pariksha Pe Charcha Live Session",
          2
        ),
      },
      {
        name: 'Annual Gathering "UTSAV"',
        anchorId: "annual-gathering-utsav",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "annual-gathering-program-2024-",
          5,
          "Annual Gathering UTSAV",
          2
        ),
      },
      {
        name: 'The S.B. Patil College of Science & Commerce, Ravet organized the Science Exhibition named "BRAINWAVES"',
        anchorId: "brainwaves-science-exhibition",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "brainwaves-activity-2024-",
          22,
          "BRAINWAVES Science Exhibition",
          2
        ),
      },
      {
        name: "SBPCSC had arranged guest lecture under Vishakha Committee task for girls students",
        anchorId: "vishakha-committee-guest-lecture",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "vishakha-committee-",
          9,
          "Vishakha Committee Guest Lecture",
          2
        ),
      },
      {
        name: "SBPCSC had arranged 12th class students to visit Pimpri Chinchwad University",
        anchorId: "sbpcsc-12th-class-visit-to-pimpri-chinchwad-university",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "visit-pcu-",
          7,
          "Visit to Pimpri Chinchwad University",
          2
        ),
      },
      {
        name: "Drone Making Workshop",
        anchorId: "drone-making-workshop",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "drone-making-workshop-",
          6,
          "Drone Making Workshop"
        ),
      },
      {
        name: "Certification - Girls Shine at Inter-College Competition!",
        anchorId: "certification-girls-shine-at-inter-college-competition",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "certification-inter-college-competition-",
          4,
          "Certification - Girls Shine at Inter-College Competition",
          2
        ),
      },
      {
        name: "Poster Making Competition",
        anchorId: "poster-making-competition-2024",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "poster-making-competition-",
          7,
          "Poster Making Competition"
        ),
      },
      {
        name: "FunFair organised by 11th class students",
        anchorId: "funfair-organised-by-11th-class-students",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "funFair-organises-",
          4,
          "FunFair organised by 11th class students",
          2
        ),
      },
      {
        name: "SBPCSC had arranged visit to SBPCOAD Akurdi - NATA Aspirants",
        anchorId: "sbpcsc-visit-to-sbpcoad-akurdi-nata-aspirants",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "nata-admission-process-",
          7,
          "Visit to SBPCOAD Akurdi - NATA Aspirants",
          2
        ),
      },
      {
        name: "SBPCSC conducted a special session by the Gynecologist Doctor team",
        anchorId: "gynecologist-doctor-special-session",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2024-25/",
          [
            "gynecologist-doctor-01.webp",
            "gynecologist-doctor-02.webp",
            "gynecologist-doctor-03.webp",
            "gynecologist-doctor-04.webp",
            "gynecologist-doctor-05.webp",
            "gynecologist-doctor-06.webp",
            "gynecologist-doctor-07.webp",
            "gynecologist-doctor-08.webp",
            "gynecologist-doctor-09.webp",
            "gynecologist-doctor-10.webp",
            "gynecologist-doctor-11.webp",
            "gynecologist-doctor-13.webp",
            "gynecologist-doctor-14.webp",
            "gynecologist-doctor-15.webp",
            "gynecologist-doctor-16.webp",
            "gynecologist-doctor-17.webp",
            "gynecologist-doctor-18.webp",
          ],
          "Gynecologist Doctor Session"
        ),
      },
      {
        name: "Eco-friendly Ganesh Idol Making Workshop",
        anchorId: "eco-friendly-ganesh-idol-making-workshop",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "eco-friendly-ganesh-idol-making-",
          9,
          "Eco-friendly Ganesh Idol Making Workshop",
          2
        ),
      },
      {
        name: "CS and IT students attended free courses training from Infosys SpringBoard",
        anchorId: "cs-and-it-students-attended-free-courses-training-from-infosys-springboard",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2024-25/",
          [
            "training-from-infosys-01.webp",
            "training-from-infosys-02.webp",
            "training-from-infosys-03.webp",
            "training-from-infosys-04.webp",
            "training-from-infosys-06.webp",
            "training-from-infosys-07.webp",
            "training-from-infosys-08.webp",
            "training-from-infosys-10.webp",
          ],
          "Infosys SpringBoard Training"
        ),
      },
      {
        name: "Induction Programme of class 11th Academic Year 2024-25",
        anchorId: "induction-programme-of-class-11th-academic-year-2024-25",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2024-25/",
          [
            "induction-programme-2024-25-01.webp",
            "induction-programme-2024-25-03.webp",
            "induction-programme-2024-25-04.webp",
            "induction-programme-2024-25-05.webp",
            "induction-programme-2024-25-06.webp",
            "induction-programme-2024-25-07.webp",
            "induction-programme-2024-25-08.webp",
            "induction-programme-2024-25-09.webp",
          ],
          "Induction Programme 2024-25"
        ),
      },
      {
        name: "Celebration of Granth Dindi in SBPCSC",
        anchorId: "celebration-of-granth-dindi-in-sbpcsc",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "celebration-granth-dindi-",
          18,
          "Celebration of Granth Dindi",
          2
        ),
      },
      {
        name: "NEP 2020 seminar",
        anchorId: "nep-2020-seminar",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "nep-2020-seminar-",
          5,
          "NEP 2020 seminar",
          2
        ),
      },
      {
        name: "World Environmental Day 2024-25",
        anchorId: "world-environmental-day-2024-25",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "world-environmental-day-",
          6,
          "World Environmental Day 2024-25",
          2
        ),
      },
      {
        name: "International Yoga Day Celebration 2024-25",
        anchorId: "international-yoga-day-celebration-2024-25",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2024-25/",
          "international-yoga-day-2024-",
          7,
          "International Yoga Day Celebration 2024-25",
          2
        ),
      },
    ],
  },

  // =========================================================================
  // 2023-24
  // =========================================================================
  {
    year: "2023-24",
    label: "2023-24",
    events: [
      {
        name: "Annual Gathering",
        anchorId: "annual-gathering",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "annual-gathering-funtion-",
          20,
          "Annual Gathering",
          2
        ),
      },
      {
        name: 'Annual Gathering "Incredible India" of A.Y 2023-24',
        anchorId: "annual-gathering-incredible-india",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "Annual-Gathering-",
          5,
          "Annual Gathering Incredible India",
          2
        ),
      },
      {
        name: "Mehndi Competition for 11th class Girls",
        anchorId: "mehndi-competition-for-11th-class-girls",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2023-24/",
          [
            "Mehendi-Competition-001.webp",
            "Mehendi-Competition-002.webp",
            "Mehendi-Competition-003.webp",
            "Mehendi-Competition-004.webp",
            "Mehendi-Competition-005.webp",
            "Mehendi-Competition-006.webp",
            "Mehendi-Competition-007.webp",
            "Mehendi-Competition-008.webp",
          ],
          "Mehndi Competition"
        ),
      },
      {
        name: "Extempore competition for 11th class Science & Commerce students",
        anchorId: "extempore-competition-for-11th-class-science-and-commerce-students",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "Activity-Extempore-competition-",
          12,
          "Extempore Competition",
          2
        ),
      },
      {
        name: "Science Stream Fun Fair by 11th class Science Students",
        anchorId: "science-stream-fun-fair-by-11th-class-science-students",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "Science-Stream-Fun-Fair-",
          7,
          "Science Stream Fun Fair",
          2
        ),
      },
      {
        name: "Seminar by RTO office Pimpri Chinchwad",
        anchorId: "seminar-by-rto-office-pimpri-chinchwad",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2023-24/",
          [
            "rto-seminar-001.webp",
            "rto-seminar-003.webp",
            "rto-seminar-004.webp",
            "rto-seminar-002.webp",
          ],
          "RTO Seminar"
        ),
      },
      {
        name: "Visit of PCU Pimpri Chinchwad University Satte",
        anchorId: "visit-of-pcu-pimpri-chinchwad-university-satte",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2023-24/",
          [
            "pcu-visit-of-student-003.webp",
            "pcu-visit-of-student-004.webp",
            "pcu-visit-of-student-002.webp",
            "pcu-visit-of-student-001.webp",
          ],
          "Visit to PCU"
        ),
      },
      {
        name: "Remembering the Missile Man of India, Dr. APJ Abdul Kalam",
        anchorId: "remembering-dr-apj-abdul-kalam",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "apj-abdul-kalam-birth-anniversary-",
          4,
          "Remembering Dr. APJ Abdul Kalam",
          2
        ),
      },
      {
        name: "Celebration of Mahatma Gandhi Jayanti and Lalbahadur Shastri Jayanti",
        anchorId: "celebration-of-mahatma-gandhi-jayanti-and-lalbahadur-shastri-jayanti",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "gandhi-jayanti-",
          5,
          "Celebration of Mahatma Gandhi Jayanti and Lalbahadur Shastri Jayanti",
          2
        ),
      },
      {
        name: "Shramdaan Activity of Science students in Swachhata Hi Seva Campaign",
        anchorId: "shramdaan-activity-of-science-students-in-swachhata-hi-seva-campaign",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "Shramdaan-Activity-",
          10,
          "Shramdaan Activity",
          2
        ),
      },
      {
        name: "Death anniversary of the founder Late Shri Shankarrao Bajirao Patil",
        anchorId: "death-anniversary-of-the-founder-late-shri-shankarrao-bajirao-patil",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "death-anniversary-of-the-founder-",
          6,
          "Death anniversary of the founder",
          2
        ),
      },
      {
        name: "Celebration of Independence Day in SBPCSC Campus",
        anchorId: "celebration-of-independence-day-in-sbpcsc-campus",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "celebration-of-independence-day-",
          4,
          "Celebration of Independence Day",
          2
        ),
      },
      {
        name: "Ganesh Idol Making Competition",
        anchorId: "ganesh-idol-making-competition",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2023-24/",
          [
            "ganesh-idol-making-activity-01.webp",
            "ganesh-idol-making-activity-02.webp",
            "ganesh-idol-making-activity-03.webp",
            "ganesh-idol-making-activity-04.webp",
            "ganesh-idol-making-activity-05.webp",
          ],
          "Ganesh Idol Making Competition"
        ),
      },
      {
        name: "Teachers Day Celebration 2023-24",
        anchorId: "teachers-day-celebration-2023-24",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "teachers-day-activity-",
          10,
          "Teachers Day Celebration",
          2
        ),
      },
      {
        name: "Rakhi Making Competition",
        anchorId: "rakhi-making-competition",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2023-24/",
          [
            "rakhi-making-competition-2023-01.webp",
            "rakhi-making-competition-2023-02.webp",
            "rakhi-making-competition-2023-03.webp",
            "rakhi-making-competition-2023-04.webp",
            "rakhi-making-competition-2023-05.webp",
            "rakhi-making-competition-2023-07.webp",
            "rakhi-making-competition-2023-09.webp",
            "rakhi-making-competition-2023-12.webp",
            "rakhi-making-competition-2023-13.webp",
            "rakhi-making-competition-2023-14.webp",
            "rakhi-making-competition-2023-15.webp",
          ],
          "Rakhi Making Competition"
        ),
      },
      {
        name: "11th class Induction program",
        anchorId: "11th-class-induction-program",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "11-induction-program-",
          10,
          "11th class Induction program",
          2
        ),
      },
      {
        name: "Workshop under Faculty Training Program on Growth Mindset Masterclass",
        anchorId: "workshop-under-faculty-training-program-on-growth-mindset-masterclass",
        type: "activities",
        images: mkImagesCustom(
          "/images/gallery/activities/2023-24/",
          [
            "workshop-faculty-training-program-01.webp",
            "workshop-faculty-training-program-03.webp",
          ],
          "Faculty Training Program"
        ),
      },
      {
        name: "Students aspiring for NATA Visited S.B. Patil College of Architecture and Design, Akurdi",
        anchorId: "students-aspiring-for-nata-visited-sb-patil-college-of-architecture-and-design-akurdi",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "visit-to-sbpcoad-activity-",
          6,
          "Visit to SBPCOAD for NATA Aspirants",
          2
        ),
      },
      {
        name: "Mediation Session for all 12th class students",
        anchorId: "mediation-session-for-all-12th-class-students",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "heartfullness-yoga-",
          8,
          "Mediation Session for 12th class",
          2
        ),
      },
      {
        name: "Celebration of Guru Purnima",
        anchorId: "celebration-of-guru-purnima",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "guru-purnima-",
          9,
          "Celebration of Guru Purnima",
          2
        ),
      },
      {
        name: "Felicitation of HSC 2023 Toppers",
        anchorId: "felicitation-of-hsc-2023-toppers",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2023-24/",
          "felicitation-of-HSC-2023-",
          8,
          "Felicitation of HSC 2023 Toppers",
          2
        ),
      },
    ],
  },

  // =========================================================================
  // 2022-23 (simplified)
  // =========================================================================
  {
    year: "2022-23",
    label: "2022-23",
    events: [
      {
        name: "Fresher's Party 2022-23",
        anchorId: "freshers-party-2022-23",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2022-23/",
          "fresher-party-2022-23-",
          15,
          "Fresher's Party 2022-23",
          2
        ),
      },
      {
        name: "Celebration of International Yoga Day 2022-23",
        anchorId: "celebration-of-international-yoga-day-2022-23",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2022-23/",
          "international-yoga-day-",
          5,
          "Celebration of International Yoga Day 2022-23"
        ),
      },
      {
        name: "Career Guidance Seminar",
        anchorId: "career-guidance-seminar-2022-23",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2022-23/",
          "career-guidance-",
          5,
          "Career Guidance Seminar"
        ),
      },
      {
        name: "Tree Plantation Drive",
        anchorId: "tree-plantation-drive-2022-23",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2022-23/",
          "tree-plantation-",
          5,
          "Tree Plantation Drive"
        ),
      },
    ],
  },

  // =========================================================================
  // 2021-22 (simplified)
  // =========================================================================
  {
    year: "2021-22",
    label: "2021-22",
    events: [
      {
        name: "World Environment Day Celebration 2021-22",
        anchorId: "world-environment-day-celebration-2021-22",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2021-22/",
          "world-environment-day-",
          5,
          "World Environment Day Celebration 2021-22"
        ),
      },
      {
        name: "NSS Camp",
        anchorId: "nss-camp",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2021-22/",
          "nss-camp-",
          5,
          "NSS Camp"
        ),
      },
      {
        name: "Tree Plantation Drive",
        anchorId: "tree-plantation-drive-2021-22",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2021-22/",
          "tree-plantation-",
          5,
          "Tree Plantation Drive"
        ),
      },
      {
        name: "Garba Celebration",
        anchorId: "garba-celebration",
        type: "activities",
        images: mkImages(
          "/images/gallery/activities/2021-22/",
          "garba-celebration-",
          5,
          "Garba Celebration"
        ),
      },
    ],
  },
]

// =============================================================================
// GUEST LECTURES
// =============================================================================

export const guestLecturesGallery: GalleryYear[] = [
  // =========================================================================
  // 2025-26
  // =========================================================================
  {
    year: "2025-26",
    label: "2025-26",
    events: [
      {
        name: "Unmasking Cancer: What Everyone Should Know",
        anchorId: "unmasking-cancer-what-everyone-should-know",
        type: "guest-lecture",
        description:
          "To promote the well-being of educators and enhance their knowledge on maintaining good health, a Health Awareness Camp 'Unmasking Cancer: What Everyone Should Know' was organized for teachers at SBPCSC on Saturday 11th Oct 2025. A health camp focused on cancer awareness for females & to educate teachers about the importance of early detection, prevention, and management of cancer, especially cancers affecting females such as breast cancer, cervical cancer, and ovarian cancer. The camp aimed to empower female students with knowledge and provide basic health screenings. Camp was conducted by Aditya Birla Memorial Hospital doctors team; Dr. Prashant Chandra, Oncologist; Dr. Archana Thakur, Gynaecologist; Mrs. Supriya Gaikwad, Nursing Team; Mrs. Diapli Kambale, Nursing Team; Mr. Shailendra Malkhede, Marketing Team; Mr. Arpit Gaikwad, Marketing Team.",
        images: mkImages(
          "/images/gallery/guest-lecture/2025-26/",
          "unmasking-cancer-",
          7,
          "Unmasking Cancer: What Everyone Should Know",
          2,
          ".jpg"
        ),
      },
      {
        name: "Seminar on Cyber Security",
        anchorId: "seminar-on-cyber-security",
        type: "guest-lecture",
        description:
          "SPBCSC has arranged a seminar for 12th Science students from IT and CS department. Seminar topic was Cyber Security and Career in Cyber Security. Mr. Mohit Shevkar, Assist. Professor, PCU shared his expertise in Cyber Security and guided students with career options in Cyber Security.",
        images: mkImages(
          "/images/gallery/guest-lecture/2025-26/",
          "cyber-security-and-career-cyber-",
          4,
          "Seminar on Cyber Security",
          2,
          ".jpg"
        ),
      },
      {
        name: "Career Counseling Session of Commerce on Artificial Intelligence",
        anchorId: "career-counseling-session-of-commerce-on-artificial-intelligence",
        type: "guest-lecture",
        description:
          "Guest speaker Dr Manju Punia Chopra Madam (Phd, MPhil, MBA, UGC-NET, MTP), Permanent Trainer with TMTC (Tata Management Training Centre, the training and development wing of Tata Group), 14 Years of Corporate, Teaching, Research & Consulting experience. Date: 8/7/2025.",
        images: mkImages(
          "/images/gallery/guest-lecture/2025-26/",
          "career-counseling-session-ai-",
          4,
          "Career Counseling Session on AI",
          2,
          ".jpg"
        ),
      },
      {
        name: "Vishakha Committee Program",
        anchorId: "vishakha-committee-program",
        type: "guest-lecture",
        description:
          "An awareness program on 'FEMININE HYGIENE' was conducted on 13th June 2025 by Aditya Birla Education Foundation, in collaboration with Ujaas FOUNDATION for girls of S B Patil College of Science and Commerce. The objective of the program was to enhance the knowledge regarding menstrual hygiene and increased the awareness among the students and the faculty members about menstrual hygiene.",
        images: mkImages(
          "/images/gallery/guest-lecture/2025-26/",
          "vishakha-committee-program-",
          4,
          "Vishakha Committee Program",
          2,
          ".jpg"
        ),
      },
      {
        name: "The Opportunities in Merchant Navy",
        anchorId: "the-opportunities-in-merchant-navy",
        type: "guest-lecture",
        description:
          "A highly informative and engaging session on 'The Opportunities in Merchant Navy' was conducted on 12th and 13th June 2025 at the auditorium of S.B. Patil College of Science and Commerce. The event featured three distinguished speakers: Captain Kunal Gosavi, Dr. Vinod Kumar Mangwani, and Mr. Swapnil Tamhankar, who shared valuable insights into the world of the Merchant Navy and its vast career potential.",
        images: mkImages(
          "/images/gallery/guest-lecture/2025-26/",
          "opportunities-in-merchant-navy-",
          8,
          "The Opportunities in Merchant Navy",
          2,
          ".jpeg"
        ),
      },
      {
        name: "Sakal Vidya Seminar on 11th Class Online Admission Process",
        anchorId: "sakal-vidya-seminar-on-11th-class-online-admission-process",
        type: "guest-lecture",
        description:
          "SBPCSC along with Sakal Vidya conducted guidance seminar on 11th class Online Admission Process. Seminar was on 27th April 2025 Sunday at SPBCOAD Auditorium Akurdi Pune. Eminent speaker like Mr. S.N. Patil, Principal SBPCSC, Mr. Abhishek Mehta, Director MSA, Mrs. Kanchan Patil - Admission Incharge Science SBPCSC, Mrs. Swati Gawasane - Admission Incharge Commerce SBPCSC shared their valuable ideas with parents and students.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2025-26/",
          [
            "sakaal-seminar-event-01.JPG",
            "sakaal-seminar-event-02.JPG",
            "sakaal-seminar-event-03.JPG",
            "sakaal-seminar-event-04.JPG",
            "sakaal-seminar-event-05.JPG",
            "sakaal-seminar-event-06.JPG",
            "sakaal-seminar-event-07.JPG",
            "sakaal-seminar-event-08.JPG",
            "sakaal-seminar-event-09.JPG",
          ],
          "Sakal Vidya Seminar"
        ),
      },
    ],
  },

  // =========================================================================
  // 2023-24 (minimal)
  // =========================================================================
  {
    year: "2023-24",
    label: "2023-24",
    events: [
      {
        name: "Health Awareness Seminar by Vishakha Committee",
        anchorId: "health-awareness-seminar-by-vishakha-committee",
        type: "guest-lecture",
        description:
          "Under Vishakha Committee Activity, SBPCSC conducted seminar to create the Health awareness among girls students. NIMA Women's Forum Dehuroad, Doctors conducted the seminar on Menstrual Health and Hygiene Awareness. Speakers for seminar were Dr. Kulkarni General Physician, Dr. Gunjal General Physician, Dr. Galande General Physician & Skin Care.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2023-24/",
          [
            "career-guidance-health-awareness.webp",
            "career-guidance-health-awareness-01.webp",
            "career-guidance-health-awareness-02.webp",
            "career-guidance-health-awareness-03.webp",
            "career-guidance-health-awareness-04.webp",
            "career-guidance-health-awareness-05.webp",
            "career-guidance-health-awareness-06.webp",
          ],
          "Health Awareness Seminar"
        ),
      },
      {
        name: "Career Guidance for Commerce Students",
        anchorId: "career-guidance-for-commerce-students",
        type: "guest-lecture",
        description:
          "Career Guidance for 12th Commerce students was conducted on 29th Nov 2022 in college premises. The Guest speakers Dr Major Manju Punia Chopra Madam and Prof Arul Francis Sir delivered an excellent session for the students and guided them with the various career opportunities in Commerce stream.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2023-24/",
          [
            "career-guidance-commerce-session-01.webp",
            "career-guidance-commerce-session-03.webp",
            "career-guidance-commerce-session-04.webp",
            "career-guidance-commerce-session-05.webp",
            "career-guidance-commerce-session-06.webp",
            "career-guidance-commerce-session-07.webp",
          ],
          "Career Guidance for Commerce Students"
        ),
      },
      {
        name: "Career Guidance Session by Mr. Vivek Velankar",
        anchorId: "career-guidance-session-by-mr-vivek-velankar",
        type: "guest-lecture",
        description:
          "Parents' Interaction cum Career Guidance Session. Mr. Vivek Velankar Sir guided our students on Career Guidance session of class XI for both Science and Commerce stream.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2023-24/",
          [
            "career-guidance-session-01.webp",
            "career-guidance-session-02.webp",
            "career-guidance-session-03.webp",
            "career-guidance-session-04.webp",
            "career-guidance-session-05.webp",
          ],
          "Career Guidance Session"
        ),
      },
    ],
  },

  // =========================================================================
  // 2022-23 (minimal)
  // =========================================================================
  {
    year: "2022-23",
    label: "2022-23",
    events: [
      {
        name: "Career Guidance seminar for 11th and 12th Commerce students",
        anchorId: "career-guidance-seminar-for-11th-and-12th-commerce-students",
        type: "guest-lecture",
        description:
          'Career Guidance seminar for 11th and 12th Commerce students. Speaker for this program was CA. Mr. Sagar Kasat, Founder & Educator at GuideLearn. Seminar was held in our college on 26th November 2022.',
        images: mkImages(
          "/images/gallery/guest-lecture/2022-23/",
          "career-guidance-2022-23-",
          3,
          "Career Guidance Seminar 2022-23",
          2,
          ".webp"
        ),
      },
    ],
  },

  // =========================================================================
  // 2021-22 (minimal)
  // =========================================================================
  {
    year: "2021-22",
    label: "2021-22",
    events: [
      {
        name: "Career Guidance in Commerce by CA Sagar Kasat",
        anchorId: "career-guidance-in-commerce-by-ca-sagar-kasat",
        type: "guest-lecture",
        description:
          "Commerce Dept. organized the Guest lecture on 'Career Guidance in Commerce' for 12th Standard students. Programme was held on 1st December 2021. Respected Principal Sandeep Patil Sir welcomed The guest speaker CA Sagar Kasat Sir. He had given guidance to the students regarding preparation for CA, CS, CWA.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2021-22/",
          [
            "career-guidance-in-commerce-1.webp",
            "career-guidance-in-commerce-2.webp",
            "career-guidance-in-commerce-4.webp",
            "career-guidance-in-commerce-3.webp",
          ],
          "Career Guidance in Commerce"
        ),
      },
      {
        name: "Counselling Session: Persisting with Goals",
        anchorId: "counselling-session-persisting-with-goals",
        type: "guest-lecture",
        description:
          "SBPCSC has arranged Counselling Session for students of 11th class of Science and Commerce. Topic: Persisting with Goals. Date: 16/12/2021 and 23/12/2021.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2021-22/",
          [
            "persisiting-with-goals-2.webp",
            "persisiting-with-goals-4.webp",
            "persisiting-with-goals-3.webp",
            "persisiting-with-goals-1.webp",
          ],
          "Counselling Session: Persisting with Goals"
        ),
      },
      {
        name: "Career Guidance on BBA course",
        anchorId: "career-guidance-on-bba-course",
        type: "guest-lecture",
        description:
          "SBPCSC Commerce Department had arranged guest lecture on 'Career Guidance on BBA course' for class 12th students. Dr. Manju Chopra, Dean, PCET's Pune Business School, guided students on BBA course and career opportunities after BBA.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2021-22/",
          [
            "career-guidance-on-BBA-2.webp",
            "career-guidance-on-BBA-1.webp",
            "career-guidance-on-BBA-3.webp",
          ],
          "Career Guidance on BBA"
        ),
      },
      {
        name: "Career Guidance Seminar by Dr. ShitalKumar Rawandale",
        anchorId: "career-guidance-seminar-by-dr-shitalkumar-rawandale",
        type: "guest-lecture",
        description:
          "Career Guidance Seminar conducted by Prof. Dr. ShitalKumar Rawandale. Seminar was conducted on Zoom platform for class 12th Science.",
        images: mkImages(
          "/images/gallery/guest-lecture/2021-22/",
          "career-guidance-seminar-",
          5,
          "Career Guidance Seminar by Dr. ShitalKumar Rawandale"
        ),
      },
      {
        name: "Preparation for 12th Board Examination by AAKASH Classes",
        anchorId: "preparation-for-12th-board-examination-by-aakash-classes",
        type: "guest-lecture",
        description:
          "Expert Faculties from AAKASH Classes guided 12th Science students on 'Preparation for 12th Board Examination'. Mrs. Sayali Jadhav and Mr. Rohan shared the tips and tricks on how to prepare for Board Examination in short period of time.",
        images: mkImagesCustom(
          "/images/gallery/guest-lecture/2021-22/",
          [
            "preparation-12th-exam-1.webp",
            "preparation-12th-exam-2.webp",
            "preparation-12th-exam-4.webp",
            "preparation-12th-exam-3.webp",
          ],
          "Preparation for 12th Board Examination"
        ),
      },
    ],
  },
]
