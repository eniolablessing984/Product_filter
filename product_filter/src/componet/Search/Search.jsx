
import './search.css'


export const Search=({Inputvalue, onInputchange})=> {
   

    

  return (
    
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full sm:w-64 bg-slate-950/80 border border-slate-800 focus:border-purple-500 text-white text-sm rounded-xl px-4 py-2.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-purple-500/10 placeholder:text-slate-500"
              value={Inputvalue} onChange={onInputchange}
            />
    </div>
  )
}

export default Search