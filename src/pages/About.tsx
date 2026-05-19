import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Picture from '@/components/Picture';

const TESTIMONIALS = [
  {
    quote: 'Our residents absolutely love it - especially the weekly giveaways.',
    author: 'Sarah Mitchell',
    role: 'Property Manager, Luxury Heights Apartments',
  },
  {
    quote: 'Zero maintenance for us, maximum convenience for residents. Perfect amenity.',
    author: 'Michael Chen',
    role: 'Community Director, Metro Living',
  },
  {
    quote: 'The installation was seamless and the residents use it daily. Great addition.',
    author: 'Jennifer Rodriguez',
    role: 'Leasing Manager, Skyline Residences',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-teal-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                About Tap-N-Grab
              </h1>
              <p className="text-xl text-brand-gray mb-8">
                We're revolutionizing apartment amenities with smart market solutions that delight residents while requiring zero work from property management teams.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                    Our Mission
                  </h2>
                  <p className="text-lg text-brand-gray leading-relaxed">
                    At Tap-N-Grab, we believe apartment amenities should enhance residents' lives while simplifying property management. Our smart market solution delivers 24/7 convenience with premium products, all while requiring zero effort from your team.
                  </p>
                  <p className="text-lg text-brand-gray leading-relaxed">
                    Founded with the vision of creating better living experiences, we've partnered with luxury apartment communities nationwide to bring residents the amenities they actually want and use.
                  </p>
                  <Button asChild variant="hero" size="lg">
                    <Link to="/property-managers">Partner With Us</Link>
                  </Button>
                </div>
                <div className="relative">
                  <Picture
                    src="/lovable-uploads/e3b09f69-0942-49c1-99d5-87f00119a71f.png"
                    alt="Tap-N-Grab Smart Market"
                    width={1536}
                    height={1024}
                    className="w-full rounded-2xl shadow-large"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-brand-teal-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                What Makes Us Different
              </h2>
              <p className="text-xl text-brand-gray">
                Unlike traditional vending machines, Tap-N-Grab offers a premium experience that matches the quality of luxury apartment living.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-brand-teal mb-4">0%</div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">
                    Management Required
                  </h3>
                  <p className="text-brand-gray">
                    We handle everything from installation to maintenance, stocking, and customer service.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-brand-teal mb-4">24/7</div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">
                    Always Available
                  </h3>
                  <p className="text-brand-gray">
                    Residents can access premium snacks and beverages whenever they need them.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-brand-teal mb-4">2%</div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">
                    Profit Share Raffle
                  </h3>
                  <p className="text-brand-gray">
                    Weekly resident raffles create community engagement and excitement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                What Property Managers Say
              </h2>
              <p className="text-xl text-brand-gray">
                Don't just take our word for it - hear from the property managers who've transformed their amenities with Tap-N-Grab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <Card key={testimonial.author} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <Quote className="h-8 w-8 text-brand-teal mb-4" />
                    <p className="text-brand-gray mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-brand-dark">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-brand-gray">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Property?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing number of luxury apartment communities offering Tap-N-Grab to their residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/property-managers">Schedule a Tour</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-dark">
                <Link to="/property-managers#callback">Request Callback</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;