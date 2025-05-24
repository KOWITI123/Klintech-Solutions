"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts/es6"
import { ChartTooltip } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    basic: 400,
    premium: 240,
    deluxe: 180,
  },
  {
    name: "Feb",
    basic: 420,
    premium: 280,
    deluxe: 190,
  },
  {
    name: "Mar",
    basic: 450,
    premium: 320,
    deluxe: 230,
  },
  {
    name: "Apr",
    basic: 480,
    premium: 350,
    deluxe: 260,
  },
  {
    name: "May",
    basic: 520,
    premium: 390,
    deluxe: 290,
  },
  {
    name: "Jun",
    basic: 580,
    premium: 420,
    deluxe: 340,
  },
  {
    name: "Jul",
    basic: 600,
    premium: 450,
    deluxe: 380,
  },
  {
    name: "Aug",
    basic: 620,
    premium: 470,
    deluxe: 400,
  },
  {
    name: "Sep",
    basic: 590,
    premium: 460,
    deluxe: 390,
  },
  {
    name: "Oct",
    basic: 560,
    premium: 440,
    deluxe: 370,
  },
  {
    name: "Nov",
    basic: 540,
    premium: 420,
    deluxe: 350,
  },
  {
    name: "Dec",
    basic: 580,
    premium: 450,
    deluxe: 380,
  },
]

export default function LineChart4() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
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
        />
        <Tooltip
          content={({
            active,
            payload,
          }: {
            active?: boolean
            payload?: Array<{
              dataKey?: string
              value?: number
              [key: string]: unknown
            }>
          }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    {payload.map((entry) => (
                      <div key={entry.dataKey} className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor:
                                entry.dataKey === "basic"
                                  ? "hsl(var(--primary))"
                                  : entry.dataKey === "premium"
                                    ? "hsl(var(--muted))"
                                    : "hsl(var(--accent))",
                            }}
                          />
                          <span className="text-xs font-medium capitalize text-muted-foreground">
                            {entry.dataKey} Wash
                          </span>
                        </div>
                        <span className="text-xs font-medium">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                </ChartTooltip>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="basic"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          activeDot={{ r: 6, style: { fill: "hsl(var(--primary))" } }}
        />
        <Line
          type="monotone"
          dataKey="premium"
          stroke="hsl(var(--muted))"
          strokeWidth={2}
          activeDot={{ r: 6, style: { fill: "hsl(var(--muted))" } }}
        />
        <Line
          type="monotone"
          dataKey="deluxe"
          stroke="hsl(var(--accent))"
          strokeWidth={2}
          activeDot={{ r: 6, style: { fill: "hsl(var(--accent))" } }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
