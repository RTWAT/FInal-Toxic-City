import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const members = ['Kilian Lechner', 'Sebastian Gandler', 'David Fischer', 'Felix Aschaber', 'Nico Achorner'];

  return (
    <div className="relative inline-block ml-auto">
      <motion.button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black inline-flex items-center py-2 hover:text-gray-500 font-medium text-lg"
        type="button"
        whileTap={{ scale: 0.95 }}>
        Mitglieder
        <motion.svg
          className="w-2.5 h-2.5 ms-3 mr-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="dropdown"
            className="absolute z-10 bg-slate-100 rounded-lg shadow w-44 font-medium text-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}>
            <ul
              className="py-2 text-sm"
              aria-labelledby="dropdownDefaultButton">
              {members.map((member) => (
                <li key={member}>
                  <Link
                    to={`/member/${member.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 hover:bg-gray-200 transition">
                    {member}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
