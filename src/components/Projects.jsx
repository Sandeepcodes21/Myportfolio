// src/components/Projects.jsx
import { useState, useEffect } from 'react';
import images from "../assets/images.jpeg";
import portfolio from "../assets/portfolio.png";
import hotel from '../assets/hotel.jpg';
import login from '../assets/login.png'
import campus from '../assets/campus.png'

const Projects = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const [filter, setFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
      {
        title: "Login & SignUp Authentication",
        description:
          "The objective of the Login and SignUp Authentication system is to provide a secure, reliable, and user-friendly way for customers to access personalized features of the restaurant website. It ensures that only authorized users can log in to their accounts while allowing new visitors to register quickly and easily.",
        image: login,
        tags: ["React", "Node.js", "MongoDB"],
        category: "fullstack",
        link: "https://registerloginn.netlify.app/",
        features: [
          "User Authentication",
          "Secure User Registration",
          "Encrypted Password Storage",
          "User Login",
        ],
      },
      {
        title: "Online Question Paper Generation using AI",
        description:
          "An AI-powered system that generates question papers automatically from a digital question bank, ensuring balanced distribution of topics, difficulty levels, and marks while saving teachers’ time through automated paper creation and answer key generation.",
        image: images,
        tags: ["React", "Flask", "BootStrap"],
        category: "frontend",
        link: "https://quesgeni.netlify.app/",
        features: [
          "Topic-wise / chapter-wise paper creation.",
          "Fixed vs. random selection of questions.",
          "Mobile Responsive",
        ],
      },
      {
        title: "Hotel Booking",
        description: `Why just travel, when you can stay in style?
                Choose from thousands of trusted hotels.
                Instant booking, secure payments, real comfort.
                Turn every trip into a story worth telling.`,
        image: hotel,
        tags: ["React", "TalwindCss", "CSS"],
        category: "frontend",
        link: "https://bookinghotelss.netlify.app/",
        features: [
          "Easy Search & Filters",
          "Instant Booking",
          "Customer Reviews & Ratings",
          "24/7 Customer Support",
        ],
      },
      {
        title: "Social Media Dashboard",
        description:
          "Analytics dashboard for social media metrics with data visualization and reporting.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["React", "Chart.js", "Express"],
        category: "fullstack",
        link: "#",
        features: [
          "Data Visualization",
          "Real-time Analytics",
          "Custom Reports",
          "Multi-platform",
        ],
      },
      {
        title: "Portfolio Website",
        description:
          "A responsive portfolio website built with modern web technologies.",
        image: portfolio,
        tags: ["React", "Tailwind CSS", "Vite"],
        category: "frontend",
        link: "#",
        features: [
          "Responsive Design",
          "Dark Mode",
          "Animations",
          "SEO Optimized",
        ],
      },
      {
        title: "Campus Recruitment Test",
        description:
          "A responsive portfolio website built with modern web technologies.",
        image: campus,
        tags: ["React", "Tailwind CSS", "Vite"],
        category: "management",
        link: "https://campusexam.netlify.app/",
        features: [
          "Role-based login for Admin and Students",
          "Online MCQ tests with timer",
          "Automatic evaluation and result generation",
          "Secure exam mode (fullscreen & tab-switch detection)",
        ],
      },
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'management',name:'Web Development'}
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-on-scroll" id="projects-title">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transform transition-all duration-700 translate-y-10 opacity-0"
                        style={visibleSections['projects-title'] ? { transform: 'translateY(0)', opacity: 1 } : {}}>
                        My Projects
                    </h2>
                    <div className="w-24 h-1 gradient-bg mx-auto rounded-full transform transition-all duration-1000 scale-x-0"
                        style={visibleSections['projects-title'] ? { transform: 'scaleX(1)' } : {}}></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 translate-y-10 opacity-0 delay-300"
                        style={visibleSections['projects-title'] ? { transform: 'translateY(0)', opacity: 1 } : {}}>
                        Here are some of my recent projects. Each project is a unique piece of development with its own challenges and solutions.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll" id="filter-section">
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${filter === category.id
                                    ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                            style={{
                                transform: visibleSections['filter-section'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                                opacity: visibleSections['filter-section'] ? 1 : 0,
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index}
                            className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll"
                            id={`project-${index}`}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{
                                transform: visibleSections[`project-${index}`] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                opacity: visibleSections[`project-${index}`] ? 1 : 0,
                                transitionDelay: `${index * 100}ms`
                            }}>
                            {/* Image with overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex}
                                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-primary-light dark:text-primary-dark text-xs font-medium rounded-full transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-primary-light dark:text-primary-dark font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300 group-hover:translate-x-1"
                                >
                                    View Project
                                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Projects;