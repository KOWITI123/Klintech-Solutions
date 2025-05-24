import { ArrowUpDown, Calendar, Check, Clock, Search, X } from "lucide-react"

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
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function BookingsPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Booking Management</h1>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search bookings..." className="w-full pl-8" />
            </div>
          </div>
          <Button>Create Booking</Button>
        </div>
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>View and manage upcoming confirmed bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Smith</TableCell>
                      <TableCell>Premium Wash</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>May 24, 2023</span>
                          <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                          <span>10:30 AM</span>
                        </div>
                      </TableCell>
                      <TableCell>Downtown</TableCell>
                      <TableCell>
                        <Badge className="bg-primary">Confirmed</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emily Johnson</TableCell>
                      <TableCell>Full Detailing</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>May 24, 2023</span>
                          <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                          <span>1:00 PM</span>
                        </div>
                      </TableCell>
                      <TableCell>Westside</TableCell>
                      <TableCell>
                        <Badge className="bg-primary">Confirmed</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Michael Brown</TableCell>
                      <TableCell>Basic Wash</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>May 25, 2023</span>
                          <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                          <span>9:15 AM</span>
                        </div>
                      </TableCell>
                      <TableCell>Northside</TableCell>
                      <TableCell>
                        <Badge className="bg-primary">Confirmed</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approval</CardTitle>
                <CardDescription>Bookings that require manager approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Sarah Williams</div>
                        <div className="text-sm text-muted-foreground">Custom Detailing - Downtown Branch</div>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>May 26, 2023</span>
                          <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                          <span>2:30 PM</span>
                        </div>
                        <div className="mt-2 text-sm">Special request: Focus on leather seats and dashboard</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <X className="h-4 w-4" /> Reject
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Check className="h-4 w-4" /> Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Robert Davis</div>
                        <div className="text-sm text-muted-foreground">Premium Wash + Wax - Westside Branch</div>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>May 27, 2023</span>
                          <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                          <span>11:00 AM</span>
                        </div>
                        <div className="mt-2 text-sm">Special request: New car, extra care needed</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <X className="h-4 w-4" /> Reject
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Check className="h-4 w-4" /> Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Bookings</CardTitle>
                <CardDescription>History of completed services</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Jennifer Lee</TableCell>
                      <TableCell>Deluxe Wash</TableCell>
                      <TableCell>May 22, 2023 - 2:00 PM</TableCell>
                      <TableCell>Downtown</TableCell>
                      <TableCell>Carlos Rodriguez</TableCell>
                      <TableCell className="text-right">$34.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">David Wilson</TableCell>
                      <TableCell>Interior Detailing</TableCell>
                      <TableCell>May 22, 2023 - 10:30 AM</TableCell>
                      <TableCell>Westside</TableCell>
                      <TableCell>Maria Garcia</TableCell>
                      <TableCell className="text-right">$54.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Thomas Anderson</TableCell>
                      <TableCell>Basic Wash</TableCell>
                      <TableCell>May 21, 2023 - 3:45 PM</TableCell>
                      <TableCell>Northside</TableCell>
                      <TableCell>James Wilson</TableCell>
                      <TableCell className="text-right">$11.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Lisa Martinez</TableCell>
                      <TableCell>Full Detailing</TableCell>
                      <TableCell>May 21, 2023 - 9:00 AM</TableCell>
                      <TableCell>Downtown</TableCell>
                      <TableCell>Carlos Rodriguez</TableCell>
                      <TableCell className="text-right">$89.99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Booking Analytics</CardTitle>
                <CardDescription>Insights into booking patterns and peak times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Booking Analytics</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Detailed analytics about booking patterns and peak times will be displayed here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
