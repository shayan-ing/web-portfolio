// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Sun, Moon } from "lucide-react"; // We'll use this directly if ThemeToggle not ready

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Theme detection & persistence
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefersDark;

    setIsDark(initial);
    if (initial) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414]/80 dark:bg-[#050414]/80 bg-white/10 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center text-white dark:text-white">
        {/* Logo */}
        <div className="text-lg font-bold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Shayan </span>
          <span className="text-[#8245ec]">A. </span>
          <span>Abedeen</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu + Icons + Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-[#8245ec] transition ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <a href="https://github.com/shayan-ing" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-300 hover:text-[#8245ec] transition" />
            </a>
            <a href="https://www.linkedin.com/in/shayan-ing/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-300 hover:text-[#8245ec] transition" />
            </a>

            {/* Theme Toggle Button - Beautiful & Animated */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#8245ec] hover:bg-[#8245ec]/20 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun
                  className={`absolute inset-0 w-5 h-5 text-yellow-400 transition-all duration-500 ${
                    isDark ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute inset-0 w-5 h-5 text-purple-400 transition-all duration-500 ${
                    isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple-400" />
            )}
          </button>

          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-11/12 mt-2 bg-[#050414]/90 dark:bg-[#050414]/90 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
          <ul className="py-6 text-center space-y-5 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-[#8245ec] transition ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex justify-center gap-6 pt-4">
              <a href="https://github.com/shayan-ing" target="_blank" rel="noopener noreferrer">
                <FaGithub size={26} className="hover:text-[#8245ec] transition" />
              </a>
              <a href="https://www.linkedin.com/in/shayan-ing/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={26} className="hover:text-[#8245ec] transition" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;