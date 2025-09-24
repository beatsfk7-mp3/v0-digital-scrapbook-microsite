"use client"

import type React from "react"

import { Heart, Star } from "lucide-react"

export function FlowerDecoration({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="relative">
        {/* Outer petals */}
        <div className="absolute inset-0 bg-red-500 rounded-full opacity-90"></div>
        <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-600 rounded-full opacity-80"></div>
        <div className="absolute top-2 left-2 right-2 bottom-2 bg-red-400 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}

export function WashiTape({
  className = "",
  color = "pink",
  width = "w-16",
  height = "h-6",
}: {
  className?: string
  color?: "pink" | "blue" | "yellow" | "green"
  width?: string
  height?: string
}) {
  const colorClasses = {
    pink: "bg-pink-200 border-pink-300",
    blue: "bg-blue-200 border-blue-300",
    yellow: "bg-yellow-200 border-yellow-300",
    green: "bg-green-200 border-green-300",
  }

  return (
    <div className={`${width} ${height} ${colorClasses[color]} opacity-70 rounded-sm shadow-sm border ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  )
}

export function PolaroidFrame({
  children,
  caption,
  className = "",
  rotation = 0,
}: {
  children: React.ReactNode
  caption?: string
  className?: string
  rotation?: number
}) {
  return (
    <div
      className={`bg-white p-3 shadow-xl rounded-sm border border-gray-100 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
      {caption && <div className="mt-2 text-xs text-gray-600 font-handwriting text-center">{caption}</div>}
    </div>
  )
}

export function Sticker({
  type = "star",
  color = "yellow",
  size = "md",
  className = "",
}: {
  type?: "star" | "heart" | "circle" | "diamond"
  color?: "yellow" | "red" | "blue" | "green" | "pink"
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const colorClasses = {
    yellow: "text-yellow-400 fill-yellow-400",
    red: "text-red-500 fill-red-500",
    blue: "text-blue-500 fill-blue-500",
    green: "text-green-500 fill-green-500",
    pink: "text-pink-500 fill-pink-500",
  }

  if (type === "heart") {
    return <Heart className={`${sizeClasses[size]} ${colorClasses[color]} drop-shadow-md ${className}`} />
  }

  if (type === "star") {
    return <Star className={`${sizeClasses[size]} ${colorClasses[color]} drop-shadow-md ${className}`} />
  }

  if (type === "circle") {
    return (
      <div className={`${sizeClasses[size]} bg-${color}-400 rounded-full shadow-md border-2 border-white ${className}`}>
        <div className="absolute inset-2 bg-${color}-300 rounded-full"></div>
      </div>
    )
  }

  return <div className={`${sizeClasses[size]} bg-${color}-400 transform rotate-45 shadow-md ${className}`}></div>
}

export function CassetteTape({ className = "", label = "MIX" }: { className?: string; label?: string }) {
  return (
    <div className={`w-20 h-12 bg-blue-400 rounded-sm shadow-lg border border-blue-500 ${className}`}>
      <div className="flex justify-between items-center h-full px-3">
        <div className="w-4 h-4 bg-gray-800 rounded-full border border-gray-600"></div>
        <div className="flex-1 mx-2 h-0.5 bg-brown-600"></div>
        <div className="w-4 h-4 bg-gray-800 rounded-full border border-gray-600"></div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white font-mono">{label}</div>
    </div>
  )
}

export function VintageClock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-14 h-14 bg-gray-300 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-400 ${className}`}
    >
      <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-500 relative">
        {/* Clock hands */}
        <div className="absolute top-1 left-1/2 w-0.5 h-3 bg-gray-700 transform -translate-x-1/2 origin-bottom"></div>
        <div className="absolute top-1/2 left-1 w-3 h-0.5 bg-gray-700 transform -translate-y-1/2 origin-left"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* Hour markers */}
        <div className="absolute top-0.5 left-1/2 w-0.5 h-1 bg-gray-600 transform -translate-x-1/2"></div>
        <div className="absolute bottom-0.5 left-1/2 w-0.5 h-1 bg-gray-600 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0.5 w-1 h-0.5 bg-gray-600 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0.5 w-1 h-0.5 bg-gray-600 transform -translate-y-1/2"></div>
      </div>
    </div>
  )
}

export function DriedFlower({ className = "" }: { className?: string }) {
  return (
    <div className={`opacity-80 ${className}`}>
      <div className="w-2 h-16 bg-gradient-to-t from-green-700 to-green-500 rounded-full"></div>
      <div className="absolute -top-2 -left-1 w-4 h-4 bg-yellow-300 rounded-full opacity-90"></div>
      <div className="absolute -top-1 left-1 w-2 h-2 bg-orange-400 rounded-full"></div>
      {/* Small leaves */}
      <div className="absolute top-4 -left-1 w-3 h-2 bg-green-600 rounded-full transform -rotate-45 opacity-70"></div>
      <div className="absolute top-8 left-2 w-2 h-3 bg-green-600 rounded-full transform rotate-45 opacity-70"></div>
    </div>
  )
}
