// src/components/Contact.jsx
import { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [visibleSections, setVisibleSections] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

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
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-on-scroll" id="contact-title">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transform transition-all duration-700 translate-y-10 opacity-0"
                        style={visibleSections['contact-title'] ? { transform: 'translateY(0)', opacity: 1 } : {}}>
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 gradient-bg mx-auto rounded-full transform transition-all duration-1000 scale-x-0"
                        style={visibleSections['contact-title'] ? { transform: 'scaleX(1)' } : {}}></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 translate-y-10 opacity-0 delay-300"
                        style={visibleSections['contact-title'] ? { transform: 'translateY(0)', opacity: 1 } : {}}>
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full animate-on-scroll"
                            id="contact-info"
                            style={{
                                transform: visibleSections['contact-info'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                opacity: visibleSections['contact-info'] ? 1 : 0,
                                transitionDelay: '100ms'
                            }}>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-primary-light dark:text-primary-dark mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Patna(Bihar),IND</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-primary-light dark:text-primary-dark mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Sandeepcodes.21@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-primary-light dark:text-primary-dark mr-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-300">+91 7320806571</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-on-scroll"
                            id="contact-form"
                            style={{
                                transform: visibleSections['contact-form'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                opacity: visibleSections['contact-form'] ? 1 : 0,
                                transitionDelay: '200ms'
                            }}>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 transform focus:scale-105"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 transform focus:scale-105"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 transform focus:scale-105"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 transform focus:scale-105"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;