import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code, 
  Layout, 
  GraduationCap, 
  Briefcase, 
  Server,
  User
} from 'lucide-react';

export default function Portfolio() {

  const profile = {
    name: "GRAGBA RAYEN",
    title: "Full Stack Developer, Data & Freelancer",
    bio: "Developer focused on Data Science, Artificial Intelligence, and digital systems. Passionate about solving complex problems, data analysis, and designing intelligent solutions. Proven experience in Python development, applied AI, and building web platforms.",
    email: "rayengragba18@gmail.com",
    location: "Ariana, Tunisia",
    github: "https://github.com/RAYENGR18/",
    linkedin: "https://www.linkedin.com/in/gragba-rayen-3abb28375/",
    photoUrl: "/profile.jpg"
  };

  const skills = [
    { category: "Languages", items: "Python, PHP, .NET, Java, JavaScript" },
    { category: "Web", items: "React.js, Angular, Symfony, Django" },
    { category: "Data & AI", items: "Pandas, Scikit-Learn, TensorFlow, NLP" },
    { category: "DevOps & Databases", items: "Docker, Git, SQL, PostgreSQL, MySQL" }
  ];

  const education = [
    {
      degree: "Research Master’s in Computer Science (Software Engineering)",
      school: "ISI Ariana",
      year: "2024 – Present",
      desc: "Focused on Data, Artificial Intelligence, and digital systems."
    },
    {
      degree: "Bachelor’s in Computer Systems Engineering",
      school: "FST Tunis",
      year: "July 2024"
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "AppWeb Plus",
      period: "Nov 2024 – Oct 2025",
      description: "Engineering AI-based web features using React.js and Symfony. Developing dynamic interfaces and robust APIs."
    },
    {
      role: "Data & BI Developer – Final Year Project",
      company: "Team IT Connection",
      period: "Feb – Jun 2024",
      description: "Design of a dynamic BI module within Odoo ERP. SQL automation and dashboards using WebDataRocks & amCharts."
    }
  ];

  const projects = [
    {
      name: "Besimmo Real Estate",
      url: "https://besimmo.be/",
      desc: "Professional real estate platform.",
      tags: ["Web", "Production"]
    },
    {
      name: "Tileo UAE",
      url: "https://en.tileo.ae/",
      desc: "Corporate website for a UAE-based company.",
      tags: ["Web", "International"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20">

      {/* Header */}
      <header className="pt-24 pb-16 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 bg-slate-800 flex items-center justify-center">
            <img src={profile.photoUrl} alt={profile.name} className="w-full h-full object-cover" />
          </div>

          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl font-bold">{profile.name}</h1>
            <h2 className="text-xl text-slate-300">{profile.title}</h2>
            <p className="text-slate-400 max-w-xl">{profile.bio}</p>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href={`mailto:${profile.email}`}><Mail /></a>
              <span className="flex items-center gap-1"><MapPin size={16}/> {profile.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm mt-20">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>

    </div>
  );
}
