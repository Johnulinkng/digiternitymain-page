"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">AI Video Chat</div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Vision</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            AI-Powered Communication
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Revolutionizing the way we connect and interact through AI-driven video chat technology.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">Global Connectivity</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Breaking language barriers and connecting people worldwide.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">Cutting-Edge Technology</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Leveraging the latest advancements in AI and video processing.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => scrollToSection('avatar-creation')}>
                  Avatar Creation
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => scrollToSection('avatar-chat')}>
                  Avatar Chat
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => scrollToSection('web3-nft')}>
                  WEB3 & NFT
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => scrollToSection('use-cases')}>
                  Use Cases
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('our-vision')}>Our Vision</Button></li>
              <li><Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('avatar-creation')}>Avatar Creation</Button></li>
              <li><Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('avatar-chat')}>Avatar Chat</Button></li>
              <li><Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('web3-nft')}>WEB3 & NFT</Button></li>
              <li><Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('use-cases')}>Use Cases</Button></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;