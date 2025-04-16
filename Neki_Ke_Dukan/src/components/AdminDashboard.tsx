import React, { useState } from 'react';
import { Users, Package, AlertCircle, LogOut, ChevronDown, BarChart2, UserCheck, Settings, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [pendingDonations, setPendingDonations] = useState([
    {
      id: 1,
      donorName: 'Rajesh Kumar',
      itemName: 'School Books',
      quantity: 5,
      description: 'Class 10 NCERT books in good condition',
      amount: '₹2,500',
      date: '2024-04-08',
      status: 'pending'
    },
    {
      id: 2,
      donorName: 'Priya Sharma',
      itemName: 'Winter Clothes',
      quantity: 10,
      description: 'Warm jackets and sweaters for children',
      amount: '₹5,000',
      date: '2024-04-07',
      status: 'pending'
    }
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleApproveDonation = (id: number) => {
    setPendingDonations(prevDonations =>
      prevDonations.map(donation =>
        donation.id === id ? { ...donation, status: 'approved' } : donation
      )
    );
  };

  const handleRejectDonation = (id: number) => {
    setPendingDonations(prevDonations =>
      prevDonations.map(donation =>
        donation.id === id ? { ...donation, status: 'rejected' } : donation
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Admin Dashboard</span>
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
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
                  <p className="text-lg font-semibold text-gray-900">1,234</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <Package className="h-6 w-6 text-green-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Active Donations</h3>
                  <p className="text-lg font-semibold text-gray-900">856</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <UserCheck className="h-6 w-6 text-purple-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Verified Users</h3>
                  <p className="text-lg font-semibold text-gray-900">987</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <div className="ml-5">
                  <h3 className="text-sm font-medium text-gray-500">Pending Reports</h3>
                  <p className="text-lg font-semibold text-gray-900">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Chart */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Donation Analytics</h3>
              <div className="flex items-center">
                <select className="ml-2 pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="h-64 flex items-center justify-center text-gray-500">
              <BarChart2 className="h-32 w-32" />
            </div>
          </div>
        </div>

        {/* Pending Donations Section */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Pending Donations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingDonations.map((donation) => (
                  <tr key={donation.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{donation.donorName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{donation.itemName}</div>
                      <div className="text-sm text-gray-500">{donation.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{donation.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{donation.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApproveDonation(donation.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleRejectDonation(donation.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Management */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Users</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">Donor</p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View Profile</button>
                </div>
              </li>
              <li className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                      <p className="text-sm text-gray-500">Receiver</p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View Profile</button>
                </div>
              </li>
            </ul>
          </div>

          {/* Reported Items */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Reported Items</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Inappropriate Content</p>
                    <p className="text-sm text-gray-500">Reported by: User123</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700">
                      Remove
                    </button>
                    <button className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                      Ignore
                    </button>
                  </div>
                </div>
              </li>
              <li className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Suspicious Activity</p>
                    <p className="text-sm text-gray-500">Reported by: User456</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700">
                      Remove
                    </button>
                    <button className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                      Ignore
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;