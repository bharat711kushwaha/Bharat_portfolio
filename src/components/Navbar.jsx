import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 15
      }
    }
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#4F46E5' }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold text-indigo-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bharat Kumar
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section, index) => (
              <motion.button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                variants={linkVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: <Github size={20} />, url: "https://github.com/bharat711kushwaha" },
              { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281/" },
              { icon: <Mail size={20} />, url: "mailto:bharatkumar160418gmail.com" }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <motion.button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section, index) => (
              <motion.button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 pt-2">
              {[
                { icon: <Github size={20} />, url: "https://github.com/bharat711kushwaha" },
                { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281/" },
                { icon: <Mail size={20} />, url: "mailto:bharatkumar160418gmail.com" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;