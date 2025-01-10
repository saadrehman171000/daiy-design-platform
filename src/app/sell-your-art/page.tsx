import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, User } from 'lucide-react'
import HamburgerMenu from '../components/HamburgerMenu'
import { Footer } from "../components/Footer"

export default function SellYourArt() {
  return (
    <div className="max-h-screen  text-[#000000] font-bold ">
   <HamburgerMenu />
      <main className="h-full">
        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[400px] md:h-[500px]  z-[1]">
          <Image
            src="https://i.ibb.co/DL863Nx/Sell-your-art-banner.jpg"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 max-w-4xl mx-auto z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
              Prmopt.. Click.. Earn!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-8">
              Dai.Y's New Editing tool, powered with AI, makes creating your product range as easy as 1, 2, 3.
            </p>
            <button className="bg-[#00C4CC] text-white font-bold px-4 sm:px-6 py-2 rounded-md w-fit text-base sm:text-lg hover:bg-[#00B3BB] transition-colors">
              Start Selling
            </button>
          </div>
        </section>

        {/* Introduction */}
        <div className="v-3xl mx-auto  sm:mb-20 text-center bg-[#F5F5F5] ">
          <p className="text-base sm:text-lg mb-2 px-5 py-5">
            Ready to showcase your AI-enhanced art to the world? Leverage our cutting-edge editing tool to create, display, and sell your innovative artworks on high-quality products designed to impress.
          </p>
          <p className="text-base sm:text-lg px-5 py-5">
            Become D.ai.Y's Art Genesis and turn your artistic passion into profit. With D.ai.Y, the power to create and earn is in your hands. Start your journey with us and let your designs create cash flow while you sleep!
          </p>
        </div>

        {/* Why Sell With Us */}
        <div className="max-w-4xl mx-auto px-4 mb-12 py-12 sm:mb-20 ">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-16 text-center py-6">Why Sell With Us?</h2>
          
          <div className="space-y-12 sm:space-y-20">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 sm:gap-8 md:gap-16`}
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 flex items-center justify-center bg-black rounded-full overflow-hidden">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="w-[140px] h-[140px]  object-contain gg"

                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-[#00C4CC] mb-2">
                    {index + 1}. {feature.title}
                  </h3>
                  <p className="text-[#000000] text-sm sm:text-base">{feature.description}</p>
                  {feature.links && (
                    <div className="mt-2 space-x-4">
                      {feature.links.map(link => (
                        <span key={link} className="text-[#00C4CC] text-sm sm:text-base">{link}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto px-4 mb-12 sm:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-center">How It Works</h2>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="font-medium mb-2">Sign Up and Set Up</h3>
              <ul className="list-disc pl-5 space-y-1 text-[#000000] text-sm sm:text-base">
                <li>Register for free and create your artist profile.</li>
                <li>Upload your artwork and select the products you want to sell.</li>
                <li>Customize Your Shop</li>
                <li>Personalize your brand and product offerings to reflect your artistic style.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Start Selling</h3>
              <ul className="list-disc pl-5 space-y-1 text-[#000000] text-sm sm:text-base">
                <li>Promote your D.ai.Y shop on social media and other platforms.</li>
                <li>Engage with customers and followers to grow your presence.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Track Your Success</h3>
              <ul className="list-disc pl-5 space-y-1 text-[#000000] text-sm sm:text-base">
                <li>Use our tools to monitor sales, customer interactions, and payouts.</li>
                <li>Gain insights from performance metrics to optimize your offerings.</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

const features = [
  {
    title: "Creative Freedom",
    description: "Upload your AI-enhanced design tool to enhance your original artwork or generate new pieces directly on our platform.",
    icon: "https://i.ibb.co/GWWfnWb/1-Creative-Freedom-1.png"
  },
  {
    title: "Broad Product Range",
    description: "Apply your art to products ranging from apparel and accessories to home decor and stationery. Our extensive product line means more opportunities for your art to shine.",
    icon: "https://i.ibb.co/PWfzMMP/2-Broad-Product-Range-1.png",
    links: ["Browse Products"]
  },
  {
    title: "Easy Setup",
    description: "Setting up your shop is free and easy. Sign up, upload your art, choose the products, and start selling.",
    icon: "https://i.ibb.co/FX4X20R/3-Easy-Setup-1.png",
    links: ["Quick Setup", "No Hidden Costs"]
  },
  {
    title: "Get paid",
    description: "Earn a commission for each sale and get paid regularly.",
    icon: "https://i.ibb.co/vZQJ4d1/4-Get-Paid-1.png",
    links: ["Earn Competitive Commission", "Transparent Transaction"]
  },
  {
    title: "Global Reach",
    description: "Our AI-global platform means your art can be purchased by customers around the world, increasing your exposure and opportunities to sell.",
    icon: "https://i.ibb.co/pZNYrBP/5-Global-Reach-1.png",
    links: ["Worldwide Audience"]
  },
  {
    title: "Support and Community",
    description: "We provide dedicated support to help you at every step—from setting up your shop to marketing your products.",
    icon: "https://i.ibb.co/5KcWNFf/6-Support-and-Community.png",
    links: ["Artist Support", "Community Connection"]
  }
]
