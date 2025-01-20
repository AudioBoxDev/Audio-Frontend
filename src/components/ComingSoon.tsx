"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ComingSoon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <Link
        href="/"
        className="absolute left-4 top-4 flex items-center text-pink-600 hover:text-pink-400 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        <span>Back</span>
      </Link>
      <h1 className="mb-4 text-5xl font-bold text-pink-600">Coming Soon</h1>
      <p className="mb-8 text-xl">We're working hard to bring you something amazing. Stay tuned!</p>
      <div className="mt-8">
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-pink-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 focus:ring-offset-black"
        >
          Follow Us for Updates
        </a>
      </div>
    </motion.div>
  )
}

