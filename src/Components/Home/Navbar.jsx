import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'connect'];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const navItemStyle = (section) =>
    `text-xl ${
      activeSection === section
        ? 'text-blue-500 underline'
        : 'text-white hover:text-blue-400'
    } transition-colors`;

  return (
    <nav className="backdrop-blur-sm shadow-md fixed top-0 w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <a
          href="/"
          className="text-3xl font-bold text-white hover:text-blue-600 transition-colors"
        >
          Venkatesh
        </a>

        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <button onClick={() => handleNavClick('about')} className={navItemStyle('about')}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('projects')} className={navItemStyle('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('skills')} className={navItemStyle('skills')}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('connect')} className={navItemStyle('connect')}>
              Let's Connect
            </button>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
          <ul className="flex flex-col px-4 pb-4 space-y-3 font-medium">
            <li>
              <button onClick={() => handleNavClick('about')} className={navItemStyle('about')}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('projects')} className={navItemStyle('projects')}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('skills')} className={navItemStyle('skills')}>
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('connect')} className={navItemStyle('connect')}>
                Let's Connect
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
