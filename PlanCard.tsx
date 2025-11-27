'use client'
import { motion } from 'framer-motion'

export default function PlanCard({ plan, selected, onSelect }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`border p-5 rounded-xl cursor-pointer transition ${
        selected ? "border-green-600 shadow-xl" : "border-gray-300"
      }`}
      onClick={() => onSelect(plan.id)}
    >
      <h2 className="text-xl font-bold">{plan.name}</h2>
      <p className="text-green-600 mt-2 text-lg font-semibold">₹{plan.price}/week</p>
      <p className="text-gray-600 text-sm mt-1">
        {plan.items.join(", ")}
      </p>
    </motion.div>
  )
}
