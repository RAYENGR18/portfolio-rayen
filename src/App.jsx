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
  // --- DONNÉES DU PORTFOLIO (Modifiez ici si besoin) ---
  
  const profile = {
    name: "GRAGBA RAYEN",
    title: "Développeur Full Stack, Data & Freelancer",
    bio: "Développeur actuellement en Master 2 de Recherche en Informatique (Génie Logiciel), orienté Data, Intelligence Artificielle et systèmes digitaux. Passionné par la résolution de problèmes complexes, l'analyse de données et la conception de solutions intelligentes. Expérience confirmée dans le développement Python, l'IA appliquée et la création de plateformes web.",
    email: "rayengragba18@gmail.com",
    location: "Ariana, Tunisie",
    github: "https://github.com/RAYENGR18/",
    linkedin: "https://www.linkedin.com/in/gragba-rayen-3abb28375/", // Pensez à mettre votre vrai lien LinkedIn ici
    // Pour la photo : mettez une image nommée 'profile.jpg' dans le dossier 'public' de votre projet
    photoUrl: "/profile.jpg" 
  };

  const skills = [
    { category: "Langages", items: "Python, PHP, .NET, Java, JavaScript" },
    { category: "Web", items: "React.js, Angular, Symfony, Django" },
    { category: "Data & IA", items: "Pandas, Scikit-Learn, TensorFlow, NLP" },
    { category: "DevOps & BD", items: "Docker, Git, SQL, PostgreSQL, MySQL" }
  ];

  const education = [
    {
      degree: "Master 2 Recherche Informatique (Génie Logiciel)",
      school: "ISI Ariana",
      year: "2024 - Présent",
      desc: "Orienté Data, Intelligence Artificielle et systèmes digitaux."
    },
    {
      degree: "Licence en Génie des Systèmes Informatiques",
      school: "FST Tunis",
      year: "Juillet 2024",
      desc: ""
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Sokra",
      year: "2021",
      desc: ""
    }
  ];

  const experience = [
    {
      role: "Développeur Full Stack",
      company: "AppWeb Plus",
      period: "Nov 2024 - Oct 2025",
      description: "Ingénierie de fonctionnalités web basées sur l'IA (React.js/Symfony). Développement d'interfaces dynamiques et API robustes."
    },
    {
      role: "PFE - Développeur Data & BI",
      company: "Team IT Connection",
      period: "Fév - Juin 2024",
      description: "Conception d'un module BI dynamique dans Odoo ERP. Automatisation SQL et dashboards avec WebDataRocks & amCharts."
    },
    {
      role: "Développeur Full Stack (Projets Réels)",
      company: "Freelance / Université",
      period: "2023 - 2025",
      description: "Développement d'une plateforme RH intelligente, système Smart House IoT et solution e-commerce .NET."
    }
  ];

  const projects = [
    {
      name: "Besimmo Real Estate",
      url: "https://besimmo.be/",
      desc: "Plateforme immobilière professionnelle. (Site réalisé)",
      tags: ["Web", "Production"]
    },
    {
      name: "Tileo UAE",
      url: "https://en.tileo.ae/",
      desc: "Site vitrine pour une entreprise aux Émirats. (Site réalisé)",
      tags: ["Web", "International"]
    },
    {
      name: "Smart Parking System",
      url: "https://github.com/RAYENGR18/",
      desc: "Détection en temps réel, réservation et tableau de bord interactif.",
      tags: ["IoT", "Dashboard"]
    },
    {
      name: "Medical AI Analysis",
      url: "https://github.com/RAYENGR18/",
      desc: "Classification d'imagerie médicale via Deep Learning.",
      tags: ["AI", "Python"]
    }
  ];

  // --- RENDU (Ne touchez pas en dessous sauf pour le design) ---

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* Header / Hero Section */}
      <header className="relative pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Photo de Profil */}
          <div className="relative group shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-slate-800 flex items-center justify-center">
              <img 
                src={profile.photoUrl} 
                alt={profile.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.style.display = 'none'; // Cache l'image si elle n'existe pas
                  e.target.nextSibling.style.display = 'flex'; // Affiche l'icône
                }} 
              />
              <div className="hidden w-full h-full flex items-center justify-center text-slate-500 flex-col absolute inset-0 bg-slate-800">
                 <User size={64} />
              </div>
            </div>
          </div>

          {/* Info Principales */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-light">
              {profile.title}
            </h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
              {profile.bio}
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 text-white">
                <Github size={18} className="text-blue-400" />
                <span>GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 text-white">
                <Linkedin size={18} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 text-white">
                <Mail size={18} className="text-blue-400" />
                <span>{profile.email}</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <MapPin size={18} className="text-blue-400" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Skills & Education */}
        <div className="md:col-span-4 space-y-12">
          
          {/* Compétences */}
          <section>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              <Code className="text-blue-500" /> Compétences Techniques
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="font-semibold text-blue-300 mb-1">
                    {skill.category}
                  </div>
                  <div className="text-sm text-slate-400">
                    {skill.items}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Formation */}
          <section>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              <GraduationCap className="text-emerald-500" /> Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="pl-4 border-l-2 border-slate-700 hover:border-emerald-500 transition-colors">
                  <div className="text-sm text-emerald-400 font-mono mb-1">
                    {edu.year}
                  </div>
                  <div className="font-bold text-slate-200">
                    {edu.degree}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {edu.school}
                  </div>
                  {edu.desc && (
                    <div className="text-slate-500 text-xs mt-1 italic">
                      {edu.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Experience & Projects */}
        <div className="md:col-span-8 space-y-12">

          {/* Expériences */}
          <section>
            <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-8">
              <Briefcase className="text-blue-500" /> Expériences Professionnelles
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-blue-100">
                        {exp.role}
                      </h4>
                      <div className="text-blue-400 font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <span className="text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projets & Réalisations */}
          <section>
            <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-8">
              <Layout className="text-emerald-500" /> Portfolio & Projets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, index) => (
                <div key={index} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-slate-900 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        {index < 2 ? <Layout size={24} /> : <Server size={24} />}
                      </div>
                      <a 
                        href={proj.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                        title="Voir le projet"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">
                      {proj.name}
                    </h4>
                    
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-700 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      
      <footer className="text-center text-slate-600 mt-20 pt-10 border-t border-slate-800 text-sm">
        <p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
      </footer>

    </div>
  );
}