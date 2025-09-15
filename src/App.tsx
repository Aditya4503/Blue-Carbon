import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MobileUpload } from './components/MobileUpload';
import { Onboarding } from './components/Onboarding';
import { TokenizationModule } from './components/TokenizationModule';
import { VerificationPanel } from './components/VerificationPanel';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { BarChart3, Users, FileCheck, Trees, Smartphone, UserPlus } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('demo');
  const [userRole, setUserRole] = useState<'admin' | 'ngo' | 'field_worker'>('admin');
  const [activeView, setActiveView] = useState('dashboard');

  if (currentView === 'demo') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                <Trees className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-900">Blue Carbon MRV Registry</h1>
                <p className="text-xl text-blue-600">Blockchain-Powered Coastal Restoration Platform</p>
              </div>
            </div>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Supporting India's blue carbon ecosystem restoration through decentralized, transparent, 
              and verifiable monitoring, reporting, and carbon credit generation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => {setCurrentView('app'); setUserRole('admin'); setActiveView('dashboard');}}>
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                  Admin Dashboard
                </CardTitle>
                <CardDescription className="text-blue-600">
                  NCCR administrative interface for managing the entire blue carbon ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Project verification and approval</li>
                  <li>• Carbon credit generation tracking</li>
                  <li>• Blockchain transaction monitoring</li>
                  <li>• User management and analytics</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  View Admin Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => {setCurrentView('app'); setUserRole('ngo'); setActiveView('dashboard');}}>
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-green-600" />
                  NGO Interface
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Project management tools for environmental organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Track restoration project progress</li>
                  <li>• Monitor carbon credit earnings</li>
                  <li>• Manage community engagement</li>
                  <li>• Generate impact reports</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  View NGO Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => {setCurrentView('app'); setUserRole('field_worker'); setActiveView('upload');}}>
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Smartphone className="w-6 h-6 mr-3 text-purple-600" />
                  Mobile Field App
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Field data collection interface for community workers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Photo/video data upload</li>
                  <li>• GPS location tracking</li>
                  <li>• Multi-language support</li>
                  <li>• Progress notifications</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  View Mobile Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => {setCurrentView('app'); setUserRole('admin'); setActiveView('verification');}}>
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <FileCheck className="w-6 h-6 mr-3 text-orange-600" />
                  Verification Panel
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Data verification and approval workflow system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Review submitted field data</li>
                  <li>• Approve/reject workflow</li>
                  <li>• Credit calculation</li>
                  <li>• Blockchain verification</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  View Verification Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => {setCurrentView('app'); setUserRole('ngo'); setActiveView('credits');}}>
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Trees className="w-6 h-6 mr-3 text-green-600" />
                  Carbon Credits
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Tokenized carbon credits management and trading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• View tokenized credits</li>
                  <li>• Transfer between wallets</li>
                  <li>• Blockchain transaction history</li>
                  <li>• Market value tracking</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  View Credits Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setCurrentView('onboarding')}>
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <UserPlus className="w-6 h-6 mr-3 text-teal-600" />
                  Onboarding Flow
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Registration and KYC process for new organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Multi-stakeholder registration</li>
                  <li>• KYC document verification</li>
                  <li>• Guided setup process</li>
                  <li>• Role-based permissions</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  View Onboarding Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg border border-blue-200 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Transparent Monitoring</h3>
                <p className="text-blue-600">Blockchain-based verification ensures transparent and tamper-proof monitoring of restoration activities</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-blue-200 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Community Engagement</h3>
                <p className="text-blue-600">Multi-language support and mobile-first design for inclusive participation from coastal communities</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-blue-200 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Automated Verification</h3>
                <p className="text-blue-600">AI-powered data analysis and expert review for accurate carbon credit generation</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Built With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Blockchain', 'Polygon', 'AI/ML', 'Geospatial Data', 'Mobile First', 'Multi-language'].map(tech => (
                <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'onboarding') {
    return <Onboarding />;
  }

  const renderMainContent = () => {
    if (activeView === 'upload') {
      return <MobileUpload />;
    }
    if (activeView === 'verification') {
      return <VerificationPanel />;
    }
    if (activeView === 'credits' || activeView === 'blockchain') {
      return <TokenizationModule />;
    }
    return <Dashboard userRole={userRole} />;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        userRole={userRole} 
      />
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white border-b border-blue-100 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentView('demo')}
                className="text-blue-600 border-blue-300"
              >
                ← Back to Demo Overview
              </Button>
              <div className="flex space-x-2">
                <Button 
                  variant={userRole === 'admin' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserRole('admin')}
                  className={userRole === 'admin' ? 'bg-blue-600 text-white' : 'text-blue-600 border-blue-300'}
                >
                  Admin View
                </Button>
                <Button 
                  variant={userRole === 'ngo' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserRole('ngo')}
                  className={userRole === 'ngo' ? 'bg-green-600 text-white' : 'text-green-600 border-green-300'}
                >
                  NGO View
                </Button>
                <Button 
                  variant={userRole === 'field_worker' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserRole('field_worker')}
                  className={userRole === 'field_worker' ? 'bg-purple-600 text-white' : 'text-purple-600 border-purple-300'}
                >
                  Field Worker View
                </Button>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              Demo Mode
            </Badge>
          </div>
        </div>
        {renderMainContent()}
      </div>
    </div>
  );
}