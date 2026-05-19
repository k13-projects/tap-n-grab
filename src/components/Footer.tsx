import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Picture from '@/components/Picture';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Picture
              src="/lovable-uploads/bbfa115a-c931-4ae6-a6fc-8560eb6c83b2.png"
              alt="Tap-N-Grab"
              width={120}
              height={32}
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              The smarter, sleeker amenity for your residents. Zero cost, zero work for property managers.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@tapngrab.us" className="flex items-center text-gray-300 hover:text-brand-teal transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                hello@tapngrab.us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/property-managers" className="text-gray-300 hover:text-brand-teal transition-colors">
                  For Property Managers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Rewards Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-brand-teal" />
                <span className="text-gray-300">
                  Serving luxury apartment communities nationwide
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-brand-teal" />
                <span className="text-gray-300">
                  Request a callback
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Tap-N-Grab. All rights reserved. | 
            <a href="https://www.tapngrab.us" className="text-brand-teal hover:underline ml-1">
              www.tapngrab.us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;