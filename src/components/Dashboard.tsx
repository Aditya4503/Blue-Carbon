import { Trees, Coins, Shield, TrendingUp, Users, MapPin, Calendar, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface DashboardProps {
  userRole: 'admin' | 'ngo' | 'field_worker';
}

export function Dashboard({ userRole }: DashboardProps) {
  const adminStats = [
    {
      title: "Total Verified Projects",
      value: "847",
      change: "+12.5%",
      icon: Trees,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Carbon Credits Generated",
      value: "2,456,890",
      change: "+8.2%",
      icon: Coins,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Blockchain Transactions",
      value: "15,234",
      change: "+23.1%",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Active NGO Partners",
      value: "156",
      change: "+5.7%",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const ngoStats = [
    {
      title: "My Active Projects",
      value: "23",
      change: "+2 this month",
      icon: Trees,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Carbon Credits Earned",
      value: "45,280",
      change: "+1,240 this week",
      icon: Coins,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Verification Status",
      value: "98.5%",
      change: "All systems operational",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Community Members",
      value: "1,248",
      change: "+156 this month",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const fieldWorkerStats = [
    {
      title: "Data Uploads Today",
      value: "12",
      change: "4 verified, 8 pending",
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Restoration Sites",
      value: "8",
      change: "Last updated 2h ago",
      icon: MapPin,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "This Week's Progress",
      value: "85%",
      change: "On track",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Pending Verifications",
      value: "3",
      change: "Expected 24-48h",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const getStats = () => {
    switch (userRole) {
      case 'admin': return adminStats;
      case 'ngo': return ngoStats;
      case 'field_worker': return fieldWorkerStats;
      default: return [];
    }
  };

  const recentProjects = [
    {
      name: "Mangrove Restoration - Sundarbans",
      location: "West Bengal",
      progress: 78,
      credits: "12,450",
      status: "Active",
      lastUpdate: "2 hours ago"
    },
    {
      name: "Seagrass Conservation - Kerala",
      location: "Kochi Backwaters",
      progress: 92,
      credits: "8,920",
      status: "Verification",
      lastUpdate: "5 hours ago"
    },
    {
      name: "Coastal Wetland Protection - Tamil Nadu",
      location: "Pulicat Lake",
      progress: 65,
      credits: "15,670",
      status: "Active",
      lastUpdate: "1 day ago"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            {userRole === 'admin' ? 'NCCR Admin Dashboard' : 
             userRole === 'ngo' ? 'NGO Dashboard' : 
             'Field Worker Dashboard'}
          </h1>
          <p className="text-blue-600 mt-1">
            {userRole === 'admin' ? 'Manage and monitor the entire blue carbon ecosystem' :
             userRole === 'ngo' ? 'Track your restoration projects and carbon credits' :
             'Upload field data and monitor restoration progress'}
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          {userRole === 'admin' ? 'Generate Report' :
           userRole === 'ngo' ? 'New Project' :
           'Upload Data'}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getStats().map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-700">
                  {stat.title}
                </CardTitle>
                <div className={`w-8 h-8 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Projects */}
      <Card className="border-blue-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-900">Recent Projects</CardTitle>
          <CardDescription className="text-blue-600">
            Latest blue carbon restoration initiatives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-blue-900">{project.name}</h3>
                    <Badge 
                      variant={project.status === 'Active' ? 'default' : 'secondary'}
                      className={project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">{project.location} • Updated {project.lastUpdate}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm text-blue-700 mb-1">
                      <span>Progress: {project.progress}%</span>
                      <span>Credits: {project.credits}</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}