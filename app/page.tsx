import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Server,
  Globe,
  Download,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    frontend: ["Angular", "JavaScript", "jQuery", "CSS3", "HTML5", "Responsive Design", "Bootstrap"],
    backend: ["Ruby", "Ruby on Rails", "Node.js", "Sidekiq", "Redis", "MySQL", "PostgreSQL"],
    database: ["RSpec", "Jest", "Karma", "Unit Testing"],
    tools: [ "Git", "WebSocket", "Google Maps API", "Third-party API Integration"],
  }

  const projects = [
    {
      title: "Phriendly Phishing",
      description:
        "Phriendly Phishing offers leading phishing simulation and phishing simulation training programs designed to ward off potential cyber threats.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://cybercx.com.au/wp-content/uploads/2022/12/PH2.png",
      link: "https://www.phriendlyphishing.com/"
    },
    {
      title: "UJET",
      description: "Improve customer satisfaction and streamline your operations with UJET's AI-powered Contact Center as a Service (CCaaS) platform.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://mms.businesswire.com/media/20250624475768/en/2505031/22/download.jpg",
      link: 'https://ujet.cx/'
    },
    {
      title: "Motorist",
      description: "The Motorist App is a smart vehicle management platform that's designed to simplify car ownership in Singapore.",
      tech: ["Vue.js", "Python", "FastAPI", "WebSocket", "OpenAI API"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://www.goldbell.com.sg/wp-content/uploads/2020/04/Motorist-Logo_350x250.jpg",
      link: "https://motorist.sg/"
    },
  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "TMA Solution",
      period: "07/2019 – 02/2021",
      description:
        "• Full-stack Development: Built comprehensive education application using Ruby on Rails" +
          "backend and Angular frontend, serving thousands of students and educators with seamless learning" +
          "experience\n" +
          "• Quality Assurance: Wrote and maintained comprehensive unit tests using RSpec and Jest" +
          "frameworks, ensuring application reliability and reducing production bugs\n" +
          "• API Development: Designed and implemented RESTful APIs for content delivery, user" +
          "authentication, and progress tracking, enabling smooth integration between frontend and backend" +
          "systems\n" +
          "• Team Collaboration: Actively supported backend development initiatives, collaborated closely" +
          "with QA teams to establish testing protocols, and participated in daily standups and sprint planning" +
          "sessions\n" +
          "• Performance Optimization: Optimized database queries and implemented caching strategies" +
          "using Redis, improving application response time\n",
    },
    {
      title: "Full Stack Developer",
      company: "Ujet",
      period: "03/2021 – 05/2022",
      description:
        "• Full-stack Development: Developed scalable backend solutions using Ruby on Rails and created" +
          "responsive frontend interfaces with Angular, supporting high-traffic customer service operations\n" +
          "• Third-party Integrations: Successfully integrated multiple CRM APIs including Kustomer and" +
          "Zendesk, improving system interoperability and enabling seamless data synchronization between" +
          "platforms, resulting in 50% reduction in manual data entry\n" +
          "• Testing Excellence: Implemented comprehensive testing strategy covering unit tests, integration" +
          "tests, and end-to-end testing, achieving 85% code coverage and significantly reducing production" +
          "issues\n" +
          "• Production Support: Proactively troubleshot and resolved critical issues in production" +
          "environments, implementing monitoring solutions and establishing incident response procedures to" +
          "minimize downtime\n" +
          "• Agile Development: Actively participated in agile development processes including sprint" +
          "planning, daily standups, and retrospectives, while conducting thorough code reviews to maintain" +
          "high code quality standards\n" +
          "• Database Management: Optimized MySQL database performance through query optimization" +
          "and indexing strategies, improving overall system",
    },
    {
      title: "Web Developer",
      company: "Motorist",
      period: "06/2022 – Current",
      description: "• Feature Development: Develop and maintain complex new features for enterprise-scale websites" +
          "using Ruby on Rails, handling high-volume traffic and ensuring optimal performance for automotive" +
          "service marketplace\n" +
          "• UI/UX Implementation: Transform detailed design mockups from Zeplin and Figma into pixelperfect, responsive web interfaces, ensuring cross-browser compatibility and mobile-first design" +
          "principles\n" +
          "• Communication Integration: Integrated WhatsApp Business API into customer support system," +
          "enabling real-time communication between customers and service providers\n" +
          "• Real-time Features: Developed sophisticated real-time chat functionality using WebSocket" +
          "technology, facilitating instant communication between vehicle owners and service providers with" +
          "message delivery confirmation\n" +
          "• Location Services: Implemented advanced real-time location tracking system using Google Maps" +
          "API, enabling customers to track service vehicle locations and optimize route planning for mobile" +
          "mechanics\n" +
          "• Third-party API Integration: Integrated multiple third-party APIs for vehicle diagnostics, service" +
          "history tracking, and parts availability, creating a comprehensive automotive service ecosystem\n" +
          "• Performance Monitoring: Tracked project performance metrics using analytics tools, generated" +
          "detailed progress reports for management, and identified areas for system optimization\n" +
          "• Background Processing: Implemented efficient background job processing using Sidekiq for" +
          "handling heavy computational tasks like vehicle valuation calculations and service scheduling\n" +
          "• Scalability Solutions: Designed and implemented scalable architecture solutions to handle" +
          "growing user base and increasing transaction volumes",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b hidden md:block bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-3 flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Portfolio</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#contact">Contact</Link>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="px-3 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Software-Developer-Flat-Icon-Graphics-13375448-1.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-primary/20"
            />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nguyen Dinh Khang</h1>
              <p className="text-xl text-muted-foreground">Full Stack Developer</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ho Chi Minh City</span>
              </div>
            </div>
          </div>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I'm a web developer with over 4 years of experience in both front-end and back-end development. I
            enjoy solving front end problems and creating the best user experience for users. I also spend time
            learning new technologies and best practices to become a better engineer.

          </p>
          <div className="flex space-x-4">
            <Button size="lg">
              <Mail className="h-4 w-4 mr-2" />
              <Link href="mailto:khangnd2056@gmail.com">Get In Touch</Link>

            </Button>
            <Button variant="outline" size="lg">
              <Github className="h-4 w-4 mr-2" />
              <Link href="https://github.com/maxpamlevi">GitHub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-3 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              I'm a dedicated full-stack developer who thrives on turning complex problems into simple, beautiful
              solutions. With expertise in modern web technologies, I build applications that are not only functional
              but also scalable and maintainable.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-3 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
            <p className="text-muted-foreground">Technologies I work with to bring ideas to life</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Front-end</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="h-5 w-5" />
                  <span>Back-end</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Testing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       Projects Section
      <section id="projects" className="px-3 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work that I'm proud of</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative flex justify-center">
                  <a href={project.link}  target="_blank">
                  <img src={project.image.toString()} alt={project.title}  className="object-contain w-100" />
                  </a>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {/*{project.tech.map((tech) => (*/}
                    {/*  <Badge key={tech} variant="outline" className="text-xs">*/}
                    {/*    {tech}*/}
                    {/*  </Badge>*/}
                    {/*))}*/}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-3 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
            <p className="text-muted-foreground">My professional journey and key achievements</p>
          </div>
          <div className="space-y-3">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      {/*<CardTitle></CardTitle>*/}
                      <CardDescription className="text-base font-medium text-primary">{job.company} - {job.title}</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {/*<Calendar className="h-4 w-4 mr-2" />*/}
                      {/*{job.period}*/}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div  className="text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: job.description.replace(/\n/g, '<br>').toString()
                      }}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-3 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
            <p className="text-muted-foreground">Let's discuss your next project or opportunity</p>
          </div>
          <div className="flex justify-center space-x-6">
            <Button size="lg" asChild>
              <Link href="mailto:khangnd2056@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </Link>
            </Button>
            {/*<Button variant="outline" size="lg" asChild>*/}
            {/*  <Link href="https://linkedin.com">*/}
            {/*    <Linkedin className="h-5 w-5 mr-2" />*/}
            {/*    LinkedIn*/}
            {/*  </Link>*/}
            {/*</Button>*/}
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/maxpamlevi">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="px-3 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span className="font-bold">Khang N.</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Khang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
