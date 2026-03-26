/**
 * Features:
 * middle section that highlights and introduces product benefits
 * including four cards for each benefit
 * specially designed for landing page
 */

import React from 'react'


export default function Features() {
  return (
    <section className="bg-gray-100 dark:bg-gray-700 py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-2xl font-semibold text-center mb-12">
          Features
        </h2>

        // TODO: use feature cards here 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="h-40 bg-gray-300 dark:bg-gray-900 rounded-md" />
          <div className="h-40 bg-gray-300 dark:bg-gray-900 rounded-md" />
          <div className="h-40 bg-gray-300 dark:bg-gray-900 rounded-md" />
          <div className="h-40 bg-gray-300 dark:bg-gray-900 rounded-md" />
        </div>

      </div>
    </section>
  );
}
