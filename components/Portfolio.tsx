import type { Project } from '../types';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from './PortfolioModal';
import { CompareArrowsIcon } from './icons/IconComponents';

const portfolioData: Project[] = [
  {
    id: 1,
    type: 'standard',
    title: '2D Whiteboard Animation & Explainer Video',
    description: 'This project showcases 2D whiteboard animation designed to communicate ideas through engaging illustrations and visual storytelling. The video presents information in a clear and accessible format, making it suitable for educational content, business presentations, marketing videos, and explainer videos.',
    thumbnailUrl: 'https://img.youtube.com/vi/jZdJpO2wnsg/hqdefault.jpg',
    tools: ['2D Animation', 'Explainer Video', 'Character Animation'],
    videoUrl: 'https://www.youtube.com/embed/jZdJpO2wnsg',
    category: '2D Animation',
  },
  {
    id: 2,
    type: 'standard',
    title: '2D Animated SaaS Explainer Video & Motion Graphics',
    description: 'This project showcases an animated explainer video designed to present a digital product through engaging visuals and clear storytelling. The presentation style is suitable for SaaS companies, startups, product demonstrations, and promotional content.',
    thumbnailUrl: 'https://img.youtube.com/vi/QEB6_R6dPnM/hqdefault.jpg',
    tools: ['2D Animation', 'Explainer Video', 'Motion Graphics'],
    videoUrl: 'https://www.youtube.com/embed/QEB6_R6dPnM',
    category: '2D Animation',
  },
  {
    id: 3,
    type: 'standard',
    title: '2D Animation & Cartoon Video Production',
    description: 'This project showcases 2D animation focused on visual storytelling, engaging scenes, and a cohesive animated presentation. This style can be suitable for animated YouTube videos, educational projects, promotional content, and digital storytelling.',
    thumbnailUrl: 'https://img.youtube.com/vi/usgb7P5nceg/hqdefault.jpg',
    tools: ['2D Animation', 'Cartoon Animation', 'Character Animation'],
    videoUrl: 'https://www.youtube.com/embed/usgb7P5nceg',
    category: '2D Animation',
  },
  {
    id: 4,
    type: 'standard',
    title: '2D Cartoon Animation & Animated Video Editing',
    description: 'This project highlights 2D cartoon animation presented through engaging visuals and structured storytelling. The focus is on clear scene progression, consistent visual presentation, and smooth pacing. This animation format is suitable for cartoon YouTube channels, animated stories, educational videos, and online entertainment.',
    thumbnailUrl: 'https://img.youtube.com/vi/263I4icMeUo/hqdefault.jpg',
    tools: ['2D Animation', 'Cartoon Animation', 'Character Animation'],
    videoUrl: 'https://www.youtube.com/embed/263I4icMeUo',
    category: '2D Animation',
  },
  {
    id: 5,
    type: 'standard',
    title: '2D Animated Storytelling & Cartoon Video Production',
    description: 'This project showcases 2D animation designed to present content through visual storytelling and engaging animated scenes. The emphasis is on narrative flow, consistent visuals, and well-paced scene transitions. This style is suitable for animated stories, cartoon videos, educational content, and YouTube animation projects.',
    thumbnailUrl: 'https://img.youtube.com/vi/nyjqVnL_j6s/hqdefault.jpg',
    tools: ['2D Animation', 'Cartoon Animation', 'Character Animation'],
    videoUrl: 'https://www.youtube.com/embed/nyjqVnL_j6s',
    category: '2D Animation',
  },
  {
    id: 6,
    type: 'standard',
    title: '2D Cartoon Animation for YouTube & Digital Content',
    description: 'This project showcases 2D animated video content focused on visual storytelling and an engaging presentation. This type of content can be suitable for cartoon YouTube channels, animated explainers, educational videos, and digital media projects.',
    thumbnailUrl: 'https://img.youtube.com/vi/GZrBbg1PDuQ/hqdefault.jpg',
    tools: ['2D Animation', 'Cartoon Animation', 'Explainer Video'],
    videoUrl: 'https://www.youtube.com/embed/GZrBbg1PDuQ',
    category: '2D Animation',
  },
];;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

const ProjectCard: React.FC<{ project: Project; onProjectClick: (project: Project) => void }> = ({ project, onProjectClick }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative overflow-hidden rounded-lg bg-secondary dark:bg-[#11111F] shadow-lg cursor-pointer aspect-[3/2] border border-transparent hover:border-accent-start/50 transition-colors"
        onClick={() => onProjectClick(project)}
        data-cursor-variant="project"
    >
        <img 
            src={project.type === 'before-after' ? project.afterImageUrl : project.thumbnailUrl} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-[#0A0A14]/90 dark:via-[#0A0A14]/60 transition-opacity duration-500"></div>
        
        {project.type === 'before-after' && (
          <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
            <CompareArrowsIcon />
            <span>Compare</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-200">
                <h3 className="text-xl font-bold">
                    {project.title}
                </h3>
                {project.caseStudy && (
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white py-1 px-2 rounded-full font-semibold">Case Study</span>
                )}
            </div>
            <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-300">
                <p className="text-sm text-slate-300 dark:text-[#94A3B8] mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map(tool => (
                        <span key={tool} className="text-xs bg-gradient-to-r from-accent-start/80 to-accent-end/80 text-white py-1 px-2 rounded-full">{tool}</span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);


const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', '2D Animation', '3D Animation', 'YouTube Videos', 'Short Form Videos', 'Motion Graphics'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section 
        id="portfolio" 
        className="py-20 bg-primary dark:bg-[#0A0A14]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-text-primary dark:text-white mb-12">My Portfolio</motion.h2>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base border-2 ${
                        activeFilter === filter
                            ? 'bg-gradient-to-r from-accent-start to-accent-end text-white border-transparent shadow-glow-md'
                            : 'bg-transparent border-border-default dark:border-[#11111F] text-text-secondary dark:text-[#94A3B8] hover:border-accent-start/50 hover:text-text-primary dark:hover:text-white'
                    }`}
                    data-cursor-variant="link"
                >
                    {filter}
                </button>
            ))}
        </motion.div>

        <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence>
              {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} onProjectClick={handleProjectClick} />
              ))}
            </AnimatePresence>
        </motion.div>
      </div>
      {selectedProject && <PortfolioModal project={selectedProject} onClose={handleCloseModal} />}
    </motion.section>
  );
};

export default Portfolio;