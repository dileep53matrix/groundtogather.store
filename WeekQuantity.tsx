'use client'
import { useState } from 'react'

export default function WeekQuantity({ onChange }: { onChange: (q: any) => void }) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const [qty, setQty] = useState<Record<string, number>>(() => {
        const s: Record<string, number> = {}
        days.forEach(d => s[d] = 0)
        return s
    })

    function inc(d: string) {
        qty[d]++
        setQty({ ...qty })
        onChange(qty)
    }

    function dec(d: string) {
        if (qty[d] > 0) {
            qty[d]--
            setQty({ ...qty })
            onChange(qty)
        }
    }

    return (
        <div className="grid grid-cols-7 gap-2 mt-6">
            {days.map(day => (
                <div key={day} className="p-2 border rounded text-center">
                    <strong>{day}</strong>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <button onClick={() => dec(day)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                        <div className="w-6 text-center">{qty[day]}</div>
                        <button onClick={() => inc(day)} className="px-2 py-1 bg-green-400 text-white rounded">+</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
