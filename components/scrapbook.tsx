"use client"
import { useState, useEffect } from "react"

import { SpotifyPlayer } from "@/components/spotify-player"
import { ArrowLeft } from "lucide-react"

interface ScrapbookProps {
  onBack?: () => void
  spotifyPlaylistId?: string
  spotifyPlaylistUrl?: string
}

interface ScrapbookPage {
  media: string
  type: "image" | "video"
}

export function Scrapbook({ onBack, spotifyPlaylistId, spotifyPlaylistUrl }: ScrapbookProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const scrapbookPages: ScrapbookPage[] = [
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-9OWI5rEDKTDrLMbTvwYM5KM5RpjI6O.mp4",
      type: "video",
    },
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-7Ihbw7fpYNuWHOUf75YaIVBmk89YCb.mp4",
      type: "video",
    },
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-cTPOdVyPbqwu1QBQYYvfVS9xAGJF2I.mp4",
      type: "video",
    },
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-PJ0AShAlClksiLHfQAIyJePeQPUCT1.mp4",
      type: "video",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fillOpacity='0.15'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.343-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`absolute top-4 left-4 z-10 transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div
        className={`absolute top-4 right-4 z-10 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <SpotifyPlayer playlistId={spotifyPlaylistId} playlistUrl={spotifyPlaylistUrl} />
      </div>

      <div className="relative z-0 pt-20 pb-6 px-2">
        <div className="w-full max-w-none mx-auto">
          <div className="relative">
            {scrapbookPages.map((page, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  marginTop: index > 0 ? "-4px" : "0",
                  zIndex: scrapbookPages.length - index,
                }}
              >
                <div
                  className={`relative transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="rounded-lg shadow-xl">
                    {page.type === "video" ? (
                      <video
                        src={page.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-auto rounded-md object-contain"
                        style={{
                          aspectRatio: "1080 / 1350",
                        }}
                        onLoadedData={(e) => {
                          const video = e.target as HTMLVideoElement
                          video.play().catch(() => {
                            console.log("[v0] Autoplay prevented, video will play when user interacts")
                          })
                        }}
                      />
                    ) : (
                      <img
                        src={page.media || "/placeholder.svg"}
                        alt={`Digital Scrapbook Page ${index + 1}`}
                        className="w-full h-auto rounded-md object-contain"
                        style={{
                          aspectRatio: "1080 / 1350",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
