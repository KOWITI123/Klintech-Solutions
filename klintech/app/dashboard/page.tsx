import { ArrowUpDown, Car, DollarSign, LineChart, Package, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetricCard } from "@/components/dashboard/metric-card"
import { ProgressRing } from "@/components/dashboard/progress-ring"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="ml-auto flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  All Branches <ArrowUpDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Select Branch</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>All Branches</DropdownMenuItem>
                <DropdownMenuItem>Downtown Branch</DropdownMenuItem>
                <DropdownMenuItem>Westside Branch</DropdownMenuItem>
                <DropdownMenuItem>Northside Branch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline">Download</Button>
              <Button>Refresh</Button>
            </div>
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total Revenue"
                value="$45,231.89"
                description="Total revenue across all branches"
                icon={<DollarSign className="h-4 w-4" />}
                trend={{ value: 12, isPositive: true }}
              />
              <MetricCard
                title="Customers Served"
                value="2,345"
                description="Total customers this month"
                icon={<Users className="h-4 w-4" />}
                trend={{ value: 5.2, isPositive: true }}
              />
              <MetricCard
                title="Stock Items"
                value="432"
                description="Total items in inventory"
                icon={<Package className="h-4 w-4" />}
                trend={{ value: 2.1, isPositive: false }}
              />
              <MetricCard
                title="Services Completed"
                value="1,893"
                description="Total services this month"
                icon={<Car className="h-4 w-4" />}
                trend={{ value: 8.4, isPositive: true }}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue across all branches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                    <div className="flex flex-col items-center text-center">
                      <LineChart className="mb-2 h-10 w-10 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Revenue chart will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Branch Performance</CardTitle>
                  <CardDescription>Comparison of branch performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-around">
                    <ProgressRing value={82} label="Downtown" />
                    <ProgressRing value={67} label="Westside" />
                    <ProgressRing value={45} label="Northside" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>CEO Actions</CardTitle>
                  <CardDescription>Pending approvals and actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <div className="font-medium">Price Change Requests</div>
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Premium Wash</div>
                            <div className="text-sm text-muted-foreground">Westside Branch - $24.99 to $29.99</div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Reject
                            </Button>
                            <Button size="sm">Approve</Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Custom Detailing</div>
                            <div className="text-sm text-muted-foreground">Downtown Branch - $89.99 to $99.99</div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Reject
                            </Button>
                            <Button size="sm">Approve</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link href="/employees">
                        <Button variant="outline" className="w-full">
                          View Employee Analysis
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Service Trends</CardTitle>
                  <CardDescription>Service popularity over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                    <div className="flex flex-col items-center text-center">
                      <LineChart className="mb-2 h-10 w-10 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Service trends chart will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Detailed analytics will be displayed here.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md border-dashed">
                  <p className="text-muted-foreground">Analytics content will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Generated reports will be displayed here.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md border-dashed">
                  <p className="text-muted-foreground">Reports content will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
// This code is a Next.js page component for a dashboard that displays various metrics and analytics related to a business.