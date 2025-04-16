import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Heart, Gift, Users, ArrowRight, MapPin, Award } from 'lucide-react';
import Login from './components/Login';
import DonorDashboard from './components/DonorDashboard';
import ReceiverDashboard from './components/ReceiverDashboard';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/HomePage';
import { useAuth } from './context/AuthContext';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/donor-dashboard"
          element={
            <ProtectedRoute allowedUserType="donor">
              <DonorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receiver-dashboard"
          element={
            <ProtectedRoute allowedUserType="receiver">
              <ReceiverDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedUserType="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// Protected Route Component
function ProtectedRoute({ 
  children, 
  allowedUserType 
}: { 
  children: React.ReactNode;
  allowedUserType: string;
}) {
  const { isAuthenticated, userType } = useAuth();
  const location = useLocation();
  
  useEffect(() => {
    // If user is authenticated but on login page, redirect to their dashboard
    if (isAuthenticated && location.pathname === '/login') {
      const dashboardPath = `/${userType}-dashboard`;
      window.location.href = dashboardPath;
    }
  }, [isAuthenticated, userType, location]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userType !== allowedUserType) {
    // Redirect to the appropriate dashboard based on user type
    return <Navigate to={`/${userType}-dashboard`} />;
  }

  return <>{children}</>;
}

export default App;