import { ArrowUpDown, Check, PenLine, X } from "lucide-react"

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Pricing Management</h1>
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
        <Tabs defaultValue="services" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="pending">Pending Requests</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button>Add New Price</Button>
            </div>
          </div>
          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Service Pricing</CardTitle>
                <CardDescription>Manage pricing for individual services across all branches</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Downtown</TableHead>
                      <TableHead>Westside</TableHead>
                      <TableHead>Northside</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Basic Wash</TableCell>
                      <TableCell>$14.99</TableCell>
                      <TableCell>$12.99</TableCell>
                      <TableCell>$11.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Premium Wash</TableCell>
                      <TableCell>$24.99</TableCell>
                      <TableCell>$22.99</TableCell>
                      <TableCell>$21.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Deluxe Wash</TableCell>
                      <TableCell>$34.99</TableCell>
                      <TableCell>$32.99</TableCell>
                      <TableCell>$31.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Interior Detailing</TableCell>
                      <TableCell>$59.99</TableCell>
                      <TableCell>$54.99</TableCell>
                      <TableCell>$49.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Full Detailing</TableCell>
                      <TableCell>$89.99</TableCell>
                      <TableCell>$84.99</TableCell>
                      <TableCell>$79.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="packages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Package Pricing</CardTitle>
                <CardDescription>Manage pricing for service packages across all branches</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Package</TableHead>
                      <TableHead>Downtown</TableHead>
                      <TableHead>Westside</TableHead>
                      <TableHead>Northside</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Monthly Basic</TableCell>
                      <TableCell>$39.99</TableCell>
                      <TableCell>$34.99</TableCell>
                      <TableCell>$29.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Monthly Premium</TableCell>
                      <TableCell>$69.99</TableCell>
                      <TableCell>$64.99</TableCell>
                      <TableCell>$59.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Monthly Deluxe</TableCell>
                      <TableCell>$99.99</TableCell>
                      <TableCell>$94.99</TableCell>
                      <TableCell>$89.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Annual Basic</TableCell>
                      <TableCell>$399.99</TableCell>
                      <TableCell>$349.99</TableCell>
                      <TableCell>$299.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Annual Premium</TableCell>
                      <TableCell>$699.99</TableCell>
                      <TableCell>$649.99</TableCell>
                      <TableCell>$599.99</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
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
                <CardTitle>Pending Price Change Requests</CardTitle>
                <CardDescription>Review and approve price change requests from branch managers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Premium Wash</div>
                        <div className="text-sm text-muted-foreground">Westside Branch - $22.99 to $24.99</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Requested by: Michael Johnson - 2 days ago
                        </div>
                        <div className="mt-2 text-sm">
                          Reason: Increased operational costs and competitive market analysis
                        </div>
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
                        <div className="font-medium">Full Detailing</div>
                        <div className="text-sm text-muted-foreground">Downtown Branch - $89.99 to $99.99</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Requested by: Sarah Williams - 1 day ago
                        </div>
                        <div className="mt-2 text-sm">
                          Reason: New premium products being used and additional service features
                        </div>
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
                        <div className="font-medium">Monthly Basic Package</div>
                        <div className="text-sm text-muted-foreground">Northside Branch - $29.99 to $34.99</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Requested by: David Thompson - 3 days ago
                        </div>
                        <div className="mt-2 text-sm">
                          Reason: Aligning with other branch pricing and adding additional wash per month
                        </div>
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
        </Tabs>
      </div>
    </div>
  )
}
