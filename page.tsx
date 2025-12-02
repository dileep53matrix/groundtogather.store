
'use client'
import { useEffect, useState } from 'react'

export default function MySubscriptions() {
  const [subs,setSubs]=useState([])

  useEffect(()=>{
    fetch('/api/subscriptions').then(r=>r.json()).then(setSubs)
  },[])

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700">My Subscriptions</h1>

      {subs.length===0 && <p className="mt-4 text-gray-600">You have no active subscriptions.</p>}

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {subs.map(s=>(
          <div key={s.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-bold">Subscription ID: {s.id}</h2>
            <p className="text-gray-700 mt-2">Plan: {s.planId}</p>
            <p className="text-gray-700">Apartment: {s.apartmentId}</p>
            <p className="text-gray-700">Address: {s.address}</p>
            <p className="text-gray-700">Status: {s.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
