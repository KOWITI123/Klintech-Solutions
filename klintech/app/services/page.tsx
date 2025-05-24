import { ArrowUpDown, Car, Clock, Settings } from "lucide-react"

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
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Service Integration</h1>
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
        <Tabs defaultValue="carwash" className="space-y-4">
          <TabsList>
            <TabsTrigger value="carwash">Carwash Services</TabsTrigger>
            <TabsTrigger value="customs">Custom Services</TabsTrigger>
            <TabsTrigger value="queue">Queue Management</TabsTrigger>
          </TabsList>
          <TabsContent value="carwash" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Carwash Services</CardTitle>
                <CardDescription>Manage carwash service availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between border p-4 rounded-md">
                      <div>
                        <h3 className="font-medium">Basic Wash</h3>
                        <p className="text-sm text-muted-foreground">Quick exterior wash with soap and rinse</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-primary">Available</Badge>
                        <div className="flex items-center space-x-2">
                          <Switch id="basic-wash" defaultChecked />
                          <Label htmlFor="basic-wash">Active</Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border p-4 rounded-md">
                      <div>
                        <h3 className="font-medium">Premium Wash</h3>
                        <p className="text-sm text-muted-foreground">Exterior wash with wax and tire shine</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-primary">Available</Badge>
                        <div className="flex items-center space-x-2">
                          <Switch id="premium-wash" defaultChecked />
                          <Label htmlFor="premium-wash">Active</Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border p-4 rounded-md">
                      <div>
                        <h3 className="font-medium">Deluxe Wash</h3>
                        <p className="text-sm text-muted-foreground">
                          Complete exterior and interior cleaning with premium products
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Limited
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <Switch id="deluxe-wash" defaultChecked />
                          <Label htmlFor="deluxe-wash">Active</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="customs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Services</CardTitle>
                <CardDescription>Manage custom detailing services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between border p-4 rounded-md">
                      <div>
                        <h3 className="font-medium">Interior Detailing</h3>
                        <p className="text-sm text-muted-foreground">
                          Deep cleaning of all interior surfaces and upholstery
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-primary">Available</Badge>
                        <div className="flex items-center space-x-2">
                          <Switch id="interior-detailing" defaultChecked />
                          <Label htmlFor="interior-detailing">Active</Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border p-4 rounded-md">
                      <div>
                        <h3 className="font-medium">Exterior Detailing</h3>
                        <p className="text-sm text-muted-foreground">
                          Clay bar treatment, polish, and premium wax application
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-primary">Available</Badge>
                        <div className="flex items-center space-x-2">
                          <Switch id="exterior-detailing" defaultChecked />
                          <Label htmlFor="exterior-detailing">Active</Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border p-4 rounded-md">
                      <div>
                        <h3 className="font-medium">Full Detailing</h3>
                        <p className="text-sm text-muted-foreground">
                          Complete interior and exterior detailing with premium products
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="destructive">Unavailable</Badge>
                        <div className="flex items-center space-x-2">
                          <Switch id="full-detailing" />
                          <Label htmlFor="full-detailing">Active</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="queue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Queue Management</CardTitle>
                <CardDescription>Manage service queues across branches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Downtown Branch</div>
                        <div className="text-sm text-muted-foreground">Current Queue: 5 vehicles</div>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Estimated Wait: 35 minutes</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Settings className="h-4 w-4" /> Manage
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Car className="h-4 w-4" /> View Queue
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Westside Branch</div>
                        <div className="text-sm text-muted-foreground">Current Queue: 3 vehicles</div>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Estimated Wait: 20 minutes</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Settings className="h-4 w-4" /> Manage
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Car className="h-4 w-4" /> View Queue
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Northside Branch</div>
                        <div className="text-sm text-muted-foreground">Current Queue: 7 vehicles</div>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Estimated Wait: 50 minutes</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Settings className="h-4 w-4" /> Manage
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Car className="h-4 w-4" /> View Queue
                        </Button>
                      </div>
                    </div>
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
// This code defines a page for managing service integrations in a car wash application.
// It includes tabs for carwash services, custom services, and queue management.