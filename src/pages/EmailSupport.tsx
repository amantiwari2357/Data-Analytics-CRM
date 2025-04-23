
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function EmailSupport() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6" />
          <h1 className="text-2xl font-bold gradient-text">Email Support</h1>
        </div>

        <Card className="p-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">To:</label>
              <Input value="amankumartiwari5255@gmail.com" disabled />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject:</label>
              <Input
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message:</label>
              <Textarea
                placeholder="Type your message here..."
                className="min-h-[200px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
