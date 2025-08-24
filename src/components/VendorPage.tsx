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
          className="h-80 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${vendorBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-3xl shadow-premium p-8 border border-border/50">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="relative">
                <img 
                  src={vendorLogo} 
                  alt={vendorData.name}
                  className="w-28 h-28 rounded-2xl object-cover shadow-elegant border-2 border-primary-lighter"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-card">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">{vendorData.name}</h1>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1 bg-primary-lighter px-3 py-1 rounded-full">
                          {renderStars(vendorData.rating)}
                          <span className="ml-2 text-sm font-semibold text-primary">{vendorData.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">({vendorData.totalReviews} reviews)</span>
                        <Badge variant="secondary" className="bg-primary-lighter text-primary border-0">
                          Verified
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-medium">{vendorData.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-medium">Member since {vendorData.memberSince}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                      {vendorData.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 xl:flex-col xl:w-48">
                    <Button variant="outline" className="font-medium">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Vendor
                    </Button>
                    <Button variant="premium">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="bg-primary-lighter rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{vendorData.totalProducts}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Products</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="bg-primary-lighter rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{vendorData.totalSales}</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Customers</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="bg-primary-lighter rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{vendorData.responseTime}</div>
              <div className="text-sm text-muted-foreground font-medium">Avg Response</div>
            </CardContent>
          </Card>
        </div>

        {/* About & Policies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">About This Store</h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-6">{vendorData.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Electronics</Badge>
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Smart Devices</Badge>
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Accessories</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Store Policies</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-lighter rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShoppingBag className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">Shipping</div>
                    <div className="text-sm text-muted-foreground">{vendorData.policies.shipping}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-lighter rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">Returns</div>
                    <div className="text-sm text-muted-foreground">{vendorData.policies.returns}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-lighter rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">Warranty</div>
                    <div className="text-sm text-muted-foreground">{vendorData.policies.warranty}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Discover our most popular items</p>
            </div>
            <Button variant="outline" className="w-fit">
              View All Products
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group bg-gradient-card border-border/50 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground shadow-card">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-foreground mb-3 text-lg group-hover:text-primary transition-colors leading-tight">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 bg-primary-lighter px-2 py-1 rounded-full">
                        {renderStars(product.rating)}
                        <span className="text-xs font-semibold text-primary ml-1">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through font-medium">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View
                      </Button>
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