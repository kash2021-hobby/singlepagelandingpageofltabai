import { Phone, Mail, MapPin, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/470684103_2153992445004137_800651311874232813_n.jpg"
                alt="Ltab Ai Logo"
                className="w-10 h-10 rounded-lg object-contain bg-white p-1"
              />
              <span className="text-2xl font-bold">Ltab Ai</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading digital marketing agency in Guwahati, Assam. Empowering local businesses 
              with innovative digital marketing solutions that drive growth across Northeast India.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 6000683808</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Contactus@blueantdigitech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>SEO Optimization</li>
              <li>Social Media Marketing</li>
              <li>Google Ads Management</li>
              <li>Content Marketing</li>
              <li>Video Editing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Ltab Ai - Digital Marketing Services in Guwahati, Assam. All rights reserved. | Transforming Northeast India businesses through digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}