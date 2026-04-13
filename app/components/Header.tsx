"use client";
import { Menu, Search, User, Bell, X } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../utils/routes';
import logo from "../../public/logo1.png";
import Image from "next/image";
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#10162F] text-white sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 hover:opacity-90 transition-opacity" >
              <Image src={logo.src} alt="CodeLearn Logo" width={44} height={32} className="rounded"/>
              {/* <span className="font-semibold text-xl">CodeLearn</span> */}
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href={ROUTES.HOME} className="hover:text-[#FFD300] transition-colors">Home</Link>
              <Link href={ROUTES.CATALOG} className="hover:text-[#FFD300] transition-colors">Catalog</Link>
              <Link href={ROUTES.RESOURCES} className="hover:text-[#FFD300] transition-colors">Resources</Link>
              <Link href={ROUTES.COMMUNITY} className="hover:text-[#FFD300] transition-colors">Community</Link>
              {/* <Link href={ROUTES.PLANS} className="hover:text-[#FFD300] transition-colors">Plans</Link> */}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
              {/* <Menu className="w-5 h-5" /> */}
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- small/responsive screen------------------------ */}
          {isOpen && (
            <div className="md:hidden bg-[#10162F] px-4 pb-4">
              <nav className="flex flex-col gap-4">
                <Link href={ROUTES.HOME} className="hover:text-[#FFD300]">Home</Link>
                <Link href={ROUTES.CATALOG} className="hover:text-[#FFD300]">Catalog</Link>
                <Link href={ROUTES.RESOURCES} className="hover:text-[#FFD300]">Resources</Link>
                <Link href={ROUTES.COMMUNITY} className="hover:text-[#FFD300]">Community</Link>
              </nav>
            </div>
          )}
    </header>
  );
}
