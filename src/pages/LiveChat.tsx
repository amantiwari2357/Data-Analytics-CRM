
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function LiveChat() {
  const [message, setMessage] = useState("");
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          <h1 className="text-2xl font-bold gradient-text">Live Chat Support</h1>
        </div>

        <Card className="flex flex-col h-[600px]">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm text-muted-foreground">
                  Hello! How can I help you today?
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
