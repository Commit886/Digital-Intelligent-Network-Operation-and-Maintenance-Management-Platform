import React from 'react';
import { Settings, Bell, Shield, Database, Cloud, Clock } from 'lucide-react';

const settingCategories = [
  {
    icon: Bell,
    title: '告警设置',
    description: '配置系统告警规则和通知方式',
    status: '已配置',
    lastUpdated: '2024-03-10',
  },
  {
    icon: Shield,
    title: '安全设置',
    description: '管理系统安全策略和访问控制',
    status: '已配置',
    lastUpdated: '2024-03-09',
  },
  {
    icon: Database,
    title: '备份设置',
    description: '配置数据备份策略和恢复方案',
    status: '已配置',
    lastUpdated: '2024-03-08',
  },
  {
    icon: Cloud,
    title: '系统更新',
    description: '管理系统更新和维护计划',
    status: '待更新',
    lastUpdated: '2024-03-07',
  },
  {
    icon: Clock,
    title: '定时任务',
    description: '配置系统定时任务和自动化流程',
    status: '已配置',
    lastUpdated: '2024-03-06',
  },
];

export function SystemSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">系统设置</h2>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            {settingCategories.map((category, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 border rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      category.status === '已配置' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {category.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                      修改配置
                    </button>
                    <span className="text-sm text-gray-500">
                      最后更新: {category.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">系统信息</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">系统版本</span>
              <span className="text-sm font-medium text-gray-900">v2.5.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">最后更新时间</span>
              <span className="text-sm font-medium text-gray-900">2024-03-10 10:30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">系统运行时间</span>
              <span className="text-sm font-medium text-gray-900">30天12小时</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">授权状态</span>
              <span className="text-sm font-medium text-green-600">已授权</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">系统日志</h3>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2"></span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    系统配置更新 #{index + 1}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(Date.now() - index * 3600000).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}