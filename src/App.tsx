import React from 'react';
import { Github, Linkedin, Mail, Twitter, GoogleScholar, Moon, Sun, Menu, X, Code, Cpu, Database, FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mock data - in a real app, this would come from a CMS or API
const projects = [
  {
    title: "AI-Powered Manufacturing Optimization",
    description: "Developed a machine learning system that reduced manufacturing defects by 35% through real-time quality control analysis.",
    tags: ["Python", "TensorFlow", "Computer Vision", "Industrial IoT"],
    link: "https://github.com/yourusername/project1",
    icon: <Cpu className="w-8 h-8 mb-4 text-sky-500 dark:text-sky-400" />
  },
  {
    title: "Predictive Maintenance System",
    description: "Created an ML model for predicting equipment failures, resulting in 40% reduction in downtime.",
    tags: ["scikit-learn", "Python", "Time Series Analysis"],
    link: "https://github.com/yourusername/project2",
    icon: <Database className="w-8 h-8 mb-4 text-violet-500 dark:text-violet-400" />
  },
  {
    title: "Smart Energy Management",
    description: "Implemented an AI-driven energy optimization system that achieved 25% energy savings in industrial settings.",
    tags: ["Deep Learning", "IoT", "Energy Analytics"],
    link: "https://github.com/yourusername/project3",
    icon: <Code className="w-8 h-8 mb-4 text-sky-500 dark:text-sky-400" />
  }
];

const blogPosts = [
  {
    title: "From Mechanical Engineering to AI: My Journey",
    date: "March 15, 2024",
    preview: "How I leveraged my engineering background to transition into AI/ML...",
    link: "/blog/mechanical-to-ai"
  },
  {
    title: "Implementing Machine Learning in Manufacturing",
    date: "March 1, 2024",
    preview: "A deep dive into how AI is revolutionizing traditional manufacturing processes...",
    link: "/blog/ml-in-manufacturing"
  },
  {
    title: "The Future of Industrial Automation",
    date: "February 15, 2024",
    preview: "Exploring the intersection of robotics, AI, and manufacturing...",
    link: "/blog/future-automation"
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Biswas Poudel</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Projects</a>
              <a href="#resume" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Resume</a>
              <a href="#blog" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Contact</a>
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-sky-400" /> : <Moon className="w-5 h-5 text-sky-500" />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-900/20">Home</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-900/20">About</a>
              <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-900/20">Projects</a>
              <a href="#resume" className="block px-3 py-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-900/20">Resume</a>
              <a href="#blog" className="block px-3 py-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-900/20">Blog</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-900/20">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 tech-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Bridging Engineering & AI Innovation
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Mechanical Engineer turned AI/ML Engineer | Specializing in Industrial AI Applications
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Leveraging mechanical engineering expertise with cutting-edge AI/ML solutions 
            to revolutionize industrial processes and manufacturing efficiency.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-sky-500 dark:text-sky-400">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                M.S. in Mechanical Engineering with focus on Robotics and Control Systems.
                Specialized training in Machine Learning and AI applications.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-400 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-violet-500 dark:text-violet-400">Technical Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • Machine Learning & Deep Learning<br />
                • Computer Vision & Industrial IoT<br />
                • Mechanical Systems Design<br />
                • Process Optimization
              </p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-sky-500 dark:text-sky-400">Industry Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                5+ years of experience implementing AI solutions in manufacturing,
                resulting in significant efficiency improvements and cost savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 tech-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Resume</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-glow transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Innovating at the Intersection of AI & Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Mechanical Engineer with a proven track record in implementing cutting-edge AI solutions 
                  in industrial settings. My unique background bridges the gap between traditional engineering 
                  and modern AI applications, delivering measurable improvements in manufacturing efficiency 
                  and process optimization.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href="https://drive.google.com/drive/u/0/home?lfhs=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <FileDown className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    View Full Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/biswas-poudel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600 group"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:text-sky-500 dark:group-hover:text-sky-400" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-sky-500 dark:text-sky-400">Core Competencies</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
                      <span>Machine Learning & Deep Learning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
                      <span>Computer Vision & Industrial IoT</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
                      <span>Process Optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
                      <span>Python, TensorFlow, PyTorch</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-violet-500 dark:text-violet-400">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full"></span>
                      <span>35% reduction in manufacturing defects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full"></span>
                      <span>Led 3 major AI implementation projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full"></span>
                      <span>Published 2 research papers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full"></span>
                      <span>$1.2M cost savings achieved</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300">
                <div className="p-6">
                  {project.icon}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
                    View Project <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 tech-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-400 transition-all duration-300">
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.preview}</p>
                  <a href={post.link} className="inline-flex items-center text-violet-500 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 gradient-text">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/poudelb1" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/biswas-poudel/" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              <Mail className="w-7 h-7" />
            </a>
            <a href="https://twitter.com/BiswasPoudel3" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="https://scholar.google.com/citations?user=9wBLgnYAAAAJ&hl=en&oi=ao/" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              <img src="/img/icons8-google-scholar.svg" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
