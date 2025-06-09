"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Globe } from "lucide-react"

export default function TerraScanLanding() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12 bg-black">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <SoilIcon className="w-10 h-10 text-green-500" />
          </div>
          <div className="text-white">
            <div className="font-bold text-lg leading-tight">Terra</div>
            <div className="font-bold text-lg leading-tight">Scan</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("technology")}
            className="text-white hover:text-green-400 transition-colors cursor-pointer font-medium"
          >
            Technology
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-white hover:text-green-400 transition-colors cursor-pointer font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-white hover:text-green-400 transition-colors cursor-pointer font-medium"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-white hover:text-green-400 transition-colors cursor-pointer font-medium"
          >
            Partners
          </button>
        </nav>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium">
          Get started
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-12 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            We <span className="text-purple-500">analyze</span> 🌱<br />
            soil composition
            <br />
            with <span className="text-purple-500">AI</span> precision
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Advanced machine learning technology that scans and identifies soil types for optimal agricultural planning
          </p>
          <Button
            onClick={() => scrollToSection("technology")}
            className="mt-8 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-3 rounded-full cursor-pointer"
          >
            Get started
          </Button>
        </div>

        {/* Decorative Soil Icons */}
        <div className="absolute top-20 right-20 w-16 h-16 opacity-20">
          <SoilIcon className="w-full h-full text-green-500" />
        </div>
        <div className="absolute top-40 right-40 w-12 h-12 opacity-30">
          <SoilIcon className="w-full h-full text-green-500" />
        </div>
        <div className="absolute bottom-20 right-60 w-20 h-20 opacity-25">
          <SoilIcon className="w-full h-full text-green-500" />
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 border-2 border-green-500 rounded-full relative mx-auto">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <SoilIcon className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute top-1/4 -right-4">
                <SoilIcon className="w-6 h-6 text-green-500" />
              </div>
              <div className="absolute bottom-1/4 -left-4">
                <SoilIcon className="w-6 h-6 text-green-500" />
              </div>
              <div className="absolute -bottom-4 left-1/3">
                <SoilIcon className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute -bottom-4 right-1/3">
                <SoilIcon className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Advanced <span className="text-purple-500">AI</span>
              <br />
              for precise <span className="text-orange-500">soil</span>
              <br />
              analysis
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our cutting-edge machine learning algorithms analyze soil samples to identify composition, nutrient levels, 
              and optimal growing conditions. Get instant, accurate results for better agricultural planning and crop yield optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-2">Features</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Our capabilities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Soil<span className="text-green-500">Detect</span>
            </h3>
            <p className="text-gray-400 mb-6">Instant soil type identification using advanced computer vision and ML algorithms</p>
            <div className="w-full h-32 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg"></div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
              <h3 className="text-2xl font-bold">NutriScan</h3>
            </div>
            <p className="text-gray-400 mb-6">Comprehensive nutrient analysis and pH level detection for optimal crop planning</p>
            <div className="w-full h-32 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-2">Team</p>
          <h2 className="text-4xl lg:text-5xl font-bold">AI and agriculture experts</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Dr. Sarah", role: "ML Engineer", avatar: "/placeholder.svg?height=100&width=100" },
            { name: "Alex", role: "Soil Scientist", avatar: "/placeholder.svg?height=100&width=100" },
            { name: "Maria", role: "Data Scientist", avatar: "/placeholder.svg?height=100&width=100" },
            { name: "James", role: "Agricultural Engineer", avatar: "/placeholder.svg?height=100&width=100" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{member.role}</p>
              <div className="flex justify-center space-x-2">
                <Github className="w-4 h-4 text-green-500" />
                <Twitter className="w-4 h-4 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-2">Partners</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Trusted by agriculture leaders</h2>
        </div>

        <div className="flex justify-center items-center space-x-12 flex-wrap gap-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-400">
              <Globe className="w-6 h-6" />
              <span className="font-semibold">{index % 2 === 0 ? "AgriTech" : "FarmCore"}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-4 left-8">
            <SoilIcon className="w-12 h-12 text-purple-300 opacity-50" />
          </div>
          <div className="absolute top-8 right-12">
            <SoilIcon className="w-8 h-8 text-purple-300 opacity-30" />
          </div>
          <div className="absolute bottom-8 left-16">
            <SoilIcon className="w-10 h-10 text-purple-300 opacity-40" />
          </div>
          <div className="absolute bottom-4 right-8">
            <SoilIcon className="w-12 h-12 text-purple-300 opacity-50" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to revolutionize farming?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on soil analysis technology and agricultural innovation insights.
          </p>

          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-black/20 border-purple-400 text-white placeholder:text-purple-200 rounded-l-full px-6"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-r-full">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">TS</span>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 Terra Scan. All rights reserved. | Advanced soil analysis technology
          </div>

          <div className="flex space-x-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function SoilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 19h18v2H3v-2zm0-2h18c0-3.87-3.13-7-7-7H10c-3.87 0-7 3.13-7 7z"
        fill="currentColor"
      />
      <path
        d="M12 2L8 6h8l-4-4z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M7 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  )
}
