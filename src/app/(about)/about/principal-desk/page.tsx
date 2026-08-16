import type { Metadata } from "next"
import Image from "next/image"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "Principal's Desk",
  description:
    "Principal's message at SB Patil College highlights academic excellence, values, student growth, and holistic education in Science & Commerce.",
}

export default function PrincipalDeskPage() {
  return (
    <>
      <PageHeading title="Principal's Desk" />
      <Image
        src="/images/mr-patil-principal.webp"
        alt="SBPCSC is the top junior college in pune comes under the PCET Trust"
        width={1400}
        height={400}
        className="mb-6 max-w-xl mx-auto w-full"
        unoptimized
      />
      <p className="mb-1 text-justify font-bold">From the Principal's Desk</p>
      <p className="mb-6 text-justify font-semibold text-brand">Prof. Mr. Sandip N. Patil<br />Principal</p>
      <p className="mb-4 text-justify italic">
        &ldquo;True education transcends the acquisition of knowledge; it enlightens the mind, enriches the soul, and
        shapes the character.&rdquo;
      </p>
      <p className="mb-4 text-justify">Dear Parents, Students, and Esteemed Well-Wishers,</p>
      <p className="mb-4 text-justify">
        It is with profound pride and immense pleasure that I welcome you to S. B. Patil Junior College of Science and
        Commerce, Ravet — an institution that stands as a beacon of academic excellence, innovation, and value-based
        education. Functioning under the visionary aegis of the Pimpri Chinchwad Education Trust (PCET), our college
        steadfastly upholds its cherished motto, &ldquo;Pinnacle of Success,&rdquo; while nurturing generations of
        intellectually empowered and socially responsible learners.
      </p>
      <p className="mb-4 text-justify">
        In an era defined by rapid transformation and global challenges, education must evolve beyond the conventional
        boundaries of classrooms and examinations. At S. B. Patil Jr. College, we are deeply committed to fostering an
        ecosystem where knowledge harmoniously converges with wisdom, creativity, integrity, and compassion. Our
        objective is not merely to prepare students for academic accomplishments, but to cultivate enlightened
        individuals equipped to lead with vision, resilience, and humanity.
      </p>
      <p className="mb-4 text-justify">
        Our institution takes immense pride in its distinguished faculty, progressive pedagogy, and state-of-the-art
        infrastructure designed to facilitate experiential and transformative learning. The Science Department provides
        rigorous academic mentoring and strategic guidance for prestigious competitive examinations such as JEE, NEET,
        and CET, while the Commerce Department empowers students with a robust foundation in CA, CS, CMA, Business
        Administration, and allied professional disciplines.
      </p>
      <p className="mb-4 text-justify">
        At the core of our educational philosophy lies the unwavering belief that every student possesses boundless
        potential awaiting purposeful direction. Through Smart Classrooms, career guidance initiatives, personality
        development programmes, and a vibrant spectrum of co-curricular and extracurricular activities, we strive to
        create an environment that stimulates intellectual curiosity, leadership, innovation, and holistic growth.
      </p>
      <p className="mb-4 text-justify">
        We endeavour to instil in our students the virtues of discipline, empathy, ethical responsibility, and lifelong
        learning. Our vision is to nurture not only competent professionals but also conscientious citizens capable of
        contributing meaningfully to society and addressing the complexities of the modern world with confidence and
        moral conviction.
      </p>
      <p className="mb-4 text-justify">
        The continued trust and support extended by our Management, dedicated faculty members, parents, alumni, and
        stakeholders remain the cornerstone of our success and progress. Together, we aspire to shape a future where
        education becomes a transformative force that inspires excellence, ignites aspirations, and empowers young minds
        to create a better tomorrow.
      </p>
      <p className="mb-4 text-justify">I conclude with the timeless words of Rabindranath Tagore:</p>
      <p className="mb-4 text-justify italic">
        &ldquo;The highest education is that which does not merely give us information but makes our life in harmony
        with all existence.&rdquo;
      </p>
    </>
  )
}
