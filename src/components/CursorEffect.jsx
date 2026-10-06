import React, { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    const handlePointerDown = (e) => {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      const rippleOuter = document.createElement('div');
      rippleOuter.className = 'cursor-click-ripple ring-outer';
      rippleOuter.style.left = `${x}px`;
      rippleOuter.style.top = `${y}px`;

      const rippleInner = document.createElement('div');
      rippleInner.className = 'cursor-click-ripple ring-inner';
      rippleInner.style.left = `${x}px`;
      rippleInner.style.top = `${y}px`;

      document.body.appendChild(rippleOuter);
      document.body.appendChild(rippleInner);

      setTimeout(() => {
        rippleOuter.remove();
        rippleInner.remove();
      }, 600);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return null;
}
