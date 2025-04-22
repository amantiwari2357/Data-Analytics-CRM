
import { MoreVertical } from "lucide-react";
import { ProductImage } from "@/components/ui/product-image";

export interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  sales: number;
  stock: number;
  status: "In Stock" | "Out of Stock" | "Restock";
}

interface ProductTableProps {
  products: Product[];
  title?: string;
}

export default function ProductTable({ products, title = "Best Selling Products" }: ProductTableProps) {
  // Function to get status class
  const getStatusClass = (status: Product["status"]): string => {
    switch (status) {
      case "In Stock":
        return "status-in-stock";
      case "Out of Stock":
        return "status-out-of-stock";
      case "Restock":
        return "status-restock";
      default:
        return "";
    }
  };

  return (
    <div className="card-dashboard p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        
        <div className="flex items-center gap-2">
          <button className="bg-secondary/50 text-xs px-3 py-1.5 rounded-md hover:bg-secondary transition-colors">
            Filter By
          </button>
          <button className="bg-secondary/50 text-xs px-3 py-1.5 rounded-md hover:bg-secondary transition-colors">
            Sort By: Relevance
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/40">
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">PRODUCT ID</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">IMAGE</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">PRODUCT NAME</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">PRICE</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">TOTAL SALES</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">STOCK</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">STATUS</th>
              <th className="text-right py-3 text-xs text-muted-foreground font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-border/40 hover:bg-secondary/5 transition-colors">
                <td className="py-4 text-sm">#{product.id}</td>
                <td className="py-4">
                  <div className="w-10 h-10 rounded-md bg-secondary/50 overflow-hidden">
                    <ProductImage 
                      src={product.image} 
                      alt={product.name} 
                    />
                  </div>
                </td>
                <td className="py-4 text-sm max-w-48 truncate">{product.name}</td>
                <td className="py-4 text-sm">{product.price}</td>
                <td className="py-4 text-sm">{product.sales}</td>
                <td className="py-4 text-sm">{product.stock}</td>
                <td className="py-4">
                  <span className={getStatusClass(product.status)}>
                    {product.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className="p-1 rounded-md hover:bg-secondary/50 transition-colors">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
