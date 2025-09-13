"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import orderService from "@/services/orderService";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user) return;
        const userOrders = await orderService.getUserOrders(user.id);
        setOrders(userOrders);
      } catch (err) {
        setError("Failed to load orders");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading) return <div className="text-center py-4">Loading orders...</div>;
  if (error)
    return <div className="text-red-500 text-center py-4">{error}</div>;
  if (!orders.length)
    return <div className="text-center py-4">No orders found</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>

      {orders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-600">Order #{order.id}</p>
              <p className="text-sm text-gray-600">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                order.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : order.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {order.status}
            </span>
          </div>

          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity} x ${item.price}
                  </p>
                </div>
                <p className="font-medium">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${order.total.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
