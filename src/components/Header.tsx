import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Picture from '@/components/Picture';

const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'For Property Managers', href: '/property-managers' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Rewards', href: '/rewards' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 pt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 -ml-4 sm:-ml-6 lg:-ml-8" aria-label="Tap-N-Grab home">
            <Picture
              src="/lovable-uploads/5c006de5-ed16-49aa-94f2-83f4ff2451e8.png"
              alt="Tap-N-Grab"
              width={480}
              height={144}
              loading="eager"
              fetchPriority="high"
              className="h-36 w-auto"
            />
          </Link>

          <nav className="hidden md:flex space-x-8" aria-label="Primary">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-brand-teal ${
                  isActive(item.href)
                    ? 'text-brand-teal border-b-2 border-brand-teal'
                    : 'text-brand-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild variant="hero" size="lg">
              <Link to="/property-managers">Schedule a Tour</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-nav" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-teal bg-brand-teal-light'
                      : 'text-brand-dark hover:text-brand-teal hover:bg-brand-teal-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/property-managers" onClick={() => setIsMenuOpen(false)}>
                    Schedule a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
