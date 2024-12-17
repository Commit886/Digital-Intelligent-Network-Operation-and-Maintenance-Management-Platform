import React from 'react';
import { Server, Thermometer } from 'lucide-react';

export function DeviceStatus() {
  const devices = [
    { name: '机柜 A-1', status: '正常', load: '65%', temp: '22°C' },
    { name: '机柜 A-2', status: '正常', load: '72%', temp: '23°C' },
    { name: '机柜 B-1', status: '警告', load: '85%', temp: '26°C' },
    { name: '机柜 B-2', status: '正常', load: '58%', temp: '21°C' },
    { name: '制冷系统-1', status: '正常', temp: '18°C' },
    { name: '制冷系统-2', status: '正常', temp: '19°C' },
  ];

  return (
    <div className="absolute top-4 right-4 bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm w-72">
      <h3 className="text-sm font-medium text-gray-900 mb-3">设备状态监控</h3>
      <div className="space-y-3">
        {devices.map((device, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              {device.name.includes('制冷') ? (
                <Thermometer className="h-4 w-4 text-blue-500 mr-2" />
              ) : (
                <Server className="h-4 w-4 text-gray-500 mr-2" />
              )}
              <span className="text-sm text-gray-700">{device.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`inline-block h-2 w-2 rounded-full ${
                device.status === '正常' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></span>
              {device.load && (
                <span className="text-sm text-gray-500">{device.load}</span>
              )}
              <span className="text-sm text-blue-500">{device.temp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}