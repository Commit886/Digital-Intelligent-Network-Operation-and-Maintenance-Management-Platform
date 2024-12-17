import React from 'react';

export function NetworkStatus() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">网络状态监控</h2>
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center">
            <div className="w-32 text-sm text-gray-500">网络节点 {index + 1}</div>
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${Math.floor(Math.random() * 30 + 70)}%` }}
                ></div>
              </div>
            </div>
            <div className="w-16 text-right text-sm text-gray-500">
              {Math.floor(Math.random() * 30 + 70)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}