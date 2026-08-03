export function Categories() {
  return (
    <div className="flex items-center gap-1.5 bg-slate-950/80 p-1.5 border border-slate-800 rounded-xl ">
      {/* ACTIVE CATEGORY BUTTON */}
      <button
        type="button"
        className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-purple-600 text-white shadow-md shadow-purple-600/20 transition-all duration-200"
      >
        ALL
      </button>

      {/* INACTIVE CATEGORY BUTTONS */}
      <button
        type="button"
        className="px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-200"
      >
        Gown
      </button>

      <button
        type="button"
        className="px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-200"
      >
        Shirt
      </button>

      <button
        type="button"
        className="px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-200"
      >
        Knickers
      </button>
    </div>
  );
}

export default Categories;