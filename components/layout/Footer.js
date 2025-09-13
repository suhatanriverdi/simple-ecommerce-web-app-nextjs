import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              About Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We offer the best products at competitive prices. Quality and
              customer satisfaction are our top priorities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: support@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Shopping St, City</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <small>
              Created by Süha Tanrıverdi, {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
