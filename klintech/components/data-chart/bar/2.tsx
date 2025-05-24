"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts/es6"
import { ChartTooltip } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    total: 12000,
  },
  {
    name: "Feb",
    total: 14500,
  },
  {
    name: "Mar",
    total: 18000,
  },
  {
    name: "Apr",
    total: 16800,
  },
  {
    name: "May",
    total: 21000,
  },
  {
    name: "Jun",
    total: 25000,
  },
  {
    name: "Jul",
    total: 28000,
  },
  {
    name: "Aug",
    total: 26500,
  },
  {
    name: "Sep",
    total: 24000,
  },
  {
    name: "Oct",
    total: 22000,
  },
  {
    name: "Nov",
    total: 19500,
  },
  {
    name: "Dec",
    total: 23000,
  },
]

export default function BarChart2() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis
        dataKey="name"
        tickLine={false}
        axisLine={false}
        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        dy={10}
      />
      <YAxis
        tickLine={false}
        axisLine={false}
        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        width={40}
        tickFormatter={(value: number) => `$${value / 1000}k`}
      />
      <Tooltip
        content={({
        active,
        payload,
        }: {
        active?: boolean
        payload?: { value?: number }[]
        }) => {
        if (active && payload && payload.length) {
          return (
            <ChartTooltip>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Revenue</span>
                  </div>
                  <span className="text-xs font-medium">${payload[0].value?.toLocaleString()}</span>
                </div>
              </div>
            </ChartTooltip>
          )
        }
        return null
        }}
      />
      <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
    </BarChart>
    </ResponsiveContainer>
  )
}
