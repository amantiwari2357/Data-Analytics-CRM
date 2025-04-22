
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Hey, just checking in about the latest update...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Smith",
    content: "The new analytics dashboard looks great!",
    time: "5 hours ago",
    unread: false,
  },
  {
    id: 3,
    sender: "Mike Johnson",
    content: "Can we schedule a meeting for tomorrow?",
    time: "1 day ago",
    unread: false,
  },
];

export default function Messages() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          <h1 className="text-2xl font-bold gradient-text">Messages</h1>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className={`p-4 ${message.unread ? 'border-l-4 border-l-primary' : ''}`}>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-semibold">{message.sender}</h3>
                  <p className="text-sm text-muted-foreground">{message.content}</p>
                </div>
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
