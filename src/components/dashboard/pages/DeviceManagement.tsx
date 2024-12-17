import React from 'react';
import { Server, HardDrive, Cpu, Database } from 'lucide-react';

const deviceCategories = [
  { name: '服务器', count: 48, icon: Server, status: '正常', usage: 78 },
  { name: '存储设备', count: 24, icon: HardDrive, status: '正常', usage: 65 },
  { name: '网络设备', count: 36, icon: Database, status: '警告', usage: 92 },
  { name: '处理器', count: 96, icon: Cpu, status: '正常', usage: 45 },
];

const deviceList = [
  { id: 'SRV001', name: '主服务器-01', type: '服务器', status: '运行中', uptime: '99.9%', load: '75%' },
  { id: 'SRV002', name: '主服务器-02', type: '服务器', status: '运行中', uptime: '99.8%', load: '68%' },
  { id: 'STR001', name: '存储阵列-01', type: '存储设备', status: '运行中', uptime: '99.9%', load: '82%' },
  { id: 'NET001', name: '核心交换机-01', type: '网络设备', status: '警告', uptime: '99.5%', load: '92%' },
];

export function DeviceManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">设备管理</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {deviceCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-blue-100">
                <category.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                category.status === '正常' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {category.status}
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{category.count}</p>
              <p className="ml-2 text-sm text-gray-500">台设备</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">使用率</span>
                <span className="text-gray-900 font-medium">{category.usage}%</span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${
                    category.usage > 90 ? 'bg-red-500' : category.usage > 75 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${category.usage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">设备列表</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    设备ID
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    设备名称
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    类型
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    运行时间
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    负载
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {deviceList.map((device, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {device.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {device.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {device.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        device.status === '运行中' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {device.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {device.uptime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {device.load}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}