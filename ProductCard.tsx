import Link from 'next/link'
export default function ProductCard({p}:{p:any}) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={p.image || '/placeholder.png'} className="h-40 w-full object-cover rounded" />
      <h4 className="mt-3 font-semibold">{p.name}</h4>
      <p className="text-sm text-gray-500">From: {p.farm}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="text-lg font-bold text-green-700">₹{p.price}</div>
        <Link href={`/product/${p.id}`} className="text-sm px-3 py-1 bg-green-600 text-white rounded">View</Link>
      </div>
    </div>
  )
}
