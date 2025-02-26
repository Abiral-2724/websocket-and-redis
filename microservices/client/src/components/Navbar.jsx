import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-600 px-6 py-4 shadow-md">
      <div className="flex items-center">
        <span className="text-white font-light text-3xl">Code Snippet</span>
      </div>
      
      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition-colors duration-200">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar