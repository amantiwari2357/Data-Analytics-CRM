
import Layout from "@/components/layout/Layout";
import { productsData } from "@/data/mockData";
import ProductTable from "@/components/dashboard/ProductTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Products() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Products</h1>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
        
        <ProductTable products={productsData} />
      </div>
    </Layout>
  );
}
