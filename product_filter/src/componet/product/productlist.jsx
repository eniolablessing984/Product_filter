import Categories from "../categories/Categories";
import Search from "../Search/Search";
import Product from "./product";
import "./product.css"

export function Productlist() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-10">
      {/* HEADER BAR */}
      <header className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* LOGO / TITLE */}
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            <span className="text-purple-500">Product </span>filter
          </h1>

          {/* INPUT & CONTROLS WRAPPER */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center  w-full md:w-auto">
           
            <div className="flex items-center gap-3">
               <Search />
              <Categories />
             
            </div>
          </div>

        </div>
      </header>

      {/* PRODUCTS CONTAINER */}
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Product />
        </div>
      </main>
    </div>
  );
}

export default Productlist;