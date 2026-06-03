import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Picture from '@/components/Picture';

const GALLERY_ITEMS = [
  {
    id: 1,
    type: 'image',
    src: '/lovable-uploads/tng-machine-lobby.png',
    title: 'Luxury Apartment Installation',
    description: 'Tap-N-Grab smart market seamlessly integrated into a modern apartment lobby setting',
    category: 'Installation',
  },
  {
    id: 2,
    type: 'image',
    src: '/lovable-uploads/e3b09f69-0942-49c1-99d5-87f00119a71f.png',
    title: 'Premium Product Selection',
    description: 'Curated beverages and healthy snacks for discerning luxury residents',
    category: 'Products',
  },
  {
    id: 3,
    type: 'image',
    src: '/lovable-uploads/17ec5cff-d060-42e7-9e2e-2d67e9157f93.png',
    title: 'Modern Design Aesthetic',
    description: 'Sleek glass-front display that complements contemporary interior design',
    category: 'Design',
  },
  {
    id: 4,
    type: 'interaction',
    src: '/lovable-uploads/1517b24e-d197-4c40-b068-53205b8b29fb.png',
    title: 'Contactless Payment',
    description: 'Simple tap-to-pay technology for hygienic, convenient transactions',
    category: 'Technology',
  },
];

const INSTALLATION_STEPS = [
  {
    step: 1,
    title: 'Site Assessment',
    description: 'Traig visits to determine optimal placement and setup requirements',
    image: '/lovable-uploads/a5e3cb78-1b2b-4ce2-9a51-b3c8367a946e.png',
  },
  {
    step: 2,
    title: 'Professional Installation',
    description: 'Expert setup with minimal disruption to residents and daily operations',
    image: '/lovable-uploads/e3b09f69-0942-49c1-99d5-87f00119a71f.png',
  },
  {
    step: 3,
    title: 'Product Curation',
    description: 'Initial stocking with premium selection based on resident preferences',
    image: '/lovable-uploads/17ec5cff-d060-42e7-9e2e-2d67e9157f93.png',
  },
  {
    step: 4,
    title: 'Resident Activation',
    description: 'Launch with resident orientation and weekly raffle program activation',
    image: '/lovable-uploads/09d49f29-411f-46af-aba6-3fb4a04d9ff6.png',
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="In the Wild"
          title="Installation Gallery"
          subtitle="See Tap-N-Grab in action across luxury apartment communities nationwide. Real installations, real residents, real results."
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/property-managers">Schedule Your Installation</Link>
          </Button>
        </PageHero>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Featured Installations
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                From modern lobbies to luxury amenity spaces, see how Tap-N-Grab enhances property environments while delighting residents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {GALLERY_ITEMS.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-large transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Picture
                        src={item.src}
                        alt={item.title}
                        width={800}
                        height={640}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Button 
                          variant="hero" 
                          size="lg" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-brand-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-brand-gray">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Section */}
            <div className="bg-brand-teal-light p-8 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
                    See It In Action
                  </h3>
                  <p className="text-lg text-brand-gray">
                    Watch real residents using Tap-N-Grab in their apartment community. From product selection to contactless payment, see the complete user experience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Real resident interactions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Contactless payment demo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                      <span className="text-brand-dark">Product selection walkthrough</span>
                    </div>
                  </div>
                  <Button variant="hero" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo Video
                  </Button>
                </div>

                <div className="relative">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 relative">
                      <Picture
                        src="/lovable-uploads/a5e3cb78-1b2b-4ce2-9a51-b3c8367a946e.png"
                        alt="Resident Using Tap-N-Grab"
                        width={800}
                        height={512}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button variant="hero" size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white">
                          <Play className="mr-2 h-5 w-5" />
                          Play Video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Walkthrough */}
        <section className="py-20 bg-brand-teal-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Installation Process Walkthrough
              </h2>
              <p className="text-xl text-brand-gray">
                From initial consultation to resident activation, see every step of the seamless Tap-N-Grab installation process.
              </p>
            </div>

            <div className="space-y-16">
              {INSTALLATION_STEPS.map((step, index) => (
                <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-brand-gray">
                      {step.description}
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="hero" size="lg">
                        Learn More
                      </Button>
                      <Button variant="outline" size="lg">
                        Schedule Step {step.step}
                      </Button>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Picture
                          src={step.image}
                          alt={step.title}
                          width={800}
                          height={512}
                          className="w-full h-64 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resident Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                What Residents Are Saying
              </h2>
              <p className="text-xl text-brand-gray">
                Real feedback from residents who use Tap-N-Grab daily in their apartment communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <p className="text-brand-gray mb-4 italic">
                    "I love that it's available 24/7. Perfect for late-night study snacks!"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-brand-dark">Sarah M.</div>
                    <div className="text-brand-gray">Skyline Apartments Resident</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <p className="text-brand-gray mb-4 italic">
                    "The weekly raffles are so fun! I actually won last month and got $50."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-brand-dark">Mike C.</div>
                    <div className="text-brand-gray">Metro Living Resident</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <p className="text-brand-gray mb-4 italic">
                    "So convenient and the products are actually good quality. Way better than regular vending machines."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-brand-dark">Jessica L.</div>
                    <div className="text-brand-gray">Luxury Heights Resident</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-ink text-ink-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to See It in Your Building?
            </h2>
            <p className="text-xl text-ink-muted mb-8 max-w-2xl mx-auto">
              Schedule a tour with Traig to see how Tap-N-Grab can enhance your property amenities with zero cost and zero work for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/property-managers">Schedule Installation Tour</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-ink-3 bg-transparent text-ink-foreground hover:bg-white/5 hover:text-white">
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

export default Gallery;