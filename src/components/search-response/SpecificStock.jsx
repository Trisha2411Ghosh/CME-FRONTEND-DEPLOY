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

function SpecificStock({stockData}) {
  return (
    <DialogContent className="sm:max-w-[50vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Specific Stock Deatils</DialogTitle>
      </DialogHeader>

      <Separator />

            <div className='grid gap-2'>
                <div className='flex mt-3 items-center justify-between'>
                    <p className='font-medium'>Symbol</p>
                    <Label>{stockData?.symbol}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between '>
                    <p className='font-medium'>Previous Close</p>
                    <Label>{stockData?.prevClose}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between '>
                    <p className='font-medium'>IEP</p>
                    <Label>{stockData?.iep}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between '>
                    <p className='font-medium'>Change</p>
                    <Label>{stockData?.chng}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Final Value</p>
                    <Label>{stockData?.finalValue}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Final Quantity</p>
                    <Label>{stockData?.finalQuantity}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Final Value</p>
                    <Label>{stockData?.finalValue}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Value</p>
                    <Label>{stockData?.value}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>FFM Cap</p>
                    <Label>{stockData?.ffmCap}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Week 52 High</p>
                    <Label>{stockData?.week52High}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Week 52 Low</p>
                    <Label>{stockData?.week52Low}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Final Price</p>
                    <Label>{stockData?.finalPrice}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Day High</p>
                    <Label>{stockData?.dayHigh}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Day Low</p>
                    <Label>{stockData?.dayLow}</Label>
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

export default SpecificStock