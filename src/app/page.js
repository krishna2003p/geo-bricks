'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-75"
        style={{ backgroundImage: 'url(/background.webp)' }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-4xl font-bold text-white">Real Estate Explorer 🏠</h1>
        <input
          type="text"
          placeholder="Enter city (e.g., Hyderabad)"
          className="border border-gray-300 px-4 py-2 rounded w-72"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Link href={`/city/${city}`}>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={!city}
          >
            Search Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
