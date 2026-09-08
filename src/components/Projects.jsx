// src/components/Projects.jsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import images from "../assets/images.jpeg";
import portfolio from "../assets/portfolio.png";
import hotel from "../assets/hotel.jpg";
import login from "../assets/login.png";
import campus from "../assets/campus.png";

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const observerRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Login & SignUp Authentication",
        description:
          "The objective of the Login and SignUp Authentication system is to provide a secure, reliable, and user-friendly way for customers to access personalized features of the restaurant website. It ensures that only authorized users can log in to their accounts while allowing new visitors to register quickly and easily.",
        image: login,
        tags: ["React", "Node.js", "MongoDB"],
        category: "fullstack",
        link: "https://registerloginn.netlify.app/",
        github: "#",
        features: [
          "User Authentication",
          "Secure User Registration",
          "Encrypted Password Storage",
          "User Login",
        ],
        date: "2024",
        status: "live",
      },
      {
        title: "Online Question Paper Generation using AI",
        description:
          "An AI-powered system that generates question papers automatically from a digital question bank, ensuring balanced distribution of topics, difficulty levels, and marks while saving teachers' time through automated paper creation and answer key generation.",
        image: images,
        tags: ["React", "Flask", "Bootstrap"],
        category: "frontend",
        link: "https://quesgeni.netlify.app/",
        github: "#",
        features: [
          "Topic-wise / chapter-wise paper creation",
          "Fixed vs. random selection of questions",
          "Mobile Responsive",
        ],
        date: "2024",
        status: "live",
      },
      {
        title: "Hotel Booking Platform",
        description:
          "Why just travel, when you can stay in style? Choose from thousands of trusted hotels. Instant booking, secure payments, real comfort. Turn every trip into a story worth telling.",
        image: hotel,
        tags: ["React", "Tailwind CSS", "CSS"],
        category: "frontend",
        link: "https://bookinghotelss.netlify.app/",
        github: "#",
        features: [
          "Easy Search & Filters",
          "Instant Booking",
          "Customer Reviews & Ratings",
          "24/7 Customer Support",
        ],
        date: "2024",
        status: "live",
      },
      {
        title: "Social Media Dashboard",
        description:
          "Analytics dashboard for social media metrics with data visualization and reporting. Track engagement, growth, and performance across multiple platforms.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["React", "Chart.js", "Express"],
        category: "fullstack",
        link: "#",
        github: "#",
        features: [
          "Data Visualization",
          "Real-time Analytics",
          "Custom Reports",
          "Multi-platform Integration",
        ],
        date: "2024",
        status: "development",
      },
      {
        title: "Portfolio Website",
        description:
          "A responsive portfolio website built with modern web technologies. Features dark mode, smooth animations, and optimized performance.",
        image: portfolio,
        tags: ["React", "Tailwind CSS", "Vite"],
        category: "frontend",
        link: "#",
        github: "https://github.com/Sandeepcodes21/portfolio",
        features: [
          "Responsive Design",
          "Dark Mode",
          "Smooth Animations",
          "SEO Optimized",
        ],
        date: "2025",
        status: "live",
      },
      {
        title: "Campus Recruitment Test System",
        description:
          "A comprehensive platform for campus recruitment with role-based access, online MCQ tests with timer, automatic evaluation, and secure exam mode with fullscreen and tab-switch detection.",
        image: campus,
        tags: ["React", "Tailwind CSS", "Vite"],
        category: "management",
        link: "https://campusexam.netlify.app/",
        github: "#",
        features: [
          "Role-based login for Admin and Students",
          "Online MCQ tests with timer",
          "Automatic evaluation and result generation",
          "Secure exam mode (fullscreen & tab-switch detection)",
        ],
        date: "2025",
        status: "live",
      },
    ],
    [],
  );

  const categories = useMemo(
    () => [
      { id: "all", name: "All Projects", icon: "📁" },
      { id: "frontend", name: "Frontend", icon: "🎨" },
      { id: "fullstack", name: "Full Stack", icon: "⚡" },
      { id: "management", name: "Web Development", icon: "🌐" },
    ],
    [],
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "live":
        return "bg-green-500";
      case "development":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "live":
        return "Live";
      case "development":
        return "In Development";
      default:
        return "Planned";
    }
  };

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    let result =
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.tags.some((tag) => tag.toLowerCase().includes(term)) ||
          project.features.some((feature) =>
            feature.toLowerCase().includes(term),
          ),
      );
    }

    return result;
  }, [projects, filter, searchTerm]);

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

  // Keyboard navigation for filter buttons
  const handleFilterKeyDown = useCallback((e, categoryId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFilter(categoryId);
    }
  }, []);

  // Reset search
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 overflow-hidden relative"
      aria-label="Projects section"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-pink-200 dark:bg-pink-900/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16 animate-on-scroll"
          id="projects-title"
        >
          <span
            className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold rounded-full mb-4 transform transition-all duration-700 translate-y-10 opacity-0"
            style={
              visibleSections["projects-title"]
                ? { transform: "translateY(0)", opacity: 1 }
                : {}
            }
          >
            My Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transform transition-all duration-700 delay-100 translate-y-10 opacity-0"
            style={
              visibleSections["projects-title"]
                ? { transform: "translateY(0)", opacity: 1 }
                : {}
            }
          >
            Featured{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Projects
            </span>
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full transform transition-all duration-1000 delay-200 scale-x-0"
            style={
              visibleSections["projects-title"]
                ? { transform: "scaleX(1)" }
                : {}
            }
          ></div>
          <p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 translate-y-10 opacity-0"
            style={
              visibleSections["projects-title"]
                ? { transform: "translateY(0)", opacity: 1 }
                : {}
            }
          >
            Here are some of my recent projects. Each project is a unique piece
            of development with its own challenges and solutions.
          </p>
        </div>

        {/* Filter and Search Section */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 mb-12 animate-on-scroll"
          id="filter-section"
        >
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={filter === category.id}
                onClick={() => setFilter(category.id)}
                onKeyDown={(e) => handleFilterKeyDown(e, category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                }`}
                style={{
                  transform: visibleSections["filter-section"]
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.9)",
                  opacity: visibleSections["filter-section"] ? 1 : 0,
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Search and View Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="pl-10 pr-8 py-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300 w-48 sm:w-56"
                aria-label="Search projects"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Clear search"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-600 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                aria-label="Grid view"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm0-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                aria-label="List view"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Count */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-8`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll border border-gray-100 dark:border-gray-700"
                id={`project-${index}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  transform: visibleSections[`project-${index}`]
                    ? "translateY(0) scale(1)"
                    : "translateY(50px) scale(0.95)",
                  opacity: visibleSections[`project-${index}`] ? 1 : 0,
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 z-10 px-3 py-1 ${getStatusColor(project.status)} text-white text-xs font-medium rounded-full shadow-lg`}
                >
                  {getStatusLabel(project.status)}
                </div>

                {/* Image with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Quick action buttons on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-white text-gray-800 font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full"
                          >
                            {feature.length > 20
                              ? feature.substring(0, 20) + "..."
                              : feature}
                          </span>
                        ))}
                      {project.features.length > 3 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 px-2 py-1">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full border border-indigo-100 dark:border-indigo-800 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300 group/link"
                      >
                        <span>Live Demo</span>
                        <svg
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 group/link"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))
          ) : (
            // No results message
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                onClick={clearSearch}
                className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* View All Projects Button */}
        {filteredProjects.length > 0 &&
          filteredProjects.length < projects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setFilter("all")}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default Projects;
