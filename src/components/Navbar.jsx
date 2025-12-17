// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-500 ${scrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50'
                    : 'bg-transparent'
                }`}>
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div> */}
                            </div>
                            <div>
                                <span className={`font-bold text-xl transition-colors duration-300 ${scrolled
                                        ? 'text-gray-800 dark:text-white'
                                        : 'text-gray-800 dark:text-white'
                                    }`}>Sandeep</span>
                                <div className="h-0.5 w-0 bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-full"></div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'About', href: '#about' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Contact', href: '#contact' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${scrolled
                                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark hover:bg-white/10'
                                    }`}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <div className="ml-4">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-lg transition-all duration-300 ${scrolled
                                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/10'
                                }`}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="h-full bg-white dark:bg-gray-900 shadow-xl">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">P</span>
                                </div>
                                <span className="font-bold text-xl text-gray-800 dark:text-white">Portfolio</span>
                            </div>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-2">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Contact', href: '#contact' }
                            ].map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${index === 0
                                            ? 'bg-primary-light dark:bg-primary-dark text-white'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-light dark:hover:text-primary-dark'
                                        }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;