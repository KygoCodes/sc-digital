import Button from '@/components/Button'
import Section from '@/components/Section'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  "Website Optimization",
  "Technical SEO",
  "Keyword Research",
  "Content Strategy",
  "Link Building",
  "Analytics & Reporting"
]

const tiers = [
  {
    name: 'Essential SEO',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '$499',
    description: 'Perfect for small businesses looking to improve their online presence.',
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Google My Business Setup',
      'Monthly Performance Reports',
      'Basic Content Creation (2 Posts)',
      'Local SEO Setup'
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '$999',
    description: 'Comprehensive SEO solution for growing businesses.',
    features: [
      'Everything in Essential, plus:',
      'Advanced Technical SEO',
      'Weekly Performance Reports',
      'Premium Content Creation (4 Posts)',
      'Link Building Strategy',
      'Social Media Integration',
      'Competitor Analysis',
      'Priority Support'
    ],
    featured: true,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-[#0A1128]">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(25, 45, 100, 0.8) 0%, rgba(10, 17, 40, 0.8) 100%)',
              backgroundSize: '100% 100%'
            }}
          ></div>
        </div>
        <div className="container relative z-10 text-white max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Elevate Your Online Presence with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                SEO
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
              SouthernConnection helps businesses grow through strategic digital marketing and SEO solutions that deliver real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Get Free SEO Audit
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/80 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <Section background="white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600"> Elevate your online presence with responsive, user-friendly websites that captivate and convert.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> 
              </div>
              <h3 className="text-xl font-bold mb-4">Local SEO & GMB</h3>
              <p className="text-gray-600">Dominate local search results with optimized Google My Business profiles and local SEO strategies tailored to your business needs.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-600">Engaging blogs and service pages that convert visitors into customers while boosting your SEO rankings.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Analytics and Reporting</h3>
              <p className="text-gray-600">Track and analyze data to showcase growth and ensure transparency, using clear, detailed reporting to drive continuous improvement.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Why Choose Our SEO Services?</h2>
            <p className="text-gray-600 mb-8">
              We combine technical expertise with creative strategies to deliver measurable results for your business.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckIcon className="h-6 w-6 text-blue-900" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-5xl font-bold mb-4">200%</div>
                <div className="text-xl">Average Traffic Increase</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trusted By Leading Brands Section */}
      <div className="bg-[#0A1128] py-20 overflow-hidden">
        <div className="container mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Trusted By Leading Brands
          </h2>
        </div>
        <div className="relative">
          <div className="flex space-x-32 animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-32 items-center">
              <div className="w-40 h-40 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </div>
              <div className="w-40 h-40 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                  </svg>
                </div>
              </div>
              <div className="w-40 h-40 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full text-[#96BF48]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.9364 6.67619C21.8807 6.55649 21.7858 6.45961 21.6675 6.40163C21.5492 6.34365 21.4148 6.32825 21.2867 6.35777L18.7587 6.92037L16.8627 4.35197C16.8004 4.26784 16.7163 4.19995 16.6182 4.15478C16.5201 4.10961 16.4115 4.08867 16.3027 4.09397H7.69666C7.58791 4.08867 7.47929 4.10961 7.38119 4.15478C7.28309 4.19995 7.19902 4.26784 7.13666 4.35197L5.24066 6.92037L2.71266 6.35777C2.58437 6.32854 2.45006 6.34414 2.33181 6.40219C2.21356 6.46024 2.11861 6.55707 2.06286 6.67669C2.00711 6.79631 1.99438 6.93137 2.02666 7.05997L5.78666 19.8C5.82375 19.9468 5.90775 20.0762 6.02595 20.168C6.14415 20.2597 6.28965 20.3083 6.43866 20.306H17.5607C17.7097 20.3083 17.8552 20.2597 17.9734 20.168C18.0916 20.0762 18.1756 19.9468 18.2127 19.8L21.9727 7.05997C22.0053 6.93124 21.9926 6.79601 21.9364 6.67619ZM8.37066 5.69397H15.6287L16.9447 7.49397L7.05466 7.49997L8.37066 5.69397ZM16.9447 18.706H7.05466L3.93066 7.49997L20.0687 7.49397L16.9447 18.706Z"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-32 items-center">
              <div className="w-40 h-40 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </div>
              <div className="w-40 h-40 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                  </svg>
                </div>
              </div>
              <div className="w-40 h-40 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full text-[#96BF48]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.9364 6.67619C21.8807 6.55649 21.7858 6.45961 21.6675 6.40163C21.5492 6.34365 21.4148 6.32825 21.2867 6.35777L18.7587 6.92037L16.8627 4.35197C16.8004 4.26784 16.7163 4.19995 16.6182 4.15478C16.5201 4.10961 16.4115 4.08867 16.3027 4.09397H7.69666C7.58791 4.08867 7.47929 4.10961 7.38119 4.15478C7.28309 4.19995 7.19902 4.26784 7.13666 4.35197L5.24066 6.92037L2.71266 6.35777C2.58437 6.32854 2.45006 6.34414 2.33181 6.40219C2.21356 6.46024 2.11861 6.55707 2.06286 6.67669C2.00711 6.79631 1.99438 6.93137 2.02666 7.05997L5.78666 19.8C5.82375 19.9468 5.90775 20.0762 6.02595 20.168C6.14415 20.2597 6.28965 20.3083 6.43866 20.306H17.5607C17.7097 20.3083 17.8552 20.2597 17.9734 20.168C18.0916 20.0762 18.1756 19.9468 18.2127 19.8L21.9727 7.05997C22.0053 6.93124 21.9926 6.79601 21.9364 6.67619ZM8.37066 5.69397H15.6287L16.9447 7.49397L7.05466 7.49997L8.37066 5.69397ZM16.9447 18.706H7.05466L3.93066 7.49997L20.0687 7.49397L16.9447 18.706Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <Section background="white">
        <div className="relative isolate">
          <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-800 to-blue-900 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-2 mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect SEO package for your business needs
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                  tier.featured
                    ? ''
                    : tierIdx === 0
                      ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                      : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                  'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(tier.featured ? 'text-blue-400' : 'text-blue-900', 'text-xl font-semibold')}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-900',
                      'text-5xl font-semibold tracking-tight',
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                </p>
                <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                    'mt-8 space-y-3 text-sm/6 sm:mt-10',
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className={classNames(tier.featured ? 'text-blue-400' : 'text-blue-900', 'h-6 w-5 flex-none')} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? 'primary' : 'outline'}
                  className="mt-8 w-full sm:mt-10"
                >
                  Get started today
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="heading-2 mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your free SEO audit today and discover how we can help you reach more customers online.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
            Get Your Free SEO Audit
          </Button>
        </div>
      </Section>
    </div>
  )
}
