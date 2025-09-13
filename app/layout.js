import { Poiret_One } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export const metadata = {
  title: "Simple Ecommerce Web App",
  description:
    "A modern, full-featured e-commerce web application built with Next.js 15, React, and Tailwind CSS. Features include product browsing, cart management, user authentication, wishlist functionality, and order tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poiretOne.className} antialiased min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-gray-100`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                  </main>
                  <Footer />
                </div>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
