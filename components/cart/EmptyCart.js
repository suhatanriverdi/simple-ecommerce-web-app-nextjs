import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <div className="max-w-md mx-auto py-12">
        <div className="mb-6">
          <svg
            className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Your cart is empty
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Looks like you haven&#39;t added anything to your cart yet.
        </p>
        <Link
          href="/products"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
