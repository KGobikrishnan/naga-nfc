import nagaProfileImg from '../assets/naga-profile.jpeg';

export const vCardData = {
  profile: {
    name: "Naga Vishnu N",
    verified: true,
    title: "Founder & CEO",
    company: "Navi Promotions",
    tagline: "We Build Brands. We Grow Businesses.",
    subTagline: "Digital Marketing | Branding | Development",
    avatar: nagaProfileImg,
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    companyLogo: "https://api.iconify.design/lucide:sparkles.svg?color=%236366f1",
  },

  quickActions: {
    phone: "+918189989960",
    phoneSecondary: "+918189989970",
    whatsapp: "918189989960",
    email: "hello@navipromotions.com",
    website: "https://www.navipromotions.com",
    mapsUrl: "https://maps.google.com/?q=Navi+Promotions+Sivakasi",
    directionsUrl: "https://maps.google.com/maps/dir/?api=1&destination=Sivakasi+Tamil+Nadu",
  },
  about: {
    description:
      "I’m the Founder & CEO of Navi Promotions and Cumbum Valley. As an SEO Expert and Business Development Strategist, I focus on helping businesses grow through digital strategies, systematic planning, and result-driven marketing.",
    extendedDescription:
      "I specialize in creating practical growth systems that help businesses build stronger brands, reach the right audience, and scale sustainably.",
  },
  socialLinks: [
    { name: "Instagram", url: "https://instagram.com", icon: "instagram", color: "#E1306C" },
    { name: "Facebook", url: "https://facebook.com", icon: "facebook", color: "#1877F2" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", color: "#0A66C2" },
    { name: "Twitter", url: "https://x.com", icon: "twitter", color: "#000000" },
    { name: "YouTube", url: "https://youtube.com", icon: "youtube", color: "#FF0000" },
    { name: "Pinterest", url: "https://pinterest.com", icon: "pinterest", color: "#E60023" },
  ],
  products: [
    {
      id: "p1",
      title: "Logo Design",
      startingPrice: "₹1,500",
      priceSub: "",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
      description: "Iconic identity kits with guidelines, vectors, and stationery.",
    },
    {
      id: "p2",
      title: "Social Media Post Design",
      startingPrice: "₹500",
      priceSub: "/ Post",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      description: "Scroll-stopping carousels, reels covers, and creatives.",
    },
    {
      id: "p3",
      title: "Website Development",
      startingPrice: "₹15,000",
      priceSub: "",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
      description: "Ultra-fast modern landing pages and corporate portals.",
    },
    {
      id: "p4",
      title: "E-Commerce Website",
      startingPrice: "₹25,000",
      priceSub: "",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
      description: "Complete Shopify / custom cart with payment gateway setup.",
    },
    {
      id: "p5",
      title: "NFC Smart Business Cards",
      startingPrice: "₹999",
      priceSub: "/ Card",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      description: "Next-gen matte NFC metal and PVC digital business cards.",
    },
  ],
  services: [
    {
      id: "s1",
      title: "Digital Marketing",
      description: "Performance ad campaigns & funnel growth.",
      icon: "Megaphone",
    },
    {
      id: "s2",
      title: "Web Development",
      description: "Modern, responsive & mobile-first sites.",
      icon: "Laptop",
    },
    {
      id: "s3",
      title: "Branding & Design",
      description: "Visual identity, print & corporate branding.",
      icon: "Palette",
    },
    {
      id: "s4",
      title: "SEO & Analytics",
      description: "Top Google ranks & data intelligence.",
      icon: "TrendingUp",
    },
    {
      id: "s5",
      title: "Social Media Management",
      description: "Community engagement & viral content.",
      icon: "Users",
    },
  ],
  categories: [
    { id: "c1", name: "Web Development", icon: "Laptop" },
    { id: "c2", name: "Digital Marketing", icon: "Rocket" },
    { id: "c3", name: "Branding & Design", icon: "Palette" },
    { id: "c4", name: "SEO & Analytics", icon: "Search" },
    { id: "c5", name: "Content Creation", icon: "Camera" },
  ],
  gallery: [
    {
      id: "g1",
      title: "Creative Strategy Room",
      category: "Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g2",
      title: "Design System Showcase",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g3",
      title: "Annual Tech Summit",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g4",
      title: "Core Leadership Team",
      category: "Team",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g5",
      title: "SaaS Launch Camp",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ],
  paymentMethods: [
    { name: "UPI", badge: "UPI", icon: "Smartphone" },
    { name: "Google Pay", badge: "GPay", icon: "CreditCard" },
    { name: "PhonePe", badge: "PhonePe", icon: "Smartphone" },
    { name: "Paytm", badge: "Paytm", icon: "Wallet" },
    { name: "Card", badge: "Credit/Debit", icon: "CreditCard" },
    { name: "Bank Transfer", badge: "IMPS/NEFT", icon: "Building2" },
  ],
  bankDetails: {
    accountName: "Navi Promotions",
    accountNumber: "987654321098",
    ifsc: "HDFC0001234",
    bank: "HDFC Bank, Sivakasi Branch",
    upiId: "navipromotions@okaxis",
  },
  location: {
    companyName: "Navi Promotions",
    addressLine1: "Kannabiran Nagar, Ramasamy Puram",
    addressLine2: "Meenampatti, Sivakasi, Tamil Nadu 626189",
    city: "Sivakasi",
    state: "Tamil Nadu",
    pinCode: "626189",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.877855660856!2d77.7972!3d9.4533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjcnMTEuOSJOIDc3wrA0Nyc0OS45IkU!5e0!3m2!1sen!2sin!4v1620000000000",
  },
  testimonials: [
    {
      id: "t1",
      author: "Ramesh Kumar",
      role: "Business Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote:
        "Navi Promotions transformed our online presence completely. Their team is creative, professional and highly supportive.",
    },
    {
      id: "t2",
      author: "Priya Sundaram",
      role: "Founder, Luxe Jewels",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote:
        "Our e-commerce store sales shot up by 300% within 45 days after Vishnu and his team revamped our campaign funnels!",
    },
    {
      id: "t3",
      author: "Arun Pandian",
      role: "Managing Director, Apex Tech",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote:
        "The best digital agency in Tamil Nadu. The tap-to-share NFC card and website integration is pure class.",
    },
  ],
  businessDetails: [
    { label: "Established", value: "2021" },
    { label: "Business Type", value: "Digital Marketing" },
    { label: "GST Number", value: "33ABCDE1231F1ZS" },
    { label: "Industry", value: "Marketing & IT Services" },
  ],
  faqs: [
    {
      question: "How do I order custom NFC Business Cards?",
      answer: "Click the WhatsApp or Call button to send us your logo and details. We print and deliver across India within 3-5 days.",
    },
    {
      question: "What digital marketing services do you specialize in?",
      answer: "We specialize in Meta ads, Google ads, SEO ranking, social branding, web development, and local business digital dominance.",
    },
    {
      question: "Can I customize the information on this V-Card?",
      answer: "Yes, every section is modular and customizable dynamically with our client management portal.",
    },
  ],
};
