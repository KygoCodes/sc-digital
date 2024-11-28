import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SouthernConnection - Digital Marketing & SEO Services',
  description: 'Premier digital marketing and SEO agency helping businesses grow through strategic solutions that deliver real results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">SouthernConnection</h3>
                <p className="text-gray-400">Leading digital marketing agency with expertise in SEO, content creation, and online growth strategies.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                  <li><a href="/case-studies" className="text-gray-400 hover:text-white">Case Studies</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/services/seo" className="text-gray-400 hover:text-white">Search Engine Optimization</a></li>
                  <li><a href="/services/web-development" className="text-gray-400 hover:text-white">Web Development</a></li>
                  <li><a href="/services/content" className="text-gray-400 hover:text-white">Content Creation</a></li>
                  <li><a href="/services/analytics" className="text-gray-400 hover:text-white">Analytics & Reporting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Digital Avenue</li>
                  <li>Suite 500</li>
                  <li>Atlanta, GA 30301</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: hello@southernconnection.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} SouthernConnection. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
