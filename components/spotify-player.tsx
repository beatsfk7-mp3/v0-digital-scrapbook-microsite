"use client"

import { useState } from "react"
import { Minimize2, Maximize2 } from "lucide-react"

interface SpotifyPlayerProps {
  playlistId?: string
  playlistUrl?: string
}

export function SpotifyPlayer({ playlistId, playlistUrl }: SpotifyPlayerProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  // Extract playlist ID from URL if provided
  const getPlaylistId = () => {
    if (playlistId) return playlistId
    if (playlistUrl) {
      const match = playlistUrl.match(/playlist\/([a-zA-Z0-9]+)/)
      return match ? match[1] : null
    }
    return null
  }

  const spotifyPlaylistId = getPlaylistId()

  if (!spotifyPlaylistId) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg min-w-[120px]">
        <div className="text-center text-gray-500 text-xs">
          <p>No playlist</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className={`${isMinimized ? "absolute -top-[9999px] -left-[9999px] opacity-0 pointer-events-none" : ""}`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg min-w-[250px] max-w-[300px]">
          {/* Header with minimize button */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-1.5">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-xs text-gray-500 font-medium">Playlist</div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Minimize2 className="w-3 h-3" />
            </button>
          </div>

          {/* Spotify Embed */}
          <div className="rounded-md overflow-hidden">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
              width="100%"
              height="280"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {isMinimized && (
        <div className="bg-white/95 backdrop-blur-sm rounded-full p-1.5 shadow-lg">
          <div className="flex items-center space-x-1.5">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <button
              onClick={() => setIsMinimized(false)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Maximize2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
