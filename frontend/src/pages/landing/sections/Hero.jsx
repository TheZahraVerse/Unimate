/**
 * Hero Section:
 * main banner(first look)
 * including welcome text and CTA button to start
 * specially designed for landing page 
 */

import React from 'react'
import ActionButton from '../../../components/UI/ActionButton'

export default function Hero() {
  return (
    <section className="bg-gray-200 min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h1 className="text-6xl font-bold mb-6">WELCOME</h1>
        <p className="text-2xl text-gray-700">START</p>
        {/* TODO: add link button to log in */}
      </div>
    </section>
  );
}
