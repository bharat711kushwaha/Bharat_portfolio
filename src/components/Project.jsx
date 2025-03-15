import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Social Media Analysis & AI Content Generator",
      description: "Developed a full-stack AI-powered platform for analyzing social media trends and generating SEO-optimized content. Implemented AI-driven sentiment analysis, achieving 94% accuracy in detecting engagement patterns. Built a chatbot that generates SEO-optimized video titles, tags, thumbnails, and scripts for trending topics.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["MERN Stack", "NLP", "AI", "Web Crawlers", "MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "Selenium", "TensorFlow", "Firebase"],
      liveLink: "https://iiit-nr.vercel.app/",
      githubLink: "#",
      category: "ai"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "Developed a real-time messaging platform with end-to-end encrypted chat, group messaging, and online status indicators. Implemented WebSockets & Socket.io, reducing message latency by 40% for seamless communication. Integrated JWT authentication & bcrypt encryption, improving security by 60%.",
      image: "https://appinventiv.com/wp-content/uploads/2021/08/firebase-chat-app.png",
      technologies: ["MERN Stack", "WebSockets", "Authentication", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io", "Tailwind CSS"],
      liveLink: "https://chit-chat-r5e3.onrender.com",
      githubLink: "#",
      category: "web"
    },
    {
      id: 3,
      title: " E-Commerce Website",
      description: "Built a full-stack e-commerce platform for selling electronics, featuring user authentication, payment gateway integration, and a recommendation system. Integrated Google Authentication, enhancing security by 60%. Developed a personalized product recommendation system using user behavior data.
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["MERN Stack", "Authentication", "Payment Integration", "React.js", "Node.js", "MongoDB", "Firebase", "Stripe API", "Tailwind CSS"],
      liveLink: "https://main--bharatecomarse.netlify.app/",
      githubLink: "#",
      category: "web"
    },
    {
      id: 4,
      title: "Blogging Website",
      description: "Developed a blogging platform featuring user authentication, rich-text editor, and image upload for seamless content creation. Implemented a commenting system and real-time feedback, fostering community engagement.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["MERN Stack", "Authentication", "Image Upload", "React.js", "Node.js", "MongoDB", "Express.js"],
      liveLink: "#",
      githubLink: "#",
      category: "web"
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  const buttonVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.05,
      backgroundColor: "#4F46E5",
      color: "#FFFFFF",
      transition: { type: 'spring', stiffness: 300 }
    },
    hover: { 
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          
          {/* Project Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'web', 'ai'].map((tab, index) => (
              <motion.button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                variants={buttonVariants}
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                variants={projectVariants}
                whileHover="hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-64 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 6 && (
                        <motion.span 
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 }}
                        >
                          +{project.technologies.length - 6} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
