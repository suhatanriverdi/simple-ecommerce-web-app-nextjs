"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ProductSearch from "./ProductSearch";

export default function ProductList({ products = [] }) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on URL parameters and search query
  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const category = searchParams.get("category");
    const matchesCategory = !category || product.category === category;

    // Price filter
    const priceRange = searchParams.get("price");
    let matchesPrice = true;
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        matchesPrice = product.price >= min && product.price <= max;
      } else {
        matchesPrice = product.price >= min;
      }
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return [
      { name: "All Products", slug: "" },
      ...uniqueCategories.map((cat) => ({
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
        slug: cat,
      })),
    ];
  }, [products]);

  return (
    <div className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <ProductSearch
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full md:w-64"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-400">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
