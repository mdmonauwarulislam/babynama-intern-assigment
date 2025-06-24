"use client"

import Link from "next/link"

import { WebinarCard } from "@/components/webinar-card"
import { Webinar, webinars } from "@/lib/webinar-data"

function splitWebinars(webinars: Webinar[]) {
  const now = new Date()
  const upcoming = webinars
    .filter((w) => new Date(w.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const past = webinars
    .filter((w) => new Date(w.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return { upcoming, past }
}

export default function WebinarsPage() {
  const { upcoming, past } = splitWebinars(webinars)
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline text-sm">&larr; Back to Home</Link>
        </div>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">Webinars</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join our expert pediatricians and child care specialists for live sessions designed to help you navigate your parenting journey with confidence.
          </p>
        </div>

        {/* Upcoming Webinars Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center flex items-center justify-center gap-2">
            <span>Upcoming Webinars</span>
          </h2>
          {upcoming.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {upcoming.map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 text-lg">No upcoming webinars. Please check back soon!</div>
          )}
        </section>

        {/* Past Webinars Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
            <span>Past Webinars</span>
          </h2>
          {past.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {past.map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12 text-lg">No past webinars yet.</div>
          )}
        </section>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500">
            All webinars are conducted live and include Q&amp;A sessions with our experts.
          </p>
        </div>
      </div>
    </div>
  )
}
