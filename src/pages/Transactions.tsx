
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

const transactions = [
  {
    id: 1,
    date: "2024-04-22",
    amount: "$1,234.56",
    status: "completed",
    description: "Product purchase",
  },
  {
    id: 2,
    date: "2024-04-21",
    amount: "$890.00",
    status: "pending",
    description: "Service payment",
  },
  {
    id: 3,
    date: "2024-04-20",
    amount: "$432.10",
    status: "completed",
    description: "Subscription renewal",
  },
];

export default function Transactions() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold gradient-text">Transactions</h1>
        
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
}
