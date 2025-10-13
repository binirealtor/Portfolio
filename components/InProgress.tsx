import type { InProgressProject } from '../types';
import React from 'react';
import { motion } from 'framer-motion';

// NOTE: Using static images as placeholders. Animated GIFs would be ideal for this section.
const inProgressData: InProgressProject[] = [
  {
    id: 1,
    title: 'SaaS Product Explainer',
    description: 'Crafting a 60-second 2D motion graphics video to showcase new software features.',
    previewUrl: 'https://picsum.photos/seed/wip1/600/400',
    tools: ['After Effects', 'Illustrator'],
  },
  {
    id: 2,
    title: 'Music Video VFX',
    description: 'Adding dynamic energy effects and cleanups for an upcoming music video release.',
    previewUrl: 'https://picsum.photos/seed/wip2/600/400',
    tools: ['After Effects', 'Mocha Pro'],
  },
  {
    id: 3,
    title: '3D Logo Animation',
    description: 'Developing a cinematic 3D logo reveal for a new gaming studio launching next quarter.',
    previewUrl: 'https://picsum.photos/seed/wip3/600/400',
    tools: ['Blender', 'Premiere Pro'],
  },
];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const InProgressCard: React.FC<{ project: InProgressProject }> = ({ project }) => (
  <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-lg bg-secondary dark:bg-[#11111F] shadow-lg border border-transparent hover:border-accent-start/50 transition-all duration-300 transform hover:-translate-y-2">
    <div className="absolute top-3 right-3 bg-gradient-to-r from-accent-start to-accent-end text-white text-xs font-bold py-1 px-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
      WIP
    </div>
    <img
      src={project.previewUrl}
      alt={project.title}
      className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-text-primary dark:text-[#F1F5F9]">{project.title}</h3>
      <p className="text-sm text-text-secondary dark:text-[#94A3B8] mt-2 min-h-[40px]">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tools.map(tool => (
          <span key={tool} className="text-xs bg-primary dark:bg-[#0A0A14] text-text-secondary dark:text-[#94A3B8] font-medium py-1 px-3 rounded-full">{tool}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const InProgress: React.FC = () => {
  return (
    <motion.section 
        id="in-progress" 
        className="py-20 bg-primary dark:bg-[#0A0A14]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-text-primary dark:text-white mb-4">Currently on My Desk</h2>
            <p className="text-text-secondary dark:text-[#94A3B8] mb-12 max-w-2xl mx-auto">A sneak peek at the exciting projects I'm currently bringing to life.</p>
        </motion.div>
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
        >
          {inProgressData.map(project => (
            <InProgressCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InProgress;