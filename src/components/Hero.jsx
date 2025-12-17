// src/components/Hero.jsx
import { useState, useEffect, useRef } from 'react';
import sandy from '../assets/sandy.png';

const Hero = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    const phrases = [
        "Frontend Developer",
        "UI/UX Designer",
        "React Specialist",
        "Creative Thinker"
    ];

    useEffect(() => {
        setIsVisible(true);

        const currentPhrase = phrases[index];
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex <= currentPhrase.length) {
                setText(currentPhrase.substring(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }, 1500);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [index]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;

            const shapes = heroRef.current.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, i) => {
                const speed = (i + 1) * 0.5;
                const xPos = (x - 0.5) * speed * 20;
                const yPos = (y - 0.5) * speed * 20;

                shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialLinks = [
        { name: 'GitHub', icon: 'github', url: 'https://github.com/Sandeepcodes21' },
        { name: 'LinkedIn', icon: 'linkedin', url: '#' },
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'Facebook', icon: 'Facebook', url: '#' }
    ];

    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
            {/* Animated background shapes */}
            <div ref={heroRef} className="absolute inset-0 overflow-hidden">
                <div className="shape absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
                <div className="shape absolute top-40 right-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="shape absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="relative z-10">
                        

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            Hi, I'm <span className="text-gradient">Sandeep Yadav</span>
                        </h1>

                        <div className={`text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            {text}
                            <span className={`inline-block w-1 h-8 bg-primary-light dark:bg-primary-dark ml-1 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'
                                }`}></span>
                        </div>

                        <p className={`text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-lg transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            I create beautiful, responsive, and user-friendly web applications with modern technologies. Let's build something amazing together.
                        </p>

                        <div className={`flex flex-wrap gap-4 mb-10 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <a href="#projects" className="group relative px-8 py-3 bg-primary-light dark:bg-primary-dark text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <span className="relative z-10 flex items-center">
                                    View Projects
                                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            <a href="#contact" className="group relative px-8 py-3 bg-white dark:bg-gray-800 text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <span className="relative z-10 flex items-center">
                                    Contact Me
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-primary-light dark:bg-primary-dark opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </a>
                        </div>

                        <div className={`flex space-x-4 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:text-primary-light dark:hover:text-primary-dark"
                                    style={{ transitionDelay: `${index * 100 + 1000}ms` }}
                                    aria-label={social.name}
                                >
                                    {social.icon === 'github' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    )}
                                    {social.icon === 'linkedin' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    )}
                                    {social.icon === 'twitter' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    )}
                                    {social.icon === 'Facebook' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zM12 2.022c2.404 0 4.566.942 6.175 2.472-1.236 1.571-2.915 2.811-5.054 3.711-.934-1.715-2.025-3.395-3.273-5.029.69-.103 1.392-.154 2.152-.154zM7.535 3.375c1.253 1.627 2.351 3.309 3.294 5.035-2.7.6-5.7.77-8.98.518C2.53 6.24 4.734 4.19 7.535 3.375zM2.025 12c0-.202.008-.402.022-.6 3.456.23 6.715.035 9.681-.628.23.475.45.952.66 1.432-3.38 1.057-6.165 3.222-8.337 6.48C2.68 16.85 2.025 14.507 2.025 12zm1.879 7.817c2.017-3.023 4.603-5.056 7.732-6.016.878 2.284 1.583 4.638 2.11 7.05-1.07.295-2.196.45-3.356.45-2.4 0-4.61-.844-6.346-2.244zm10.646.614c-.474-2.28-1.12-4.525-1.934-6.714 1.886-.219 3.847-.139 5.878.24-.428 2.536-1.832 4.734-3.944 6.474z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right content - Profile image with decorative elements */}
                    <div className="relative flex justify-center items-center">
                        {/* Decorative circles */}
                        <div className="absolute w-72 h-72 rounded-full border-4 border-indigo-200 dark:border-indigo-800 animate-pulse-slow"></div>
                        <div className="absolute w-80 h-80 rounded-full border-2 border-purple-200 dark:border-purple-800 animate-pulse-slow animation-delay-1000"></div>

                        {/* Profile image container */}
                        <div className="relative z-10">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-transform duration-500 hover:scale-105">
                                <img
                                    src={sandy}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;