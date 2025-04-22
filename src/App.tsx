
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/transactions" element={<PlaceholderPage title="Transactions" />} />
            <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
            <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
            <Route path="/support" element={<PlaceholderPage title="Help & Support" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
