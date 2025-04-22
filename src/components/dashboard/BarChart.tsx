
interface BarChartProps {
  data: {
    label: string;
    value: number;
  }[];
  maxValue?: number;
  highlightIndex?: number;
  unit?: string;
}

export default function BarChart({ 
  data, 
  maxValue: customMaxValue, 
  highlightIndex,
  unit = ""
}: BarChartProps) {
  // Calculate maxValue from data if not provided
  const maxValue = customMaxValue || Math.max(...data.map(item => item.value)) * 1.2;
  
  // Function to generate bar height percentage
  const getBarHeight = (value: number): string => {
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <div className="flex items-end h-full w-full gap-2 pt-6">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="w-full flex flex-col items-center">
            {index === highlightIndex && (
              <div className="mb-2 text-xs font-medium bg-accent/20 text-accent px-2 py-0.5 rounded-md">
                {item.value}{unit}%
              </div>
            )}
            <div className="w-full bg-secondary/20 rounded-t-sm relative">
              <div
                style={{ height: getBarHeight(item.value) }}
                className={`w-full ${
                  index === highlightIndex
                    ? "bg-gradient-to-t from-accent/50 to-accent"
                    : "bg-accent/40"
                } rounded-t-sm transition-all duration-500 ease-out`}
              ></div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-2">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
