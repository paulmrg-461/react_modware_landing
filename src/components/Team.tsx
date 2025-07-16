import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { collaborators } from '../data';

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-primary-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Our talented team of developers, designers, and data scientists are passionate 
            about creating innovative solutions that drive business success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {collaborators.map((member) => (
            <div 
              key={member.id}
              className="bg-gray-50 rounded-2xl p-6 text-center card-hover group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 ring-4 ring-white shadow-lg">
                  <img 
                    src={member.imagePath} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center bg-primary-100">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-4 capitalize">
                {member.profession}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </a>
                <a 
                  href={`tel:${member.phone}`}
                  className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors">
                  <Github className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Team?
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Our diverse team brings together expertise from different domains to deliver 
              comprehensive solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-primary-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">10+</div>
              <div className="text-primary-100">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Specializations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Frontend Development',
              'Backend Development', 
              'Full-Stack Development',
              'Data Science',
              'Mobile Development',
              'DevOps',
              'UI/UX Design',
              'AI/ML Solutions',
              'Cloud Architecture',
              'Database Design'
            ].map((specialization) => (
              <div 
                key={specialization}
                className="bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-lg p-4 text-center transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-700 hover:text-primary-700">
                  {specialization}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;