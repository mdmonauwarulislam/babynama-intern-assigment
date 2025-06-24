import Image from "next/image"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Video } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/file.svg"
              alt="Babynama Logo"
              width={80}
              height={80}
              priority
              className="mx-auto drop-shadow-lg  hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Welcome to <span className="text-purple-600">Babynama</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your trusted partner in parenting. Get expert guidance from pediatricians and child care specialists through
            live webinars and personalized support.
          </p>
          <Link href="/webinars">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg">
              View All Webinars
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center bg-white/90 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Video className="w-12 h-12 mx-auto text-pink-500 mb-4" />
              <CardTitle className="text-lg font-bold text-gray-900">Live Webinars</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Join interactive sessions with expert pediatricians and get your questions answered in real-time.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/90 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <CardTitle className="text-lg font-bold text-gray-900">Expert Speakers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Learn from experienced doctors and child care specialists who understand your parenting challenges.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/90 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Calendar className="w-12 h-12 mx-auto text-purple-500 mb-4" />
              <CardTitle className="text-lg font-bold text-gray-900">Regular Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Never miss important parenting insights with our regularly scheduled webinars on various topics.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


