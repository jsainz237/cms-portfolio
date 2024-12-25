'use client'

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorOffset = (isHovering ? 36 : 24) / 2;

  return (
    <div
      className={cn(
        'fixed size-6 bg-foreground rounded-full z-[9999] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-100 ease-out mix-blend-difference',
        isHovering && 'size-9'
      )}
      style={{
        transform: `translate(${position.x - cursorOffset}px, ${position.y - cursorOffset}px)`,
      }}
    />
  );
};

export default Cursor;