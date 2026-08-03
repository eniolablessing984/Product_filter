import { IoStar, IoCartOutline } from "react-icons/io5";
import { ProductsData } from "./product_data.js";


export function Product() {
  return (
    <>
      {ProductsData.map((item) => (
        <div
          key={item.id}
          className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden"
        >
          {/* IMAGE & BADGE */}
          <div>
            <div className="relative aspect-square w-full rounded-xl bg-slate-950 overflow-hidden mb-4 border border-slate-800/50">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-purple-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                {item.category}
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar className="text-slate-700" />
                <span className="text-slate-400 text-[11px] ml-1 font-medium">({item.rating})</span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between gap-2 mt-5 pt-3 border-t border-slate-800/60">
            <div>
                
              <span className="text-xs text-slate-500 block -mb-1">Price</span>
              <span className="text-lg font-black text-white">{item.price}</span>
            </div>

            <button
              type="button"
              className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-purple-600/20"
            >
              <IoCartOutline className="text-base" />
              <span>Add</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;