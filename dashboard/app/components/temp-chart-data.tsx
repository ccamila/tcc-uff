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

function getRandomTemperature() {
  return (Math.random() * (42 - 36) + 36).toFixed(1);
}

const chartData = 
Array.from({ length: 10 }, (_, i) => ({
  month: (i * 10),
  desktop: getRandomTemperature(),
}))

const chartConfig = {
  desktop: {
    label: "Temperatura",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function TempChartData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ chartData[chartData.length - 1].desktop }</CardTitle>
        <CardDescription>Temperatura Atual</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer  width='100%' height={270}>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
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
          </LineChart>
        </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

// "use client"

// import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "~/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "~/components/ui/chart"

// function getRandomTemperature() {
//   return (Math.random() * (42 - 36) + 36).toFixed(1) + "°C";
// }

// const chartData = 
// Array.from({ length: 500 }, (_, i) => ({
//   time: (i * 10),
//   avg: getRandomTemperature(),
//   actual: getRandomTemperature(),
// }))


// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export function TempChartData() {
//   return (
//     <>
//     { chartData[chartData.length - 1].actual }
//     <ChartContainer className="max-h-[100%] w-full" config={chartConfig}>
//           <LineChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="time"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//             />
//             <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//             <Line
//               dataKey="avg"
//               type="monotone"
//               stroke="var(--color-desktop)"
//               strokeWidth={2}
//               dot={false}
//             />
//             <Line
//               dataKey="actual"
//               type="monotone"
//               stroke="var(--color-desktop)"
//               strokeWidth={2}
//               dot={false}
//             />
//           </LineChart>
//         </ChartContainer>
//     </>
        
//   )
// }
