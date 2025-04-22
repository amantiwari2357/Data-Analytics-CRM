
import Layout from "@/components/layout/Layout";
import TimeSeriesChart from "@/components/dashboard/TimeSeriesChart";
import LineChart from "@/components/dashboard/LineChart";
import BarChart from "@/components/dashboard/BarChart";
import { Card } from "@/components/ui/card";
import { salesData, returnsData } from "@/data/mockData";

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold gradient-text">Analytics Overview</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <TimeSeriesChart
              title="Revenue Trends"
              defaultFilter="Monthly"
              chart={<LineChart data={salesData} />}
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
