import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import myImage from "../assets/myimg.jpg"; 
import resume from "../assets/resume.pdf";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <div className="md:w-3/5 mb-10 md:mb-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-indigo-600"
                animate={{
                  color: [
                    "#4F46E5",
                    "#6366F1",
                    "#818CF8",
                    "#6366F1",
                    "#4F46E5",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Bharat Kumar
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-600 mb-6"
              variants={itemVariants}
            >
              Full Stack Developer & Computer Science Student
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I build modern web applications with MERN stack and have a passion
              for creating innovative solutions. Currently pursuing my
              Bachelor's in Computer Science at Institute of Technology, Guru
              Ghasidas University.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Contact Me
              </motion.a>

              <motion.a
                href={resume} // ✅ Redirecting to Resume
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                View Resume
              </motion.a>
            </motion.div>

            {/* Social Media Links */}
            <div className="flex mt-8 gap-6">
              {[
                {
                  icon: <Github size={24} />,
                  url: "https://github.com/bharat711kushwaha",
                },
                {
                  icon: <Linkedin size={24} />,
                  url: "https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281/",
                },
                {
                  icon: <Mail size={24} />,
                  url: "mailto:bharatkumar160418gmail.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div className="md:w-2/5 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl"
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(79, 70, 229, 0.2)",
                  "0 10px 25px rgba(79, 70, 229, 0.6)",
                  "0 10px 25px rgba(79, 70, 229, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img
                src={myImage} // ✅ Using Local Image
                alt="Bharat Kumar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
