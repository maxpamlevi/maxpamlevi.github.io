import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ThreeBackdrop from "@/components/ThreeBackdrop"
import type { Metadata } from "next"
import {
  Calendar,
  Code,
  Download,
  ExternalLink,
  Github,
  Globe,
  Mail,
  MapPin,
  Server,
  Database,
} from "lucide-react"
import Link from "next/link"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"

const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const monoFont = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio of Nguyen Dinh Khang, a full-stack developer specializing in product engineering, Rails, Angular, and Next.js.",
  keywords: [
    "Nguyen Dinh Khang",
    "full-stack developer",
    "Rails",
    "Angular",
    "Next.js",
    "TypeScript",
    "portfolio",
    "Ho Chi Minh City",
  ],
  openGraph: {
    title: "Nguyen Dinh Khang | Full-stack Developer",
    description:
      "Full-stack developer focused on fast, intuitive products and resilient backends. Available for freelance.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nguyen Dinh Khang | Full-stack Developer",
    description:
      "Full-stack developer focused on fast, intuitive products and resilient backends. Available for freelance.",
  },
}

export default function Portfolio() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nguyen Dinh Khang",
    jobTitle: "Full-stack developer",
    email: "mailto:khangnd2056@gmail.com",
    url: "https://github.com/maxpamlevi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: ["https://github.com/maxpamlevi"],
  }

  const skills = {
    frontend: ["Angular", "JavaScript", "CSS3", "HTML5", "Responsive Design", "Bootstrap", "Tailwind", "NextJs"],
    backend: ["Ruby", "Ruby on Rails", "Node.js", "Sidekiq", "Redis", "PostgreSQL"],
    testing: ["RSpec", "Jest", "Karma", "Unit Testing"],
    tooling: ["Git", "WebSocket", "Google Maps API", "API Integration"],
  }

  const projects = [
    {
      title: "Phriendly Phishing",
      description:
        "Phriendly Phishing delivers phishing simulation training and managed security awareness programs.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "https://cybercx.com.au/wp-content/uploads/2022/12/PH2.png",
      link: "https://www.phriendlyphishing.com/",
    },
    {
      title: "UJET",
      description:
        "AI-powered contact center platform helping teams automate workflows and elevate customer experience.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://mms.businesswire.com/media/20250624475768/en/2505031/22/download.jpg",
      link: "https://ujet.cx/",
    },
    {
      title: "Motorist",
      description: "Smart vehicle management platform designed to simplify car ownership in Singapore.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenAI"],
      image: "https://i.ytimg.com/vi/Idw-d9_N2fM/maxresdefault.jpg",
      link: "https://motorist.sg/",
    },
    {
      title: "TVP Logistics",
      description: "Full-range logistics solution with route intelligence and customer visibility tools.",
      tech: ["Ruby on Rails", "FastAPI", "Redis", "WebSocket"],
      image:
        "https://tvplogistics.com.vn/assets/logo-9ed8a48e1ecf591d064884a4622a1c169fb391285f69254320d8b020dfc9c178.jpg",
      link: "https://tvplogistics.com.vn/",
    },
    {
      title: "Capable-tech",
      description: "Capable-Tech is an electronic manufacturing services provider & high-quality plastic supplier based in Ho Chi Ming City, Vietnam",
      tech: ["NextJs", "Python", "PostgreSQL", "Docker", "NextERP", "Tailwind"],
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/683fff5d8f68d1749024605.png",
      link: "https://capable-tech.com/",
    },
  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "TMA Solution",
      period: "2019 – 2022",
      bullets: [
        "Built an education platform with Ruby on Rails + Angular used by thousands of learners.",
        "Designed RESTful APIs for content delivery, auth, and progress tracking.",
        "Implemented RSpec + Jest test suites that reduced production regressions.",
        "Optimized Redis-backed caching and database queries for faster response time.",
      ],
    },
    {
      title: "Web Developer",
      company: "Motorist",
      period: "2022 – 2023",
      bullets: [
        "Developed enterprise features on Ruby on Rails with high-volume traffic demands.",
        "Implemented real-time chat and WhatsApp Business integrations via WebSocket.",
        "Delivered Google Maps-based live tracking for mobile mechanics and routing.",
        "Designed scalable background processing with Sidekiq for heavy computations.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "UJET",
      period: "2023 - 2025",
      bullets: [
        "Delivered scalable Rails services and Angular interfaces for high-traffic CCaaS workflows.",
        "Integrated CRM APIs (Kustomer, Zendesk) to cut manual data entry by 50%.",
        "Built test strategy across unit, integration, and end-to-end suites (85% coverage).",
        "Led production support and monitoring improvements to minimize downtime.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Capable-tech",
      period: "2025 – 2026",
      bullets: [
        "Developed and maintained internal ERP systems for a manufacturing company, including HR management, document management, and time attendance.",
        "Deployed ERP applications to VPS servers and handled basic server setup and maintenance.",
        "Designed and built internal websites and public websites published on Google search.",
        "Managed application data and supported daily business operations.",
        "Implemented and maintained data backup to ensure data safety and system stability.",
        "Supported internal users by checking and fixing system and data issues."

      ],
    },
  ]

  return (
    <div className={`min-h-screen bg-[#f7f4ee] text-[#0f172a] ${displayFont.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f7f4ee]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Code className="h-5 w-5" />
            Khang N.
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <Button size="sm" className="hidden md:inline-flex" asChild>
            <Link href="mailto:khangnd2056@gmail.com">Let's talk</Link>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 pb-20 pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <ThreeBackdrop />
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium text-[#0f172a]/70">
              <Badge className="rounded-full border border-black/10 bg-white/80">Available for freelance</Badge>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ho Chi Minh City
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Nguyen Dinh Khang
              </h1>
              <p className="text-lg text-[#0f172a]/70">
                Full-stack developer focused on building fast, intuitive products and resilient backends. I love
                turning messy requirements into crisp, reliable web experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="mailto:khangnd2056@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/maxpamlevi" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-black/10 bg-white/80">
                <CardHeader className="pb-2">
                  <CardDescription>Focus</CardDescription>
                  <CardTitle className="text-xl">Product Engineering</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[#0f172a]/70">
                  Front-end architecture, resilient APIs, and performance optimization.
                </CardContent>
              </Card>
              <Card className="border-black/10 bg-white/80">
                <CardHeader className="pb-2">
                  <CardDescription>Currently</CardDescription>
                  <CardTitle className="text-xl">Capable-Tech</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[#0f172a]/70">
                  The company is a member of South China Engineering & Manufacturing Limited (SCEM) in Hong Kong which serve customers in medical, automotive, electronics and IoT areas.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative z-10">
            <Card className="border-black/10 bg-[#0f172a] text-white shadow-xl">
              <CardHeader>
                <CardTitle className={`text-lg ${monoFont.className}`}>~/portfolio/intro</CardTitle>
                <CardDescription className="text-white/60">System boot sequence</CardDescription>
              </CardHeader>
              <CardContent className={`space-y-3 text-sm ${monoFont.className}`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/60">role</span>
                  <span>full-stack developer</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/60">stack</span>
                  <span>rails · angular · node · postgresql</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/60">availability</span>
                  <span>open to freelance</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">email</span>
                  <span>khangnd2056@gmail.com</span>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card className="border-black/10 bg-white/80">
                <CardHeader className="pb-2">
                  <CardDescription>Experience</CardDescription>
                  <CardTitle className="text-2xl">5+ years</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[#0f172a]/70">Across education, logistics, and mobility.</CardContent>
              </Card>
              <Card className="border-black/10 bg-white/80">
                <CardHeader className="pb-2">
                  <CardDescription>Specialties</CardDescription>
                  <CardTitle className="text-2xl">APIs & UI</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[#0f172a]/70">API design, real-time systems, UX polish.</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="text-[#0f172a]/70">
            I design and ship full-stack products that feel polished on the surface and dependable under the hood.
            From product discovery to launch, I focus on clean architecture, thoughtful UX, and measurable outcomes.
          </p>
        </div>
      </section>

      <section id="skills" className="px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Skills & Technologies</h2>
            <p className="text-[#0f172a]/60">Tools I use to build fast, reliable products.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-black/10 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Front-end
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="border-black/10 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Back-end
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="border-black/10 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.testing.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="border-black/10 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Tooling
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.tooling.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="text-[#0f172a]/60">Real products, real impact.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="group border-black/10 bg-white/80 transition hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg border-b border-black/10 bg-white">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} className="h-48 w-full object-contain" />
                  </a>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-[#0f172a]/60">
                      Visit <ExternalLink className="ml-1 inline h-4 w-4" />
                    </a>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Work Experience</h2>
            <p className="text-[#0f172a]/60">Teams, outcomes, and systems shipped.</p>
          </div>
          <div className="space-y-6">
            {experience.map((job) => (
              <Card key={job.company} className="border-black/10 bg-white/80">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg">{job.company}</CardTitle>
                      <CardDescription>{job.title}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#0f172a]/60">
                      <Calendar className="h-4 w-4" />
                      {job.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-[#0f172a]/70">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="border-black/10 bg-white/90">
            <CardContent className="grid gap-6 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold">Let's build something sharp</h2>
                <p className="text-[#0f172a]/70">
                  Need a developer who can own a feature end-to-end, polish the UI, and keep the backend healthy?
                  I'm ready to collaborate.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" asChild>
                  <Link href="mailto:khangnd2056@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://github.com/maxpamlevi" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-semibold">Khang N.</span>
          </div>
          <p className="text-sm text-[#0f172a]/60">(c) 2024 Khang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
