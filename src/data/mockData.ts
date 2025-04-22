
// Mock data for the CRM dashboard

// KPI data
export const kpiData = {
  revenue: {
    value: "₹15,00,000",
    change: {
      value: 4.8,
      trend: "up" as const
    },
    sparklineData: [10, 14, 8, 11, 9, 16, 20, 12, 18, 24]
  },
  orders: {
    value: "7,506",
    change: {
      value: 3.5,
      trend: "down" as const
    },
    sparklineData: [15, 18, 24, 20, 22, 18, 16, 21, 16, 10]
  },
  visitors: {
    value: "17,058",
    change: {
      value: 9.3,
      trend: "up" as const
    },
    sparklineData: [12, 14, 10, 16, 18, 14, 12, 16, 17, 22]
  }
};

// Sales analytics data
export const salesData = [
  { month: "Jan", value: 75 },
  { month: "Feb", value: 42 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 100 },
  { month: "May", value: 80 },
  { month: "Jun", value: 70 },
  { month: "Jul", value: 60 },
  { month: "Aug", value: 120 },
  { month: "Sep", value: 90 },
  { month: "Oct", value: 80 },
  { month: "Nov", value: 110 },
  { month: "Dec", value: 150 }
];

// Returns data
export const returnsData = [
  { label: "Jan", value: 40 },
  { label: "Feb", value: 30 },
  { label: "Mar", value: 35 },
  { label: "Apr", value: 47 },
  { label: "May", value: 35 },
  { label: "Jun", value: 48 }
];

// Products data
export const productsData = [
  {
    id: "12598",
    image: "/lovable-uploads/cef6aafa-aaac-43ea-b32f-2472ec51037b.png",
    name: "Off-white shoulder wide sleeve top",
    price: "₹4,099",
    sales: 48,
    stock: 25,
    status: "In Stock" as const
  },
  {
    id: "20587",
    image: "/lovable-uploads/1d9c3551-5e09-4219-a9f1-7f7cbccd06d1.png",
    name: "Green Velvet semi-sleeve dress",
    price: "₹10,000",
    sales: 76,
    stock: 0,
    status: "Out of Stock" as const
  },
  {
    id: "10020",
    image: "/lovable-uploads/85d5cf77-9336-4920-9c69-55f9bea72767.png",
    name: "Nike air max 2099",
    price: "₹17,500",
    sales: 32,
    stock: 3,
    status: "Restock" as const
  }
];
