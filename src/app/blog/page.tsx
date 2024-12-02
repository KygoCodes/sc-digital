import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';

export default function BlogPage() {
  return (
    <div>
      <Section background="blue">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Latest Articles
          </h1>
          <p className="text-xl text-center text-gray-200">
            Insights on Technology, SEO, and Digital Innovation
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8">
          <Card variant="hover" className="overflow-hidden">
            <article className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src="/images/seo-optimization.jpg" 
                  alt="SEO Optimization Strategies" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>March 15, 2024</span>
                  <span>SEO</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced SEO Strategies for 2024: A Technical Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover cutting-edge SEO techniques that will boost your website's visibility and improve search rankings in 2024.
                </p>
                <Link 
                  href="/blog/seo-strategies-2024" 
                  className="text-blue-900 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          </Card>
        </div>
      </Section>
    </div>
  );
} 