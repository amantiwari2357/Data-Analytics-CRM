import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  HelpCircle, 
  Home, 
  MessageSquare, 
  Package, 
  Settings, 
  ShoppingCart, 
  LogOut, 
  ChevronRight,
  FileText,
  CreditCard
} from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2 px-4 py-6">
    <div className="text-white flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M6 7L15 7M6 12H18M6 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-xl font-bold">Pixel Mags</span>
    </div>
  </div>
);

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  badge?: number;
  active?: boolean;
}

const SidebarItem = ({ icon, label, to, badge, active }: SidebarItemProps) => (
  <Link 
    to={to} 
    className={`sidebar-item group ${active ? "active" : ""}`}
  >
    <span className="w-5 h-5">{icon}</span>
    <span className="flex-1">{label}</span>
    {badge && (
      <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {badge}
      </span>
    )}
    {!badge && (
      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    )}
  </Link>
);

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-60 bg-sidebar h-screen flex flex-col border-r border-r-border/40">
      <Logo />

      <div className="mt-2 px-4">
        <div className="text-xs font-medium text-muted-foreground mb-3">MENU</div>
        <nav className="space-y-1">
          <SidebarItem 
            icon={<Home size={18} />} 
            label="Overview" 
            to="/" 
            active={currentPath === "/"} 
          />
          <SidebarItem 
            icon={<BarChart2 size={18} />} 
            label="Analytics" 
            to="/analytics" 
            active={currentPath === "/analytics"} 
          />
          <SidebarItem 
            icon={<Package size={18} />} 
            label="Products" 
            to="/products" 
            active={currentPath === "/products"} 
          />
          <SidebarItem 
            icon={<ShoppingCart size={18} />} 
            label="Orders" 
            to="/orders" 
            active={currentPath === "/orders"} 
          />
          <SidebarItem 
            icon={<CreditCard size={18} />} 
            label="Transactions" 
            to="/transactions" 
            active={currentPath === "/transactions"} 
          />
          <SidebarItem 
            icon={<FileText size={18} />} 
            label="Reports" 
            to="/reports" 
            active={currentPath === "/reports"} 
          />
        </nav>
      </div>

      <div className="mt-8 px-4">
        <div className="text-xs font-medium text-muted-foreground mb-3">OTHERS</div>
        <nav className="space-y-1">
          <SidebarItem 
            icon={<Settings size={18} />} 
            label="Settings" 
            to="/settings" 
            active={currentPath === "/settings"} 
          />
          <SidebarItem 
            icon={<MessageSquare size={18} />} 
            label="Messages" 
            to="/messages" 
            active={currentPath === "/messages"} 
            badge={10}
          />
          <SidebarItem 
            icon={<HelpCircle size={18} />} 
            label="Help & Support" 
            to="/support" 
            active={currentPath === "/support"} 
          />
        </nav>
      </div>

      <div className="mt-auto p-4">
        <Link to="/profile">
          <div className="bg-sidebar-accent rounded-md p-3 flex items-center gap-3 hover:bg-sidebar-accent/80 transition-colors">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-[#92FE9D] to-[#00C9FF]">
              <img 
                src="https://ui-avatars.com/api/?name=Kabir+Singh&background=random" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">Kabir Singh</div>
              <div className="text-xs text-muted-foreground truncate">View Profile</div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </Link>
      </div>
    </aside>
  );
}
