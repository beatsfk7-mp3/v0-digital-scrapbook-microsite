"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Search } from "lucide-react"

interface PasscodeEntryProps {
  onUnlock: () => void
}

export function PasscodeEntry({ onUnlock }: PasscodeEntryProps) {
  const [passcode, setPasscode] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const correctPasscode = "2809" // Updated passcode from 123456 to 2809

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === correctPasscode) {
      onUnlock()
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      setPasscode("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto text-center space-y-8">
        {/* Lock Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-serif text-yellow-600 font-semibold">Enter Passcode</h1>
        </div>

        {/* Passcode Input */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`transition-transform duration-200 ${isShaking ? "animate-shake" : ""}`}>
            <Input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="text-center text-2xl tracking-widest bg-green-100 border-green-200 focus:border-green-300 focus:ring-green-200 rounded-xl py-4"
              placeholder="••••••"
              maxLength={6}
            />
          </div>

          {/* Subtitle */}
          <p className="text-yellow-600 text-sm font-medium px-4">Unlock the door to a special surprise inside!</p>

          {/* Unlock Button */}
          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
            disabled={passcode.length === 0}
          >
            <Search className="w-5 h-5 mr-2" />
            Unlock
          </Button>
        </form>
      </div>
    </div>
  )
}
