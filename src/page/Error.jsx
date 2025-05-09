import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl text-secondary mb-2">Page Not Found</h2>
      <p className="text-secondaryText mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="text-white bg-primary hover:bg-secondary px-4 py-2 rounded transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
