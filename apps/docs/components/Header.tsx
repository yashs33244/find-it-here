"use client"
import Link from "next/link";
import { Profile } from "./Profile";
import {ModeToggle} from "@repo/ui/components/Toggle"
import { AvatarDemo } from "./Profilepic";
import { useSession } from 'next-auth/react';
import { Button } from "@repo/ui/components/ui/button";


export default function Header() {
  const { data: session, status: sessionStatus } = useSession();
  if(session?.user){
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-background-dark shadow-sm">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="w-6 h-6 text-primary-foreground-dark" />
            <span className="text-xl font-bold text-primary-foreground-dark">FIndIThere</span>
          </Link>
          <div className="flex items-center gap-4">
            <Profile/>
            <ModeToggle/>
            
          </div>
           
        </header>
    )
  }
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-background-dark shadow-sm">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="w-6 h-6 text-primary-foreground-dark" />
            <span className="text-xl font-bold text-primary-foreground-dark">FIndIThere</span>
          </Link>
          <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/api/auth/signin">Login</Link>
          </Button>
          </div>
           
        </header>
    )
}

function BookIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }