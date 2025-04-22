
import Layout from "@/components/layout/Layout";
import KpiCard from "@/components/dashboard/KpiCard";
import Sparkline from "@/components/dashboard/Sparkline";
import TimeSeriesChart from "@/components/dashboard/TimeSeriesChart";
import LineChart from "@/components/dashboard/LineChart";
import BarChart from "@/components/dashboard/BarChart";
import ProductTable from "@/components/dashboard/ProductTable";
import { kpiData, salesData, returnsData, productsData } from "@/data/mockData";

export default function Index() {
  return (
    <Layout>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <KpiCard
          title="Today's Revenue"
          value={kpiData.revenue.value}
          change={kpiData.revenue.change}
          sparkline={
            <Sparkline
              data={kpiData.revenue.sparklineData}
              color="#92FE9D"
              width={80}
              height={40}
            />
          }
        />
        <KpiCard
          title="Today's Orders"
          value={kpiData.orders.value}
          change={kpiData.orders.change}
          sparkline={
            <Sparkline
              data={kpiData.orders.sparklineData}
              color="#EF4444"
              width={80}
              height={40}
            />
          }
        />
        <KpiCard
          title="Today's Visitors"
          value={kpiData.visitors.value}
          change={kpiData.visitors.change}
          sparkline={
            <Sparkline
              data={kpiData.visitors.sparklineData}
              color="#92FE9D"
              width={80}
              height={40}
            />
          }
        />
      </div>

      {/* Analytics and Returns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-card rounded-lg border p-6">
          <TimeSeriesChart
            title="Sales Performance"
            defaultFilter="Weekly"
            chart={
              <LineChart 
                data={salesData} 
                color="#8B5CF6" 
              />
            }
          />
        </div>
        <div className="bg-card rounded-lg border p-6">
          <TimeSeriesChart
            title="Returns Rate"
            filters={["Weekly", "Monthly"]}
            defaultFilter="Weekly"
            chart={
              <BarChart 
                data={returnsData} 
                highlightIndex={3} 
                unit="%" 
              />
            }
          />
        </div>
      </div>
      
      {/* Products Table */}
      <ProductTable products={productsData} />
    </Layout>
  );
}
