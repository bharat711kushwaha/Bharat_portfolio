import React from 'react';
import { Code, Database, Server, Layout, PenTool as Tool, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-indigo-600" size={24} />,
      skills: ["JAVA (DSA)", "Python", "C++", "JavaScript", "C"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="text-indigo-600" size={24} />,
      skills: ["ReactJS", "Vite", "Express", "NodeJS", "React-Native", "Expo"]
    },
    {
      title: "Databases",
      icon: <Database className="text-indigo-600" size={24} />,
      skills: ["MongoDB", "Firebase"]
    },
    {
      title: "Backend",
      icon: <Server className="text-indigo-600" size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"]
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="text-indigo-600" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm"]
    },
    {
      title: "Soft Skills",
      icon: <Globe className="text-indigo-600" size={24} />,
      skills: ["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Bars */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Proficiency</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Frontend Development</span>
                <span className="text-indigo-600 font-medium">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Backend Development</span>
                <span className="text-indigo-600 font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Data Structures & Algorithms</span>
                <span className="text-indigo-600 font-medium">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Database Management</span>
                <span className="text-indigo-600 font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Mobile App Development</span>
                <span className="text-indigo-600 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;