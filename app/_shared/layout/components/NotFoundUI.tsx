'use client';

import Link from 'next/link';

export default function NotFoundUI() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-[#3A10E5] mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-[#3A10E5] text-white px-6 py-3 rounded-lg hover:bg-[#2f0cc0] transition"
      >
        Go Home
      </Link>
    </div>
  );
}