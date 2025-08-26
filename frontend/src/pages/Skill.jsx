import React from 'react';

// Core UI layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Custom banners and sections
import SSTPLBanner from '../components/Skill/SSTPLBanner';
import Mainbanner from '../components/Skill/Mainbanner';
import PurposeBanner from '../components/Skill/PurposeBanner';
import SkillDomainSelector from '../components/Skill/SkillDomainSelector';
import ContentTiles from '../components/Skill/ContentTiles';

const Skill = () => {
  return (
    <>
      

      {/* Hero Top Slider */}
      <Mainbanner />

      {/* National Youth Banner */}
      <SSTPLBanner />

      {/* Purpose-driven Section */}
      <PurposeBanner />

      {/* Domain Selection Interactive Grid */}
      <SkillDomainSelector />

      {/* Blog + Testimonial Preview Tiles */}
      <ContentTiles />

      
    </>
  );
};

export default Skill;