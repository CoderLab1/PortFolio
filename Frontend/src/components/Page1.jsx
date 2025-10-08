import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/image.png";

function Page1() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [activeSection, setActiveSection] = useState("home");
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Intersection Observer for active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = ["home", "about", "skills", "projects", "contact"];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
            tags: ["React", "Node.js", "MongoDB"],
            liveLink: "#",
            githubLink: "#",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity app with drag-and-drop functionality and real-time updates.",
            tags: ["React", "Firebase", "Tailwind CSS"],
            liveLink: "#",
            githubLink: "#",
            featured: false
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website with modern design and animations.",
            tags: ["React", "Framer Motion", "CSS"],
            liveLink: "#",
            githubLink: "#",
            featured: false
        },
        {
            id: 4,
            title: "AI Chat Application",
            description: "Real-time chat application with AI integration and modern UI.",
            tags: ["Next.js", "OpenAI", "Socket.io"],
            liveLink: "#",
            githubLink: "#",
            featured: true
        },
    ];

    const skills = [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "UI/UX Design", level: 85, icon: "✨" },
        { name: "AWS", level: 75, icon: "☁️" },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Product Manager",
            content: "Tanish delivered exceptional work on our web application. His attention to detail and technical expertise exceeded our expectations.",
            avatar: "👩‍💼"
        },
        {
            id: 2,
            name: "Mike Chen",
            role: "Startup Founder",
            content: "Working with Tanish was a game-changer for our project. He transformed our vision into a beautiful, functional reality.",
            avatar: "👨‍💻"
        }
    ];

    // Loading Screen
    if (isLoading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className={`w-16 h-16 border-4 rounded-full mx-auto mb-4 ${
                            darkMode ? "border-yellow-300 border-t-transparent" : "border-indigo-600 border-t-transparent"
                        }`}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                        Loading...
                    </motion.p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
            {/* Navigation Bar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? "bg-gray-800/90" : "bg-white/90"} backdrop-blur-sm shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="font-bold text-xl"
                        >
                            <span className={`${darkMode ? "text-yellow-300" : "text-indigo-600"}`}>Tanish</span> Yadav
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {["home", "about", "skills", "projects", "testimonials", "contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-all duration-300 relative ${
                                        activeSection === item
                                            ? darkMode ? "text-yellow-300" : "text-indigo-600"
                                            : "hover:text-indigo-500"
                                    }`}
                                >
                                    {item}
                                    {activeSection === item && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className={`absolute bottom-0 left-0 w-full h-0.5 ${
                                                darkMode ? "bg-yellow-300" : "bg-indigo-600"
                                            }`}
                                        />
                                    )}
                                </button>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setDarkMode(!darkMode)}
                                className={`p-3 rounded-full transition-all ${
                                    darkMode 
                                        ? "bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-900" 
                                        : "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
                                } shadow-lg`}
                            >
                                {darkMode ? "☀️" : "🌙"}
                            </motion.button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setDarkMode(!darkMode)}
                                className={`p-2 rounded-full ${
                                    darkMode 
                                        ? "bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-900" 
                                        : "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
                                }`}
                            >
                                {darkMode ? "☀️" : "🌙"}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMenuOpen(!menuOpen)}
                                className={`p-2 rounded-lg ${
                                    darkMode ? "bg-gray-700" : "bg-gray-200"
                                }`}
                            >
                                {menuOpen ? "✕" : "☰"}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-white"} shadow-xl border-t ${
                                darkMode ? "border-gray-700" : "border-gray-200"
                            }`}
                        >
                            <div className="px-4 py-4 space-y-4">
                                {["home", "about", "skills", "projects", "testimonials", "contact"].map((item) => (
                                    <motion.button
                                        key={item}
                                        whileHover={{ x: 10 }}
                                        onClick={() => scrollToSection(item)}
                                        className={`block w-full text-left capitalize py-3 transition-all ${
                                            activeSection === item
                                                ? darkMode ? "text-yellow-300" : "text-indigo-600"
                                                : ""
                                        }`}
                                    >
                                        {item}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className={`absolute inset-0 ${
                        darkMode 
                            ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800" 
                            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
                    }`} />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-30"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"
                    />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 shadow-2xl"
                        >
                            <img 
                                src={profilePic} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                    >
                        Tanish Yadav
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-light mb-8"
                    >
                        <span className="typewriter">Full Stack Developer & Digital Creator</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        I craft <span className="font-semibold">digital experiences</span> that blend cutting-edge technology 
                        with <span className="font-semibold">beautiful design</span>. Let's build something amazing together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-4 font-bold rounded-full shadow-2xl transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-3xl"
                        >
                            🚀 Explore My Work
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className={`px-8 py-4 font-bold border-2 rounded-full transition-all ${
                                darkMode 
                                    ? "border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900" 
                                    : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                            }`}
                        >
                            💬 Let's Talk
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                    >
                        {[
                            { number: "50+", label: "Projects" },
                            { number: "3+", label: "Years Experience" },
                            { number: "100%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.1 }}
                                className="text-center"
                            >
                                <div className={`text-2xl md:text-3xl font-bold ${
                                    darkMode ? "text-yellow-300" : "text-indigo-600"
                                }`}>
                                    {stat.number}
                                </div>
                                <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={() => scrollToSection("about")}
                        className={`p-4 rounded-full shadow-lg ${
                            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-100"
                        }`}
                    >
                        <motion.span
                            animate={{ rotate: 180 }}
                            transition={{ duration: 0.5 }}
                        >
                            ⬇️
                        </motion.span>
                    </motion.button>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-20 px-6 relative overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold mb-6 text-center"
                    >
                        About <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Me</span>
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-12 items-center"
                    >
                        <div className="flex-1 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <div className={`w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ${
                                    darkMode ? "bg-gray-700" : "bg-gray-200"
                                }`}>
                                    <img 
                                        src={profilePic} 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className={`absolute -top-4 -right-4 w-24 h-24 rounded-full border-8 ${
                                        darkMode ? "border-yellow-300" : "border-indigo-600"
                                    }`}
                                />
                            </motion.div>
                        </div>

                        <div className="flex-1">
                            <motion.h3
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold mb-6"
                            >
                                Crafting Digital Excellence
                            </motion.h3>
                            
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                            >
                                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                                exceptional digital experiences. With over 3 years of experience, I've helped numerous 
                                clients bring their ideas to life through clean, efficient code and stunning visuals.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4 mb-6"
                            >
                                {[
                                    "Frontend Development",
                                    "Backend Development", 
                                    "UI/UX Design",
                                    "Mobile Applications",
                                    "Cloud Architecture",
                                    "DevOps & CI/CD"
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className={`flex items-center space-x-2 p-3 rounded-lg ${
                                            darkMode ? "bg-gray-700" : "bg-gray-100"
                                        }`}
                                    >
                                        <span className="text-green-400">✓</span>
                                        <span>{skill}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="flex gap-4"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#contact"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold"
                                >
                                    Hire Me
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#"
                                    className={`px-6 py-3 border-2 rounded-full font-semibold ${
                                        darkMode 
                                            ? "border-gray-400 text-gray-300 hover:bg-gray-700" 
                                            : "border-gray-600 text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    Download CV
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold mb-14 text-center"
                    >
                        My <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className={`p-6 rounded-2xl shadow-lg ${
                                    darkMode ? "bg-gray-800" : "bg-white"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="font-semibold text-lg">{skill.name}</span>
                                    </div>
                                    <span className={`font-bold ${
                                        darkMode ? "text-yellow-300" : "text-indigo-600"
                                    }`}>
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className={`h-3 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold mb-14 text-center"
                    >
                        Featured <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
                                    darkMode ? "bg-gray-700" : "bg-white"
                                } ${project.featured ? "ring-2 ring-purple-500" : ""}`}
                            >
                                <div className={`h-48 relative overflow-hidden ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl">🚀</span>
                                    </div>
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span 
                                                key={tag} 
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    darkMode 
                                                        ? "bg-gray-600 text-gray-300" 
                                                        : "bg-gray-200 text-gray-700"
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.liveLink}
                                            className="flex-1 text-center py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold"
                                        >
                                            Live Demo
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.githubLink}
                                            className={`flex-1 text-center py-2 border-2 rounded-lg font-semibold ${
                                                darkMode 
                                                    ? "border-gray-500 text-gray-300 hover:bg-gray-600" 
                                                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            Source Code
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold mb-6 text-center"
                    >
                        Let's <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Connect</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`text-xl text-center mb-12 max-w-2xl mx-auto ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        Ready to bring your next project to life? Let's discuss how we can work together to create something extraordinary.
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                            
                            {[
                                { icon: "📧", label: "Email", value: "hello@tanish.dev" },
                                { icon: "📱", label: "Phone", value: "+1 (555) 123-4567" },
                                { icon: "📍", label: "Location", value: "New York, NY" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center space-x-4 p-4 rounded-2xl hover:shadow-lg transition-all"
                                >
                                    <div className={`text-2xl p-3 rounded-full ${
                                        darkMode ? "bg-gray-700" : "bg-gray-100"
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{item.label}</p>
                                        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Social Links */}
                            <div className="flex space-x-4 pt-6">
                                {[
                                    { name: "GitHub", icon: "🐱", link: "#" },
                                    { name: "LinkedIn", icon: "💼", link: "#" },
                                    { name: "Twitter", icon: "🐦", link: "#" },
                                    { name: "Instagram", icon: "📷", link: "#" }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        href={social.link}
                                        className={`p-4 rounded-2xl text-2xl transition-all ${
                                            darkMode 
                                                ? "bg-gray-700 hover:bg-gray-600" 
                                                : "bg-gray-100 hover:bg-gray-200"
                                        }`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`rounded-3xl p-8 shadow-2xl ${
                                darkMode ? "bg-gray-700" : "bg-white"
                            }`}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 font-semibold">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                                                darkMode 
                                                    ? "bg-gray-600 border-gray-500 text-white focus:border-purple-500" 
                                                    : "bg-white border-gray-300 focus:border-purple-500"
                                            } focus:ring-2 focus:ring-purple-200`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 font-semibold">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                                                darkMode 
                                                    ? "bg-gray-600 border-gray-500 text-white focus:border-purple-500" 
                                                    : "bg-white border-gray-300 focus:border-purple-500"
                                            } focus:ring-2 focus:ring-purple-200`}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 font-semibold">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                                            darkMode 
                                                ? "bg-gray-600 border-gray-500 text-white focus:border-purple-500" 
                                                : "bg-white border-gray-300 focus:border-purple-500"
                                        } focus:ring-2 focus:ring-purple-200`}
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 px-6 font-bold rounded-xl transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl"
                                >
                                    🚀 Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 px-6 ${darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-800 text-gray-300"}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <div className="font-bold text-2xl mb-2 text-white">
                                Tanish Yadav
                            </div>
                            <p className="text-sm">Full Stack Developer & Digital Creator</p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex justify-center space-x-6">
                            {["home", "about", "projects", "contact"].map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    onClick={() => scrollToSection(item)}
                                    className="capitalize hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p>© {new Date().getFullYear()} Tanish Yadav. All rights reserved.</p>
                            <p className="mt-2 text-sm">
                                Made with ❤️ using React & Tailwind CSS
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Page1;