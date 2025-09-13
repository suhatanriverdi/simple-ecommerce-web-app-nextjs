"use client";
import React from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import OrderHistory from "@/components/profile/OrderHistory";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        <OrderHistory />
      </div>
    </ProtectedRoute>
  );
}
