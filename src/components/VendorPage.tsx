import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Calendar, Users, ShoppingBag, MessageCircle, ExternalLink } from "lucide-react";
import vendorBanner from "@/assets/vendor-banner.jpg";
import vendorLogo from "@/assets/vendor-logo.jpg";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

const VendorPage = () => {
  const vendorData = {
    name: "TechVendor Pro",
    rating: 4.8,
    totalReviews: 2847,
    location: "San Francisco, CA",
    memberSince: "2019",
    totalProducts: 156,
    totalSales: "10K+",
    responseTime: "< 2 hours",
    description: "Premium technology solutions and innovative gadgets for modern professionals. We specialize in cutting-edge electronics and smart devices.",
    policies: {
      shipping: "Free shipping on orders over $50",
      returns: "30-day return policy",
      warranty: "1-year manufacturer warranty"
    }
  };

  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Charging Pad Pro",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 234
    },
    {
      id: "2", 
      name: "Smart Bluetooth Speaker",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: "3",
      name: "USB-C Hub Multi-Port",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 89
    },
    {
      id: "4",
      name: "Laptop Stand Aluminum",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 67
    },
    {
      id: "5",
      name: "Wireless Mouse Pro",
      price: 39.99,
      originalPrice: 54.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 123
    },
    {
      id: "6",
      name: "Desk Organizer Smart",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 45
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${vendorBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-75" />
        </div>
        
        <div className="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-elegant p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img 
                src={vendorLogo} 
                alt={vendorData.name}
                className="w-24 h-24 rounded-full object-cover shadow-soft"
              />
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{vendorData.name}</h1>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        {renderStars(vendorData.rating)}
                        <span className="ml-2 text-sm font-medium">{vendorData.rating}</span>
                        <span className="text-sm text-muted-foreground">({vendorData.totalReviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vendorData.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Member since {vendorData.memberSince}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="gradient" className="hover:shadow-glow transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Store
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-soft transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{vendorData.totalProducts}</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-soft transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{vendorData.totalSales}</div>
              <div className="text-sm text-muted-foreground">Sales</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-soft transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{vendorData.responseTime}</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </CardContent>
          </Card>
        </div>

        {/* About & Policies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About This Store</h2>
                <p className="text-muted-foreground leading-relaxed">{vendorData.description}</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Store Policies</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-sm">Shipping</div>
                  <div className="text-sm text-muted-foreground">{vendorData.policies.shipping}</div>
                </div>
                <div>
                  <div className="font-medium text-sm">Returns</div>
                  <div className="text-sm text-muted-foreground">{vendorData.policies.returns}</div>
                </div>
                <div>
                  <div className="font-medium text-sm">Warranty</div>
                  <div className="text-sm text-muted-foreground">{vendorData.policies.warranty}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Button variant="outline">View All Products</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge variant="destructive" className="text-xs">
                          Sale
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;