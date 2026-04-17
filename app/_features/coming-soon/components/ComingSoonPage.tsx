'use client';

import Link from 'next/link';
import { Clock, Home } from 'lucide-react';
import { ROUTES } from '@/shared/config/routes';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-md bg-white rounded-2xl border shadow-xl p-8 text-center overflow-hidden"
      >

        {/* Animated glow background */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-[#3A10E5] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* Icon bounce */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#3A10E5] to-purple-500 flex items-center justify-center text-white shadow-lg"
        >
          <Rocket className="w-8 h-8" />
        </motion.div>

        {/* Title animation */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-sm mb-6"
        >
          We are building something powerful for you.
          Stay tuned for the next big update 🚀
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/')}
          className="w-full py-3 mb-0 rounded-xl bg-[#3A10E5] text-white font-medium shadow-md hover:shadow-lg transition"
        >
          {/* <Home className="inline w-4 h-4 mr-2" /> */}
          Go Home
        </motion.button>

        {/* Floating dots animation */}
        {/* <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-[#3A10E5] rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div> */}

      </motion.div>
    </div>
  );
}