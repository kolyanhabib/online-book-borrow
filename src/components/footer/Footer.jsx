"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            <span>Book</span>
            <span className="text-purple-600">ify</span>
          </h2>

          <p className="text-sm leading-relaxed">
            Discover, borrow, and explore thousands of books. A modern digital
            library experience for curious minds.
          </p>

          <div className="flex gap-4 mt-5">
            <Link
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </Link>

            <Link
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaXTwitter />
            </Link>

            <Link
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <BsInstagram />
            </Link>

            <Link
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-blue-700 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@bookify.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Your Message"
              rows="3"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Book Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
