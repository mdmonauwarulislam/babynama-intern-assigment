"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"

// Re-using the same data structure for context
const webinars = [
  {
    id: 1,
    title: "Newborn Care Essentials: First 30 Days",
  },
  {
    id: 2,
    title: "Breastfeeding Success: Common Challenges & Solutions",
  },
  {
    id: 3,
    title: "Sleep Training for Babies: Gentle Methods That Work",
  },
  {
    id: 4,
    title: "Introduction to Solid Foods: When and How to Start",
  },
  {
    id: 5,
    title: "Managing Colic & Gas in Infants",
  },
  {
    id: 6,
    title: "Vaccination Myths & Facts for New Parents",
  },
]

export default function WebinarRegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const router = useRouter()
  const params = useParams()
  const id = Number(params.id)
  const webinar = webinars.find((w) => w.id === id)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white/90 rounded-2xl shadow-2xl max-w-md w-full p-8 backdrop-blur-sm">
        <button onClick={() => router.back()} className="mb-4 text-blue-600 hover:underline text-sm">&larr; Back to Details</button>
        {!submitted ? (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Register for</h1>
            <p className="text-purple-700 font-semibold text-lg mb-6">{webinar?.title || "Webinar"}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Full Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email Address</label>
                <input id="email" type="email" required className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">Complete Registration</Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="mb-4 text-gray-700">Thank you, <span className="font-semibold text-purple-700">{name}</span>! A confirmation has been sent to your email.</p>
            <Button onClick={() => router.push(`/webinars/${id}`)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-lg">Return to Webinar Details</Button>
          </div>
        )}
      </div>
    </div>
  )
} 