import React from 'react';
import { Shield, AlertTriangle, Lock, FileWarning } from 'lucide-react';

const securityMetrics = [
  { name: '安全等级', value: '高', status: '正常', icon: Shield },
  { name: '威胁告警', value: '3', status: '警告', icon: AlertTriangle },
  { name: '安全策略', value: '已启用', status: '正常', icon: Lock },
  { name: '漏洞扫描', value: '2', status: '警告', icon: FileWarning },
];

const securityEvents = [
  { type: '未授权访问', level: '高', time: '2024-03-10 14:23', source: '192.168.1.100', status: '已处理' },
  { type: 'DDoS攻击', level: '高', time: '2024-03-10 13:15', source: '外部网络', status: '处理中' },
  { type: '异常登录', level: '中', time: '2024-03-10 12:45', source: '10.0.0.50', status: '已处理' },
  { type: '端口扫描', level: '低', time: '2024-03-10 11:30', source: '172.16.0.25', status: '已处理' },
];

export function SecurityProtectionPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">安全防护</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${
                metric.status === '正常' ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                <metric.icon className={`h-6 w-6 ${
                  metric.status === '正常' ? 'text-green-600' : 'text-yellow-600'
                }`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                <p className="text-xl font-semibold text-gray-900">{metric.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">安全事件</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    事件类型
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    级别
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    时间
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {securityEvents.map((event, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {event.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        event.level === '高' ? 'bg-red-100 text-red-800' :
                        event.level === '中' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        event.status === '已处理' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">安全策略配置</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">防火墙策略</p>
                <p className="text-xs text-gray-500">限制未授权访问和恶意流量</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  已启用
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">入侵检测</p>
                <p className="text-xs text-gray-500">检测和防御网络入侵行为</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  已启用
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">DDoS防护</p>
                <p className="text-xs text-gray-500">抵御分布式拒绝服务攻击</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  已启用
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}