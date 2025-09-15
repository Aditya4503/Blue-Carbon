import { useState } from 'react';
import { ChevronRight, ChevronLeft, Users, Building, User, Shield, CheckCircle, Upload, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    registrationNumber: '',
    description: '',
    location: '',
    experience: '',
    agreedToTerms: false,
    kycVerified: false
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const userTypes = [
    {
      id: 'ngo',
      title: 'NGO / Non-Profit',
      description: 'Environmental organizations working on coastal restoration',
      icon: Users,
      benefits: ['Project management tools', 'Carbon credit tracking', 'Community engagement features']
    },
    {
      id: 'panchayat',
      title: 'Coastal Panchayat',
      description: 'Local government bodies managing coastal areas',
      icon: Building,
      benefits: ['Administrative oversight', 'Community coordination', 'Progress monitoring']
    },
    {
      id: 'community',
      title: 'Community Group',
      description: 'Local communities involved in restoration activities',
      icon: User,
      benefits: ['Field data collection', 'Progress tracking', 'Reward participation']
    }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Welcome to Blue Carbon MRV</h2>
              <p className="text-blue-600">Choose your organization type to get started</p>
            </div>
            
            <div className="grid gap-4">
              {userTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedRole === type.id 
                        ? 'border-blue-500 bg-blue-50 shadow-lg' 
                        : 'border-blue-100 hover:border-blue-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedRole(type.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          selectedRole === type.id ? 'bg-blue-500' : 'bg-blue-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            selectedRole === type.id ? 'text-white' : 'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-blue-900 mb-1">{type.title}</h3>
                          <p className="text-blue-600 text-sm mb-3">{type.description}</p>
                          <div className="space-y-1">
                            {type.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center text-xs text-green-700">
                                <CheckCircle className="w-3 h-3 mr-2" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Organization Details</h2>
              <p className="text-blue-600">Tell us about your organization</p>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name *</Label>
                  <Input 
                    id="orgName"
                    placeholder="Enter organization name"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person *</Label>
                  <Input 
                    id="contactName"
                    placeholder="Enter contact person name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Primary Location *</Label>
                <Input 
                  id="location"
                  placeholder="State, District, or Area of operation"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Organization Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Brief description of your organization and activities"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="border-blue-200 focus:border-blue-400"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">KYC Verification</h2>
              <p className="text-blue-600">Upload required documents for verification</p>
            </div>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Required Documents
                </CardTitle>
                <CardDescription className="text-blue-600">
                  All documents will be securely stored and verified within 24-48 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 border border-blue-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-blue-900">Organization Registration Certificate</h4>
                      <p className="text-sm text-blue-600">Government issued registration document</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-blue-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-blue-900">Contact Person ID Proof</h4>
                      <p className="text-sm text-blue-600">Aadhaar, PAN, or other government ID</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-blue-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-blue-900">Address Proof</h4>
                      <p className="text-sm text-blue-600">Utility bill or lease agreement</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-700">
                      <p className="font-medium mb-1">Verification Process</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Documents are reviewed by NCCR verification team</li>
                        <li>• Verification typically takes 24-48 hours</li>
                        <li>• You'll receive email notification once approved</li>
                        <li>• All data is encrypted and securely stored</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Setup Complete!</h2>
              <p className="text-blue-600">Review your information and start your blue carbon journey</p>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Account Created Successfully</h3>
                    <p className="text-green-700">Your application has been submitted for verification</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Organization Type:</span>
                    <Badge className="bg-green-100 text-green-800">
                      {userTypes.find(t => t.id === selectedRole)?.title}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Organization:</span>
                    <span className="text-green-800 font-medium">{formData.organizationName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Contact:</span>
                    <span className="text-green-800">{formData.contactName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Location:</span>
                    <span className="text-green-800">{formData.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-900">What's Next?</h3>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <p className="font-medium text-blue-900">Verification Process</p>
                    <p className="text-sm text-blue-600">Documents under review (24-48 hours)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <p className="font-medium text-blue-900">Account Activation</p>
                    <p className="text-sm text-blue-600">Receive email confirmation and access credentials</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <p className="font-medium text-blue-900">Start Your First Project</p>
                    <p className="text-sm text-blue-600">Access dashboard and begin blue carbon activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
              />
              <Label htmlFor="terms" className="text-sm text-blue-700">
                I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-blue-900">Account Setup</h1>
              <Badge variant="outline" className="text-blue-600 border-blue-300">
                Step {currentStep} of {totalSteps}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <Card className="border-blue-100 shadow-xl">
            <CardContent className="p-8">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
              className="text-blue-600 border-blue-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button 
                onClick={nextStep}
                disabled={currentStep === 1 && !selectedRole}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button 
                disabled={!formData.agreedToTerms}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white"
              >
                Complete Setup
                <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}