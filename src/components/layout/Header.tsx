import React from 'react';
import { Menu, Bell, Settings, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500 cursor-pointer" />
            <h1 className="ml-4 text-xl font-semibold text-gray-900">智能网络运维管理平台</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-500 cursor-pointer" />
            <Settings className="h-6 w-6 text-gray-500 cursor-pointer" />
            <div className="flex items-center cursor-pointer">
              <User className="h-6 w-6 text-gray-500" />
              <span className="ml-2 text-sm text-gray-700">管理员</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}