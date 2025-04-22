
interface LineChartProps {
  data: {
    month: string;
    value: number;
  }[];
  color?: string;
}

export default function LineChart({ data, color = "#00C9FF" }: LineChartProps) {
  // Get min and max values for scaling
  const values = data.map(item => item.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = maxValue - minValue;
  
  // Calculate positions for the SVG path
  const getPath = (): string => {
    let path = "";
    
    data.forEach((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((item.value - minValue) / range) * 100;
      
      if (index === 0) {
        path += `M${x},${y}`;
      } else {
        // Use curve for smoother lines
        const prevX = ((index - 1) / (data.length - 1)) * 100;
        const cpX1 = prevX + (x - prevX) / 3;
        const cpX2 = prevX + 2 * (x - prevX) / 3;
        
        path += `C${cpX1},${y} ${cpX2},${y} ${x},${y}`;
      }
    });
    
    return path;
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex justify-between text-xs text-muted-foreground mb-2">
        <div>{maxValue}K</div>
        <div>{Math.round(maxValue * 0.75)}K</div>
        <div>{Math.round(maxValue * 0.5)}K</div>
        <div>{Math.round(maxValue * 0.25)}K</div>
        <div>{minValue}K</div>
      </div>
      
      <div className="flex-1 relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map(i => (
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
          </defs>
          <path
            d={getPath()}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-md"
          />
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
