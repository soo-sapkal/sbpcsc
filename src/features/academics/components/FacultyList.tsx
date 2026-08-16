import Image from "next/image"
import type { FacultyMember } from "@/data/subjects"

interface FacultyListProps {
  faculty: FacultyMember[]
  labAssistants?: FacultyMember[]
  stream: string
  subjectName: string
}

function FacultyCard({ member, stream }: { member: FacultyMember; stream: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-card">
      <div className="border-b border-border bg-brand px-4 py-2.5">
        <h4 className="text-white"><strong>{member.name}</strong></h4>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap">
          <div className="w-full px-3 sm:w-1/3 md:w-1/4">
            <figure>
              <Image
                src={`/images/faculty/${stream}/faculty/${member.image}`}
                alt={member.name}
                width={150}
                height={180}
                className="h-auto w-full"
                unoptimized
              />
            </figure>
          </div>
          <div className="w-full px-3 sm:w-2/3 md:w-3/4">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-border">
                  <td className="w-1/5 py-2 pr-4 font-bold">Name</td>
                  <td className="py-2">
                    {member.pdf ? (
                      <a href={member.pdf} target="_blank" className="text-brand hover:underline">
                        <strong>{member.name}</strong>
                      </a>
                    ) : (
                      <strong>{member.name}</strong>
                    )}
                  </td>
                </tr>
                {member.qualification && (
                  <tr className="border-b border-border">
                    <td className="w-1/5 py-2 pr-4 font-bold">Qualification</td>
                    <td className="py-2">{member.qualification}</td>
                  </tr>
                )}
                <tr className="border-b border-border">
                  <td className="w-1/5 py-2 pr-4 font-bold">Experience</td>
                  <td className="py-2">{member.experience}</td>
                </tr>
                {member.email && (
                  <tr className="border-b border-border">
                    <td className="w-1/5 py-2 pr-4 font-bold">Email</td>
                    <td className="py-2">{member.email}</td>
                  </tr>
                )}
                {member.youtube && (
                  <tr className="border-b border-border">
                    <td className="w-1/5 py-2 pr-4 font-bold">YouTube Channel</td>
                    <td className="py-2">
                      <a href={member.youtube} target="_blank" className="text-brand hover:underline">
                        {member.youtube}
                      </a>
                    </td>
                  </tr>
                )}
                {member.blog && (
                  <tr className="border-b border-border">
                    <td className="w-1/5 py-2 pr-4 font-bold">Blog</td>
                    <td className="py-2">
                      <a href={member.blog} target="_blank" className="text-brand hover:underline">
                        {member.blog}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FacultyList({ faculty, labAssistants, stream, subjectName }: FacultyListProps) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold">{subjectName} Department</h2>
      {faculty.map((member, i) => (
        <div key={i} className="mb-4">
          <FacultyCard member={member} stream={stream} />
        </div>
      ))}
      {labAssistants && labAssistants.length > 0 && (
        <>
          <h2 className="mb-4 mt-6 text-lg font-bold">Lab Assistant</h2>
          {labAssistants.map((member, i) => (
            <div key={i} className="mb-4">
              <FacultyCard member={member} stream={stream} />
            </div>
          ))}
        </>
      )}
    </div>
  )
}
