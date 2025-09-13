"use client";
import { useEffect, useState } from "react";
import { orderService } from "@/services/orderService";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Image from "next/image";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await orderService.getOrders();
      setOrders(data);
    } catch (err) {
      setError("Failed to load order history");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (orders.length === 0)
    return <div className="text-gray-500">No orders found</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded-lg p-4 shadow-sm space-y-3 dark:border-gray-700"
        >
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Order Date: {new Date(order.date).toLocaleDateString()}
            </div>
            <div className="px-2 py-1 rounded text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {order.status}
            </div>
          </div>

          <div className="space-y-2">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b last:border-0 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative w-12 h-12">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2 border-t dark:border-gray-700">
            <div className="font-medium">Total:</div>
            <div className="font-bold text-lg">${order.total.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
