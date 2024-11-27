import Image from 'next/image'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { CheckIcon } from '@heroicons/react/20/solid'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Search Engine Optimization",
    description: "Boost your website's visibility with our comprehensive SEO strategies tailored to your business needs.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Local SEO & GMB",
    description: "Dominate local search results with optimized Google My Business profiles and local SEO strategies.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Content Creation",
    description: "Engaging blogs and service pages that convert visitors into customers while boosting your SEO rankings.",
  },
]

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

      {/* Services Section */}
      <Section background="gray">
        <h2 className="heading-2 text-center mb-16">Our SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} variant="hover">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
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

      {/* Trust Indicators Section */}
      <Section background="gray">
        <h2 className="heading-2 text-center mb-16">Trusted By Leading Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          <div className="relative w-32 h-12">
            <Image
              src="/vercel.svg"
              alt="Client Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-12">
            <Image
              src="/vercel.svg"
              alt="Client Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-12">
            <Image
              src="/vercel.svg"
              alt="Client Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-12">
            <Image
              src="/vercel.svg"
              alt="Client Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

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
