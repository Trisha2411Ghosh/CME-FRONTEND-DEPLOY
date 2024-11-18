import React from 'react'
import { Button } from "../ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import PrevVsFinalGraph from '../data-graphs/PrevVsFinalGraph'
import HighVsLowGraph from '../data-graphs/HighVsLowGraph'
import DayHighVsLowVsFinalGraph from '../data-graphs/DayHighVsLowVsFinalGraph'

function TradeDetailsDialog({tradeDataDetails}) {
  const High = tradeDataDetails.week52High;
  const Low = tradeDataDetails.week52Low;

  const dayHigh = tradeDataDetails.dayHigh;
  const dayLow = tradeDataDetails.dayLow;
  const dayFinal = tradeDataDetails.finalPrice;

  const prevClose = tradeDataDetails.prevClose;
  const finalValue = tradeDataDetails.finalValue;

  return (
    <DialogContent className="sm:max-w-[90vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Explore Graphs</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 w-full gap-3">
          <div className="w-full">
            <HighVsLowGraph high={High} low={Low} />
          </div>
          <div className="w-full">
            <DayHighVsLowVsFinalGraph dayHigh={dayHigh} dayLow={dayLow} dayFinal={dayFinal} />
          </div>
          <div className="w-full">
            <PrevVsFinalGraph prevClose={prevClose} finalValue={finalValue} />
          </div>
        </div>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary" className="rounded-xl bg-red-600 hover:bg-red-950">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>


  )
}

export default TradeDetailsDialog