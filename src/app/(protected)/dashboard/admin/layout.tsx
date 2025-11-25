// app/admin/layout.tsx
import Sidebar from "@/components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed width */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area - Takes remaining space */}
      <div className="flex-1 flex flex-col min-w-0"> {/* Added min-w-0 to prevent overflow */}
        
       

        {/* Page Content */}
        <main className="flex-1 p-12 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}