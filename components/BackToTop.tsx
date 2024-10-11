"use client"

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = ({ mainRef }: { mainRef: React.RefObject<HTMLDivElement> }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (mainRef.current) {
        setIsVisible(mainRef.current.scrollTop > 300);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, [mainRef]);

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Button
      className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
      size="icon"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};

export default BackToTop;