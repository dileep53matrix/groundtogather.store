import ProductCard from '../components/ProductCard'
import FarmerCard from '../components/FarmerCard'
import sample from '../data/sample-products.json'

export default function Home(){
  return (
    <div>
      <section className="text-center py-12 bg-green-50 rounded-lg">
        <h1 className="text-4xl font-bold text-green-700">Fresh Organic Produce — Direct from Farmers</h1>
        <p className="mt-3 text-gray-700">Real farms. Fair prices. Traceable produce.</p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Featured</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sample.slice(0,3).map(p=> <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Meet Farmers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FarmerCard f={{name:'Kamal Farms', location:'Jaipur'}}/>
          <FarmerCard f={{name:'Green Valley', location:'Bangalore'}}/>
          <FarmerCard f={{name:'Sunny Orchards', location:'Mysore'}}/>
        </div>
      </section>
    </div>
  )
}
