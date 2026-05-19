import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Trophy, Users, Percent, Bell, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RAFFLE_FEATURES = [
  {
    icon: Percent,
    title: '2% Profit Share',
    description: 'Every purchase contributes to the weekly resident raffle prize pool.',
  },
  {
    icon: Bell,
    title: 'Weekly Drawings',
    description: 'Automatic weekly raffles keep residents engaged and excited.',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Creates shared excitement and community engagement among residents.',
  },
  {
    icon: Trophy,
    title: 'Real Cash Prizes',
    description: 'Winners receive actual cash prizes, not just promotional credits.',
  },
];

const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Residents Make Purchases',
    description: 'Every transaction automatically enters residents into the weekly raffle',
  },
  {
    step: 2,
    title: 'Prize Pool Grows',
    description: '2% of all sales revenue contributes to the weekly prize pool',
  },
  {
    step: 3,
    title: 'Weekly Drawing',
    description: 'Every Friday, we randomly select a winner from all eligible residents',
  },
  {
    step: 4,
    title: 'Winner Notification',
    description: 'Winners are notified immediately and receive their cash prize',
  },
];

const TESTIMONIALS = [
  {
    quote: 'I won $75 last month! It was such a nice surprise and really brightened my week.',
    author: 'Emma Rodriguez',
    location: 'Skyline Residences',
    emoji: '🎉',
  },
  {
    quote: 'The weekly raffles make buying snacks feel like a fun game. Love the community excitement!',
    author: 'David Kim',
    location: 'Metro Living',
    emoji: '🎲',
  },
  {
    quote: "Even when I don't win, knowing I'm supporting the community prize pool feels good.",
    author: 'Sarah Chen',
    location: 'Luxury Heights',
    emoji: '❤️',
  },
];

const Rewards = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-teal-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand-teal rounded-full">
                  <Gift className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                Weekly Resident Raffle
              </h1>
              <p className="text-xl text-brand-gray mb-8">
                Every purchase automatically enters residents into our weekly cash raffle. 2% of profits go directly back to your community!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <Trophy className="mr-2 h-5 w-5" />
                  View Current Prize
                </Button>
                <Button variant="outline" size="xl">
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Prize Display */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-hero p-12 rounded-3xl text-white text-center shadow-large">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  This Week's Prize Pool
                </h2>
                <div className="text-6xl md:text-8xl font-bold mb-4">
                  $127
                </div>
                <p className="text-xl mb-6 text-white/90">
                  Drawing this Friday at 5:00 PM
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold">47</div>
                    <div className="text-white/80">Eligible Residents</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold">156</div>
                    <div className="text-white/80">Entries This Week</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold">$2,340</div>
                    <div className="text-white/80">Total Prizes Given</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-brand-teal-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                How the Raffle Works
              </h2>
              <p className="text-xl text-brand-gray">
                Simple, transparent, and automatic. Every purchase makes residents eligible for weekly cash prizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS.map((step) => (
                <Card key={step.step} className="text-center p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="p-8 bg-white shadow-soft max-w-2xl mx-auto">
                <CardContent className="p-0">
                  <Star className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">
                    Fair & Transparent
                  </h3>
                  <p className="text-brand-gray">
                    Every resident has an equal chance to win regardless of purchase amount. One purchase = one entry, with automatic weekly resets to keep it fair for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Why Residents Love the Raffle
              </h2>
              <p className="text-xl text-brand-gray">
                More than just prizes - it's about building community and creating shared excitement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RAFFLE_FEATURES.map((feature) => (
                <Card key={feature.title} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-teal-light rounded-lg">
                        <feature.icon className="h-6 w-6 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-brand-gray">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Winner Testimonials */}
        <section className="py-20 bg-brand-teal-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Recent Winner Stories
              </h2>
              <p className="text-xl text-brand-gray">
                Hear from residents who've experienced the joy of winning our weekly raffle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <Card key={testimonial.author} className="p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-center mb-4">
                      <span className="text-4xl">{testimonial.emoji}</span>
                    </div>
                    <p className="text-brand-gray mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <div className="font-semibold text-brand-dark">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-brand-gray">
                        {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* QR Code & Notification System */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                    Winner Notification System
                  </h2>
                  <p className="text-lg text-brand-gray">
                    Winners are instantly notified through multiple channels to ensure they never miss their prize. QR codes make prize claiming quick and secure.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✉️
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark">Instant Email Notification</h4>
                        <p className="text-brand-gray text-sm">Winners receive immediate email confirmation with prize details</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                        📱
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark">SMS Alert</h4>
                        <p className="text-brand-gray text-sm">Text message with unique QR code for prize redemption</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                        🏢
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark">Property Manager Alert</h4>
                        <p className="text-brand-gray text-sm">Your team gets notified to help celebrate the winner</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" size="lg">
                    See Sample Notification
                  </Button>
                </div>

                <div className="relative">
                  <Card className="overflow-hidden bg-gradient-card">
                    <CardContent className="p-8 text-center">
                      <div className="w-48 h-48 bg-white border-4 border-brand-teal rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-2xl">📱</span>
                          </div>
                          <div className="text-xs text-brand-gray">Winner QR Code</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">
                        Congratulations Sarah!
                      </h3>
                      <p className="text-brand-gray mb-4">
                        You've won this week's $127 prize!
                      </p>
                      <Button variant="hero" className="w-full">
                        Claim Your Prize
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Dashboard Preview */}
        <section className="py-20 bg-brand-teal-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Easy Administration
              </h2>
              <p className="text-xl text-brand-gray">
                Property managers get access to a simple admin panel to track raffle activity and winner history.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden shadow-large">
              <CardContent className="p-0">
                <div className="bg-brand-dark text-white p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300 ml-4">Tap-N-Grab Admin Dashboard</span>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-brand-teal-light rounded-lg">
                      <div className="text-2xl font-bold text-brand-teal">$127</div>
                      <div className="text-sm text-brand-gray">Current Prize Pool</div>
                    </div>
                    <div className="text-center p-4 bg-brand-teal-light rounded-lg">
                      <div className="text-2xl font-bold text-brand-teal">47</div>
                      <div className="text-sm text-brand-gray">Eligible Residents</div>
                    </div>
                    <div className="text-center p-4 bg-brand-teal-light rounded-lg">
                      <div className="text-2xl font-bold text-brand-teal">156</div>
                      <div className="text-sm text-brand-gray">Total Entries</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="hero" size="lg">
                      <Trophy className="mr-2 h-5 w-5" />
                      Select This Week's Winner
                    </Button>
                    <p className="text-sm text-brand-gray mt-2">
                      Manual drawing trigger for property manager control
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring Weekly Excitement to Your Residents?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The raffle system is included with every Tap-N-Grab installation at no additional cost. Start building community engagement today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/property-managers">
                  <Gift className="mr-2 h-5 w-5" />
                  Start Weekly Raffles
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-dark">
                <Link to="/property-managers">Learn More About Installation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;