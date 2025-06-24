"use client"

import { Calendar, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Webinar {
  id: number
  title: string
  speaker: string
  date: string
  description: string
  duration: string
  image: string
  location: string
}

interface WebinarCardProps {
  webinar: Webinar
}

export function WebinarCard({ webinar }: WebinarCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    }
  }

  const { date: formattedDate, time } = formatDate(webinar.date)
  const isUpcoming = new Date(webinar.date) > new Date()

  return (
    <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 bg-white/80 border-0 shadow-lg rounded-2xl overflow-hidden backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          {isUpcoming ? (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow">
              Upcoming
            </span>
          ) : (
            <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full shadow">
              Past
            </span>
          )}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
          {webinar.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center text-gray-600 text-sm">
            <User className="w-4 h-4 mr-2 text-blue-600" />
            <span>{webinar.speaker}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span>
              {formattedDate}, {time} ({webinar.duration})
            </span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <span className="font-medium mr-2">Location:</span>
            <span>{webinar.location}</span>
          </div>
          <p className="text-gray-700 text-sm line-clamp-3 pt-2">
            {webinar.description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex flex-col gap-2">
        <Link href={`/webinars/${webinar.id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            View Details
          </Button>
        </Link>
        {isUpcoming && (
          <Link href={`/webinars/${webinar.id}/register`} className="w-full">
            <Button
              variant="outline"
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Register
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
