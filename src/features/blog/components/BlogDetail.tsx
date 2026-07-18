"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User, Tag, ArrowLeft, Heart, Globe, Link2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlogCard } from "./BlogCard"
import { BlogSidebar } from "./BlogSidebar"
import type { BlogPost } from "@/types/blog"

const allPosts: BlogPost[] = [
  {
    slug: "preparing-for-mht-cet-2026",
    title: "Preparing for MHT-CET 2026: A Complete Guide",
    excerpt: "Comprehensive preparation strategies for the Maharashtra Common Entrance Test.",
    content: `<p>The Maharashtra Common Entrance Test (MHT-CET) is one of the most important examinations for students aspiring to pursue engineering, pharmacy, and other professional courses in Maharashtra. At S. B. Patil College of Science and Commerce, we have consistently produced top rankers who have secured admission in premier institutions across the state.</p>

<h2>Understanding the Exam Pattern</h2>
<p>The MHT-CET is conducted by the State Common Entrance Test Cell, Maharashtra. The examination is divided into two groups: PCM (Physics, Chemistry, Mathematics) for engineering aspirants and PCB (Physics, Chemistry, Biology) for medical and pharmacy aspirants.</p>

<p>Each subject carries 50 marks, making the total 150 marks for PCM group and 150 marks for PCB group. The questions are based on the Maharashtra State Board syllabus of Class 11 and Class 12.</p>

<h2>Creating a Study Plan</h2>
<p>A well-structured study plan is the foundation of successful exam preparation. Here are key strategies followed by our toppers:</p>

<ul>
<li><strong>Start Early:</strong> Begin your preparation at least 8-10 months before the exam</li>
<li><strong>Know the Syllabus:</strong> Understand the weightage of each chapter and prioritize accordingly</li>
<li><strong>Daily Routine:</strong> Dedicate at least 6-8 hours to self-study, divided equally among subjects</li>
<li><strong>Regular Revision:</strong> Allocate 20% of your study time for revision of previously covered topics</li>
</ul>

<h2>Subject-Wise Preparation Tips</h2>

<h3>Physics</h3>
<p>Focus on conceptual clarity rather than rote learning. Practice numerical problems regularly. Our faculty recommends solving at least 20 numerical problems daily from different chapters.</p>

<h3>Chemistry</h3>
<p>Chemistry requires a balanced approach. Physical chemistry needs numerical practice, organic chemistry demands understanding of reaction mechanisms, and inorganic chemistry requires memorization of periodic trends.</p>

<h3>Mathematics</h3>
<p>Mathematics is all about practice. Solve at least 50 problems daily, maintain a formula notebook, and focus on time management during mock tests.</p>

<h2>Mock Tests and Analysis</h2>
<p>Taking regular mock tests is crucial for success. At SBPCSC, we conduct weekly mock tests that simulate the actual exam environment. After each test, thorough analysis helps identify weak areas that need improvement.</p>

<h2>Health and Wellness</h2>
<p>Don't neglect your physical and mental health during preparation. Regular exercise, proper sleep, and meditation can significantly improve concentration and retention.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Mar 15, 2026",
    author: "Prof. Sharma",
    tags: ["Academic", "Examinations"],
  },
  {
    slug: "science-vs-commerce",
    title: "Science vs. Commerce: Making the Right Choice After 10th",
    excerpt: "A detailed comparison to help students and parents decide between Science and Commerce streams.",
    content: `<p>Choosing between Science and Commerce after Class 10 is one of the most significant decisions in a student's academic journey. Both streams offer excellent career opportunities, but the right choice depends on individual interests, aptitudes, and career aspirations.</p>

<h2>Science Stream Overview</h2>
<p>The Science stream offers subjects like Physics, Chemistry, Biology, and Mathematics. It is ideal for students interested in engineering, medicine, research, and technology. Science develops analytical thinking, problem-solving skills, and a scientific temperament.</p>

<h2>Commerce Stream Overview</h2>
<p>Commerce covers subjects like Accountancy, Economics, Business Studies, and Secretarial Practice. It is perfect for students interested in business, finance, management, and entrepreneurship. Commerce develops commercial awareness, financial literacy, and decision-making skills.</p>

<h2>Key Considerations</h2>
<ul>
<li><strong>Interest:</strong> Choose a stream aligned with your natural interests and strengths</li>
<li><strong>Career Goals:</strong> Research the career paths each stream offers</li>
<li><strong>Aptitude:</strong> Consider your performance in related subjects</li>
<li><strong>Future Flexibility:</strong> Some streams offer more diverse career options</li>
</ul>

<p>At S. B. Patil College, both streams are supported by experienced faculty, well-equipped laboratories, and comprehensive academic resources. Our career counseling cell helps students make informed decisions.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Mar 10, 2026",
    author: "Admin",
    tags: ["Academic", "Career", "Admissions"],
  },
  {
    slug: "annual-sports-day-2026",
    title: "Annual Sports Day 2026: A Grand Success",
    excerpt: "Our annual sports day witnessed record participation with thrilling competitions.",
    content: `<p>The Annual Sports Day 2026 at S. B. Patil College of Science and Commerce was a spectacular event that showcased the athletic prowess and sportsmanship of our students. The event witnessed record participation with over 500 students competing in various disciplines.</p>

<h2>Event Highlights</h2>
<p>The day began with a colorful march past by the four houses, followed by the lighting of the sports torch. Students competed in athletics, team sports, and fun events that fostered camaraderie and healthy competition.</p>

<h2>Athletics</h2>
<p>Track and field events saw some outstanding performances. New records were set in the 100m sprint, long jump, and relay races. Our physical education department was thrilled with the level of talent displayed.</p>

<h2>Team Sports</h2>
<p>Cricket, volleyball, basketball, and kabaddi matches drew large crowds. The finals were particularly intense, with students displaying exceptional teamwork and strategic thinking.</p>

<h2>Cultural Performances</h2>
<p>The sports day also featured cultural performances by students, including a mesmerizing drill display and a vibrant folk dance performance that celebrated India's rich cultural heritage.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Feb 28, 2026",
    author: "Sports Dept.",
    tags: ["Events", "Sports"],
  },
  {
    slug: "importance-of-regular-attendance",
    title: "The Importance of Regular Attendance in Junior College",
    excerpt: "Why consistent attendance matters for academic success.",
    content: `<p>Regular attendance is a cornerstone of academic success at the junior college level. At S. B. Patil College, we emphasize the importance of consistent attendance not just for compliance, but for genuine learning and development.</p>

<h2>Academic Benefits</h2>
<p>Students with regular attendance consistently perform better in examinations. Classroom instruction provides context, clarification, and real-time doubt resolution that self-study cannot replicate. Our data shows a direct correlation between attendance and board exam performance.</p>

<h2>Skill Development</h2>
<p>Regular attendance develops essential professional skills including punctuality, discipline, and time management. These skills are highly valued by employers and higher education institutions.</p>

<h2>Social and Emotional Growth</h2>
<p>Being present in class allows students to build meaningful relationships with peers and teachers. Classroom discussions, group activities, and collaborative learning contribute to holistic development.</p>

<h2>College Rules</h2>
<p>As per Maharashtra State Board regulations, students must maintain a minimum of 75% attendance to be eligible for board examinations. Our automated attendance system helps students track their attendance in real-time.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Feb 20, 2026",
    author: "Admin",
    tags: ["Student Life"],
  },
  {
    slug: "guest-lecture-career-counseling",
    title: "Guest Lecture on Career Counseling by Industry Experts",
    excerpt: "Industry professionals shared valuable insights on emerging career paths.",
    content: `<p>S. B. Patil College organized an insightful guest lecture on career counseling, featuring industry experts from diverse fields. The session aimed to help students make informed decisions about their higher education and career paths.</p>

<h2>Key Speakers</h2>
<p>The lecture featured Mr. Rajesh Kumar (HR Director, Tech Mahindra), Dr. Sneha Patel (Career Counselor), and Ms. Priya Sharma (Entrepreneur). Each speaker brought unique perspectives on career development in the modern era.</p>

<h2>Topics Covered</h2>
<ul>
<li>Emerging career opportunities in technology and AI</li>
<li>Higher education options in India and abroad</li>
<li>Skill development for the 21st-century workforce</li>
<li>Entrepreneurship as a career choice</li>
<li>Work-life balance and mental well-being</li>
</ul>

<h2>Interactive Session</h2>
<p>The interactive Q&A session saw enthusiastic participation from students who asked insightful questions about career planning, competitive exams, and professional growth strategies.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Feb 15, 2026",
    author: "Admin",
    tags: ["Guest Lectures", "Events"],
  },
  {
    slug: "board-exam-preparation-tips",
    title: "Top 10 Board Exam Preparation Tips from Toppers",
    excerpt: "Learn from our HSC toppers about effective study techniques.",
    content: `<p>With board examinations approaching, our HSC toppers share their proven strategies for effective preparation. These tips have helped them achieve exceptional results and can help every student perform at their best.</p>

<h2>1. Start with the Syllabus</h2>
<p>Print out the syllabus for each subject and mark topics by priority. Understanding the weightage helps allocate study time effectively.</p>

<h2>2. Create a Realistic Timetable</h2>
<p>Design a study schedule that accounts for your strengths and weaknesses. Include breaks, revision time, and practice sessions.</p>

<h2>3. Focus on Concepts</h2>
<p>Understanding concepts is more important than memorization. Use diagrams, flowcharts, and mind maps to visualize complex topics.</p>

<h2>4. Practice Previous Years' Papers</h2>
<p>Solving past board papers gives you familiarity with the exam pattern, marking scheme, and time management.</p>

<h2>5. Regular Revision</h2>
<p>Revise each topic at least three times: immediately after learning, after one week, and before the exam.</p>

<h2>6. Healthy Routine</h2>
<p>Maintain proper sleep, nutrition, and exercise. A healthy body supports a healthy mind.</p>

<h2>7. Group Study</h2>
<p>Studying with peers can help clarify doubts and reinforce learning through discussion.</p>

<h2>8. Seek Help When Needed</h2>
<p>Don't hesitate to approach teachers for clarification. Our faculty is always available for doubt-solving sessions.</p>

<h2>9. Stay Positive</h2>
<p>Maintain a positive attitude. Stress management through meditation and breathing exercises can significantly improve performance.</p>

<h2>10. Trust Your Preparation</h2>
<p>Confidence is key. Trust in your hard work and give your best on exam day.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Feb 10, 2026",
    author: "Academic Cell",
    tags: ["Academic", "Examinations"],
  },
  {
    slug: "science-exhibition-2026",
    title: "Science Exhibition 2026: Innovation in Action",
    excerpt: "Students showcased remarkable projects at our annual science exhibition.",
    content: `<p>The Science Exhibition 2026 at S. B. Patil College of Science and Commerce was a resounding success, featuring innovative projects that demonstrated the creativity and scientific acumen of our students. The exhibition was judged by a panel of experts from academia and industry.</p>

<h2>Featured Projects</h2>
<p>Students presented over 40 projects spanning physics, chemistry, biology, and computer science. Notable projects included a low-cost water purification system, a smart farming solution using IoT, and a biodegradable plastic alternative made from agricultural waste.</p>

<h2>Winners</h2>
<p>The first prize was awarded to a team of Class 12 Science students for their project on AI-powered waste segregation. The second prize went to a working model of a solar-powered desalination plant.</p>

<h2>Expert Feedback</h2>
<p>The judges praised the depth of research and practical applications demonstrated by the projects. Many students received invitations to showcase their projects at district and state-level science exhibitions.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Jan 28, 2026",
    author: "Science Dept.",
    tags: ["Events", "Science"],
  },
  {
    slug: "commerce-workshop-financial-literacy",
    title: "Commerce Workshop on Financial Literacy and Investment",
    excerpt: "A hands-on workshop teaching students the fundamentals of personal finance.",
    content: `<p>The Commerce Department organized an intensive workshop on financial literacy and investment, designed to equip students with practical financial management skills. The workshop covered everything from basic budgeting to advanced investment strategies.</p>

<h2>Workshop Modules</h2>
<ul>
<li><strong>Personal Finance Basics:</strong> Budgeting, saving, and expense tracking</li>
<li><strong>Banking and Taxation:</strong> Understanding bank products, tax filing, and GST</li>
<li><strong>Stock Market:</strong> Fundamentals of trading, mutual funds, and portfolio management</li>
<li><strong>Insurance and Retirement:</strong> Risk management and long-term financial planning</li>
</ul>

<h2>Hands-On Activities</h2>
<p>Students participated in simulated stock trading sessions, created personal budgets, and analyzed real company financial statements. The practical approach helped bridge the gap between theoretical knowledge and real-world application.</p>

<h2>Industry Experts</h2>
<p>The workshop was conducted by certified financial planners and chartered accountants who shared real-world insights and career guidance for commerce students.</p>`,
    image: "/images/placeholder-blog.jpg",
    date: "Jan 20, 2026",
    author: "Commerce Dept.",
    tags: ["Workshop", "Commerce"],
  },
]

const relatedPosts = allPosts.slice(0, 4)

interface BlogDetailProps {
  params: Promise<{ slug: string }>
}

export function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = use(params)
  const [liked, setLiked] = useState(false)

  const post = allPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section-padding">
        <div className="container-wide text-center">
          <h1 className="mb-4 text-2xl font-bold">Post Not Found</h1>
          <p className="mb-6 text-muted-foreground">The article you are looking for does not exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  const shareUrl = `https://www.sbpatilcollege.com/blog/${post.slug}`

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col gap-8 lg:flex-row">
          <article className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>

              <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {post.tags?.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?category=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    {tag}
                  </Link>
                ))}
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </span>
                {post.author && (
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {post.author}
                  </span>
                )}
              </div>

              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {post.title}
              </h1>

              <div
                className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"
            >
              <button
                onClick={() => setLiked(!liked)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors",
                  liked
                    ? "border-red-200 bg-red-50 text-red-600"
                    : "border-border hover:bg-muted",
                )}
                aria-label={liked ? "Unlike this post" : "Like this post"}
              >
                <Heart className={cn("h-4 w-4", liked && "fill-current")} />
                <span>{liked ? "Liked" : "Like"}</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] transition-colors hover:bg-[#1877F2]/20"
                  aria-label="Share on Facebook"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] transition-colors hover:bg-[#1DA1F2]/20"
                  aria-label="Share on Twitter"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/20"
                  aria-label="Share on LinkedIn"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label="Copy link"
                >
                  <Link2 className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {post.author && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground">
                      Faculty at S. B. Patil College of Science and Commerce
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <h3 className="mb-6 text-xl font-semibold">Leave a Comment</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="comment-name" className="mb-1.5 block text-sm font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="comment-name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="comment-email" className="mb-1.5 block text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="comment-email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment-message" className="mb-1.5 block text-sm font-medium">
                    Comment <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="comment-message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Write your comment..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  Post Comment
                </button>
              </form>
            </motion.div>
          </article>

          <div className="w-full lg:w-80 xl:w-96">
            <BlogSidebar />
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-border pt-10"
          >
            <h2 className="mb-6 text-2xl font-bold">Related Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPosts.map((related, i) => (
                <BlogCard key={related.slug} post={related} index={i} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </section>
  )
}
