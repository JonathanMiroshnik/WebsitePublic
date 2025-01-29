import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ContactBarVisibility = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the contact bar and page height
    const contactBar = document.querySelector('.contact-bar');
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    // If the page is too short (height < viewportHeight), make the contact bar fully visible
    if (pageHeight <= viewportHeight) {
      contactBar.style.opacity = 1;
    } else {
      contactBar.style.opacity = 0; // Set to invisible by default
    }

    // Scroll event to update opacity on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const distanceToBottom = pageHeight - scrollPosition;
      const opacity = Math.min(1, (1 - distanceToBottom / 300)); // Adjust 300 as needed
      contactBar.style.opacity = opacity;
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return null; // This component doesn't render anything itself, it's just for effect
};

export default ContactBarVisibility;
