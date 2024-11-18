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


function SpecificInstrument({instrumentData}) {
  return (
    <DialogContent className="sm:max-w-[50vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Specific Instrument Deatils</DialogTitle>
      </DialogHeader>

      <Separator />

          <div className='grid gap-2'>
              <div className='flex mt-3 items-center justify-between'>
                  <p className='font-medium'>Instrument Id</p>
                  <Label>{instrumentData?.instrumentId}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between '>
                  <p className='font-medium'>Week 52 High</p>
                  <Label>{instrumentData?.week52High}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between '>
                  <p className='font-medium'>Week 52 Low</p>
                  <Label>{instrumentData?.week52Low}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between '>
                  <p className='font-medium'>Upper Band</p>
                  <Label>{instrumentData?.upperBand}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Lower Band</p>
                  <Label>{instrumentData?.lowerBand}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Price Band</p>
                  <Label>{instrumentData?.priceBand}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Daily Volatility</p>
                  <Label>{instrumentData?.dailyVolatility}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Annualised Volatility</p>
                  <Label>{instrumentData?.annualisedVolatility}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Tick Size</p>
                  <Label>{instrumentData?.tickSize}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Long Name</p>
                  <Label>{instrumentData?.longName}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Industry</p>
                  <Label>{instrumentData?.industry}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Stock Exchange</p>
                  <Label>{instrumentData?.stockExchange}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>PE Ratio</p>
                  <Label>{instrumentData?.peRatio}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>Dividend Yield</p>
                  <Label>{instrumentData?.dividendYield}</Label>
              </div>
              <div className='flex mt-2 items-center justify-between'>
                  <p className='font-medium'>ROE</p>
                  <Label>{instrumentData?.roe}</Label>
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

export default SpecificInstrument