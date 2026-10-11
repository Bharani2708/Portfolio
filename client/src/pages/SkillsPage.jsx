import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillsSection } from '../sections/SkillsSection';

export const SkillsPage = () => {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillsSection />
      </div>
    </div>
  );
};

export default SkillsPage;
