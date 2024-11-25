import React from 'react'
import { Button } from "../ui/moving-border"
import { Link } from 'react-router-dom'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { BackgroundBeams } from "../ui/background-beams";

function HeroSection() {
    const words = [
        {
          text: "Visualize",
        },
        {
          text: "Database",
        },
        {
          text: "Performance",
        },
        {
          text: "using",
        },
        {
          text: "TradingDashboard",
          className: "text-blue-500 dark:text-blue-500",
        },
    ];
  return (
    <div
    className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
          <div className="p-4 relative z-10 w-full text-center" >
            
            <div className="flex flex-col items-center justify-center">
                <TypewriterEffectSmooth words={words} />
            </div>
        
            <p className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Explore our advanced trading dashboard and elevate your data insights today. Whether you're new to trading or a seasoned analyst, join us to unlock the full potential of real-time market data and performance tools.
            </p>
            <div className="mt-5">
                <Link to="/u/dashboard">
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                    >
                    Go to Dashboard
                    </Button>
                </Link>
            </div>
          </div>
         <BackgroundBeams />
        
        </div>
  )
}

export default HeroSection