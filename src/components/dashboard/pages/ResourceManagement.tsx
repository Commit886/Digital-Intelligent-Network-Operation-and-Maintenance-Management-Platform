import React from 'react';
import { Database, HardDrive, Cpu, Memory } from 'lucide-react';

const resourceMetrics = [
  { name: 'CPU使用率', value: '65%', trend: '+5%', icon: Cpu },
  { name: '内存使用率', value: '78%', trend: '+2%', icon: Memory },
  { name: '存储空间', value: '4.2TB', trend: '-120GB', icon: HardDrive },
  { name: '数据库负载', value: '45%', trend: '-3%', icon: Database },
];

const resourceAllocations = [
  { name: '生产环境', cpu: 75, memory: 82, storage: 68, status: '正常' },
  { name: '测试环境', cpu: 45, memory: 55, storage: 40, status: '正常' },
  { name: '开发环境', cpu: 35, memory: 42, storage: 30, status: '正常' },
  { name: '备份系统', cpu: 25, memory: 35, storage: 85, status: '警告' },
];

export function ResourceManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">资源管理</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resourceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                  <p className={`ml-2 text-sm font-medium ${
                    metric.trend.startsWith('+') ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {metric.trend}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">资源分配</h3>
          <div className="space-y-4">
            {resourceAllocations.map((resource, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-900">{resource.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    resource.status === '正常' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {resource.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">CPU</span>
                      <span className="text-gray-900">{resource.cpu}%</span>
                    </div>
                    <div className="mt-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${
                          resource.cpu > 80 ? 'bg-red-500' : resource.cpu > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${resource.cpu}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">内存</span>
                      <span className="text-gray-900">{resource.memory}%</span>
                    </div>
                    <div className="mt-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${
                          resource.memory > 80 ? 'bg-red-500' : resource.memory > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${resource.memory}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">存储</span>
                      <span className="text-gray-900">{resource.storage}%</span>
                    </div>
                    <div className="mt-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${
                          resource.storage > 80 ? 'bg-red-500' : resource.storage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${resource.storage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">资源使用趋势</h3>
          <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">资源使用趋势图表</p>
          </div>
        </div>
      </div>
    </div>
  );
}