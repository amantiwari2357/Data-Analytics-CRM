
import Layout from "@/components/layout/Layout";
import TimeSeriesChart from "@/components/dashboard/TimeSeriesChart";
import LineChart from "@/components/dashboard/LineChart";
import BarChart from "@/components/dashboard/BarChart";
import { Card } from "@/components/ui/card";
import { Activity, ChartBar, ChartLine, ChartPie } from "lucide-react";
import { salesData, returnsData } from "@/data/mockData";

const analyticsCards = [
  {
    title: "Active Users",
    value: "2,420",
    change: "+12%",
    icon: Activity,
  },
  {
    title: "Sales Volume",
    value: "$14,320",
    change: "+5.2%",
    icon: ChartLine,
  },
  {
    title: "Conversion Rate",
    value: "3.8%",
    change: "+2.1%",
    icon: ChartBar,
  },
  {
    title: "Market Share",
    value: "28%",
    change: "+4.3%",
    icon: ChartPie,
  },
];

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold gradient-text">Analytics Overview</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsCards.map((card) => (
            <Card key={card.title} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                  <p className="text-sm text-green-500 mt-1">{card.change}</p>
                </div>
                <card.icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <TimeSeriesChart
              title="Revenue Trends"
              defaultFilter="Monthly"
              chart={<LineChart data={salesData} color="#8B5CF6" />}
            />
          </Card>
          
          <Card className="p-6">
            <TimeSeriesChart
              title="Customer Returns"
              defaultFilter="Monthly"
              chart={<BarChart data={returnsData} highlightIndex={3} unit="%" />}
            />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
