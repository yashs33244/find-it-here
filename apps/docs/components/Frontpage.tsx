/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YpJiOxC56Hn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {Profilebutton} from "@repo/ui/components/profilebutton"

import {AvatarDemo} from "../components/Profilepic"




export default function Component() {
    return (
      <div className="flex flex-col min-h-dvh dark:bg-background-dark">
        <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 dark:bg-background-dark">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="/topics" className="group" prefetch={false}>
              <div className="bg-[#ff6b6b] dark:bg-[#ff4d4d] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#ff4d4d] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#ff6b6b] to-[#ffa500]">
                Food
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#ffa500] dark:bg-[#ff8c00] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#ff8c00] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#ffa500] to-[#9370db]">
                Web Tech
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#9370db] dark:bg-[#8b5cf6] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#8b5cf6] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#9370db] to-[#87ceeb]">
                ML
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#87ceeb] dark:bg-[#6495ed] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#6495ed] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#87ceeb] to-[#dda0dd]">
                Gaming
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#dda0dd] dark:bg-[#da70d6] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#da70d6] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#dda0dd] to-[#b0c4de]">
                Design
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#b0c4de] dark:bg-[#add8e6] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#add8e6] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#b0c4de] to-[#f0e68c]">
                Music
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#f0e68c] dark:bg-[#ffd700] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#ffd700] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#f0e68c] to-[#ff6b6b]">
                Fitness
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#ff6b6b] dark:bg-[#ff4d4d] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#ff4d4d] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#ff6b6b] to-[#ffa500]">
                Travel
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#ff6b6b] dark:bg-[#ff4d4d] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#ff4d4d] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#ff6b6b] to-[#ffa500]">
                Sports
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#ffa500] dark:bg-[#ff8c00] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#ff8c00] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#ffa500] to-[#9370db]">
                Entertainment
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#9370db] dark:bg-[#8b5cf6] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#8b5cf6] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#9370db] to-[#87ceeb]">
                Education
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-[#87ceeb] dark:bg-[#6495ed] rounded-lg p-6 flex items-center justify-center h-32 text-white text-3xl font-bold transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-[#6495ed] group-hover:border-[6px] group-hover:border-gradient-to-r from-[#87ceeb] to-[#dda0dd]">
                Business
              </div>
            </Link>
          </div>
        </main>
      </div>
    )
  }
  
