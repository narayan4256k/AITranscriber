"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-white text-xl font-bold">BhaktiVaani</h2>
          <p className="mt-3 text-sm text-gray-400">
            Connecting devotees with sacred chants, translations, and real-time pronunciation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#features" className="hover:text-blue-500">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-blue-500">Pricing</Link></li>
            <li><Link href="#contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
            <li><Link href="/support" className="hover:text-blue-500">Support</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-red-500">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BhaktiVaani. All rights reserved.
      </div>
    </footer>
  );
}
