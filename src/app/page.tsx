"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, User, Heart, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown, Menu, X } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: '01',
    hours: '12',
    minutes: '00',
    seconds: '00'
  });
  const [email, setEmail] = useState('');
  const slides = [
    {
      title: "Super Cool Anime designs you've never seen elsewhere!",
      description: "Check out crazy AI generated Anime designs you can print on your items!",
      cta: "Shop Anime Style"
    },
    {
      title: "Discover unique vintage-inspired artwork",
      description: "Explore our collection of retro and nostalgic designs",
      cta: "Browse Vintage"
    },
    {
      title: "Create your own custom designs",
      description: "Turn your imagination into reality with our design tools",
      cta: "Start Designing"
    }
  ];

  const megaMenuCategories = [
    {
      name: "Clothings",
      subcategories: ["T-Shirts", "Hoodies", "Long Sleeve T-Shirts", "Crewneck Sweatshirts", "Tank Tops", "Leggings"]
    },
    {
      name: "Accessories",
      subcategories: ["Phone cases", "Tote Bags", "Backpacks", "Fanny packs", "Hats", "Socks", "Flip Flops"]
    },
    {
      name: "Home & Living",
      subcategories: ["Mugs", "Wall art & Framed Posters", "Towels", "Water Bottles & Tumblers", "Pillows & Pillow Cases", "Aprons", "Coasters", "Magnets"]
    },
    {
      name: "Kids & Babies",
      subcategories: ["Kids T-Shirts", "Kids Hoodies", "Baby T-Shirts", "Baby Bodysuit"]
    },
    {
      name: "Stationary",
      subcategories: ["Notebooks", "Stickers", "Cards", "Mouse Pads", "Business Cards", "Wall Calendars", "Posters", "Puzzles"]
    },
    {
      name: "Pets",
      subcategories: ["Pet Bowls", "Pet Bandanas", "Pet Leash", "Pet Collar", "Pet Collar & Leash"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuOpen && !(event.target as Element).closest('.mega-menu-container')) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [megaMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (megaMenuOpen) setMegaMenuOpen(false);
  };

  const toggleMegaMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMegaMenuOpen(!megaMenuOpen);
  };

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setTime(targetDate.getTime() + (1.5 * 24 * 60 * 60 * 1000));

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // You can implement a client-side solution here
      // For example, using a third-party service like EmailJS or a form service
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      alert('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <header className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 ${megaMenuOpen ? 'bg-white' : ''}`}>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="relative h-6 w-24 md:h-8 md:w-32">
            <Image
              src={megaMenuOpen ? "https://i.ibb.co/rm27hJ2/DAIY-logo-B-W.png" : "https://i.ibb.co/7rqR3Zv/Dai-Y-white-logo.png"}
              alt="D.ai.Y Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <nav className="hidden md:block">
            <ul className={`flex gap-4 md:gap-6 ${megaMenuOpen ? 'text-black' : 'text-white'}`}>
              <li>
                <button
                  className="flex items-center gap-1 text-sm md:text-base"
                  onClick={toggleMegaMenu}
                >
                  Art Geneissance
                  <ChevronDown className={`h-3 w-3 md:h-4 md:w-4 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
                </button>
              </li>
              <li className="text-sm md:text-base">Shop</li>
            <li  className="text-md md:text-base">
              <Link href="/sell-your-art" className=" text-white">
              Sell Your Art
            </Link></li>
            <li  className="text-md md:text-base">
              <Link href="/how-it-works" className="text-white">
              How It Works
           </Link></li>
           <li  className="text-md md:text-base">
              <Link href="/editor" className="text-white">
              Editor
           </Link></li>
          
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className={`border-2 border-white px-2 py-1 md:px-4 md:py-2 pr-8 md:pr-10 text-sm ${
                megaMenuOpen ? 'bg-gray-100 text-black placeholder-gray-500' : 'bg-transparent text-white placeholder-white'
              }`}
            />
            <Search className={`absolute right-2 md:right-3 top-1/2 h-3 w-3 md:h-4 md:w-4 -translate-y-1/2 ${megaMenuOpen ? 'text-gray-500' : 'text-white'}`} />
          </div>
          <button className="p-1 md:p-2 hidden md:block text-white">
          <SignedOut >
          <SignInButton/>
          </SignedOut>
          <SignedIn>
            
            <UserButton />
          </SignedIn>
     
          </button>
          <button className="p-1 md:p-2 hidden md:block">
            <Heart className={`h-4 w-4 md:h-5 md:w-5 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
          </button>
          <button className="p-1 md:p-2">
            <ShoppingCart className={`h-4 w-4 md:h-5 md:w-5 ${megaMenuOpen ? 'text-black' : 'text-white'}`} />
          </button>
          <button className="p-1 md:p-2 md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <h1 className="text-xl font-bold">D.ai.Y</h1>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                >
                  Art Geneissance
                  <ChevronDown className={`h-4 w-4 transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {megaMenuOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {megaMenuCategories.map((category) => (
                      <div key={category.name}>
                        <h3 className="font-bold text-gray-900">{category.name}</h3>
                        <ul className="ml-4 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory}>
                              <Link href="#" className="text-gray-600 hover:text-black">
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li><Link href="#" className="block">Shop</Link></li>
              <li><Link href="#" className="block">Search</Link></li>
              <li  className="text-md md:text-base">
              <Link href="/sell-your-art" className=" block">
              Sell Your Art
            </Link></li>
            <li  className="text-md md:text-base">
              <Link href="/how-it-works" className=" block">
              How It Works
           </Link></li>
           <li  className="text-md md:text-base">
              <Link href="/editor" className=" block">
              Editor
           </Link></li>
           <SignedOut>
          <SignInButton/>
          </SignedOut>
          <SignedIn>
            
            <UserButton />
          </SignedIn>
           
            </ul>
          </nav>
        </div>
      )}

      {/* Hero/Coming Soon Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Main Content */}
        <div className="relative container mx-auto px-4 text-center z-10 mt-20">
          {/* Coming Soon Text */}
          <div className="space-y-6 mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-200 tracking-tight">
              Coming Soon!
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The future of AI-powered design is almost here.
              <br />
              Create, customize, and sell your unique artwork.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* AI-Powered Design Card */}
            <div className="bg-[#111111] p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Design</h3>
              <p className="text-gray-500">Create unique designs with our advanced AI tools</p>
            </div>

            {/* Instant Publishing Card */}
            <div className="bg-[#111111] p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Publishing</h3>
              <p className="text-gray-500">Go from concept to store in minutes</p>
            </div>

            {/* Start Earning Card */}
            <div className="bg-[#111111] p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Earning</h3>
              <p className="text-gray-500">Turn your creativity into profit</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-16">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item) => (
              <div key={item.label} className="bg-[#111111] px-6 py-4 rounded-xl min-w-[100px]">
                <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Email Signup - Modified to use client-side handling */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-[#111111] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700 transition-colors"
              >
                Notify Me
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
      </section>

      {/* Keep your other sections but hide them initially */}
      <div className="hidden">
        {/* Your existing sections */}
      </div>
    </div>
  )
}

