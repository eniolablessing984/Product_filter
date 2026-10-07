import { useState } from "react";
import Categories from "../categories/Categories";
import Search from "../Search/Search";
import Product from "./product";
import "./product.css";
import { ProductsData as productsData } from "./product_data";

export function Productlist() {
  const [search, setSearch] = useState("");

  // Derived filtered array recalculates automatically when search state changes
  const filteredProducts = productsData.filter((product) =>
    product.Title.toLowerCase().includes(search.toLowerCase().trim())
  );

  const HandleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-100 p-4 sm:p-6 md:p-10">
      <header className="max-w-5xl mx-auto bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            <span className="text-purple-500">Product </span>filter
          </h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full md:w-auto">
            <div className="flex items-center gap-3">
              {/* FIX 1: Pass search string state to Inputvalue */}
              <Search Inputvalue={search} onInputchange={HandleSearch} />
              <Categories />
            </div>
          </div>
        </div>
      </header>

      {/* PRODUCTS CONTAINER */}
      <main className="max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div key={item.id}>
                <Product {...item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm">
            No products found matching "{search}".
          </div>
        )}
      </main>
    </div>
  );
}

export default Productlist;