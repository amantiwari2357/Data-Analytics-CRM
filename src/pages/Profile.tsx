
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Senior Sales Manager",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to a backend
  };

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
            {isEditing ? (
              <Input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="text-center font-bold text-xl mb-2"
              />
            ) : (
              <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
            )}
            <p className="text-muted-foreground">{profile.role}</p>
          </div>
        </div>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              ) : (
                <span>{profile.email}</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              ) : (
                <span>{profile.phone}</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                />
              ) : (
                <span>{profile.location}</span>
              )}
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => setIsEditing(true)}>Edit Profile</Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
