import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, description, image, icon, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
      {/* Text content */}
      <div className="flex-1 space-y-6">
        <div className="inline-block p-3 bg-gray-900 rounded-xl">
          {icon}
        </div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-xl text-gray-400">{description}</p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img 
          src={image} 
          alt={title}
          className="rounded-xl w-full object-cover aspect-video"
        />
      </div>
    </div>
  );
};

export default Feature;