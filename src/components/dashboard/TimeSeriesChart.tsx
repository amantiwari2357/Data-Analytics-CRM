
import { useState } from "react";

type TimeFilter = "Daily" | "Weekly" | "Monthly" | "Yearly";

interface TimeSeriesChartProps {
  title: string;
  filters?: TimeFilter[];
  defaultFilter?: TimeFilter;
  chart: React.ReactNode;
}

export default function TimeSeriesChart({ 
  title, 
  filters = ["Daily", "Weekly", "Monthly", "Yearly"], 
  defaultFilter = "Yearly",
  chart 
}: TimeSeriesChartProps) {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>(defaultFilter);

  return (
    <div className="card-dashboard p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        
        <div className="flex items-center gap-1 bg-secondary/30 rounded-md p-0.5">
          {filters.map(filter => (
            <button
              key={filter}
              className={`time-filter-button ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-64">
        {chart}
      </div>
    </div>
  );
}
