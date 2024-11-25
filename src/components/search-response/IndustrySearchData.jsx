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

function IndustrySearchData({industryAggregateData}) {
  const showData = industryAggregateData && industryAggregateData.length > 102 ? industryAggregateData.slice(0, 100) : industryAggregateData;

  return (
    <DialogContent className="sm:max-w-[50vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Industry Aggregate Details</DialogTitle>
      </DialogHeader>

      <Separator />

      {showData && showData.length > 0 ? (
        <div>
          {showData.map((data) => (
            <div className="grid gap-2" key={data.industry}>
              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Industry</p>
                <Label>{data.industry}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Trade Date</p>
                <Label>{data.tradeMonth}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Average Traded Value</p>
                <Label>{data.avgTradedValue}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Total Traded Volume</p>
                <Label>{data.totalTradedVolume}</Label>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <p className="font-medium">Max Traded Value</p>
                <Label>{data.maxTradedValue}</Label>
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
  )
}

export default IndustrySearchData