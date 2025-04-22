
import { useEffect, useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export function ProductImage({ src, alt, fallback = "/placeholder.svg", className = "" }: ProductImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleError = () => {
    setImageSrc(fallback);
  };

  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      onError={handleError}
      className={`object-cover w-full h-full ${className}`}
    />
  );
}
