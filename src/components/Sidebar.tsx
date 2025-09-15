import { useState } from 'react';
import { Trees, Shield, Coins, Upload, BarChart3, Users, Settings, Leaf, Home, FileCheck, Waves } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  userRole: 'admin' | 'ngo' | 'field_worker';
}

export function Sidebar({ activeView, setActiveView, userRole }: SidebarProps) {
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'verification', label: 'Verification Panel', icon: FileCheck },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'blockchain', label: 'Blockchain Explorer', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const ngoMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'projects', label: 'My Projects', icon: Trees },
    { id: 'credits', label: 'Carbon Credits', icon: Coins },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'blockchain', label: 'Blockchain Status', icon: Shield },
  ];

  const fieldWorkerMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'upload', label: 'Upload Data', icon: Upload },
    { id: 'progress', label: 'Progress Tracker', icon: Trees },
    { id: 'notifications', label: 'Notifications', icon: Waves },
  ];

  const getMenuItems = () => {
    switch (userRole) {
      case 'admin': return adminMenuItems;
      case 'ngo': return ngoMenuItems;
      case 'field_worker': return fieldWorkerMenuItems;
      default: return [];
    }
  };

  return (
    <div className="w-64 bg-gradient-to-b from-blue-50 to-green-50 h-screen border-r border-blue-100 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-blue-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900">Blue Carbon</h2>
            <p className="text-sm text-blue-600">MRV Registry</p>
          </div>
        </div>
      </div>

      {/* User Role Badge */}
      <div className="px-6 py-4">
        <Badge 
          variant="outline" 
          className="bg-blue-100 text-blue-700 border-blue-200 capitalize"
        >
          {userRole.replace('_', ' ')} View
        </Badge>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 space-y-2">
        {getMenuItems().map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={`w-full justify-start h-11 ${
                activeView === item.id 
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md' 
                  : 'text-blue-700 hover:bg-blue-100 hover:text-blue-800'
              }`}
              onClick={() => setActiveView(item.id)}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-blue-100">
        <div className="text-xs text-blue-600 text-center">
          Secured by Blockchain
          <Shield className="w-3 h-3 inline ml-1" />
        </div>
      </div>
    </div>
  );
}