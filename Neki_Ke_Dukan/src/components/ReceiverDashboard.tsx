import React from 'react';
import { HandHeart, Clock, MapPin, LogOut, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ReceiverDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <HandHeart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Receiver Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Status Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Pending Requests</h3>
                  <p className="text-lg font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <HandHeart className="h-6 w-6 text-green-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Received Items</h3>
                  <p className="text-lg font-semibold text-gray-900">8</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-purple-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Available Nearby</h3>
                  <p className="text-lg font-semibold text-gray-900">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search available items..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Available Items */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Available Items Nearby</h3>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Winter Jacket</h4>
                  <p className="text-sm text-gray-500">Size: L, Color: Blue</p>
                  <p className="text-sm text-gray-500">2.5 km away</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Request
                </button>
              </div>
            </li>
            <li className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">School Books</h4>
                  <p className="text-sm text-gray-500">Class 10 Mathematics, Science</p>
                  <p className="text-sm text-gray-500">1.8 km away</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Request
                </button>
              </div>
            </li>
            <li className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Food Package</h4>
                  <p className="text-sm text-gray-500">Non-perishable items</p>
                  <p className="text-sm text-gray-500">3.2 km away</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Request
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-6 bg-blue-50 rounded-lg p-6">
          <blockquote className="text-center">
            <p className="text-lg font-medium text-gray-900 italic">
              "The greatest good is what we do for one another."
            </p>
            <footer className="mt-2 text-sm text-gray-600">Mother Teresa</footer>
          </blockquote>
        </div>
      </main>
    </div>
  );
}

export default ReceiverDashboard;