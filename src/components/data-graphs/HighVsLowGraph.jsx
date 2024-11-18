import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"


function HighVsLowGraph({high, low}) {
  const chartData = [
    {caption: "WEEK_52", High: high, Low: low},
  ]
  
  const chartConfig = {
    High: {
      label: "High",
      color: "hsl(var(--chart-1))",
    },
    Low: {
      label: "Low",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Graph 1</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="caption"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="High" fill="var(--color-High)" radius={4} />
            <Bar dataKey="Low" fill="var(--color-Low)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Week_52_High vs Week_52_Low
        </div>
      </CardFooter>
    </Card>
  )
}

export default HighVsLowGraph