import React from 'react';
import { Activity, Server, Network, Shield, Database, Users, Settings } from 'lucide-react';

const menuItems = [
  { id: 'overview', icon: Activity, label: '系统概览' },
  { id: 'devices', icon: Server, label: '设备管理' },
  { id: 'network', icon: Network, label: '网络监控' },
  { id: 'security', icon: Shield, label: '安全防护' },
  { id: 'resources', icon: Database, label: '资源管理' },
  { id: 'users', icon: Users, label: '用户管理' },
  { id: 'settings', icon: Settings, label: '系统设置' },
];

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Sidebar({ onPageChange, currentPage }: SidebarProps) {
  return (
    <aside className="bg-gray-800 w-64 min-h-screen">
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer ${
              currentPage === item.id
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => onPageChange(item.id)}
          >
            <item.icon className="mr-4 h-6 w-6" />
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}