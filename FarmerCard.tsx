export default function FarmerCard({f}:{f:any}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4 items-center">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">👩‍🌾</div>
      <div>
        <div className="font-semibold">{f.name}</div>
        <div className="text-sm text-gray-500">{f.location}</div>
      </div>
    </div>
  )
}
