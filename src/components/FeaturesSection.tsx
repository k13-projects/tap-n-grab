import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Heart, Sparkles, Gift, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Zero Cost, Zero Work",
      description: "Manage the entire system with no upfront costs or ongoing management required from your team."
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Residents can access on-demand drinks and snacks whenever they need them, day or night."
    },
    {
      icon: Sparkles,
      title: "Stylish & Modern",
      description: "Design compliments interiors with sleek, contemporary aesthetics that enhance your property."
    },
    {
      icon: Heart,
      title: "Curated Selection",
      description: "Local favorites and premium brands carefully selected to match your residents' preferences."
    },
    {
      icon: Gift,
      title: "Weekly Resident Raffle",
      description: "2% profit share raffle creates excitement and community engagement among residents."
    },
    {
      icon: TrendingUp,
      title: "Resident-Loved",
      description: "Our residents absolutely love it - especially the weekly giveaways and premium selection."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Why Property Managers Choose Tap-N-Grab
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Transform your property amenities with a solution that delights residents while requiring zero effort from your management team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-teal-light rounded-lg group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6 text-brand-teal group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Ready to enhance your property amenities?
            </h3>
            <p className="text-brand-gray mb-6">
              Traig will coordinate a tour & install at no cost to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors">
                Schedule Installation
              </button>
              <button className="border-2 border-brand-teal text-brand-teal px-8 py-3 rounded-lg font-semibold hover:bg-brand-teal hover:text-white transition-colors">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;