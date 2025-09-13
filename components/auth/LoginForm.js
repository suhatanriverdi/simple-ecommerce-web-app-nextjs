"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push("/products");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background-light dark:bg-background-dark p-8 rounded-xl shadow-lg dark:shadow-gray-800 w-full max-w-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
        Login
      </h2>

      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm text-center">
          {error}
        </p>
      )}

      <div className="flex flex-col space-y-4">
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />

        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors font-medium"
      >
        Login
      </button>
    </form>
  );
}
