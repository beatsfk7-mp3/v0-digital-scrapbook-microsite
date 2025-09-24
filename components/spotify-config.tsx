"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, Save, X } from "lucide-react"

interface SpotifyConfigProps {
  currentPlaylistId?: string
  onPlaylistChange: (playlistId: string) => void
}

export function SpotifyConfig({ currentPlaylistId, onPlaylistChange }: SpotifyConfigProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [playlistInput, setPlaylistInput] = useState(currentPlaylistId || "")

  const extractPlaylistId = (input: string) => {
    // Handle Spotify URLs
    const urlMatch = input.match(/playlist\/([a-zA-Z0-9]+)/)
    if (urlMatch) return urlMatch[1]

    // Handle Spotify URIs
    const uriMatch = input.match(/spotify:playlist:([a-zA-Z0-9]+)/)
    if (uriMatch) return uriMatch[1]

    // Assume it's already a playlist ID
    return input.trim()
  }

  const handleSave = () => {
    const playlistId = extractPlaylistId(playlistInput)
    if (playlistId) {
      onPlaylistChange(playlistId)
      setIsOpen(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-20 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        title="Configure Spotify Playlist"
      >
        <Settings className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Configure Spotify Playlist</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Spotify Playlist URL or ID</label>
            <Input
              value={playlistInput}
              onChange={(e) => setPlaylistInput(e.target.value)}
              placeholder="https://open.spotify.com/playlist/34ND6WexlfERSGrcXgdoKU?si=09be4ff0c8784416"
              className="w-full"
            />
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>
              <strong>How to get your playlist:</strong>
            </p>
            <p>1. Right-click on your Spotify playlist</p>
            <p>2. Select "Share" → "Copy link to playlist"</p>
            <p>3. Paste the URL here</p>
          </div>

          <div className="flex space-x-3">
            <Button onClick={handleSave} className="flex-1 bg-green-500 hover:bg-green-600">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
