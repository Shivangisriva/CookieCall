import React from 'react';
import Navbar from './components/Navbar';

const page = () => {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        
      </main>

      {/* Footer */}
      <footer >
      </footer>
    </div>
  )
}

export default page
