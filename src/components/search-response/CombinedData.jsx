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

import { Label } from '../ui/label'
import { Separator } from '../ui/separator'


function CombinedData({ combinedData }) {
  const showData = combinedData && combinedData.length > 102 ? combinedData.slice(0, 100) : combinedData;

  return (
    <DialogContent className="sm:max-w-[50vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Combined Data Details</DialogTitle>
      </DialogHeader>

      <Separator />

      {showData && showData.length > 0 ? (
        <div>
          {showData.map((data) => (
            <div className="grid gap-2" key={data.instrumentId}>
              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Instrument ID</p>
                <Label>{data.instrumentId}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Trade Date</p>
                <Label>{data.tradeDate}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Average Price</p>
                <Label>{data.avgPrice}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Total Volume</p>
                <Label>{data.totalVolume}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Max Price</p>
                <Label>{data.maxPrice}</Label>
              </div>

              <Separator className="bg-yellow-50 mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <DialogDescription className="text-center">No Data Found</DialogDescription>
      )}

      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary" className="rounded-xl bg-red-600 hover:bg-red-950">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default CombinedData;
