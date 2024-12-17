import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { SystemOverviewPage } from './components/dashboard/pages/SystemOverview';
import { DeviceManagementPage } from './components/dashboard/pages/DeviceManagement';
import { NetworkMonitoringPage } from './components/dashboard/pages/NetworkMonitoring';
import { SecurityProtectionPage } from './components/dashboard/pages/SecurityProtection';
import { ResourceManagementPage } from './components/dashboard/pages/ResourceManagement';
import { UserManagementPage } from './components/dashboard/pages/UserManagement';
import { SystemSettingsPage } from './components/dashboard/pages/SystemSettings';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <SystemOverviewPage />;
      case 'devices':
        return <DeviceManagementPage />;
      case 'network':
        return <NetworkMonitoringPage />;
      case 'security':
        return <SecurityProtectionPage />;
      case 'resources':
        return <ResourceManagementPage />;
      case 'users':
        return <UserManagementPage />;
      case 'settings':
        return <SystemSettingsPage />;
      default:
        return <SystemOverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;