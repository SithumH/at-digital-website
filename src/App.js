import React from 'react';

function App() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AT DIGITAL</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#career" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-80" style={{ backgroundImage: "url('your-image-url')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-4">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h2>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">Let's Talk</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Our Services</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded p-6">
              <h4 className="text-2xl font-semibold mb-4">Web & Mobile App Development</h4>
              <p className="mb-4">We offer modern web and mobile app solutions to help you reach your target audience.</p>
              <button className="text-purple-700 hover:underline">Learn More</button>
            </div>

            <div className="bg-white shadow-md rounded p-6">
              <h4 className="text-2xl font-semibold mb-4">Digital Strategy Consulting</h4>
              <p className="mb-4">We provide strategic consulting to optimize your online presence and achieve business goals.</p>
              <button className="text-purple-700 hover:underline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
          </div>

          <div className="bg-white shadow-md rounded p-6">
            {/* Sample FAQ Item */}
            <div className="mb-4">
              <h5 className="font-semibold">What services do you offer?</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, non?</p>
            </div>
            {/* Add more FAQs similarly */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h4 className="font-bold">AT DIGITAL</h4>
            <p className="text-sm">&copy; 2024 All Rights Reserved.</p>
          </div>
          <div>
            <h5 className="font-bold">Our Technologies</h5>
            <p>React, Node.js, Python</p>
          </div>
          <div>
            <h5 className="font-bold">Our Services</h5>
            <p>Web Development, App Development</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
