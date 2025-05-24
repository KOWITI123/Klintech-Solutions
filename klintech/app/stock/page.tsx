import { ArrowUpDown, Package, Plus, Search } from "lucide-react"

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

export default function StockPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Stock Management</h1>
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
              <Input type="search" placeholder="Search inventory..." className="w-full pl-8" />
            </div>
          </div>
          <Button className="gap-1">
            <Plus className="h-4 w-4" /> Add Item
          </Button>
        </div>
        <Tabs defaultValue="inventory" className="space-y-4">
          <TabsList>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Inventory</CardTitle>
                <CardDescription>Manage your inventory across all branches</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Downtown</TableHead>
                      <TableHead>Westside</TableHead>
                      <TableHead>Northside</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Premium Soap</TableCell>
                      <TableCell>Cleaning</TableCell>
                      <TableCell>45 units</TableCell>
                      <TableCell>32 units</TableCell>
                      <TableCell>28 units</TableCell>
                      <TableCell>
                        <Badge className="bg-primary">In Stock</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Wax Coating</TableCell>
                      <TableCell>Finishing</TableCell>
                      <TableCell>12 units</TableCell>
                      <TableCell>8 units</TableCell>
                      <TableCell>5 units</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Low Stock
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Microfiber Cloths</TableCell>
                      <TableCell>Supplies</TableCell>
                      <TableCell>120 units</TableCell>
                      <TableCell>95 units</TableCell>
                      <TableCell>85 units</TableCell>
                      <TableCell>
                        <Badge className="bg-primary">In Stock</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tire Shine</TableCell>
                      <TableCell>Finishing</TableCell>
                      <TableCell>18 units</TableCell>
                      <TableCell>14 units</TableCell>
                      <TableCell>2 units</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Low Stock
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Interior Cleaner</TableCell>
                      <TableCell>Cleaning</TableCell>
                      <TableCell>0 units</TableCell>
                      <TableCell>2 units</TableCell>
                      <TableCell>0 units</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Out of Stock</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="low-stock" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Alerts</CardTitle>
                <CardDescription>Items that need to be restocked soon</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Current Stock</TableHead>
                      <TableHead>Minimum Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Wax Coating</TableCell>
                      <TableCell>Northside</TableCell>
                      <TableCell>5 units</TableCell>
                      <TableCell>10 units</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Low Stock
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">Order</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tire Shine</TableCell>
                      <TableCell>Northside</TableCell>
                      <TableCell>2 units</TableCell>
                      <TableCell>10 units</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Low Stock
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">Order</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Interior Cleaner</TableCell>
                      <TableCell>Downtown</TableCell>
                      <TableCell>0 units</TableCell>
                      <TableCell>15 units</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Out of Stock</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">Order</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Interior Cleaner</TableCell>
                      <TableCell>Northside</TableCell>
                      <TableCell>0 units</TableCell>
                      <TableCell>15 units</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Out of Stock</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">Order</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Glass Cleaner</TableCell>
                      <TableCell>Westside</TableCell>
                      <TableCell>8 units</TableCell>
                      <TableCell>10 units</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Low Stock
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">Order</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Analytics</CardTitle>
                <CardDescription>Track inventory turnover and usage patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Inventory Analytics</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Detailed analytics about inventory turnover and usage will be displayed here
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

