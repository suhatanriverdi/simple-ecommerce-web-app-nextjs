"use client";

import { useState, useEffect } from "react";
import ProductList from "@/components/product/ProductList";
import ProductFilter from "@/components/product/ProductFilter";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { getProducts } from "@/services/productService";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <ProductFilter />
          </div>
        </div>
        <div className="lg:col-span-3">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
