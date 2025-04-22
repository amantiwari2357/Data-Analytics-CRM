
import Layout from "@/components/layout/Layout";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-8">
          <Avatar className="w-32 h-32">
            <img 
              src="https://ui-avatars.com/api/?name=Kabir+Singh&background=random" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Kabir Singh</h1>
            <p className="text-muted-foreground">Senior Sales Manager</p>
          </div>
        </div>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>kabir.singh@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button variant="outline">Edit Profile</Button>
        </div>
      </div>
    </Layout>
  );
}
