// Footer component
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4">
      <div className="container px-5 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-32 py-16">
          <div className="max-w-sm">
            <span className="block font-bold mb-3">Lorem ipsum</span>
            <p className="text-sm">
              Dui vivamus arcu felis bibendum ut tristique et egestas. Dictum
              sit amet justo donec enim. Parturient montes nascetur ridiculus
              mus mauris
            </p>
          </div>

          <div className="max-w-sm">
            <span className="block font-bold mb-3">Links</span>
            <div className="flex flex-col text-sm">
              <span>
                Important: <Link to="/">Terms & Conditions</Link>,{" "}
                <Link to="/">Privacy Policy</Link>
              </span>
              <span>
                Useful: <Link to="/">Colorpicker</Link>,{" "}
                <Link to="/">Icon Library</Link>,{" "}
                <Link to="/">Illustrations</Link>
              </span>
              <span>
                Menu: <Link to="/">Home</Link>, <Link to="/">Intro</Link>,{" "}
                <Link to="/">Features</Link>, <Link to="/">Details</Link>
              </span>
            </div>
          </div>

          <div className="max-w-sm text-right">
            <div className="flex justify-end items-center gap-3 mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-600 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-600 hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-600 hover:text-white"
              >
                <FaPinterestP size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-600 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
            <span className="block text-sm">
              Nam aliquam sem et tortor cons
            </span>
            <Link to="/" className="text-sm font-bold">
              contact2rafique@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-3">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
