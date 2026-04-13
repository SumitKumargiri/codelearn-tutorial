// import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../utils/routes';
import logo from "../../public/logo1.png";
import facebook from "../../public/facebook1.png";
import twitter from "../../public/twitter1.png";
import instagram from "../../public/instagram1.png";
import linkdin from "../../public/linkdin1.png";
import youtube from "../../public/youtube1.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#10162F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 hover:opacity-90 transition-opacity" >
              <Image src={logo.src} alt="CodeLearn Logo" width={44} height={32} className="rounded"/>
              {/* <span className="font-semibold text-xl">CodeLearn</span> */}
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering millions to learn coding and tech skills through hands-on, interactive learning experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Image src={facebook.src} alt="CodeLearn Logo" width={56} height={40} className="rounded"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Twitter className="w-5 h-5" /> */}
                <Image src={twitter.src} alt="CodeLearn Logo" width={44} height={32} className="rounded"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Instagram className="w-5 h-5" /> */}
                <Image src={instagram.src} alt="CodeLearn Logo" width={66} height={32} className="rounded"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Linkedin className="w-5 h-5" /> */}
                <Image src={linkdin.src} alt="CodeLearn Logo" width={44} height={32} className="rounded"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                {/* <Youtube className="w-5 h-5" /> */}
                <Image src={youtube.src} alt="CodeLearn Logo" width={44} height={32} className="rounded"/>
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
