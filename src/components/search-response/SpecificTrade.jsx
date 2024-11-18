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


function SpecificTrade({tradeData}) {
  return (
    <DialogContent className="sm:max-w-[50vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Specific Trade Deatils</DialogTitle>
      </DialogHeader>

      <Separator />
        {
          tradeData?.map((trade) => (
            <div className='grid gap-2' key={trade.tradeId}>
                <div className='flex mt-3 items-center justify-between'>
                    <p className='font-medium'>Trade Id</p>
                    <Label>{trade?.tradeId}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between '>
                    <p className='font-medium'>Instrument Id</p>
                    <Label>{trade?.instrumentId}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between '>
                    <p className='font-medium'>Traded Volume (in Lakhs)</p>
                    <Label>{trade?.tradedVolumeLakhs}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between '>
                    <p className='font-medium'>Traded Value (in Cr)</p>
                    <Label>{trade?.tradedValueCr}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Total Market Cap (in Cr)</p>
                    <Label>{trade?.totalMarketCapCr}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>FFM Cap</p>
                    <Label>{trade?.ffmCap}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Impact Cost</p>
                    <Label>{trade?.impactCost}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Percent Deliverable Traded Quantity</p>
                    <Label>{trade?.percentDeliverableTradedQuantity}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Applicable Margin Rate</p>
                    <Label>{trade?.applicableMarginRate}</Label>
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <p className='font-medium'>Face Value</p>
                    <Label>{trade?.faceValue}</Label>
                </div>
        
                <Separator className='bg-yellow-50 mt-2'/>

            </div> 
          ))
        }

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

export default SpecificTrade