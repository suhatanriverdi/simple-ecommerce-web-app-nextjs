// app/products/[id]/page.js
import { getProductById } from "@/services/productService";

export default async function ProductDetailPage({ params }) {
  const id = (await params).id;
  const product = await getProductById(id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg"
      />
      <h1 className="mt-4 text-2xl font-bold">{product.title}</h1>
      <p className="mt-2 text-gray-700">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
