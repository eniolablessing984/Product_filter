
import Productlist from './componet/product/productlist'
import WobbleFence from './components/originkit/ui/wobble-fence'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-90">
        <WobbleFence
          finish="metal"
          tint="#e2e8f0"
          color="#f59e0b"
          spacing={52}
          thickness={3}
          speed={12}
          pointerLift={18}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <Productlist />
      </div>
    </div>
  )
}

export default App