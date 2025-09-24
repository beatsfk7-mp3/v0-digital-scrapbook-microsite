"use client"

import { useState } from "react"
import { PasscodeEntry } from "@/components/passcode-entry"
import { Scrapbook } from "@/components/scrapbook"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const spotifyPlaylistId = "34ND6WexlfERSGrcXgdoKU" // Your playlist ID

  // METHOD 2: Using Full URL (alternative - comment out the line above and uncomment below)
  // const spotifyPlaylistUrl = "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID_HERE"

  const handleUnlock = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsUnlocked(true)
      setIsTransitioning(false)
    }, 800)
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsUnlocked(false)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {isTransitioning && (
        <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 z-50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-yellow-600 font-serif text-lg">
              {!isUnlocked ? "Unlocking memories..." : "Returning..."}
            </p>
          </div>
        </div>
      )}

      <div className={`transition-all duration-700 ${isUnlocked ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        {!isUnlocked && <PasscodeEntry onUnlock={handleUnlock} />}
      </div>

      <div className={`transition-all duration-700 ${isUnlocked ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
        {isUnlocked && <Scrapbook onBack={handleBack} spotifyPlaylistId={spotifyPlaylistId} />}
      </div>
    </main>
  )
}
