import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'For Property Managers',
    href: '/property-managers'
  }, {
    name: 'Gallery',
    href: '/gallery'
  }, {
    name: 'Rewards',
    href: '/rewards'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img alt="Tap-N-Grab" className="h-8 w-auto" src="/lovable-uploads/779b33ac-0b2b-4d86-ab77-989b042c6005.png" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-brand-teal ${isActive(item.href) ? 'text-brand-teal border-b-2 border-brand-teal' : 'text-brand-dark'}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="hero" size="lg">
              Schedule a Tour
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-medium transition-colors ${isActive(item.href) ? 'text-brand-teal bg-brand-teal-light' : 'text-brand-dark hover:text-brand-teal hover:bg-brand-teal-light'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;