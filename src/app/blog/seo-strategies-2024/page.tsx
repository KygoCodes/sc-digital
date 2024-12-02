import Section from '@/components/Section';
import Card from '@/components/Card';

export default function BlogPost() {
  return (
    <article>
      <Section background="blue">
        <div className="container max-w-4xl">
          <div className="mb-6 text-gray-200">
            <span className="mr-4">March 15, 2024</span>
            <span>SEO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Advanced SEO Strategies for 2024: A Technical Guide
          </h1>
          <div className="flex items-center gap-4">
            <img 
              src="/images/author-avatar.jpg" 
              alt="Author" 
              className="w-12 h-12 rounded-full"
            />
            <div className="text-white">
              <div className="font-semibold">John Smith</div>
              <div className="text-gray-200">SEO Specialist</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container max-w-4xl">
          <div className="space-y-6 text-gray-700">
            <p className="lead text-xl text-gray-600 mb-8">
              As search engines continue to evolve, staying ahead in the SEO game requires a deep understanding of both technical optimization and user experience. In this comprehensive guide, we'll explore the most effective SEO strategies for 2024.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Core Web Vitals Optimization</h2>
            <p>
              Google's Core Web Vitals have become increasingly important for SEO success. Focus on these key metrics:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Largest Contentful Paint (LCP): Aim for under 2.5 seconds</li>
              <li>First Input Delay (FID): Keep it below 100ms</li>
              <li>Cumulative Layout Shift (CLS): Maintain under 0.1</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. AI-Driven Content Optimization</h2>
            <p>
              With the rise of AI in search algorithms, content optimization has evolved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Focus on comprehensive topic coverage</li>
              <li>Implement semantic SEO principles</li>
              <li>Use natural language processing tools</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. Mobile-First Indexing</h2>
            <p>
              Mobile optimization is no longer optional. Ensure your website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Has responsive design</li>
              <li>Loads quickly on mobile devices</li>
              <li>Features mobile-friendly navigation</li>
            </ul>

            <Card className="my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
              <p className="mb-6">Subscribe to our newsletter for weekly SEO tips and updates.</p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </article>
  );
} 