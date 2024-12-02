import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Social Media Marketing Strategies for B2B Companies | SC Digital',
  description: 'Discover effective social media tactics specifically designed for B2B marketing success.',
  openGraph: {
    title: 'Social Media Marketing Strategies for B2B Companies',
    description: 'Learn proven social media marketing strategies to enhance your B2B company\'s digital presence and lead generation.',
    type: 'article',
    publishedTime: '2024-03-03',
    authors: ['SC Digital'],
  },
};

export default function B2BSocialMediaPost() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Social Media Marketing Strategies for B2B Companies</h1>
      
      <div className="mb-6 text-gray-600">
        <time dateTime="2024-03-03">March 3, 2024</time> • 10 min read
      </div>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/images/social-media-b2b.jpg"
          alt="B2B Social Media Marketing"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          B2B social media marketing requires a unique approach compared to B2C strategies. 
          This guide explores effective tactics specifically designed for B2B companies to 
          maximize their social media presence and generate quality leads.
        </p>

        <h2 className="text-2xl font-semibold">1. LinkedIn Strategy Optimization</h2>
        <p>
          Maximize your presence on the premier B2B platform:
        </p>
        <ul>
          <li>Company page optimization</li>
          <li>Employee advocacy programs</li>
          <li>LinkedIn Groups engagement</li>
          <li>Thought leadership content</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Content Strategy for B2B</h2>
        <p>
          Create content that resonates with business decision-makers:
        </p>
        <ul>
          <li>Industry insights and analysis</li>
          <li>Case studies and success stories</li>
          <li>White papers and research reports</li>
          <li>Expert interviews and webinars</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Lead Generation Tactics</h2>
        <p>
          Convert social media engagement into leads:
        </p>
        <ul>
          <li>Gated content strategy</li>
          <li>Social media lead forms</li>
          <li>Retargeting campaigns</li>
          <li>Landing page optimization</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Platform-Specific Strategies</h2>
        <p>
          Optimize presence across different platforms:
        </p>
        <ul>
          <li>LinkedIn for professional networking</li>
          <li>Twitter for industry news and updates</li>
          <li>YouTube for product demonstrations</li>
          <li>Instagram for company culture</li>
        </ul>

        <h2 className="text-2xl font-semibold">5. Paid Social Advertising</h2>
        <p>
          Implement effective paid strategies:
        </p>
        <ul>
          <li>LinkedIn Ads targeting</li>
          <li>Remarketing campaigns</li>
          <li>Account-based marketing</li>
          <li>Conversion tracking</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Employee Advocacy</h2>
        <p>
          Leverage your internal network:
        </p>
        <ul>
          <li>Employee content sharing programs</li>
          <li>Personal brand development</li>
          <li>Social selling training</li>
          <li>Engagement guidelines</li>
        </ul>

        <h2 className="text-2xl font-semibold">7. Analytics and Measurement</h2>
        <p>
          Track and optimize performance:
        </p>
        <ul>
          <li>KPI definition and tracking</li>
          <li>ROI measurement</li>
          <li>Engagement metrics analysis</li>
          <li>Lead quality assessment</li>
        </ul>

        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>
          Success in B2B social media marketing requires a strategic approach focused on 
          building relationships, establishing authority, and generating quality leads. 
          By implementing these strategies consistently and measuring their effectiveness, 
          B2B companies can create a powerful social media presence that drives business growth.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4">Strategy Implementation Steps</h3>
          <ul>
            <li>Audit current social media presence</li>
            <li>Develop platform-specific strategies</li>
            <li>Create content calendar</li>
            <li>Implement employee advocacy program</li>
            <li>Monitor and optimize performance</li>
          </ul>
        </div>
      </div>
    </article>
  );
} 