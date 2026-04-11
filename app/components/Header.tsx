import { Menu, Search, User, Bell } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../utils/lib/routes';

export function Header() {
  return (
    <header className="bg-[#10162F] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-[#3A10E5] to-[#6C5CE7] rounded"></div>
              <span className="font-semibold text-xl">CodeLearn</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href={ROUTES.CATALOG} className="hover:text-[#FFD300] transition-colors">Catalog</Link>
              <Link href={ROUTES.RESOURCES} className="hover:text-[#FFD300] transition-colors">Resources</Link>
              <Link href={ROUTES.COMMUNITY} className="hover:text-[#FFD300] transition-colors">Community</Link>
              <Link href={ROUTES.PLANS} className="hover:text-[#FFD300] transition-colors">Plans</Link>
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
            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
