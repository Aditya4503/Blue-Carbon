import { useState } from 'react';
import { Upload, Camera, MapPin, Calendar, CheckCircle, AlertCircle, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function MobileUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'mr', name: 'मराठी' }
  ];

  const translations = {
    en: {
      title: "Upload Field Data",
      description: "Capture and upload restoration progress data",
      photos: "Photos & Videos",
      location: "Location Data",
      notes: "Field Notes",
      submit: "Submit Data",
      geotagging: "Auto-geotagging enabled"
    },
    hi: {
      title: "फील्ड डेटा अपलोड करें",
      description: "बहाली प्रगति डेटा कैप्चर और अपलोड करें",
      photos: "फोटो और वीडियो",
      location: "स्थान डेटा",
      notes: "फील्ड नोट्स",
      submit: "डेटा सबमिट करें",
      geotagging: "ऑटो-जियोटैगिंग सक्षम"
    }
  };

  const currentLang = translations[selectedLanguage as keyof typeof translations] || translations.en;

  const recentUploads = [
    {
      id: 1,
      type: "Mangrove Seedling Survey",
      location: "Site A-001",
      timestamp: "Today, 10:30 AM",
      status: "verified",
      files: 8
    },
    {
      id: 2,
      type: "Water Quality Test",
      location: "Site B-045",
      timestamp: "Today, 9:15 AM",
      status: "processing",
      files: 5
    },
    {
      id: 3,
      type: "Growth Measurement",
      location: "Site A-012",
      timestamp: "Yesterday, 4:20 PM",
      status: "verified",
      files: 12
    }
  ];

  const handleFileUpload = (type: string) => {
    // Simulate file upload
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadedFiles(prev => [...prev, type]);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      {/* Language Toggle */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">{currentLang.title}</h1>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="w-32">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map(lang => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-blue-600">{currentLang.description}</p>

      {/* Upload Section */}
      <Card className="border-blue-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Quick Upload
          </CardTitle>
          <CardDescription className="text-blue-600">
            {currentLang.geotagging}
            <MapPin className="w-4 h-4 inline ml-1" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Photo/Video Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">{currentLang.photos}</label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-20 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
                onClick={() => handleFileUpload('photo')}
              >
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-xs">Take Photo</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
                onClick={() => handleFileUpload('video')}
              >
                <Upload className="w-6 h-6 mb-1" />
                <span className="text-xs">Upload Video</span>
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-blue-700">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Location Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">{currentLang.location}</label>
            <Input 
              placeholder="Site reference or coordinates"
              className="border-blue-200 focus:border-blue-400"
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">{currentLang.notes}</label>
            <Textarea 
              placeholder="Add observations, measurements, or notes..."
              className="border-blue-200 focus:border-blue-400 resize-none"
              rows={3}
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
            {currentLang.submit}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card className="border-blue-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-900">Recent Uploads</CardTitle>
          <CardDescription className="text-blue-600">
            Your latest field data submissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentUploads.map((upload) => (
              <div key={upload.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-blue-900">{upload.type}</h4>
                    <Badge 
                      variant={upload.status === 'verified' ? 'default' : 'secondary'}
                      className={upload.status === 'verified' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}
                    >
                      {upload.status === 'verified' ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <AlertCircle className="w-3 h-3 mr-1" />
                      )}
                      {upload.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-600">{upload.location}</p>
                  <p className="text-xs text-blue-500">{upload.files} files • {upload.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}