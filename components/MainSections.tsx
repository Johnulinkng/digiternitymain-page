"use client"

import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Section = ({ id, title, content }: { id: string; title: string; content: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Explore the future of AI-powered communication</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{content}</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

const MainSections = () => {
  return (
    <>
      <Section
        id="our-vision"
        title="Our Vision"
        content="We envision a world where communication knows no boundaries. Our AI-powered video chat platform breaks down language barriers and connects people from all corners of the globe, fostering understanding and collaboration like never before."
      />
      <Section
        id="avatar-creation"
        title="Avatar Creation"
        content="Create your own unique digital avatar using our cutting-edge AI technology. Express yourself in the digital realm with a personalized representation that captures your essence and style."
      />
      <Section
        id="avatar-chat"
        title="Avatar Chat"
        content="Experience seamless communication through your digital avatar. Our AI-driven technology ensures natural conversations, real-time translations, and expressive interactions, making every chat engaging and meaningful."
      />
      <Section
        id="web3-nft"
        title="WEB3 and NFT Integration"
        content="Embrace the future of digital ownership. Your avatar and unique chat experiences can be minted as NFTs, allowing you to truly own and trade your digital identity and memorable conversations on the blockchain."
      />
      <Section
        id="use-cases"
        title="Use Cases"
        content="From global business meetings to virtual classrooms, from international friendships to cross-cultural collaborations, our AI video chat platform opens up a world of possibilities. Discover how our technology can transform your communication experience."
      />
    </>
  );
};

export default MainSections;