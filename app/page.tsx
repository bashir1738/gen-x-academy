"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Bitcoin,
  Users,
  BookOpen,
  Code,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  ArrowUp,
  Menu,
  X,
  TrendingUp,
  Shield,
  Zap,
  Award,
  CheckCircle,
  Play,
  DollarSign,
  Clock,
  Target,
} from "lucide-react"
import Image from "next/image"

export default function GenXAcademy() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Crypto Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Bitcoin */}
        <div className="absolute top-20 left-10 opacity-10 animate-pulse">
          <Bitcoin size={60} />
        </div>

        {/* Ethereum */}
        <div className="absolute top-40 right-20 opacity-10 animate-bounce">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.58L5.35 12.47L12 16.42L18.65 12.47L12 1.58ZM12 17.58L5.35 13.53L12 22.42L18.65 13.53L12 17.58Z" />
          </svg>
        </div>

        {/* Solana */}
        <div className="absolute bottom-20 left-20 opacity-10 animate-pulse delay-1000">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 7h13l-1.5-1.5L17 4l4 4-4 4-1.5-1.5L17 9H4V7zm16 10H7l1.5 1.5L7 20l-4-4 4-4 1.5 1.5L7 15h13v2z" />
          </svg>
        </div>

        {/* BNB */}
        <div className="absolute top-60 left-1/2 opacity-10 animate-spin">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L8.5 5.5L12 9L15.5 5.5L12 2ZM5.5 8.5L2 12L5.5 15.5L9 12L5.5 8.5ZM18.5 8.5L15 12L18.5 15.5L22 12L18.5 8.5ZM12 15L8.5 18.5L12 22L15.5 18.5L12 15Z" />
          </svg>
        </div>

        {/* Additional Crypto Elements */}
        <div className="absolute top-80 right-10 opacity-10 animate-pulse delay-500">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>

        <div className="absolute bottom-40 right-32 opacity-10 animate-bounce delay-700">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34" />
          </svg>
        </div>

        <div className="absolute top-32 left-1/3 opacity-10 animate-pulse delay-300">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          </svg>
        </div>

        <div className="absolute bottom-60 left-1/2 opacity-10 animate-spin delay-1000">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L21.5 6.5v11L12 23L2.5 17.5v-11L12 1zm0 2.311L4.5 7.653v8.694L12 20.689l7.5-4.342V7.653L12 3.311z" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src="/genx-logo.png"
                  alt="Gen X Academy Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Gen X Academy
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("team")} className="hover:text-purple-400 transition-colors">
                Team
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-purple-400 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-4 border-t border-white/10">
              <button
                onClick={() => {
                  scrollToSection("about")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection("services")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  scrollToSection("team")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Gen X Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building Real Careers in Crypto & Web3
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              From content creation to blockchain development and everything in between. We're keeping it real,
              practical, and beginner-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">340+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Gen X Academy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Curious about building a real career in crypto but don't know where to start?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Free Education</h3>
                <p className="text-gray-300">
                  Comprehensive sessions covering everything from basics to advanced blockchain development
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Practical Skills</h3>
                <p className="text-gray-300">
                  Real-world projects and hands-on experience in Web3 development and crypto trading
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Community</h3>
                <p className="text-gray-300">
                  Join 340+ members in our supportive community of crypto enthusiasts and professionals
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl text-gray-300 mb-4">We're keeping it real, practical, and beginner-friendly.</p>
            <p className="text-xl text-purple-400 font-semibold">Wanna be part of it?</p>
            <p className="text-lg text-gray-400 mt-4">
              Let's help you take your first step into the crypto space — for real this time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Web3 education and career development programs designed for real-world success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Code size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Blockchain Development</h3>
                <p className="text-gray-300 mb-4">
                  Learn Solidity, smart contract development, and DApp creation from industry experts
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Smart Contracts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    DeFi Protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    NFT Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Crypto Trading</h3>
                <p className="text-gray-300 mb-4">
                  Master technical analysis, risk management, and profitable trading strategies
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Technical Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Risk Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Portfolio Strategy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Content Creation</h3>
                <p className="text-gray-300 mb-4">
                  Build your personal brand and monetize your crypto knowledge through content
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    YouTube Strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Social Media
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Newsletter Writing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">DeFi Mastery</h3>
                <p className="text-gray-300 mb-4">
                  Navigate decentralized finance protocols and maximize your yield farming potential
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Yield Farming
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Liquidity Pools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Protocol Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Career Coaching</h3>
                <p className="text-gray-300 mb-4">
                  Get personalized guidance to land your dream job in the Web3 industry
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Resume Building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Interview Prep
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Network Building
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">1-on-1 Mentorship</h3>
                <p className="text-gray-300 mb-4">
                  Direct access to industry experts for personalized learning and career guidance
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Personal Roadmap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Weekly Sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Project Reviews
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Gen X Academy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Flexible Learning</h3>
                  <p className="text-gray-300">
                    Learn at your own pace with 24/7 access to course materials and community support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Industry Recognition</h3>
                  <p className="text-gray-300">
                    Earn certificates recognized by top Web3 companies and blockchain organizations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Affordable Pricing</h3>
                  <p className="text-gray-300">
                    High-quality education at a fraction of the cost of traditional bootcamps
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Active Community</h3>
                  <p className="text-gray-300">
                    Connect with like-minded individuals and build lasting professional relationships
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Ready to Transform Your Career?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of successful graduates who have built thriving careers in Web3 and cryptocurrency.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-green-400">
                  <CheckCircle size={20} className="mr-3" />
                  <span>Free trial period</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle size={20} className="mr-3" />
                  <span>Money-back guarantee</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle size={20} className="mr-3" />
                  <span>Lifetime community access</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the industry veterans and successful entrepreneurs guiding your journey into Web3
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  AW
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Abdul Wakeel</h3>
                <p className="text-purple-400 mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-300 text-sm mb-4">
                  Blockchain developer and crypto educator with 5+ years of experience in Web3 technologies. Former
                  senior developer at major DeFi protocols.
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <p>• 50+ successful projects</p>
                  <p>• 1000+ students mentored</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  SM
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Sarah Mitchell</h3>
                <p className="text-cyan-400 mb-4">DeFi Specialist & Smart Contract Auditor</p>
                <p className="text-gray-300 text-sm mb-4">
                  Expert in decentralized finance protocols and smart contract security. Previously worked at top-tier
                  audit firms.
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <p>• 200+ contracts audited</p>
                  <p>• $50M+ TVL secured</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  MJ
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Mike Johnson</h3>
                <p className="text-green-400 mb-4">Professional Trader & Risk Manager</p>
                <p className="text-gray-300 text-sm mb-4">
                  Professional crypto trader with 7+ years of experience. Former hedge fund manager specializing in
                  digital assets.
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <p>• 300% average annual returns</p>
                  <p>• $10M+ portfolio managed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated with Crypto Trends
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get weekly insights, market analysis, and exclusive educational content delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 flex-1"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Join 5,000+ subscribers. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your crypto journey? Contact us today and join our community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="Tell us more about your interest in crypto..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">contact@genxacademy.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <p className="text-gray-300">Join our community group</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Global - Online Community</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold mb-4 text-white">Join Our Community</h4>
                <p className="text-gray-300 mb-4">
                  Connect with 340+ members who are building their careers in crypto and Web3
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Join WhatsApp Group
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    src="/genx-logo.png"
                    alt="Gen X Academy Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Gen X Academy
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the next generation of Web3 professionals through practical education and community support.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-purple-400 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("team")} className="hover:text-purple-400 transition-colors">
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Blockchain Development</li>
                <li>Crypto Trading</li>
                <li>DeFi Education</li>
                <li>Career Coaching</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>WhatsApp Group</li>
                <li>Discord Server</li>
                <li>Telegram Channel</li>
                <li>YouTube Channel</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 mb-4">Building the next generation of Web3 professionals</p>
            <p className="text-sm text-gray-500">
              Created by Abdul Wakeel • © 2025 Gen X Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  )
}
