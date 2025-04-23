
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HelpCircle, LifeBuoy, Mail } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Support() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <LifeBuoy className="h-6 w-6" />
          <h1 className="text-2xl font-bold gradient-text">Help & Support</h1>
        </div>

        <Alert>
          <HelpCircle className="h-4 w-4" />
          <AlertTitle>Need assistance?</AlertTitle>
          <AlertDescription>
            Our support team is here to help you 24/7. Check out our FAQs or contact us directly.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">How do I reset my password?</h3>
                <p className="text-sm text-muted-foreground">
                  Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">How do I update my profile?</h3>
                <p className="text-sm text-muted-foreground">
                  Go to Settings > Profile and click on the Edit Profile button to update your information.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">How can I export my data?</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate to Reports, select the date range, and click on the Export button to download your data.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Support</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Can't find what you're looking for? Our support team is ready to assist you.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
                
                <Button className="w-full" variant="outline">
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
              </div>

              <div className="rounded-lg bg-muted p-4 mt-6">
                <h3 className="font-medium mb-2">Support Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
