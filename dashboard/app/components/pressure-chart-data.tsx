"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription, CardHeader,
  CardTitle
} from "~/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"

function getRandomSistole() {
  return (Math.random() * (140 - 90) + 90).toFixed(1);
}

function getRandomDiastole() {
  return (Math.random() * (90 - 60) + 60).toFixed(1);
}

const chartData = 
Array.from({ length: 10 }, (_, i) => ({
  month: (i * 10),
  desktop: getRandomSistole() ,
  mobile: getRandomDiastole()
}))

const chartConfig = {
  desktop: {
    label: "Sístole",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Díastole",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PressureChartData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ chartData[chartData.length - 1].desktop }/{ chartData[chartData.length - 1].mobile }</CardTitle>
        <CardDescription>Pressão Arterial</CardDescription>
      </CardHeader>
      <CardContent className="recharts-wrapper">
      <ResponsiveContainer  width='100%' height={300}>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 100, right: 30, left: 30, bottom: 5,
          }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
                        <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}