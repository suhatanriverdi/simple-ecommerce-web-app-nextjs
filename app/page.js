import Link from "next/link";

import Image from "next/image";
import {
  FaShoppingBag,
  FaHeart,
  FaUserCircle,
  FaTruck,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="w-8 h-8 text-primary-500" />,
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
  },
  {
    icon: <FaCreditCard className="w-8 h-8 text-primary-500" />,
    title: "Secure Payment",
    description: "Safe & secure payment methods",
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-primary-500" />,
    title: "24/7 Support",
    description: "Dedicated support anytime",
  },
];

const categories = [
  {
    name: "Men's Fashion",
    slug: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop",
  },
  {
    name: "Women's Fashion",
    slug: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop",
  },
  {
    name: "Jewelry",
    slug: "jewelery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Discover Your Style
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 dark:text-white/80">
              Shop the latest trends in fashion, accessories, and more with our
              curated collection.
            </p>
            <Link
              href="/products"
            className="inline-block bg-white text-primary-600 text-black dark:text-white dark:bg-gray-800 dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/products?category=${category.slug}`}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover our amazing
            collection today.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary-600 dark:bg-gray-800 dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}
