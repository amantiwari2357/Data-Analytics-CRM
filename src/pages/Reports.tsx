
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { FileText, FileBarChart, FileSearch } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "Sales Report",
      description: "Monthly sales performance and trends",
      icon: FileBarChart,
      lastUpdated: "2 hours ago",
    },
    {
      title: "Customer Analysis",
      description: "Customer behavior and demographics",
      icon: FileSearch,
      lastUpdated: "1 day ago",
    },
    {
      title: "Inventory Status",
      description: "Current stock levels and movement",
      icon: FileText,
      lastUpdated: "3 hours ago",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold gradient-text">Reports</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Card key={report.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-sidebar-accent rounded-lg">
                  <report.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                  <p className="text-xs text-muted-foreground">Last updated: {report.lastUpdated}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
