// src/components/About.jsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import sandy from "../assets/sandy.png";
import SandeepYadav_Resume from "../assets/SandeepYadav_Resume.pdf";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [visibleSections, setVisibleSections] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  const education = useMemo(
    () => [
      {
        degree: "Bachelor of Computer Application",
        institution: "ST. Xavier College of Management & Technology",
        year: "2022 - 2025",
        description: "Full Stack Development",
        grade: "A+",
        icon: "🎓",
      },
      {
        degree: "12th Intermediate (CBSE)",
        institution: "Teresa International Academy",
        year: "2018 - 2020",
        description: "Science",
        grade: "A",
        icon: "📚",
      },
    ],
    [],
  );

  const skills = useMemo(
    () => [
      {
        name: "HTML/CSS",
        level: 90,
        icon: "🎨",
        color: "from-blue-500 to-cyan-500",
        description: "Responsive & semantic",
      },
      {
        name: "JavaScript",
        level: 75,
        icon: "⚡",
        color: "from-yellow-500 to-orange-500",
        description: "ES6+ & DOM",
      },
      {
        name: "React.js",
        level: 70,
        icon: "⚛️",
        color: "from-blue-600 to-indigo-600",
        description: "Hooks & Components",
      },
      {
        name: "Tailwind CSS",
        level: 75,
        icon: "🌊",
        color: "from-teal-500 to-emerald-500",
        description: "Utility-first",
      },
      {
        name: "Git & GitHub",
        level: 70,
        icon: "📦",
        color: "from-gray-600 to-gray-800",
        description: "Version control",
      },
      {
        name: "Java",
        level: 65,
        icon: "☕",
        color: "from-purple-500 to-pink-500",
        description: "OOP & Algorithms",
      },
    ],
    [],
  );

  const timeline = useMemo(
    () => [
      {
        year: "2022",
        title: "Started BCA Journey",
        description:
          "Began Bachelor's degree in Computer Applications with a focus on web development.",
        icon: "🚀",
      },
      {
        year: "2023",
        title: "First Web Project",
        description:
          "Built first responsive website using HTML, CSS, and JavaScript.",
        icon: "💻",
      },
      {
        year: "2024",
        title: "React.js Specialization",
        description:
          "Dived deep into React.js and started building modern web applications.",
        icon: "⚛️",
      },
      {
        year: "2025",
        title: "Professional Aspirations",
        description:
          "Preparing to enter the professional world as a frontend developer.",
        icon: "🎯",
      },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { value: "BCA", label: "Degree", icon: "🎓" },
      { value: "3+", label: "Projects", icon: "📁" },
      { value: "Fresher", label: "Experience", icon: "🌟" },
    ],
    [],
  );

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      if (!el.id) {
        el.id = `section-${Math.random().toString(36).substr(2, 9)}`;
      }
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Keyboard navigation for tabs
  const handleTabKeyDown = useCallback((e, tabId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveTab(tabId);
    }
  }, []);

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 overflow-hidden"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" id="about-title">
          <div className="inline-block relative mb-6">
            <span
              className="inline-block px-4 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm font-semibold rounded-full mb-4 transform transition-all duration-700 translate-y-10 opacity-0"
              style={
                visibleSections["about-title"]
                  ? { transform: "translateY(0)", opacity: 1 }
                  : {}
              }
            >
              Get to Know Me
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 transform transition-all duration-700 delay-100 translate-y-10 opacity-0"
              style={
                visibleSections["about-title"]
                  ? { transform: "translateY(0)", opacity: 1 }
                  : {}
              }
            >
              About{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Me
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-full"></div>
          </div>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 translate-y-10 opacity-0"
            style={
              visibleSections["about-title"]
                ? { transform: "translateY(0)", opacity: 1 }
                : {}
            }
          >
            Discover my journey, skills, and what drives me as a developer
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden animate-on-scroll border border-gray-100 dark:border-gray-700"
              id="profile-card"
              style={{
                transform: visibleSections["profile-card"]
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                opacity: visibleSections["profile-card"] ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "100ms",
              }}
            >
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="2" fill="white" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white dark:bg-gray-700 p-1 shadow-2xl transform transition-transform duration-500 hover:scale-110">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={sandy}
                        alt="Sandeep Yadav - Frontend Developer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    Sandeep Yadav
                  </h3>
                  <p className="text-indigo-200 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Frontend Developer
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                    <span className="mr-2">📝</span> Bio
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Passionate BCA student with a love for creating beautiful,
                    responsive web applications. Always eager to learn and take
                    on new challenges.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm group">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                      <svg
                        className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Patna (Bihar), IND
                    </span>
                  </div>
                  <div className="flex items-center text-sm group">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                      <svg
                        className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Sandeepcodes.21@gmail.com
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href={SandeepYadav_Resume}
                  download
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/30"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="lg:col-span-2">
            <div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden animate-on-scroll border border-gray-100 dark:border-gray-700"
              id="tabbed-content"
              style={{
                transform: visibleSections["tabbed-content"]
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                opacity: visibleSections["tabbed-content"] ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "200ms",
              }}
            >
              {/* Tab Navigation */}
              <div
                className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto"
                role="tablist"
              >
                {[
                  { id: "journey", label: "My Journey", icon: "🌟" },
                  { id: "education", label: "Education", icon: "🎓" },
                  { id: "skills", label: "Skills", icon: "💪" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, tab.id)}
                    className={`px-6 py-4 font-medium text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-primary-light dark:text-primary-dark border-b-2 border-primary-light dark:border-primary-dark bg-indigo-50 dark:bg-indigo-900/20"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8">
                {/* Journey Tab */}
                {activeTab === "journey" && (
                  <div
                    role="tabpanel"
                    id="panel-journey"
                    aria-labelledby="tab-journey"
                  >
                    <div className="space-y-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Hello! I'm{" "}
                          <strong className="text-indigo-600 dark:text-indigo-400">
                            Sandeep Yadav
                          </strong>
                          , a passionate BCA student with a strong focus on
                          frontend development. My journey into technology began
                          during my school days when I first discovered the
                          magic of creating websites with HTML and CSS.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Throughout my BCA studies, I've immersed myself in
                          programming fundamentals, database management, and
                          software development principles. Alongside my academic
                          pursuits, I dedicate significant time to mastering
                          frontend technologies, with a particular emphasis on
                          React.js and modern CSS frameworks.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          As a fresher eager to make my mark in the industry,
                          I'm constantly seeking opportunities to apply my
                          skills in real-world scenarios. I believe in writing
                          clean, maintainable code and staying updated with the
                          latest web development trends through continuous
                          learning and hands-on projects.
                        </p>
                      </div>

                      {/* Timeline */}
                      <div className="mt-8">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                          <span className="mr-2">📅</span> My Timeline
                        </h4>
                        <div className="relative">
                          {/* Vertical line */}
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
                          {timeline.map((item, index) => (
                            <div
                              key={index}
                              className="relative pl-12 pb-8 last:pb-0 group"
                            >
                              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                <span className="text-sm">{item.icon}</span>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 ml-2 border border-gray-100 dark:border-gray-600 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <h5 className="font-semibold text-gray-800 dark:text-white">
                                    {item.title}
                                  </h5>
                                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                                    {item.year}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <div
                    role="tabpanel"
                    id="panel-education"
                    aria-labelledby="tab-education"
                  >
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-700 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                              {edu.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                  <h4 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {edu.degree}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                                    {edu.institution}
                                  </p>
                                </div>
                                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-700 px-3 py-1 rounded-full shadow-sm border border-indigo-100 dark:border-gray-600">
                                  {edu.year}
                                </div>
                              </div>
                              {edu.description && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                                    {edu.description}
                                  </span>
                                  {edu.grade && (
                                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                                      Grade: {edu.grade}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === "skills" && (
                  <div
                    role="tabpanel"
                    id="panel-skills"
                    aria-labelledby="tab-skills"
                  >
                    <div>
                      <div className="mb-8">
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          Here are the key technologies I'm focusing on in my
                          frontend development journey:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {skills.map((skill, index) => {
                            const isHovered = hoveredSkill === index;
                            const levelText = getSkillLevelText(skill.level);
                            return (
                              <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl"
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                              >
                                <div
                                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                                ></div>
                                <div
                                  className={`relative bg-white dark:bg-gray-700 rounded-xl p-4 h-full border border-gray-100 dark:border-gray-600 transition-all duration-300 ${
                                    isHovered
                                      ? "border-indigo-300 dark:border-indigo-700 shadow-lg transform -translate-y-1"
                                      : ""
                                  }`}
                                >
                                  <div className="flex flex-col items-center text-center h-full">
                                    <span className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                      {skill.icon}
                                    </span>
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                      {skill.name}
                                    </h4>
                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                                      {levelText}
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 overflow-hidden">
                                      <div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                        style={{
                                          width: visibleSections[
                                            "tabbed-content"
                                          ]
                                            ? `${skill.level}%`
                                            : "0%",
                                        }}
                                      ></div>
                                    </div>
                                    {isHovered && skill.description && (
                                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 transition-all duration-300">
                                        {skill.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Learning Goals */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-6 border border-indigo-100 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5.477 7.5 5.477S4.168 5.477 3 6.253v13C3 20.732 4.168 22 6 22h12c1.832 0 3-1.268 3-2.747z"
                            />
                          </svg>
                          🎯 Learning Goals
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li className="flex items-start group hover:translate-x-1 transition-transform">
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Master advanced React patterns and state management
                          </li>
                          <li className="flex items-start group hover:translate-x-1 transition-transform">
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Learn backend technologies for full-stack
                            development
                          </li>
                          <li className="flex items-start group hover:translate-x-1 transition-transform">
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Contribute to open-source projects
                          </li>
                          <li className="flex items-start group hover:translate-x-1 transition-transform">
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Build a strong portfolio of full-stack applications
                          </li>
                        </ul>
                      </div>
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
