import React, { useState } from 'react';
import { Package, Users, Award, LogOut, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function DonorDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donations, setDonations] = useState([
    {
      id: 1,
      itemName: 'Winter Jacket',
      date: 'March 1, 2025',
      status: 'Picked Up'
    },
    {
      id: 2,
      itemName: 'School Books',
      date: 'February 28, 2025',
      status: 'Pending'
    },
    {
      id: 3,
      itemName: 'Food Package',
      date: 'February 25, 2025',
      status: 'Picked Up'
    }
  ]);
  const [donationForm, setDonationForm] = useState({
    itemName: '',
    quantity: '',
    description: '',
    amount: '',
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // Create new donation object
    const newDonation = {
      id: donations.length + 1,
      itemName: donationForm.itemName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'Pending'
    };

    // Add new donation to the list
    setDonations([newDonation, ...donations]);
    
    // Reset form and close modal
    setDonationForm({
      itemName: '',
      quantity: '',
      description: '',
      amount: '',
    });
    setShowDonationForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Donor Dashboard</span>
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

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Donations</dt>
                    <dd className="text-lg font-medium text-gray-900">12</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">People Helped</dt>
                    <dd className="text-lg font-medium text-gray-900">8</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Neki Points</dt>
                    <dd className="text-lg font-medium text-gray-900">240</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Donation Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowDonationForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Donation
          </button>
        </div>

        {/* Donation Form Modal */}
        {showDonationForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Donation</h3>
              <form onSubmit={handleSubmitDonation}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                      Item Name
                    </label>
                    <input
                      type="text"
                      id="itemName"
                      value={donationForm.itemName}
                      onChange={(e) => setDonationForm({ ...donationForm, itemName: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      value={donationForm.quantity}
                      onChange={(e) => setDonationForm({ ...donationForm, quantity: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={donationForm.description}
                      onChange={(e) => setDonationForm({ ...donationForm, description: e.target.value })}
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Amount (₹)
                    </label>
                    <input
                      type="number"
                      id="amount"
                      value={donationForm.amount}
                      onChange={(e) => setDonationForm({ ...donationForm, amount: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowDonationForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Donation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Donation List */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Donations</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {donations.map((donation) => (
                <li key={donation.id} className="px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{donation.itemName}</p>
                      <p className="text-sm text-gray-500">Donated on {donation.date}</p>
                    </div>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      donation.status === 'Picked Up' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {donation.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DonorDashboard;