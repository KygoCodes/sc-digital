import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { blogPosts } from '@/data/blogPosts';

const POSTS_PER_PAGE = 6;

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1;
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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
          {currentPosts.map((post) => (
            <Card key={post.id} variant="hover" className="overflow-hidden">
              <article className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>{post.date}</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-blue-900 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Previous
            </Link>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/blog?page=${pageNum}`}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                pageNum === currentPage
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Next
            </Link>
          )}
        </div>
      </Section>
    </div>
  );
} 