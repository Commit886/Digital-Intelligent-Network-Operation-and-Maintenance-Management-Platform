import React from 'react';
import { Activity, Wifi, Signal, Globe } from 'lucide-react';

const networkMetrics = [
  { name: '网络带宽利用率', value: '78%', trend: '+2.4%', icon: Activity },
  { name: '网络延迟', value: '12ms', trend: '-1.2ms', icon: Signal },
  { name: '连接数', value: '1,284', trend: '+56', icon: Wifi },
  { name: '数据传输量', value: '1.2TB', trend: '+128GB', icon: Globe },
];

const networkNodes = [
  { id: 'SW001', name: '核心交换机01', status: '正常', throughput: '8.5Gbps', latency: '2ms', packets: '1.2M/s' },
  { id: 'SW002', name: '核心交换机02', status: '正常', throughput: '7.8Gbps', latency: '2ms', packets: '1.1M/s' },
  { id: 'RT001', name: '边界路由器01', status: '警告', throughput: '4.2Gbps', latency: '15ms', packets: '850K/s' },
  { id: 'RT002', name: '边界路由器02', status: '正常', throughput: '3.8Gbps', latency: '12ms', packets: '780K/s' },
];

export function NetworkMonitoringPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">网络监控</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {networkMetrics.map((metric, index) => (
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
                    metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
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
          <h3 className="text-lg font-medium text-gray-900 mb-4">实时网络拓扑</h3>
          <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">网络拓扑图</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">网络流量分析</h3>
          <div className="space-y-4">
            {networkNodes.map((node, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{node.name}</h4>
                    <p className="text-xs text-gray-500">{node.id}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    node.status === '正常' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {node.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">吞吐量</p>
                    <p className="text-sm font-medium text-gray-900">{node.throughput}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">延迟</p>
                    <p className="text-sm font-medium text-gray-900">{node.latency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">数据包</p>
                    <p className="text-sm font-medium text-gray-900">{node.packets}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}