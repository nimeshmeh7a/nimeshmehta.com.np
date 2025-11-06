import { content } from "../Content";

const WhatIKnow = () => {
  const { whatIKnow } = content;

  return (
    <section id="what-i-know" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5" data-aos="fade-in" data-aos-duration="1000">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-300 rounded-full" data-aos="zoom-in" data-aos-delay="200"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-300 rotate-45" data-aos="zoom-in" data-aos-delay="400"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-cyan-300 rounded-full" data-aos="zoom-in" data-aos-delay="600"></div>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 border-2 border-green-300 rotate-45" data-aos="zoom-in" data-aos-delay="800"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* New Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg" data-aos="zoom-in" data-aos-delay="200">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up" data-aos-delay="300">
            Technical Expertise & Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full" data-aos="fade-up" data-aos-delay="400"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="500">
            Exploring the intersection of low-code innovation and full-stack development
          </p>
        </div>

        {/* New Timeline-Style Layout */}
        <div className="space-y-12">
          {/* Bubble.io Section */}
          <div className="relative" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Side - Icon and Title */}
              <div className="lg:w-1/3 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg" data-aos="zoom-in" data-aos-delay="300">
                  <span className="text-white font-bold text-2xl">B</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2" data-aos="fade-up" data-aos-delay="400">Bubble.io</h3>
                <p className="text-blue-600 font-semibold text-lg" data-aos="fade-up" data-aos-delay="500">Low-Code Development</p>
                <div className="w-16 h-0.5 bg-blue-600 mx-auto lg:mx-0 mt-3" data-aos="fade-up" data-aos-delay="600"></div>
              </div>

              {/* Right Side - Content Card */}
              <div className="lg:w-2/3" data-aos="fade-left" data-aos-delay="300">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                    Expert-level proficiency in building sophisticated low-code applications with advanced workflows, 
                    custom integrations, and scalable business solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Custom Plugin Development",
                      "Stripe Payment Integration", 
                      "CRM System Development",
                      "High-Converting Landing Pages",
                      "E-commerce Solutions",
                      "API Integrations"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* React.js Section */}
          <div className="relative" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              {/* Right Side - Icon and Title */}
              <div className="lg:w-1/3 text-center lg:text-right" data-aos="fade-left" data-aos-delay="200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 shadow-lg" data-aos="zoom-in" data-aos-delay="300">
                  <span className="text-white font-bold text-2xl">R</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2" data-aos="fade-up" data-aos-delay="400">React.js</h3>
                <p className="text-cyan-600 font-semibold text-lg" data-aos="fade-up" data-aos-delay="500">Modern Web Development</p>
                <div className="w-16 h-0.5 bg-cyan-600 mx-auto lg:mx-0 mt-3" data-aos="fade-up" data-aos-delay="600"></div>
              </div>

              {/* Left Side - Content Card */}
              <div className="lg:w-2/3" data-aos="fade-right" data-aos-delay="300">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                    Full-stack development expertise with React.js frontend, Django backend, and seamless third-party integrations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Django REST API Integration",
                      "Canva Integration",
                      "State Management (Redux/Context)",
                      "Responsive UI/UX Design",
                      "Component Architecture",
                      "Performance Optimization"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors duration-200" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                        <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Projects Section */}
          <div className="relative" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Side - Icon and Title */}
              <div className="lg:w-1/3 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg" data-aos="zoom-in" data-aos-delay="300">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2" data-aos="fade-up" data-aos-delay="400">Academic Projects</h3>
                <p className="text-green-600 font-semibold text-lg" data-aos="fade-up" data-aos-delay="500">Full-Stack Development</p>
                <div className="w-16 h-0.5 bg-green-600 mx-auto lg:mx-0 mt-3" data-aos="fade-up" data-aos-delay="600"></div>
              </div>

              {/* Right Side - Content Card */}
              <div className="lg:w-2/3" data-aos="fade-left" data-aos-delay="300">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                    Comprehensive academic portfolio demonstrating full-stack development capabilities across diverse technologies and frameworks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "HTML/CSS/JS Management Systems",
                      "Java Desktop Applications",
                      "Python Rent Management System",
                      "C# .NET Library Management",
                      "Database Management Systems",
                      "Object-Oriented Programming"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Skills Summary Section */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-6 shadow-lg" data-aos="zoom-in" data-aos-delay="500">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900" data-aos="fade-up" data-aos-delay="600">
            Technical Skills Overview
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto" data-aos="zoom-in" data-aos-delay="700">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Bubble.io", "React.js", "Django", "Python", "Java", "C#", ".NET", 
                "HTML/CSS", "JavaScript", "Stripe", "Canva", "SQL", "Git", "REST APIs"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up" 
                  data-aos-delay={800 + (index * 50)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIKnow;
