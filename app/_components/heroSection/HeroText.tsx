import React from 'react'
import { TbSparkles } from 'react-icons/tb'

export default function HeroText() {
  return (
    <div className="max-w-2xl font-sans text-left">
      <h1 className="text-6xl font-extrabold text-[#111222] leading-tight tracking-tight mb-6">
        Wire your ideas<br />
        with <span className="text-[#ff0072]">React Flow</span>
      </h1>
      
      <p className="text-2xl text-[#111222] font-medium leading-relaxed mb-8">
        A customizable React component for building<br />
        node-based editors and interactive diagrams
      </p>

      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff0072] text-white font-semibold text-lg hover:bg-[#e60066] transition-colors shadow-sm">
          <TbSparkles size={20} />
          Quickstart
        </button>
        
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#ff0072] font-semibold text-lg border-2 border-[rgba(255,0,114,0.3)] hover:border-[#ff0072] transition-colors shadow-sm">
          <TbSparkles size={20} />
          React Flow Pro
        </button>
      </div>
    </div>
  )
}
