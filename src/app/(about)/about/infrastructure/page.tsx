import type { Metadata } from "next"
import Image from "next/image"
import { PageHeading } from "@/components/sections/PageHeading"
import { NavPills } from "@/components/sections/NavPills"

export const metadata: Metadata = {
  title: "SBPCSC Ravet: Top Pune Junior College Facilities & Hostel",
  description:
    "SBPCSC in Ravet, Pune offers excellent facilities including spacious hostels for boys & girls with mess, a well-stocked library, smart classrooms, and 24/7 Wi-Fi. Admissions open for 2025-26!",
}

export default function InfrastructurePage() {
  const tabs = [
    {
      id: "admin",
      label: "Admin",
      content: (
        <div>
          <a href="/images/facilities/infra-admin-new.webp" target="_blank">
            <Image
              src="/images/facilities/infra-admin-new.webp"
              alt="Admin, SBPCSC"
              width={800}
              height={500}
              className="h-auto w-full"
              unoptimized
            />
          </a>
        </div>
      ),
    },
    {
      id: "library",
      label: "Library",
      content: (
        <>
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <a href="/images/facilities/sbpcsc-library-1.webp" target="_blank">
                <Image
                  src="/images/facilities/sbpcsc-library-1.webp"
                  alt="Library, SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
            <div>
              <a href="/images/facilities/sbpcsc-library-2.webp" target="_blank">
                <Image
                  src="/images/facilities/sbpcsc-library-2.webp"
                  alt="Library, SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
          </div>

          <p className="text-justify">S. B. Patil Jr. college is having a spacious library enriching with multiple specific books and reference books.</p>
          <p className="text-justify">College library is having big study room too so that students can sit and read books of their choices.</p>
          <p className="text-justify">As of now in library total 500 NCERT &amp; State Board reference books available for preparation of various competitive exams like CET, NEET, IIT &amp; JEE exams. College library is having more than 700 reference, moral value based books in it&rsquo;s stock.</p>
          <p className="text-justify">In college library, we made available for our staff and students all leading news papers, weekly and monthly educational magazines.</p>
          <p className="text-justify">Students in our college continue visit the library and procure multiple books for study and reference point of view. Moreover teaching and admin staff always visit the library to update their subject knowledge. In fact college library is a source and treasury of knowledge for upgradation meant for staff and children.</p>
        </>
      ),
    },
    {
      id: "reading-hall",
      label: "Reading Hall",
      content: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <a href="/images/facilities/reading-hall-1.webp" target="_blank">
              <Image
                src="/images/facilities/reading-hall-1.webp"
                alt="Reading Hall, SBPCSC"
                width={400}
                height={300}
                className="h-auto w-full"
                unoptimized
              />
            </a>
          </div>
          <div>
            <a href="/images/facilities/reading-hall-2.webp" target="_blank">
              <Image
                src="/images/facilities/reading-hall-2.webp"
                alt="Reading Hall, SBPCSC"
                width={400}
                height={300}
                className="h-auto w-full"
                unoptimized
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "hostel",
      label: "Hostel (Boy's and Girl's)",
      content: (
        <>
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <a href="/images/facilities/boys-hostel.webp" target="_blank">
                <Image
                  src="/images/facilities/boys-hostel.webp"
                  alt="Hostel (Boy's and Girl's), SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
            <div>
              <a href="/images/facilities/boys-hostel-1.webp" target="_blank">
                <Image
                  src="/images/facilities/boys-hostel-1.webp"
                  alt="Hostel (Boy's and Girl's), SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <a href="/images/facilities/girl-hostel.webp" target="_blank">
                <Image
                  src="/images/facilities/girl-hostel.webp"
                  alt="Hostel (Boy's and Girl's), SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
            <div>
              <a href="/images/facilities/girl-hostel-1.webp" target="_blank">
                <Image
                  src="/images/facilities/girl-hostel-1.webp"
                  alt="Hostel (Boy's and Girl's), SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
          </div>

          <p className="text-justify">The hostel life and school bus travelling is a lifetime experience of students.</p>
          <p className="text-justify">SBPCS is providing separate Hostels Facility for girls and boys near college. Hostel rooms are well ventilated and spacious relevant to the comfortable accommodation to stay in. Both the hostels are under CCTV surveillances and provision of 24hrs, security guards we believe, if students live well, eat well and sleep well,then they can focus on studies well. College hostels have proper security, mess and meal system. Clean and hygienic washrooms are available in hostel.</p>
          <p className="text-justify">Along with hostel, we provide a delicious &amp; nutritious meal to the students. Hostel has an attached mess with proper seating comfort. The food is prepared under qualified cook while maintaining hygiene. The menu changes every day &amp; keeping the homely taste intact.</p>

          <h4 className="mb-2 text-lg font-bold">Apart from, We provide quality stay of students in hostel with following Facilities-</h4>
          <ul className="list-disc pl-6">
            <li>24 hrs. Wi-Fi system available inside hostel campus.</li>
            <li>Hostel is tie-up with multispecialty hospital for medical emergency.</li>
            <li>Solar water heaters are available for provision of hot water.</li>
            <li>Water filters have been installed for pure drinking water</li>
            <li>We insure every child at the time of hostel admission (Individual insurance of hosteller)</li>
            <li>Apart from CCTV installation and security guard, institute has deputed Rector to look after day-to-day activities take place inside the hostel.</li>
          </ul>
        </>
      ),
    },
    {
      id: "classroom",
      label: "Class Room",
      content: (
        <>
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <a href="/images/facilities/classroom-1.webp" target="_blank">
                <Image
                  src="/images/facilities/classroom-1.webp"
                  alt="Library, SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
            <div>
              <a href="/images/facilities/classroom-2.webp" target="_blank">
                <Image
                  src="/images/facilities/classroom-2.webp"
                  alt="Library, SBPCSC"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  unoptimized
                />
              </a>
            </div>
          </div>

          <p className="text-justify">Smart classrooms are the classrooms enhanced with technological equipment for the purpose of better learning and teaching.</p>
          <p className="text-justify">SBPCSC have converted their classes into well ventilated, spacious and smart classrooms. Classrooms are well furnitured and equipped with latest technology based overhead projectors and broad surface screen.</p>
          <p className="text-justify">In these smart classes, the teachers use the resources available on the internet for the better understanding of the students. Smart classes help in: <br />
          a) Case of understanding. <br />
          b) Access to Online Key sources. <br />
          c) Makes learning enjoyable. <br />
          d) Improves the Academic Performance.</p>
          <p className="text-justify">Smart classrooms increase the interest of the students in Studies. Students tend to learn more. The smart learning approach provides frame work and smart thinking tools that motivate higher levels of understanding.</p>
          <p className="text-justify"><strong>It is a new Vision in Education.</strong></p>
        </>
      ),
    },
  ]

  return (
    <>
      <PageHeading title="Infrastructure And Facilities" />
      <NavPills tabs={tabs} />
    </>
  )
}
