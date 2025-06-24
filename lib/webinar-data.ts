export interface Webinar {
  id: number
  title: string
  speaker: string
  date: string
  description: string
  duration: string
  image: string
  location: string
}

export const webinars: Webinar[] = [
  {
    id: 1,
    title: "Newborn Care Essentials: First 30 Days",
    speaker: "Dr. Sumitra Meena, MD (AIIMS)",
    date: "2024-09-10T10:00:00Z",
    description: "Learn the essentials of newborn care, including feeding, sleep, hygiene, and common concerns for the first month.",
    duration: "1h 30m",
    image: "/file.svg",
    location: "Online (Zoom)",
  },
  {
    id: 2,
    title: "Breastfeeding Success: Common Challenges & Solutions",
    speaker: "Dr. Priya Sharma, IBCLC",
    date: "2024-09-15T14:00:00Z",
    description: "Expert advice on overcoming breastfeeding challenges, latching techniques, and nutrition for new mothers.",
    duration: "1h",
    image: "/globe.svg",
    location: "Online (Google Meet)",
  },
  {
    id: 3,
    title: "Sleep Training for Babies: Gentle Methods That Work",
    speaker: "Dr. Rajesh Kumar, Pediatrician",
    date: "2024-06-01T11:00:00Z",
    description: "Discover gentle sleep training methods and routines to help your baby (and you) sleep better.",
    duration: "45m",
    image: "/window.svg",
    location: "Online (Zoom)",
  },
  {
    id: 4,
    title: "Introduction to Solid Foods: When and How to Start",
    speaker: "Dr. Sumitra Meena, MD (AIIMS)",
    date: "2024-06-20T15:30:00Z",
    description: "A step-by-step guide to introducing solids, recognizing readiness, and preventing allergies.",
    duration: "1h",
    image: "/vercel.svg",
    location: "Online (Webinar Platform)",
  },
  {
    id: 5,
    title: "Managing Colic & Gas in Infants",
    speaker: "Dr. Anjali Verma, Pediatric Gastroenterologist",
    date: "2025-08-20T17:00:00Z",
    description: "Tips and remedies for soothing colic and gas, and when to seek medical advice.",
    duration: "1h 15m",
    image: "/next.svg",
    location: "Online (Zoom)",
  },
  {
    id: 6,
    title: "Vaccination Myths & Facts for New Parents",
    speaker: "Dr. Suresh Gupta, Immunologist",
    date: "2026-05-10T09:00:00Z",
    description: "Debunking common myths about childhood vaccinations and understanding the recommended schedule.",
    duration: "1h",
    image: "/file.svg",
    location: "Online (Google Meet)",
  },
] 