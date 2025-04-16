import React from 'react';
import { Heart, Gift, Users, ArrowRight, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Neki ke Dukan</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#stories" className="text-gray-600 hover:text-blue-600">Stories</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Kindness is the only</span>
                  <span className="block text-blue-600">currency we need</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join our community of givers and receivers. Together, we can make a difference in someone's life through the simple act of sharing.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Donate Now
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Request Help
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
            alt="People helping each other"
          />
        </div>
      </div>

      {/* Rest of the HomePage content remains the same */}
      {/* How It Works Section */}
      <div id="how-it-works" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Three simple steps to make a difference
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Gift className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Register & List Items</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Sign up and list items you'd like to donate
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Connect</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Get matched with people who need your items
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Share</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Coordinate and share your items locally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stories */}
      <div id="stories" className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                alt="Story 1"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Books for Education</h3>
                <p className="mt-2 text-gray-600">
                  "I donated my old textbooks and helped a student complete their semester."
                </p>
                <div className="mt-4 flex items-center">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="ml-2 text-sm text-gray-500">Impact Story</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                alt="Story 2"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Winter Clothes Drive</h3>
                <p className="mt-2 text-gray-600">
                  "Donated warm clothes to families in need during winter."
                </p>
                <div className="mt-4 flex items-center">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="ml-2 text-sm text-gray-500">Community Impact</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                alt="Story 3"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Food Support</h3>
                <p className="mt-2 text-gray-600">
                  "Connected with local food banks to share surplus groceries."
                </p>
                <div className="mt-4 flex items-center">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="ml-2 text-sm text-gray-500">Local Hero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white" id="contact">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-800">Neki ke Dukan</span>
              </div>
              <p className="mt-4 text-gray-500">Making kindness accessible to everyone.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#about" className="text-base text-gray-500 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-base text-gray-500 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-base text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
              <p className="mt-4 text-gray-500">
                Join our community and start making a difference today.
              </p>
              <div className="mt-4">
                <a
                  href="#newsletter"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-gray-400">&copy; 2025 Neki ke Dukan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;