
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    trend: "up" | "down";
  };
  sparkline: ReactNode;
}

export default function KpiCard({ title, value, change, sparkline }: KpiCardProps) {
  const isPositive = change.trend === "up";
  
  return (
    <div className="card-dashboard p-5 flex flex-col gap-3 animate-fade-in">
      <h3 className="text-sm text-muted-foreground">{title}</h3>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold mb-1">{value}</div>
          <div className={isPositive ? "pill-indicator-positive" : "pill-indicator-negative"}>
            {isPositive ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            <span>{Math.abs(change.value)}% from yesterday</span>
          </div>
        </div>
        
        <div className="w-20 h-12">
          {sparkline}
        </div>
      </div>
    </div>
  );
}
