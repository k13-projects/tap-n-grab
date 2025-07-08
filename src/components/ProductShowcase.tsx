import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ShoppingCart, Smartphone } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-brand-teal-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Smart Market Experience
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Modern, contactless shopping with premium products your residents will love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/e3b09f69-0942-49c1-99d5-87f00119a71f.png"
                    alt="Tap-N-Grab Product Selection"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/17ec5cff-d060-42e7-9e2e-2d67e9157f93.png"
                    alt="Premium Beverage Selection"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Contactless Payment Icon */}
            <Card className="bg-white p-6 text-center">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/09d49f29-411f-46af-aba6-3fb4a04d9ff6.png"
                  alt="Contactless Payment"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  Tap & Go Payment
                </h3>
                <p className="text-brand-gray">
                  Contactless payment with phone or card
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-teal rounded-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    Glass-Front Display
                  </h3>
                  <p className="text-brand-gray">
                    Residents can see exactly what they're purchasing with our clear glass display cases.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-teal rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    Curated Selection
                  </h3>
                  <p className="text-brand-gray">
                    Premium snacks, beverages, and local favorites carefully chosen for your community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-teal rounded-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    Contactless Technology
                  </h3>
                  <p className="text-brand-gray">
                    Simple tap-to-pay technology with phone or card for quick, hygienic transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h4 className="text-lg font-semibold text-brand-dark mb-3">
                Popular Items Include:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-brand-gray">
                <div>• Premium Kombucha</div>
                <div>• Organic Snacks</div>
                <div>• Craft Beverages</div>
                <div>• Local Favorites</div>
                <div>• Energy Drinks</div>
                <div>• Healthy Options</div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full">
              View Full Product Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;