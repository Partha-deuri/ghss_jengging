/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { api } from '../services/api';

export default function ProtectedRoute() {
  const [isAuthorized, setIsAuthorized] = useState(null); 

  useEffect(() => {
    const verifyAccess = async () => {
      const token = localStorage.getItem('adminToken');

      // 1. FAST LOCAL CHECK: Do they even have a token?
      if (!token) {
        return setIsAuthorized(false);
      }

      // 2. DEEP SERVER CHECK: Is the token valid and not expired?
      try {
        
        const res = await api.verifyToken();
        if (res.valid === true){
          setIsAuthorized(true);
        }else{
          localStorage.removeItem('adminToken');
          setIsAuthorized(false);
        }
      } catch (error) {
        localStorage.removeItem('adminToken');
        setIsAuthorized(false);
      }
    };

    verifyAccess();
  }, []);

  if (isAuthorized === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="text-primary font-semibold animate-pulse text-lg">
          Verifying Secure Session...
        </div>
      </div>
    );
  }

  return isAuthorized ? <Outlet /> : <Navigate to="/admin-login" replace />;
}