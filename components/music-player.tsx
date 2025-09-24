"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

const playlist = [
  { title: "Sweet Memories", src: "/audio/memories.mp3" },
  { title: "Golden Hour", src: "/audio/golden-hour.mp3" },
  { title: "Vintage Dreams", src: "/audio/vintage-dreams.mp3" },
  { title: "Forever Young", src: "/audio/forever-young.mp3" },
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // For demo purposes, we'll simulate audio playback
        audioRef.current.play().catch(() => {
          // If audio fails to load, simulate playback
          console.log("Audio playback simulated")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length)
    setCurrentTime(0)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length)
    setCurrentTime(0)
  }

  // Simulate audio progress for demo
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 180) {
            // 3 minutes demo duration
            nextTrack()
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    setDuration(180) // 3 minutes demo duration
  }, [currentTrack])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (isMinimized) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={togglePlay}
            className="w-8 h-8 p-0 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <button
            onClick={() => setIsMinimized(false)}
            className="text-xs text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[200px]">
      <audio ref={audioRef} />

      {/* Header with minimize button */}
      <div className="flex justify-between items-center mb-3">
        <div className="text-xs text-gray-500 font-medium">Now Playing</div>
        <button onClick={() => setIsMinimized(true)} className="text-gray-400 hover:text-gray-600 transition-colors">
          <div className="w-3 h-0.5 bg-current rounded-full"></div>
        </button>
      </div>

      {/* Track info */}
      <div className="text-center mb-4">
        <div className="text-sm font-semibold text-gray-800 mb-1 truncate">{playlist[currentTrack].title}</div>
        <div className="text-xs text-gray-500">
          Track {currentTrack + 1} of {playlist.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
          <div
            className="bg-yellow-400 h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-3">
        <Button
          size="sm"
          variant="ghost"
          onClick={prevTrack}
          className="w-9 h-9 p-0 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <SkipBack className="w-4 h-4" />
        </Button>

        <Button
          size="sm"
          variant="ghost"
          onClick={togglePlay}
          className="w-11 h-11 p-0 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </Button>

        <Button
          size="sm"
          variant="ghost"
          onClick={nextTrack}
          className="w-9 h-9 p-0 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>

      {/* Volume indicator */}
      <div className="flex items-center justify-center mt-3 space-x-1">
        <Volume2 className="w-3 h-3 text-gray-400" />
        <div className="flex space-x-0.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-0.5 h-2 rounded-full ${i <= 3 ? "bg-yellow-400" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
