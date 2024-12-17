import React from 'react';
import { Server, Wifi, Shield, Activity } from 'lucide-react';

const stats = [
  { icon: Server, label: '设备总数', value: '128', change: '+12%', color: 'text-blue-500' },
  { icon: Wifi, label: '网络状态', value: '98%', change: '+2%', color: 'text-green-500' },
  { icon: Shield, label: '安全威胁', value: '3', change: '-5', color: 'text-red-500' },
  { icon: Activity, label: '系统负载', value: '65%', change: '+8%', color: 'text-yellow-500' },
];

export function SystemStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className={`ml-2 text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}