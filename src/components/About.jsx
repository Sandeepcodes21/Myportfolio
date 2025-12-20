// src/components/About.jsx
import { useState, useEffect } from 'react';
import sandy from "../assets/sandy.png";
import Sandeep_Yadav from "../assets/Sandeep_Yadav";

const About = () => {
    const [activeTab, setActiveTab] = useState('journey');
    const [visibleSections, setVisibleSections] = useState({});

    const education = [
        {
            degree: "Bachelor of Computer Application",
            institution: "ST.Xavier College of Management & Technology",
            year: "2022 - 2025",
            description: "Full Stack Development"
        },
        {
            degree: "12th Intermediate-(CBSE)",
            institution: "Teresa International Academy",
            year: "2018 - 2020",
            description:"Science"
        }
    ];

    const skills = [
        { name: "HTML/CSS", level: "Advanced", icon: "🎨", color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: "Intermediate", icon: "⚡", color: "from-yellow-500 to-orange-500" },
        { name: "React.js", level: "Intermediate", icon: "⚛️", color: "from-blue-600 to-indigo-600" },
        { name: "Tailwind CSS", level: "Intermediate", icon: "🌊", color: "from-teal-500 to-emerald-500" },
        { name: "Git & GitHub", level: "Intermediate", icon: "📦", color: "from-gray-600 to-gray-800" },
        { name: "Java Programming", level: "Intermediate", icon: "📱", color: "from-purple-500 to-pink-500" }
    ];

    const timeline = [
        {
            year: "2022",
            title: "Started BCA Journey",
            description: "Began my Bachelor's degree in Computer Applications with a focus on web development."
        },
        {
            year: "2023",
            title: "First Web Project",
            description: "Built my first responsive website using HTML, CSS, and JavaScript."
        },
        {
            year: "2024",
            title: "React.js Specialization",
            description: "Dived deep into React.js and started building modern web applications."
        },
        {
            year: "2025",
            title: "Professional Aspirations",
            description: "Preparing to enter the professional world as a frontend developer."
        }
    ];

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
        <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll" id="about-title">
                    <div className="inline-block relative mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 transform transition-all duration-700 translate-y-10 opacity-0"
                            style={visibleSections['about-title'] ? { transform: 'translateY(0)', opacity: 1 } : {}}>
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 translate-y-10 opacity-0 delay-300"
                        style={visibleSections['about-title'] ? { transform: 'translateY(0)', opacity: 1 } : {}}>
                        Discover my journey, skills, and what drives me as a developer
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-on-scroll"
                            id="profile-card"
                            style={{
                                transform: visibleSections['profile-card'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                opacity: visibleSections['profile-card'] ? 1 : 0,
                                transitionDelay: '100ms'
                            }}>
                            {/* Profile Image */}
                            <div className="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <div className="absolute inset-0 bg-black opacity-20"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-32 h-32 mx-auto rounded-full bg-white dark:bg-gray-700 p-1 shadow-lg">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <img
                                                src={sandy}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold text-white">Sandeep Yadav</h3>
                                    <p className="text-indigo-200">Frontend Developer</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="p-6">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-light dark:text-primary-dark">BCA</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Degree</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-light dark:text-primary-dark">3+</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-light dark:text-primary-dark">Fresher</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Bio</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Passionate BCA student with a love for creating beautiful, responsive web applications. Always eager to learn and take on new challenges.
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center text-sm">
                                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span className="text-gray-600 dark:text-gray-300">Patna(Bihar),IND</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <span className="text-gray-600 dark:text-gray-300">Sandeepcodes.21@gmail.com</span>
                                    </div>
                                </div>

                                {/* Download Button */}
                                <a href={Sandeep_Yadav} className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Tabbed Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-on-scroll"
                            id="tabbed-content"
                            style={{
                                transform: visibleSections['tabbed-content'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                opacity: visibleSections['tabbed-content'] ? 1 : 0,
                                transitionDelay: '200ms'
                            }}>
                            {/* Tab Navigation */}
                            <div className="flex border-b border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={() => setActiveTab('journey')}
                                    className={`px-6 py-4 font-medium text-sm transition-colors duration-300 ${activeTab === 'journey'
                                            ? 'text-primary-light dark:text-primary-dark border-b-2 border-primary-light dark:border-primary-dark'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    My Journey
                                </button>
                                <button
                                    onClick={() => setActiveTab('education')}
                                    className={`px-6 py-4 font-medium text-sm transition-colors duration-300 ${activeTab === 'education'
                                            ? 'text-primary-light dark:text-primary-dark border-b-2 border-primary-light dark:border-primary-dark'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    Education
                                </button>
                                <button
                                    onClick={() => setActiveTab('skills')}
                                    className={`px-6 py-4 font-medium text-sm transition-colors duration-300 ${activeTab === 'skills'
                                            ? 'text-primary-light dark:text-primary-dark border-b-2 border-primary-light dark:border-primary-dark'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    Skills
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="p-6 md:p-8">
                                {/* Journey Tab */}
                                {activeTab === 'journey' && (
                                    <div className="space-y-8">
                                        <div className="prose prose prose-sm max-w-none dark:prose-invert">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Hello! I'm Sandeep Yadav, a passionate BCA student with a strong focus on frontend development. My journey into technology began during my school days when I first discovered the magic of creating websites with HTML and CSS.
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Throughout my BCA studies, I've immersed myself in programming fundamentals, database management, and software development principles. Alongside my academic pursuits, I dedicate significant time to mastering frontend technologies, with a particular emphasis on React.js and modern CSS frameworks.
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                As a fresher eager to make my mark in the industry, I'm constantly seeking opportunities to apply my skills in real-world scenarios. I believe in writing clean, maintainable code and staying updated with the latest web development trends through continuous learning and hands-on projects.
                                            </p>
                                        </div>

                                        
                                    </div>
                                )}

                                {/* Education Tab */}
                                {activeTab === 'education' && (
                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-bold text-lg text-gray-800 dark:text-white">{edu.degree}</h4>
                                                        <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</p>
                                                        {edu.description && (
                                                            <div className="mt-2 inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                                                                {edu.description}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="text-sm font-medium text-primary-light dark:text-primary-dark bg-white dark:bg-gray-700 px-3 py-1 rounded-full shadow-sm">
                                                        {edu.year}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Skills Tab */}
                                {activeTab === 'skills' && (
                                    <div>
                                        <div className="mb-8">
                                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                                Here are the key technologies I'm focusing on in my frontend development journey:
                                            </p>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {skills.map((skill, index) => (
                                                    <div key={index} className="group relative overflow-hidden rounded-xl">
                                                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                                        <div className="relative bg-white dark:bg-gray-700 rounded-xl p-4 h-full border border-gray-100 dark:border-gray-600 group-hover:border-primary-light dark:group-hover:border-primary-dark transition-colors duration-300">
                                                            <div className="flex flex-col items-center text-center h-full">
                                                                <span className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
                                                                    {skill.icon}
                                                                </span>
                                                                <h4 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                                                                    {skill.name}
                                                                </h4>
                                                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                                                    {skill.level}
                                                                </div>
                                                                <div className="mt-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                                                                    <div
                                                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                                                        style={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Learning Goals */}
                                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6">
                                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                                                <svg className="w-5 h-5 text-primary-light dark:text-primary-dark mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5.477 7.5 5.477S4.168 5.477 3 6.253v13C3 20.732 4.168 22 6 22h12c1.832 0 3-1.268 3-2.747z"></path>
                                                </svg>
                                                Learning Goals
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Master advanced React patterns and state management
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Learn backend technologies for full-stack development
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Contribute to open-source projects
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;