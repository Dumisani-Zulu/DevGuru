"use client"

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, ClerkLoaded, ClerkLoading, SignUpButton, SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
return (
  <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
  <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] mb-8 lg:mb-0">
  <video
    className="w-full h-full object-cover rounded-md"
    autoPlay
    loop
    muted
    playsInline
    disablePictureInPicture
    controlsList="nodownload nofullscreen noremoteplayback"
    onContextMenu={(e) => e.preventDefault()}
    aria-label="Animated mascot video"
  >
    <source src="/Mascot_home.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
        Learn the basics of programming with your very own DevGuru
      </h1>
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" fallbackRedirectUrl={"/learn"} signInFallbackRedirectUrl={"/learn"}>
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" fallbackRedirectUrl={"/learn"} signUpFallbackRedirectUrl={"/learn"}>
              <Button size="lg" variant="primaryOutline">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">
              Continue Learning
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  </div>
)
}
