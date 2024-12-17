import React from 'react';
import { SystemStats } from '../stats/SystemStats';
import { DigitalTwin } from '../../digital-twin/DigitalTwin';
import { NetworkStatus } from '../network/NetworkStatus';
import { AlertList } from '../alerts/AlertList';

export function SystemOverviewPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">系统概览</h2>
      <SystemStats />
      <div className="grid grid-cols-1 gap-6">
        <DigitalTwin />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NetworkStatus />
          <AlertList />
        </div>
      </div>
    </div>
  );
}