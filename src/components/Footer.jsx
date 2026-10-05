// src/components/Footer.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const observerRef = useRef(null);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Design", icon: "🎨" },
    { name: "Java Programming", icon: "☕" },
    { name: "Frontend Development", icon: "⚛️" },
    { name: "React Development", icon: "🚀" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Sandeepcodes21",
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/feed/",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
    },
    {
      name: "Twitter",
      url: "#",
      icon: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      ),
    },
    {
      name: "Facebook",
      url: "#",
      icon: (
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zM12 2.022c2.404 0 4.566.942 6.175 2.472-1.236 1.571-2.915 2.811-5.054 3.711-.934-1.715-2.025-3.395-3.273-5.029.69-.103 1.392-.154 2.152-.154zM7.535 3.375c1.253 1.627 2.351 3.309 3.294 5.035-2.7.6-5.7.77-8.98.518C2.53 6.24 4.734 4.19 7.535 3.375zM2.025 12c0-.202.008-.402.022-.6 3.456.23 6.715.035 9.681-.628.23.475.45.952.66 1.432-3.38 1.057-6.165 3.222-8.337 6.48C2.68 16.85 2.025 14.507 2.025 12zm1.879 7.817c2.017-3.023 4.603-5.056 7.732-6.016.878 2.284 1.583 4.638 2.11 7.05-1.07.295-2.196.45-3.356.45-2.4 0-4.61-.844-6.346-2.244zm10.646.614c-.474-2.28-1.12-4.525-1.934-6.714 1.886-.219 3.847-.139 5.878.24-.428 2.536-1.832 4.734-3.944 6.474z" />
      ),
    },
  ];

  // Validate email
  const validateEmail = useCallback((value) => {
    if (!value.trim()) {
      return "Email is required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  }, []);

  // Handle email change
  const handleEmailChange = useCallback(
    (e) => {
      const value = e.target.value;
      setEmail(value);
      if (emailError) {
        const error = validateEmail(value);
        setEmailError(error);
      }
    },
    [emailError, validateEmail],
  );

  // Handle newsletter subscription
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const error = validateEmail(email);
      if (error) {
        setEmailError(error);
        return;
      }

      setIsSubscribing(true);
      setEmailError("");

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubscribeSuccess(true);
        setEmail("");

        setTimeout(() => {
          setSubscribeSuccess(false);
        }, 5000);
      } catch (error) {
        setEmailError("Something went wrong. Please try again.");
      } finally {
        setIsSubscribing(false);
      }
    },
    [email, validateEmail],
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

  // Scroll to top on footer logo click
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white pt-16 pb-8 transition-colors duration-500 relative"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div
            className="animate-on-scroll"
            id="footer-logo"
            style={{
              transform: visibleSections["footer-logo"]
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
              opacity: visibleSections["footer-logo"] ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="flex items-center space-x-3 mb-4 cursor-pointer group"
              onClick={scrollToTop}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Sandeep
                </span>
                <div className="h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Creating beautiful and functional web experiences with modern
              technologies. Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-gray-700/50 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-on-scroll"
            id="footer-quick-links"
            style={{
              transform: visibleSections["footer-quick-links"]
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
              opacity: visibleSections["footer-quick-links"] ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "100ms",
            }}
          >
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="text-indigo-400">📌</span> Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className="animate-on-scroll"
            id="footer-services"
            style={{
              transform: visibleSections["footer-services"]
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
              opacity: visibleSections["footer-services"] ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "200ms",
            }}
          >
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="text-purple-400">💼</span> Services
            </h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="animate-on-scroll"
            id="footer-newsletter"
            style={{
              transform: visibleSections["footer-newsletter"]
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
              opacity: visibleSections["footer-newsletter"] ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "300ms",
            }}
          >
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="text-pink-400">📬</span> Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Subscribe to get updates on my latest projects and blog posts.
            </p>

            {/* Success Message */}
            {subscribeSuccess && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm animate-slide-down flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Subscribed successfully! 🎉
              </div>
            )}

            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 pr-10 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 bg-gray-700/50 text-white placeholder-gray-400 ${
                      emailError
                        ? "border border-red-500 focus:ring-red-500"
                        : "border border-transparent focus:ring-indigo-500 focus:border-transparent"
                    }`}
                    aria-label="Email for newsletter"
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    disabled={isSubscribing}
                  />
                  {email && !emailError && (
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {isSubscribing ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              {emailError && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-400 animate-slide-down"
                >
                  {emailError}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar - Always Visible (Fixed for Desktop) */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sandeep Yadav. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </a>
            <span className="w-px h-4 bg-gray-700 hidden sm:block"></span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Terms of Service
            </a>
            <span className="w-px h-4 bg-gray-700 hidden sm:block"></span>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-500 text-xs">
            Built with <span className="text-red-400">❤️</span> using React
            &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
