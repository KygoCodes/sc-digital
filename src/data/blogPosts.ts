export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
    slug: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Advanced SEO Strategies for 2024: A Technical Guide",
      excerpt: "Discover cutting-edge SEO techniques that will boost your website's visibility and improve search rankings in 2024.",
      date: "March 15, 2024",
      category: "SEO",
      imageUrl: "/images/seo-optimization.jpg",
      slug: "seo-strategies-2024"
    },
    {
      id: "2",
      title: "The Impact of AI on Digital Marketing in 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for your business.",
      date: "March 12, 2024",
      category: "Digital Marketing",
      imageUrl: "/images/ai-marketing.jpg",
      slug: "ai-impact-digital-marketing"
    },
    {
      id: "3",
      title: "Local SEO: Dominating Your Geographic Market",
      excerpt: "Learn proven strategies to improve your local search rankings and attract more customers from your target area.",
      date: "March 10, 2024",
      category: "Local SEO",
      imageUrl: "/images/local-seo.jpg",
      slug: "local-seo-guide"
    },
    {
      id: "4",
      title: "Content Marketing Trends That Will Define 2024",
      excerpt: "Stay ahead of the curve with these emerging content marketing trends that are shaping the digital landscape.",
      date: "March 8, 2024",
      category: "Content Marketing",
      imageUrl: "/images/content-marketing.jpg",
      slug: "content-marketing-trends-2024"
    },
    {
      id: "5",
      title: "Mastering Technical SEO: A Complete Guide",
      excerpt: "Deep dive into technical SEO aspects that can make or break your website's search engine performance.",
      date: "March 5, 2024",
      category: "Technical SEO",
      imageUrl: "/images/technical-seo.jpg",
      slug: "mastering-technical-seo"
    },
    {
      id: "6",
      title: "Social Media Marketing Strategies for B2B Companies",
      excerpt: "Discover effective social media tactics specifically designed for B2B marketing success.",
      date: "March 3, 2024",
      category: "Social Media",
      imageUrl: "/images/social-media-b2b.jpg",
      slug: "b2b-social-media-strategies"
    },
    {
      id: "7",
      title: "E-commerce SEO: Optimizing for Online Sales",
      excerpt: "Learn specialized SEO techniques to increase visibility and drive more sales for your e-commerce website.",
      date: "February 28, 2024",
      category: "E-commerce",
      imageUrl: "/images/ecommerce-seo.jpg",
      slug: "ecommerce-seo-guide"
    },
    {
      id: "8",
      title: "Mobile-First Indexing: What You Need to Know",
      excerpt: "Understanding mobile-first indexing and how to optimize your website for mobile search success.",
      date: "February 25, 2024",
      category: "Mobile SEO",
      imageUrl: "/images/mobile-first.jpg",
      slug: "mobile-first-indexing"
    },
    {
      id: "9",
      title: "Video SEO: Maximizing Your Video Content Reach",
      excerpt: "Master the art of optimizing video content for better visibility in search results and social media.",
      date: "February 22, 2024",
      category: "Video SEO",
      imageUrl: "/images/video-seo.jpg",
      slug: "video-seo-guide"
    },
    {
      id: "10",
      title: "Link Building Strategies That Actually Work",
      excerpt: "Explore effective and ethical link building techniques to improve your website's authority and rankings.",
      date: "February 20, 2024",
      category: "Link Building",
      imageUrl: "/images/link-building.jpg",
      slug: "effective-link-building"
    },
    {
      id: "11",
      title: "Analytics and Data-Driven SEO Decisions",
      excerpt: "Learn how to use analytics data to make informed decisions about your SEO strategy and improvements.",
      date: "February 18, 2024",
      category: "Analytics",
      imageUrl: "/images/analytics-seo.jpg",
      slug: "data-driven-seo"
    }
  ];