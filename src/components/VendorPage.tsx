import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Calendar, Users, ShoppingBag, MessageCircle, ExternalLink, Shield, Award, Clock, Globe, Phone, Mail, Building, CheckCircle, TrendingUp, Target } from "lucide-react";
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
    subscriptionTier: "Enterprise",
    businessType: "Certified Business",
    yearsInBusiness: 8,
    teamSize: "25-50",
    businessHours: "Mon-Fri 9AM-6PM PST",
    languages: ["English", "Spanish", "French"],
    verificationStatus: "Verified Seller",
    description: "Premium technology solutions and innovative gadgets for modern professionals. We specialize in cutting-edge electronics and smart devices with over 8 years of industry expertise.",
    businessInfo: {
      companyName: "TechVendor Pro LLC",
      taxId: "Verified Business Entity",
      businessAddress: "123 Innovation Drive, San Francisco, CA 94107",
      phone: "+1 (555) 123-4567",
      email: "hello@techvendorpro.com",
      website: "www.techvendorpro.com"
    },
    certifications: [
      "ISO 9001 Certified",
      "CE Marking Compliance",
      "FCC Authorized",
      "RoHS Compliant"
    ],
    achievements: [
      "Top Seller 2023",
      "Customer Choice Award",
      "Innovation Excellence",
      "Quality Assurance Leader"
    ],
    policies: {
      shipping: "Free shipping on orders over $50 worldwide",
      returns: "30-day hassle-free return policy",
      warranty: "1-year manufacturer warranty + extended support"
    },
    stats: {
      averageShippingTime: "2-3 days",
      returnRate: "< 2%",
      customerSatisfaction: "98.5%",
      repeatCustomers: "75%"
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

  const getSubscriptionBadge = () => {
    const tier = vendorData.subscriptionTier;
    const badgeConfig = {
      "Enterprise": { 
        color: "bg-gradient-to-r from-purple-600 to-purple-800 text-white", 
        icon: <Award className="w-4 h-4" />,
        label: "Enterprise Partner"
      },
      "Premium": { 
        color: "bg-gradient-to-r from-amber-500 to-amber-700 text-white", 
        icon: <Star className="w-4 h-4" />,
        label: "Premium Seller"
      },
      "Standard": { 
        color: "bg-gradient-to-r from-blue-500 to-blue-700 text-white", 
        icon: <CheckCircle className="w-4 h-4" />,
        label: "Verified Seller"
      }
    };
    
    const config = badgeConfig[tier] || badgeConfig.Standard;
    
    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-elegant ${config.color}`}>
        {config.icon}
        {config.label}
      </div>
    );
  };

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
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h1 className="text-4xl font-bold text-foreground tracking-tight">{vendorData.name}</h1>
                        {getSubscriptionBadge()}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1 bg-primary-lighter px-3 py-1 rounded-full">
                          {renderStars(vendorData.rating)}
                          <span className="ml-2 text-sm font-semibold text-primary">{vendorData.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">({vendorData.totalReviews} reviews)</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                          <Shield className="w-3 h-3 mr-1" />
                          {vendorData.verificationStatus}
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                          <Building className="w-3 h-3 mr-1" />
                          {vendorData.businessType}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">{vendorData.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">Member since {vendorData.memberSince} • {vendorData.yearsInBusiness} years in business</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">Team size: {vendorData.teamSize} employees</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">{vendorData.businessHours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">Languages: {vendorData.languages.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">{vendorData.stats.customerSatisfaction} satisfaction rate</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                      {vendorData.description}
                    </p>
                    
                    {/* Achievements & Certifications */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Achievements</h3>
                        <div className="flex flex-wrap gap-2">
                          {vendorData.achievements.map((achievement, index) => (
                            <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800 border-0 text-xs">
                              <Award className="w-3 h-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                          {vendorData.certifications.map((cert, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary-lighter text-primary border-0 text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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

      {/* Enhanced Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-primary-lighter rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{vendorData.totalProducts}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Products</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-primary-lighter rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{vendorData.totalSales}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Customers</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-primary-lighter rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{vendorData.responseTime}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Response</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-primary-lighter rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{vendorData.stats.averageShippingTime}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Shipping</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-primary-lighter rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{vendorData.stats.repeatCustomers}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Repeat Rate</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-primary-lighter rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-foreground mb-1">{vendorData.stats.customerSatisfaction}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Business Information & Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">About This Store</h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-6">{vendorData.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Business Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Company:</span>
                      <p className="text-muted-foreground">{vendorData.businessInfo.companyName}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Business Entity:</span>
                      <p className="text-muted-foreground">{vendorData.businessInfo.taxId}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="font-semibold text-foreground">Address:</span>
                      <p className="text-muted-foreground">{vendorData.businessInfo.businessAddress}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Electronics</Badge>
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Smart Devices</Badge>
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Accessories</Badge>
                  <Badge variant="secondary" className="bg-primary-lighter text-primary border-0 px-3 py-1">Innovation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-lighter rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">Phone</div>
                    <div className="text-sm text-muted-foreground">{vendorData.businessInfo.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary-lighter rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">Email</div>
                    <div className="text-sm text-muted-foreground">{vendorData.businessInfo.email}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary-lighter rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">Website</div>
                    <div className="text-sm text-muted-foreground">{vendorData.businessInfo.website}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
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
                    <Shield className="w-4 h-4 text-primary" />
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