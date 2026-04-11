// import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../utils/lib/routes';

export function Footer() {
  return (
    <footer className="bg-[#10162F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 mb-4 w-fit hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-[#3A10E5] to-[#6C5CE7] rounded"></div>
              <span className="font-semibold text-xl">CodeLearn</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering millions to learn coding and tech skills through hands-on, interactive learning experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Facebook className="w-5 h-5" /> */}
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Instagram className="w-5 h-5" /> */}
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Linkedin className="w-5 h-5" /> */}
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Youtube className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={ROUTES.ABOUT} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.CAREERS} className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href={ROUTES.ABOUT} className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href={ROUTES.RESOURCES} className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={ROUTES.RESOURCES} className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href={ROUTES.RESOURCES} className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href={ROUTES.COMMUNITY} className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href={ROUTES.ABOUT} className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={ROUTES.PRIVACY} className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href={ROUTES.TERMS} className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href={ROUTES.PRIVACY} className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href={ROUTES.ABOUT} className="hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2026 CodeLearn. All rights reserved. Made with passion for learners worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
