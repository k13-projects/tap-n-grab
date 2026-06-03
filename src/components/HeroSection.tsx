import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Picture from '@/components/Picture';

const BENEFITS = [
  { icon: Zap, text: 'Zero Cost, Zero Work' },
  { icon: Clock, text: 'Available 24/7' },
  { icon: Users, text: 'Resident-Loved' },
  { icon: CheckCircle, text: 'Stylish & Modern' },
];

const HeroSection = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-white via-brand-teal-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-brand-dark leading-tight text-center md:text-5xl">
                Offer Residents an
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Amenity They'll Love</span>
              </h1>
              <p className="text-xl text-brand-gray max-w-lg">
                The smarter, sleeker amenity for your residents. From a single
                cooler to a full modular market wall — 24/7 curated snacks and
                drinks, with zero work for your team.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit.text} className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <benefit.icon className="h-6 w-6 text-brand-teal" />
                  <span className="text-sm font-medium text-brand-dark">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/property-managers">
                  Schedule a Tour
                  <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-brand-gray">
              <div className="flex -space-x-2" aria-hidden="true">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-brand-teal border-2 border-white"></div>
                ))}
              </div>
              <span>Trusted by 50+ luxury apartment communities</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <Picture
                src="/lovable-uploads/17ec5cff-d060-42e7-9e2e-2d67e9157f93.png"
                alt="Tap-N-Grab Smart Market in Luxury Apartment"
                width={1024}
                height={1024}
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-teal">24/7</div>
                <div className="text-sm text-brand-gray">Always Available</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-teal">0%</div>
                <div className="text-sm text-brand-gray">Management Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
