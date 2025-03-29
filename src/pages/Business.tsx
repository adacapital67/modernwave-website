import { useEffect, useRef } from "react";
import { ArrowRight, BarChart, Code, Shield, Users, Target, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Business = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);
  
  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-blue-50 py-24" ref={heroRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Enterprise Solutions for
                  <span className="gradient-text block"> Growing Businesses</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Streamline operations, enhance productivity, and drive growth with our comprehensive business technology solutions.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group" onClick={scrollToSolutions}>
                    Explore Solutions
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" asChild>
                    <Link to="/contact">
                      Book a Consultation
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Business team analyzing data"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Aim, Process, and Goals Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Aim, Process, and Goals
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We're committed to helping businesses leverage technology as a true competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Aim</h3>
                <p className="text-gray-600">
                  To bridge the gap between business challenges and technological solutions, making advanced technology accessible and beneficial for businesses of all sizes. We aim to be trusted technology partners who understand both the technical landscape and business realities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-purple-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                  <Workflow size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                <p className="text-gray-600">
                  We follow a collaborative, transparent process that begins with deeply understanding your business needs. From consultation through implementation and ongoing support, we maintain clear communication, ensuring solutions are delivered on time and within budget while exceeding expectations.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 shadow-sm border border-indigo-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L4 10l8 8 8-8z" />
                    <path d="M4 22v-8" />
                    <path d="M20 22v-8" />
                    <path d="M12 18v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Goals</h3>
                <p className="text-gray-600">
                  Our goals extend beyond implementing technology—we aim to drive measurable business outcomes. Whether it's increasing operational efficiency, enhancing security posture, or enabling data-driven decision making, our focus is on delivering solutions that provide clear ROI and sustainable competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20" ref={solutionsRef} id="comprehensive-business-solutions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Comprehensive Business Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From business intelligence to cybersecurity, we provide end-to-end technology solutions to address your specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Business Intelligence */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-6">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
                <p className="text-gray-600 mb-6">
                  Turn your data into actionable insights with advanced analytics, dashboards, and reporting tools customized for your business needs.
                </p>
                <Link to="/business/intelligence" className="text-primary font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Custom Software Development */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Software Development</h3>
                <p className="text-gray-600 mb-6">
                  Tailor-made software solutions designed specifically for your unique business requirements and industry challenges.
                </p>
                <Link to="/business/software" className="text-primary font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* IT Consulting & Strategy */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">IT Consulting & Strategy</h3>
                <p className="text-gray-600 mb-6">
                  Strategic IT consulting to align your technology investments with business goals and create a roadmap for success.
                </p>
                <Link to="/business/consulting" className="text-primary font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Cybersecurity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cybersecurity Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Protect your business with enterprise-grade security solutions, vulnerability assessments, and security training programs.
                </p>
                <Link to="/business/cybersecurity" className="text-primary font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  Our Business Solution Methodology
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We follow a proven methodology to ensure successful implementation of our business solutions, focusing on your specific needs and objectives.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                      <p className="text-gray-600">
                        We begin by understanding your business processes, challenges, and goals through in-depth analysis and stakeholder interviews.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                      <p className="text-gray-600">
                        Our team designs a customized solution architecture that addresses your specific requirements and aligns with your business strategy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Implementation & Integration</h3>
                      <p className="text-gray-600">
                        We implement the solution using agile methodologies, ensuring seamless integration with your existing systems and minimal disruption.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                      <p className="text-gray-600">
                        Rigorous testing and quality assurance processes ensure your solution performs optimally and meets all requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
                      <p className="text-gray-600">
                        We provide comprehensive training and ongoing support to ensure your team can fully leverage the new solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Business methodology diagram"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Why Businesses Trust Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven track record of delivering exceptional business solutions has made us a trusted partner for organizations of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">
                      Our team brings deep knowledge across multiple industries, allowing us to understand your unique challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Our solutions have delivered measurable ROI and business impact for hundreds of clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">
                      We leverage the latest technologies and best practices to deliver innovative solutions that drive business growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client-Centered Approach</h3>
                    <p className="text-gray-600">
                      We prioritize your business needs and goals, ensuring our solutions are perfectly aligned with your objectives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">
                      Our solutions grow with your business, providing the flexibility to adapt to changing needs and requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      We provide comprehensive support and maintenance services to ensure your solutions continue to perform optimally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button size="lg" className="gap-2 group" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Business;
