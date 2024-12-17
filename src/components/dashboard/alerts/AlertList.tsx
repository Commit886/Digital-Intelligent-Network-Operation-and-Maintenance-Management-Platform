import React from 'react';

export function AlertList() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">告警信息</h2>
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500 mt-2"></span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                设备异常警告 #{index + 1}
              </p>
              <p className="text-sm text-gray-500">
                {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}