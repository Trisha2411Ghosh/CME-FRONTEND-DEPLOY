import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../lib/utils";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Button } from "../ui/button";
import { ScanEye, Search } from "lucide-react";

function DasboardHero({onButtonOneClick, onButtonTwoClick}) {
  return (
    <div className="h-[35rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      
      <h1 className={cn("h-[96px] text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 z-20 mb-6")}>
        Welcome to TradingDashboard
      </h1>
      
      <div className="flex items-center justify-center gap-4">
          <HoverBorderGradient>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
              onClick={onButtonOneClick}
            >
              View Data
              <ScanEye />
            </Button>
          </HoverBorderGradient>
          
          <HoverBorderGradient>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
              onClick={onButtonTwoClick}
            >
              Search By Symbol
              <Search />
            </Button>
          </HoverBorderGradient>
      </div>
    </div>
  );
}

export default DasboardHero;
