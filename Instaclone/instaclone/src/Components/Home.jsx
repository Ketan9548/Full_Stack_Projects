import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Instagram Clone</h1>
          <div>
            <Link to="/singin" className="text-gray-800 hover:text-indigo-600 px-4">Sign In</Link>
            <Link to="/singup" className="text-gray-800 hover:text-indigo-600 px-4">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow p-4">
        <div className="container mx-auto max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Feed</h2>
          <div className="mt-4 space-y-4">
            {/* Post Placeholder */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Username</h3>
                  <p className="text-sm text-gray-600">This is a placeholder post content.</p>
                </div>
              </div>
              <img src="https://via.placeholder.com/600x400" alt="Post" className="mt-4 w-full h-auto rounded-lg" />
            </div>

            {/* Add more posts here */}
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-md p-4 text-center text-gray-600">
        <p>&copy; 2024 Instagram Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
