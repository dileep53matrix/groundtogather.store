// components/AnimatedCard.tsx
'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function AnimatedCard({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.03, y: -6, boxShadow: "0 10px 30px rgba(16,185,129,0.12)" }}
            whileTap={{ scale: 0.99 }}
            className="border rounded-lg p-4 bg-white cursor-pointer"
        >
            {children}
        </motion.div>
    )
}
