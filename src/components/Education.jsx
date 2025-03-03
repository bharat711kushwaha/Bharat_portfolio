import React from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const courses = [
    "Operating Systems",
    "Data Structures",
    "Analysis Of Algorithms",
    "OOPS in C++",
    "Computer Network",
    "IoT",
  ];

  const achievements = [
    {
      title: "Finalist (5th Position) at Code of Phoenix Hackathon, IIIT Naya Raipur",
      date: "February 2025",
    },
    {
      title: "Finalist (8th Position) at Level SuperMind Hackathon",
      date: "January 2025",
    },
    {
      title: "Selected as a Contributor for GirlScript Summer of Code (GSSoC) Summer 2024",
      date: "",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Degree & Institute */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <GraduationCap className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Bachelor of Technology - Computer Science
                  </h3>
                  <h4 className="text-lg text-indigo-600">
                    Institute of Technology, Guru Ghasidas University
                  </h4>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-2" />
                <span>October 2023 - June 2027</span>
              </div>
            </div>

            {/* GPA */}
            <div className="flex items-center mb-4 text-gray-700">
              <span className="font-semibold mr-2">GPA:</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                7.58
              </span>
            </div>

            {/* Key Courses */}
            <div className="mb-6">
              <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                <BookOpen size={20} className="mr-2" />
                Key Courses
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-md px-4 py-2 text-gray-700"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Academic Achievements
              </h4>

              <ul className="space-y-3 text-gray-600">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      {achievement.title}{" "}
                      {achievement.date && <span>– {achievement.date}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
