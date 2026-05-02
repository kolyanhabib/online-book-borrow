"use client";

const categories = ["All", "Story", "Tech", "Science"];

const CategorySidebar = ({ selected, setSelected }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 space-y-3">
      <h2 className="font-semibold text-lg mb-2">Categories</h2>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`w-full text-left px-4 py-2 rounded-lg transition font-medium cursor-pointer
            ${
              selected === cat
                ? "bg-purple-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
