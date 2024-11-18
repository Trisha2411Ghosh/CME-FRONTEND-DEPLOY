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

function PrevVsFinalGraph({prevClose, finalValue}) {
  const chartData = [
    {caption: "Day", Prev_Close: prevClose, Final_Value: finalValue},
  ]
  
  const chartConfig = {
    Prev_Close: {
      label: "Prev_Close",
      color: "hsl(var(--chart-1))",
    },
    Final_Value: {
      label: "Final_Value",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Graph 3</CardTitle>
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
            <Bar dataKey="Prev_Close" fill="var(--color-Prev_Close)" radius={4} />
            <Bar dataKey="Final_Value" fill="var(--color-Final_Value)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Prev_Close vs Final_Value
        </div>
      </CardFooter>
    </Card>
  )
}

export default PrevVsFinalGraph