import { useState } from 'react';
import { CheckCircle, XCircle, Clock, Eye, MapPin, Calendar, Camera, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export function VerificationPanel() {
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [verificationNotes, setVerificationNotes] = useState('');

  const pendingSubmissions = [
    {
      id: 'SUB001',
      project: 'Mangrove Restoration - Sundarbans',
      submitter: 'Green Coast NGO',
      location: 'West Bengal, Sundarbans',
      uploadDate: '2024-03-15 14:30:00',
      type: 'Monthly Progress Report',
      filesCount: 12,
      dataPoints: 45,
      priority: 'high',
      status: 'pending',
      estimatedCredits: 1250,
      coordinates: '22.3569° N, 89.0403° E',
      area: '15.5 hectares',
      species: 'Rhizophora mucronata, Avicennia marina',
      survivalRate: '87%'
    },
    {
      id: 'SUB002',
      project: 'Seagrass Conservation - Kerala',
      submitter: 'Marine Life Foundation',
      location: 'Kerala, Kochi Backwaters',
      uploadDate: '2024-03-14 09:15:00',
      type: 'Quarterly Assessment',
      filesCount: 8,
      dataPoints: 32,
      priority: 'medium',
      status: 'pending',
      estimatedCredits: 890,
      coordinates: '9.9312° N, 76.2673° E',
      area: '8.2 hectares',
      species: 'Zostera marina, Halophila ovalis',
      survivalRate: '92%'
    },
    {
      id: 'SUB003',
      project: 'Coastal Wetland Protection - Tamil Nadu',
      submitter: 'Tamil Eco Warriors',
      location: 'Tamil Nadu, Pulicat Lake',
      uploadDate: '2024-03-13 16:45:00',
      type: 'Site Establishment',
      filesCount: 15,
      dataPoints: 67,
      priority: 'low',
      status: 'in_review',
      estimatedCredits: 2100,
      coordinates: '13.6569° N, 80.3173° E',
      area: '22.8 hectares',
      species: 'Avicennia officinalis, Rhizophora apiculata',
      survivalRate: '94%'
    }
  ];

  const verifiedSubmissions = [
    {
      id: 'SUB004',
      project: 'Mangrove Restoration - Gujarat',
      submitter: 'Coastal Conservation Trust',
      verifiedDate: '2024-03-10',
      creditsAwarded: 1450,
      verifier: 'Dr. Priya Sharma',
      status: 'approved'
    },
    {
      id: 'SUB005',
      project: 'Salt Marsh Restoration - Odisha',
      submitter: 'Ocean Guard Society',
      verifiedDate: '2024-03-08',
      creditsAwarded: 980,
      verifier: 'Dr. Rajesh Kumar',
      status: 'approved'
    }
  ];

  const rejectedSubmissions = [
    {
      id: 'SUB006',
      project: 'Coral Reef Protection - Andaman',
      submitter: 'Island Conservation Group',
      rejectedDate: '2024-03-05',
      reason: 'Insufficient documentation',
      verifier: 'Dr. Meera Nair',
      status: 'rejected'
    }
  ];

  const handleVerification = (submissionId: string, action: 'approve' | 'reject') => {
    console.log(`${action} submission ${submissionId}`);
    // Implementation for verification action
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-orange-100 text-orange-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'in_review': return 'bg-blue-100 text-blue-700';
      case 'approved': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Verification Panel</h1>
          <p className="text-blue-600 mt-1">Review and verify blue carbon restoration data submissions</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-blue-600 border-blue-300">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
            Verification Guidelines
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Pending Review</CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{pendingSubmissions.length}</div>
            <p className="text-xs text-orange-600 mt-1">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Approved Today</CardTitle>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">8</div>
            <p className="text-xs text-green-600 mt-1">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Credits Issued</CardTitle>
            <Badge className="bg-blue-100 text-blue-700 text-xs">Today</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">12,450</div>
            <p className="text-xs text-green-600 mt-1">Worth ₹1,93,500</p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Rejection Rate</CardTitle>
            <XCircle className="w-4 h-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">5.2%</div>
            <p className="text-xs text-red-600 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending Review ({pendingSubmissions.length})</TabsTrigger>
          <TabsTrigger value="verified">Verified ({verifiedSubmissions.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({rejectedSubmissions.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Pending Submissions</CardTitle>
              <CardDescription className="text-blue-600">
                Data submissions awaiting verification and approval
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingSubmissions.map((submission) => (
                  <div key={submission.id} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900">{submission.project}</h4>
                          <p className="text-sm text-blue-600">by {submission.submitter}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className={getPriorityColor(submission.priority)}>
                          {submission.priority} priority
                        </Badge>
                        <Badge variant="outline" className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-blue-600">Location</p>
                        <p className="text-sm font-medium text-blue-900 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {submission.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Upload Date</p>
                        <p className="text-sm font-medium text-blue-900 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {submission.uploadDate.split(' ')[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Files</p>
                        <p className="text-sm font-medium text-blue-900 flex items-center">
                          <Camera className="w-3 h-3 mr-1" />
                          {submission.filesCount} files
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Est. Credits</p>
                        <p className="text-sm font-medium text-green-700">{submission.estimatedCredits}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-blue-600">
                        <span>Area: {submission.area}</span>
                        <span>Survival: {submission.survivalRate}</span>
                        <span>Species: {submission.species.split(',').length}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-blue-600 border-blue-300"
                              onClick={() => setSelectedSubmission(submission)}
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Review
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-blue-900">{submission.project} - Detailed Review</DialogTitle>
                              <DialogDescription className="text-blue-600">
                                Comprehensive data review and verification
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-6">
                              {/* Project Details */}
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg text-blue-900">Project Information</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-blue-600">Coordinates</p>
                                    <p className="font-medium text-blue-900">{submission.coordinates}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-blue-600">Total Area</p>
                                    <p className="font-medium text-blue-900">{submission.area}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-blue-600">Species Planted</p>
                                    <p className="font-medium text-blue-900">{submission.species}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-blue-600">Survival Rate</p>
                                    <p className="font-medium text-green-700">{submission.survivalRate}</p>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Files Preview */}
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg text-blue-900">Submitted Files ({submission.filesCount})</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="grid grid-cols-3 gap-4">
                                    {Array.from({length: Math.min(6, submission.filesCount)}, (_, i) => (
                                      <div key={i} className="aspect-video bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Camera className="w-8 h-8 text-blue-400" />
                                      </div>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Verification Form */}
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg text-blue-900">Verification Decision</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium text-blue-700">Credits to Award</label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder={`Estimated: ${submission.estimatedCredits}`} />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value={submission.estimatedCredits.toString()}>{submission.estimatedCredits} (Full)</SelectItem>
                                        <SelectItem value={(submission.estimatedCredits * 0.8).toString()}>{Math.round(submission.estimatedCredits * 0.8)} (80%)</SelectItem>
                                        <SelectItem value={(submission.estimatedCredits * 0.6).toString()}>{Math.round(submission.estimatedCredits * 0.6)} (60%)</SelectItem>
                                        <SelectItem value="0">0 (Reject)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  <div className="space-y-2">
                                    <label className="text-sm font-medium text-blue-700">Verification Notes</label>
                                    <Textarea 
                                      placeholder="Add verification notes, comments, or requirements..."
                                      value={verificationNotes}
                                      onChange={(e) => setVerificationNotes(e.target.value)}
                                      rows={4}
                                    />
                                  </div>

                                  <div className="flex space-x-3">
                                    <Button 
                                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                      onClick={() => handleVerification(submission.id, 'approve')}
                                    >
                                      <CheckCircle className="w-4 h-4 mr-2" />
                                      Approve & Issue Credits
                                    </Button>
                                    <Button 
                                      variant="destructive" 
                                      className="flex-1"
                                      onClick={() => handleVerification(submission.id, 'reject')}
                                    >
                                      <XCircle className="w-4 h-4 mr-2" />
                                      Reject Submission
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verified" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Recently Verified</CardTitle>
              <CardDescription className="text-blue-600">
                Successfully verified submissions and issued carbon credits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Submitter</TableHead>
                    <TableHead>Verified Date</TableHead>
                    <TableHead>Credits Awarded</TableHead>
                    <TableHead>Verifier</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {verifiedSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.project}</TableCell>
                      <TableCell>{submission.submitter}</TableCell>
                      <TableCell>{submission.verifiedDate}</TableCell>
                      <TableCell className="text-green-700 font-medium">{submission.creditsAwarded}</TableCell>
                      <TableCell>{submission.verifier}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {submission.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Rejected Submissions</CardTitle>
              <CardDescription className="text-blue-600">
                Submissions that did not meet verification requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Submitter</TableHead>
                    <TableHead>Rejected Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Verifier</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rejectedSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.project}</TableCell>
                      <TableCell>{submission.submitter}</TableCell>
                      <TableCell>{submission.rejectedDate}</TableCell>
                      <TableCell className="text-red-700">{submission.reason}</TableCell>
                      <TableCell>{submission.verifier}</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-700">
                          <XCircle className="w-3 h-3 mr-1" />
                          {submission.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}