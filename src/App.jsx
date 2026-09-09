import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Classes from './components/Classes.jsx';
import Schedule from './components/Schedule.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonial from './components/Testimonial.jsx';
import Blog from './components/Blog.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import ApplyModal from './components/ApplyModal.jsx';

export default function App() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('General Application');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleOpenApply = (roleName) => {
    setSelectedRole(roleName || 'General Application');
    setApplyModalOpen(true);
  };

  const handleSelectTrack = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-lightBg font-sans text-textDark selection:bg-brandOrange selection:text-white">
      {/* Sticky Top Header Navbar */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Page Sections */}
      <main>
        <Hero onOpenApply={handleOpenApply} onSelectTrack={handleSelectTrack} />
        <About />
        <Classes onOpenApply={handleOpenApply} />
        <Schedule
          onOpenApply={handleOpenApply}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Gallery />
        <Testimonial />
        <Blog />
        <Newsletter />
      </main>

      <Footer onOpenApply={handleOpenApply} />

      {/* Application Popup Modal */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        selectedRole={selectedRole}
      />
    </div>
  );
}
