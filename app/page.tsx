"use client"

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setShowBackToTop(mainRef.current.scrollTop > 300);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <main ref={mainRef} className="h-screen overflow-y-auto scroll-smooth">
      <Header />
      <HeroSection />
      <MainSections />
      {showBackToTop && <BackToTop mainRef={mainRef} />}
    </main>
  );
}