"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { name: "All", slug: "" },
  { name: "Men's Fashion", slug: "men's clothing" },
  { name: "Women's Fashion", slug: "women's clothing" },
  { name: "Electronics", slug: "electronics" },
  { name: "Jewelry", slug: "jewelery" },
];

const priceRanges = [
  { name: "All", value: "" },
  { name: "Under $25", value: "0-25" },
  { name: "25$ - $50", value: "25-50" },
  { name: "$50 - $100", value: "50-100" },
  { name: "Over $100", value: "100-" },
];

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState("");
  const [activePriceRange, setActivePriceRange] = useState("");

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "");
    setActivePriceRange(searchParams.get("price") || "");
  }, [searchParams]);

  const handleCategoryChange = (slug) => {
    const params = new URLSearchParams(searchParams);
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
  };

  const handlePriceChange = (range) => {
    const params = new URLSearchParams(searchParams);
    if (range) {
      params.set("price", range);
    } else {
      params.delete("price");
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="space-y-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryChange(category.slug)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCategory === category.slug
                  ? "bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handlePriceChange(range.value)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activePriceRange === range.value
                  ? "bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
