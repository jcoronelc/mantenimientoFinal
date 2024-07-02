/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      primary: '#172554',
      'blue-50': '#eff6ff',
      'blue-100': '#dbeafe',
      'blue-200': '#bfdbfe',
      'blue-300': '#93c5fd',
      'blue-400': '#60a5fa',
      'blue-500': '#3b82f6',
      'blue-600': '#2563eb',
      'blue-700': '#1d4ed8',
      'blue-800': '#1e40af',
      'blue-900': '#1e3a8a',

        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
        'gray-950': '#030712',
        transparent: 'transparent',
      

      'red-700': '#ef0f09',
      'red-600': '#ef0f26',
      'red-200': '#E61610',
      'red-50': '#fff1f0' ,
      'red-25': '#E616104D',
      
      'green-200': '#72BB53',
      'green-50': '#72BB534D',
      'green-600': '#16a34a',

      'orange-200': '#FFA834',
      'orange-50': '#FFA8344D',
      'orange-600': '#ea580c',

      'purple-600': '#9333ea',
      'purple-50': '#faf5ff',




    },

  },
  plugins: [],
}