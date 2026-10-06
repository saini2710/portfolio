import React from 'react';

export default function Toast({ message, isVisible }) {
  return (
    <div
      className={`toast-container ${isVisible ? 'show' : ''}`}
      id="toast"
      role="status"
      aria-live="polite"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span className="toast-message">{message || 'Copied to clipboard'}</span>
    </div>
  );
}
