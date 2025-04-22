
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-04-22",
    status: "Processing",
    total: "$299.99",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2024-04-21",
    status: "Delivered",
    total: "$149.99",
  },
  {
    id: "ORD003",
    customer: "Mike Johnson",
    date: "2024-04-20",
    status: "Shipped",
    total: "$499.99",
  },
];

export default function Orders() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold gradient-text">Orders</h1>
        
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
}
