import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ( {children }) => {
    
    const token = localStorage.getItem('token');
    
  // Check if the user is authenticated.
    if (token) {
        return children; // Render the protected content.
    } else {
        return <Navigate to="/Login" />; // Redirect to the login page.
    }
};

export default ProtectedRoute;
