import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Download, User, Calendar, FileText, Phone, Play, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Picture from '@/components/Picture';

const CONTACT_EMAIL = 'hello@tapngrab.us';
const BENEFITS = [
  {
    icon: CheckCircle,
    title: 'Zero Upfront Costs',
    description: 'No installation fees, equipment costs, or monthly charges for your property.',
  },
  {
    icon: CheckCircle,
    title: 'Zero Management Work',
    description: 'We handle stocking, maintenance, customer service, and all operations.',
  },
  {
    icon: CheckCircle,
    title: 'Resident Satisfaction',
    description: '24/7 premium amenity that residents actually use and love.',
  },
  {
    icon: CheckCircle,
    title: 'Professional Installation',
    description: 'Expert setup with minimal disruption to your daily operations.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What are the costs for property management?',
    answer: 'There are zero costs for property management. We handle all installation, maintenance, stocking, and operations at no charge to you.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Installation typically takes 2-4 hours with minimal disruption to residents. Traig coordinates everything in advance.',
  },
  {
    question: 'What happens if the machine breaks?',
    answer: 'We provide 24/7 monitoring and rapid response for any technical issues. All maintenance is included at no cost.',
  },
  {
    question: 'How do you choose products?',
    answer: 'We curate selections based on local preferences, resident feedback, and premium quality standards.',
  },
  {
    question: 'How do residents pay?',
    answer: 'Contactless payment via tap-to-pay with phone or card. No cash handling required.',
  },
  {
    question: 'What about the weekly raffle?',
    answer: 'We automatically run weekly resident raffles using 2% of profits, creating community engagement and excitement.',
  },
];

const PropertyManagers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const callbackRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#callback') {
      callbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const get = (key: string) => String(formData.get(key) ?? '').trim();
    const firstName = get('firstName');
    const lastName = get('lastName');
    const propertyName = get('propertyName');
    const email = get('email');
    const phone = get('phone');
    const message = get('message');

    const subject = `Tour request from ${[firstName, lastName].filter(Boolean).join(' ') || 'a property manager'}`;
    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Property: ${propertyName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'Message:',
      message,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-teal-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                For Property Managers
              </h1>
              <p className="text-xl text-brand-gray mb-8">
                Transform your property amenities with zero cost and zero work. Let Traig show you how Tap-N-Grab can enhance resident satisfaction.
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={() => callbackRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Tour with Traig
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Why Choose Tap-N-Grab?
              </h2>
              <p className="text-xl text-brand-gray">
                The smart market solution that delights residents while requiring zero effort from your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BENEFITS.map((benefit) => <Card key={benefit.title} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-teal-light rounded-lg">
                        <benefit.icon className="h-6 w-6 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-brand-gray">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Pitch Deck Section */}
        <section className="py-20 bg-brand-teal-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                    Interactive Pitch Presentation
                  </h2>
                  <p className="text-lg text-brand-gray">
                    View Traig's complete presentation showing ROI, resident benefits, and installation process. See exactly how Tap-N-Grab transforms property amenities.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Complete financial breakdown</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Resident satisfaction metrics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Installation timeline & process</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Case studies from similar properties</span>
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => callbackRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Presentation
                  </Button>
                </div>

                <div className="relative">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 relative">
                      <Picture src="/lovable-uploads/a5e3cb78-1b2b-4ce2-9a51-b3c8367a946e.png" alt="Traig's Pitch Presentation" width={1024} height={1536} className="w-full h-auto" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button variant="hero" size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white">
                          <Play className="mr-2 h-5 w-5" />
                          Watch Presentation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                  Installation FAQ
                </h2>
                <p className="text-xl text-brand-gray">
                  Common questions from property managers about the Tap-N-Grab installation process.
                </p>
              </div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openFaq === index;
                  const panelId = `faq-panel-${index}`;
                  const buttonId = `faq-button-${index}`;
                  return (
                    <Card key={item.question} className="overflow-hidden">
                      <CardContent className="p-0">
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          className="w-full text-left p-6 hover:bg-brand-teal-light transition-colors"
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-brand-dark">
                              {item.question}
                            </h3>
                            <ChevronDown
                              aria-hidden="true"
                              className={`h-5 w-5 text-brand-teal transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </div>
                        </button>
                        {isOpen && (
                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className="px-6 pb-6"
                          >
                            <p className="text-brand-gray">{item.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Traig Contact Section */}
        <section id="callback" ref={callbackRef} className="py-20 bg-brand-teal-light scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                    Meet Traig
                  </h2>
                  <p className="text-lg text-brand-gray">
                    Your dedicated frontline evangelist who will coordinate the entire installation process from start to finish. Traig ensures a seamless experience with zero disruption to your operations.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl shadow-soft">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-xl font-bold">
                        T
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark">Traig Hall</h3>
                        <p className="text-brand-gray">Installation Specialist & Property Liaison</p>
                      </div>
                    </div>
                    <p className="text-brand-gray text-sm">
                      "I personally oversee every installation to ensure your property gets the premium amenity experience your residents deserve."
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button asChild variant="hero" size="lg">
                      <a href={`mailto:${CONTACT_EMAIL}?subject=Schedule%20a%20tour%20with%20Traig`}>
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule with Traig
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href={`mailto:${CONTACT_EMAIL}?subject=Callback%20request`}>
                        <Phone className="mr-2 h-5 w-5" />
                        Request Callback
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-medium">
                  <h3 className="text-2xl font-bold text-brand-dark mb-6">
                    Request a Callback
                  </h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark mb-2">
                          First Name
                        </label>
                        <Input id="firstName" name="firstName" autoComplete="given-name" placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark mb-2">
                          Last Name
                        </label>
                        <Input id="lastName" name="lastName" autoComplete="family-name" placeholder="Smith" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="propertyName" className="block text-sm font-medium text-brand-dark mb-2">
                        Property Name
                      </label>
                      <Input id="propertyName" name="propertyName" autoComplete="organization" placeholder="Luxury Heights Apartments" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" autoComplete="email" placeholder="john@property.com" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                        Phone
                      </label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Tell us about your property and when you'd like to schedule a tour..." rows={4} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Request
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Resources & Downloads
              </h2>
              <p className="text-xl text-brand-gray mb-12">
                Get detailed information about Tap-N-Grab to share with your team and stakeholders.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-brand-teal-light rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      One-Pager PDF
                    </h3>
                    <p className="text-brand-gray mb-4 text-sm">
                      Complete overview with benefits, process, and contact information.
                    </p>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-brand-teal-light rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Pitch Deck
                    </h3>
                    <p className="text-brand-gray mb-4 text-sm">
                      Interactive presentation with ROI analysis and case studies.
                    </p>
                    <Button variant="outline" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      View Online
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-brand-teal-light rounded-lg flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Case Studies
                    </h3>
                    <p className="text-brand-gray mb-4 text-sm">
                      Success stories from similar luxury apartment properties.
                    </p>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default PropertyManagers;