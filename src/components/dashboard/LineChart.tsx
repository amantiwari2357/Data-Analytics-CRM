
interface LineChartProps {
  data: {
    month: string;
    value: number;
    target?: number;
  }[];
  color?: string;
}

export default function LineChart({ data, color = "#8B5CF6" }: LineChartProps) {
  // Get min and max values for scaling
  const allValues = data.flatMap(item => [item.value, item.target || 0]);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const range = maxValue - minValue;
  
  // Calculate positions for the SVG path
  const getPath = (values: number[]): string => {
    let path = "";
    
    values.forEach((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 100 - ((value - minValue) / range) * 100;
      
      if (index === 0) {
        path += `M${x},${y}`;
      } else {
        // Use curve for smoother lines
        const prevX = ((index - 1) / (values.length - 1)) * 100;
        const cpX1 = prevX + (x - prevX) / 3;
        const cpX2 = prevX + 2 * (x - prevX) / 3;
        path += `C${cpX1},${y} ${cpX2},${y} ${x},${y}`;
      }
    });
    
    return path;
  };

  const mainPath = getPath(data.map(item => item.value));
  const targetPath = getPath(data.map(item => item.target || 0));

  const formatValue = (value: number) => {
    return `${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex justify-between text-xs text-muted-foreground mb-2">
        {[0.75, 0.5, 0.25].map((fraction, index) => (
          <div key={index}>{formatValue(maxValue * fraction)}</div>
        ))}
      </div>
      
      <div className="flex-1 relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="border-t border-border/30 w-full h-0"></div>
          ))}
        </div>
        
        {/* Chart */}
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92FE9D" />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={color} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          
          {/* Target line */}
          {data[0].target && (
            <path
              d={targetPath}
              fill="none"
              stroke="#94A3B8"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="opacity-50"
            />
          )}
          
          {/* Main line */}
          <path
            d={mainPath}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-md"
          />
          
          {/* Area under the line */}
          <path
            d={`${mainPath} L100,100 L0,100 Z`}
            fill="url(#areaGradient)"
          />
          
          {/* Data points */}
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - ((item.value - minValue) / range) * 100;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                fill="#fff"
                stroke={color}
                strokeWidth="2"
                className="hover:r-3 transition-all duration-200"
              />
            );
          })}
        </svg>
      </div>
      
      <div className="flex justify-between mt-2">
        {data.map((item, index) => (
          <div key={index} className="text-xs text-muted-foreground">
            {item.month}
          </div>
        ))}
      </div>
    </div>
  );
}
