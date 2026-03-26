/**
 * CTA section :
 * Used in landing page to 
 */

import React from 'react'

export default function CTA() {
  return (
    <section className="bg-gray-400 dark:bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-black dark:text-white">
        <h2 className="text-4xl font-bold mb-6">
         Start now !
        </h2>

        <p className="mb-8 text-lg opacity-90">
          Make your student life easier with us
        </p>

        {/* TODO: add link button to login  */}
        <button className="px-8 py-3 bg-white dark:bg-black text-black dark:text-white 
        font-semibold rounded-full hover:bg-gray-200 transition">
         Start with one click
        </button>

      </div>
    </section>
  );
}
