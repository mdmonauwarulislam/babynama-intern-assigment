"use client"

import { Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { webinars } from "@/lib/webinar-data"

export default function WebinarDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const webinar = webinars.find((w) => w.id === id)

  if (!webinar) {
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        Webinar not found.
      </div>
    )
  }

  const isUpcoming = new Date(webinar.date) > new Date()
  const formattedDate = new Date(webinar.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const formattedTime = new Date(webinar.date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 py-12 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-white/60 rounded-3xl shadow-2xl max-w-5xl w-full p-8 backdrop-blur-lg mx-auto animate-in fade-in zoom-in-95 duration-500">
          <button
            onClick={() => router.back()}
            className="mb-6 text-blue-600 hover:underline text-sm flex items-center gap-2"
          >
            &larr; <span>Back to Webinars</span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-4">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  width={192}
                  height={192}
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {webinar.speaker}
              </h2>
              <p className="text-purple-600">Webinar Speaker</p>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                {webinar.title}
              </h1>
              <p className="text-gray-700 mb-6 text-lg">
                {webinar.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-pink-500" />
                  <span>
                    {formattedDate}, {formattedTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-pink-500" />
                  <span>{webinar.duration}</span>
                </div>
                <div className="flex items-center gap-2 col-span-full">
                  <MapPin className="w-6 h-6 text-pink-500" />
                  <span>{webinar.location}</span>
                </div>
              </div>

              {isUpcoming ? (
                <Link href={`/webinars/${webinar.id}/register`}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full md:w-auto shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Register for Webinar
                  </Button>
                </Link>
              ) : (
                <Button
                  size="lg"
                  disabled
                  className="bg-gray-300 text-gray-500 w-full md:w-auto cursor-not-allowed"
                >
                  Registration Closed
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 