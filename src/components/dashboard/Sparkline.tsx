
interface SparklineProps {
  data: number[];
  color: string;
  width?: number;
  height?: number;
}

export default function Sparkline({ 
  data, 
  color, 
  width = 100, 
  height = 40 
}: SparklineProps) {
  // Normalize data to fit in the SVG
  const normalizedData = (): string => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    
    // Calculate points for the path
    return data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <svg width={width} height={height} className="overflow-visible animate-sparkline-pulse">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      <polyline
        points={normalizedData()}
        fill="none"
        stroke={`url(#gradient-${color})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
