import React from 'react';
import { Users, UserPlus, UserCheck, UserX } from 'lucide-react';

const userMetrics = [
  { name: '总用户数', value: '124', trend: '+12', icon: Users },
  { name: '在线用户', value: '45', trend: '+3', icon: UserCheck },
  { name: '新增用户', value: '8', trend: '+2', icon: UserPlus },
  { name: '异常账户', value: '2', trend: '-1', icon: UserX },
];

const userList = [
  { id: 'U001', name: '张三', role: '系统管理员', department: 'IT部门', status: '在线', lastLogin: '2024-03-10 14:30' },
  { id: 'U002', name: '李四', role: '运维工程师', department: 'IT部门', status: '在线', lastLogin: '2024-03-10 14:25' },
  { id: 'U003', name: '王五', role: '安全审计员', department: '安全部门', status: '离线', lastLogin: '2024-03-10 12:00' },
  { id: 'U004', name: '赵六', role: '网络工程师', department: 'IT部门', status: '在线', lastLogin: '2024-03-10 14:15' },
];

export function UserManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">用户管理</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {userMetrics.map((metric, index) => (
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
                    metric.name === '异常账户' ?
                      (metric.trend.startsWith('+') ? 'text-red-600' : 'text-green-600') :
                      (metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600')
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
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
             <boltAction type="file" filePath="src/components/dashboard/pages/UserManagement.tsx">
            <h3 className="text-lg font-medium text-gray-900 mb-4">用户列表</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      用户ID
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      姓名
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      角色
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      部门
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      最后登录
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userList.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.status === '在线' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.lastLogin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">用户权限管理</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">系统管理员</p>
                <p className="text-xs text-gray-500">完全的系统访问和管理权限</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                  2 个用户
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">运维工程师</p>
                <p className="text-xs text-gray-500">系统维护和监控权限</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                  4 个用户
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">安全审计员</p>
                <p className="text-xs text-gray-500">安全日志和审计权限</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                  3 个用户
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}