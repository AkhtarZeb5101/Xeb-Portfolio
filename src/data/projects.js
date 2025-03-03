import metricspace from '../assets/images/metricspace.png';
import shopique from '../assets/images/shopique.png';
import skinscribe from '../assets/images/skinscribe.png';
import gadgety from '../assets/images/gadgety.png';

export const projects = [
  {
    title: "MetricSpace",
    description: "A powerful business dashboard for streamlined management & data analysis",
    features: [
      "Collapsible Sidebar w/ Theme Support",
      "Profile Management w/ Instant Updates",
      "Real-time Inventory Stats & Smart Notifications",
      "Financial Reports w/ Charts & Insights",
      "Advanced Product Search & Customer Management",
    ],
    tech: ["React", "React Hooks", "React Router", "Context API", "Axios", "Tailwind CSS", "Chart.js", "PropTypes"],
    image: metricspace,
    // github: "https://github.com/nne-nna/DashBoard",
    demo: "https://metricspace.vercel.app/"
  },
  {
    title: "Shopique",
    description: "A sleek and user-friendly e-commerce website for ultimate shopping experience",
    features: [
      "Responsive design across devices",
      "Dynamic product gallery",
      "Real-time cart updates",
      "Multiple payment options",
      "Order tracking",
    ],
    tech: ["React", "Tailwind CSS", "Context API", "Stripe", "Razorpay"],
    image: shopique,
    // github: "https://github.com/nne-nna/shopique",
    demo: "https://shopiquee.vercel.app/"
  },
  {
    title: "SkinScribe",
    description: "A modern skincare blog website with seamless user experience",
    features: [
      "Fully responsive design",
      "Engaging animations",
      "Dynamic Content Management",
      "Optimized Performance",
      "Interactive Contact Form"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Firebase"],
    image: skinscribe,
    // github: "https://github.com/nne-nna/skincare-blogsite",
    demo: "https://skinscribe.vercel.app/"
  },
  {
    title: "Gadgety",
    description: "A tech store for exploring and purchasing the latest gadgets",
    features: [
      "Home & Search Feature",
      "Product Details & Reviews",
      "Easy Checkout",
      "Responsive Design",
      "Wishlist & Favorites"
    ],
    tech: ["React", "Tailwind CSS", "Firebase", "Context API"],
    image: gadgety,
    // github: "https://github.com/nne-nna/TechShop",
    demo: "https://gadgety.vercel.app/"
  }
];
