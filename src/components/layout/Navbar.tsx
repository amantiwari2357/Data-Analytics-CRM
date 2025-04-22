
import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-b border-border/40 px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold gradient-text">Dashboard Overview</h1>
      
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative w-80">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full bg-secondary/50 border border-border/40 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        
        {/* Notifications */}
        <button className="relative bg-secondary/50 p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </div>
    </div>
  );
}
