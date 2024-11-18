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


function CombinedData({combinedData}) {
  return (
    <DialogContent className="sm:max-w-[50vw] max-h-[100vh] bg-gray-900 text-white overflow-auto">
      <DialogHeader>
        <DialogTitle>Combined Data Deatils</DialogTitle>
      </DialogHeader>

      <Separator />
        {
          combinedData?.map((data) => (
            <div className='grid gap-2' key={data.dataId}>
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Symbol</p>
                  <Label>{data.symbol}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Previous Close</p>
                  <Label>{data.prevClose}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">IEP</p>
                  <Label>{data.iep}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Change</p>
                  <Label>{data.chng}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Percent Change</p>
                  <Label>{data.pctChng}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Final Value</p>
                  <Label>{data.finalValue}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Final Quantity</p>
                  <Label>{data.finalQuantity}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Value</p>
                  <Label>{data.value}</Label>
                </div>

              
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">FFM Cap</p>
                  <Label>{data.ffmCap}</Label>
                </div>

                
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">52 Week High</p>
                  <Label>{data.week52High}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">52 Week Low</p>
                  <Label>{data.week52Low}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Final Price</p>
                  <Label>{data.finalPrice}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Day High</p>
                  <Label>{data.dayHigh}</Label>
                </div>

           
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Day Low</p>
                  <Label>{data.dayLow}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Upper Band</p>
                  <Label>{data.upperBand}</Label>
                </div>

                
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Lower Band</p>
                  <Label>{data.lowerBand}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Price Band</p>
                  <Label>{data.priceBand}</Label>
                </div>

        
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Daily Volatility</p>
                  <Label>{data.dailyVolatility}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Annualised Volatility</p>
                  <Label>{data.annualisedVolatility}</Label>
                </div>

             
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Tick Size</p>
                  <Label>{data.tickSize}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Long Name</p>
                  <Label>{data.longName}</Label>
                </div>

                
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Industry</p>
                  <Label>{data.industry}</Label>
                </div>

             
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Stock Exchange</p>
                  <Label>{data.stockExchange}</Label>
                </div>

             
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">PE Ratio</p>
                  <Label>{data.peRatio}</Label>
                </div>

              
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Dividend Yield</p>
                  <Label>{data.dividendYield}</Label>
                </div>

          
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">ROE</p>
                  <Label>{data.roe}</Label>
                </div>

          
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Trade ID</p>
                  <Label>{data.tradeId}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Percent Deliverable Traded Quantity</p>
                  <Label>{data.percentDeliverableTradedQuantity}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Applicable Margin Rate</p>
                  <Label>{data.applicableMarginRate}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Face Value</p>
                  <Label>{data.faceValue}</Label>
                </div>

             
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Instrument ID</p>
                  <Label>{data.instrumentId}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Traded Volume (Lakhs)</p>
                  <Label>{data.tradedVolumeLakhs}</Label>
                </div>

               
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Traded Value (Cr)</p>
                  <Label>{data.tradedValueCr}</Label>
                </div>

              
                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Total Market Cap (Cr)</p>
                  <Label>{data.totalMarketCapCr}</Label>
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <p className="font-medium">Impact Cost</p>
                  <Label>{data.impactCost}</Label>
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

export default CombinedData