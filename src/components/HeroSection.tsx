import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    { icon: Zap, text: "Zero Cost, Zero Work" },
    { icon: Clock, text: "Available 24/7" },
    { icon: Users, text: "Resident-Loved" },
    { icon: CheckCircle, text: "Stylish & Modern" }
  ];

  return (
    <section className="pt-16 bg-gradient-to-br from-white via-brand-teal-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight">
                Offer Residents an 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Amenity They'll Love</span>
              </h1>
              <p className="text-xl text-brand-gray max-w-lg">
                The smarter, sleeker amenity for your residents. 24/7 access to curated snacks and drinks with zero property management required.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <benefit.icon className="h-6 w-6 text-brand-teal" />
                  <span className="text-sm font-medium text-brand-dark">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Schedule a Tour
                <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              <Button variant="outline" size="xl">
                View Gallery
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 text-sm text-brand-gray">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-brand-teal border-2 border-white"></div>
                ))}
              </div>
              <span>Trusted by 50+ luxury apartment communities</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img 
                src="/lovable-uploads/17ec5cff-d060-42e7-9e2e-2d67e9157f93.png"
                alt="Tap-N-Grab Smart Market in Luxury Apartment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
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