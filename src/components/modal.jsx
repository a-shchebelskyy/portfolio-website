// Modal.jsx
import React from 'react';

export default function Modal({ isOpen, onClose, title, subtitle, p1, p2, children }) {
  // Do not render anything if the modal is closed
  if (!isOpen) return null;

  return (
    // Backdrop / Overlay
    <div 
      className="modal"
      onClick={onClose}
    >
      <div 
        className="modal-card"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Close Button */}
        <button 
          className="modal-close"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Header */}
        <h3 className="modal-header">
            {title}
        </h3>
        <p className="project-subtitle">
            {subtitle}
        </p>

        <p className="modal-body">
            {p1}
        </p>

        <p className="modal-body">
            {p2}
        </p>
        

        {/* Modal Body */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
