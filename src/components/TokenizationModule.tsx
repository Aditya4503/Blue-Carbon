import { useState } from 'react';
import { Coins, Send, Download, Eye, TrendingUp, Shield, ExternalLink, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Progress } from './ui/progress';

export function TokenizationModule() {
  const [selectedCredits, setSelectedCredits] = useState<string[]>([]);
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  const carbonCredits = [
    {
      id: 'CC001',
      project: 'Sundarbans Mangrove Restoration',
      credits: 1250,
      price: 15.50,
      status: 'active',
      verification: 'verified',
      mintDate: '2024-01-15',
      expiryDate: '2026-01-15',
      blockchain: 'Polygon',
      tokenAddress: '0x1234...abcd'
    },
    {
      id: 'CC002',
      project: 'Kerala Seagrass Conservation',
      credits: 890,
      price: 18.75,
      status: 'active',
      verification: 'verified',
      mintDate: '2024-02-10',
      expiryDate: '2026-02-10',
      blockchain: 'Polygon',
      tokenAddress: '0x5678...efgh'
    },
    {
      id: 'CC003',
      project: 'Tamil Nadu Coastal Wetlands',
      credits: 2100,
      price: 16.25,
      status: 'pending',
      verification: 'in_review',
      mintDate: '2024-03-01',
      expiryDate: '2026-03-01',
      blockchain: 'Polygon',
      tokenAddress: '0x9012...ijkl'
    }
  ];

  const transactions = [
    {
      id: 'TX001',
      type: 'mint',
      amount: 1250,
      project: 'Sundarbans Mangrove',
      timestamp: '2024-01-15 14:30:00',
      hash: '0xabc123...def456',
      status: 'confirmed',
      gasUsed: '0.0023 MATIC'
    },
    {
      id: 'TX002',
      type: 'transfer',
      amount: 500,
      project: 'Kerala Seagrass',
      timestamp: '2024-02-20 09:15:00',
      hash: '0x789xyz...123abc',
      status: 'confirmed',
      gasUsed: '0.0018 MATIC'
    },
    {
      id: 'TX003',
      type: 'retire',
      amount: 300,
      project: 'Sundarbans Mangrove',
      timestamp: '2024-03-05 16:45:00',
      hash: '0xdef789...ghi012',
      status: 'confirmed',
      gasUsed: '0.0021 MATIC'
    }
  ];

  const portfolioStats = {
    totalCredits: 4240,
    totalValue: 69850,
    activeProjects: 8,
    verifiedCredits: 3340,
    pendingCredits: 900,
    retiredCredits: 1250
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Carbon Credits Wallet</h1>
          <p className="text-blue-600 mt-1">Manage your tokenized blue carbon credits</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <Shield className="w-4 h-4 mr-2" />
          Verify on Blockchain
        </Button>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Credits</CardTitle>
            <Coins className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{portfolioStats.totalCredits.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Portfolio Value</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">₹{portfolioStats.totalValue.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Active Projects</CardTitle>
            <Shield className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{portfolioStats.activeProjects}</div>
            <p className="text-xs text-blue-600 mt-1">All verified</p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Verification Status</CardTitle>
            <Eye className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {Math.round((portfolioStats.verifiedCredits / portfolioStats.totalCredits) * 100)}%
            </div>
            <p className="text-xs text-green-600 mt-1">Verified credits</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="transfer">Transfer</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Your Carbon Credits</CardTitle>
              <CardDescription className="text-blue-600">
                Tokenized blue carbon credits from verified restoration projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carbonCredits.map((credit) => (
                  <div key={credit.id} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <Coins className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900">{credit.project}</h4>
                          <p className="text-sm text-blue-600">ID: {credit.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-900">{credit.credits} Credits</div>
                        <div className="text-sm text-green-600">₹{credit.price}/credit</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-blue-600">Status</p>
                        <Badge 
                          variant={credit.status === 'active' ? 'default' : 'secondary'}
                          className={credit.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}
                        >
                          {credit.status}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Verification</p>
                        <Badge 
                          variant={credit.verification === 'verified' ? 'default' : 'secondary'}
                          className={credit.verification === 'verified' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}
                        >
                          {credit.verification}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Blockchain</p>
                        <p className="text-sm font-medium text-blue-900">{credit.blockchain}</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Total Value</p>
                        <p className="text-sm font-medium text-green-700">₹{(credit.credits * credit.price).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-blue-600">
                        <span>Token: {credit.tokenAddress}</span>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-4 w-4 p-0"
                          onClick={() => copyToClipboard(credit.tokenAddress)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Explorer
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transfer" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Transfer Credits</CardTitle>
              <CardDescription className="text-blue-600">
                Send carbon credits to another wallet address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-700">Recipient Address</label>
                <Input 
                  placeholder="0x..."
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-700">Amount</label>
                <Input 
                  type="number"
                  placeholder="Number of credits to transfer"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-700">Select Credit Type</label>
                <div className="space-y-2">
                  {carbonCredits.filter(c => c.status === 'active').map((credit) => (
                    <div key={credit.id} className="flex items-center space-x-3 p-3 border border-blue-200 rounded-lg">
                      <input 
                        type="radio" 
                        name="creditType" 
                        value={credit.id}
                        className="text-blue-600"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-blue-900">{credit.project}</p>
                        <p className="text-sm text-blue-600">{credit.credits} available • ₹{credit.price}/credit</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-700">Transaction Fee:</span>
                  <span className="text-blue-900 font-medium">~0.002 MATIC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700">Estimated Time:</span>
                  <span className="text-blue-900 font-medium">2-5 minutes</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <Send className="w-4 h-4 mr-2" />
                Transfer Credits
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Transaction History</CardTitle>
              <CardDescription className="text-blue-600">
                All blockchain transactions for your carbon credits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Hash</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>
                        <Badge 
                          variant="outline"
                          className={
                            tx.type === 'mint' ? 'bg-green-100 text-green-700' :
                            tx.type === 'transfer' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }
                        >
                          {tx.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{tx.amount}</TableCell>
                      <TableCell>{tx.project}</TableCell>
                      <TableCell className="text-sm text-blue-600">{tx.timestamp}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-100 text-green-700">
                          {tx.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-blue-600">{tx.hash}</span>
                          <Button size="sm" variant="ghost" className="h-4 w-4 p-0">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Carbon Credits Marketplace</CardTitle>
              <CardDescription className="text-blue-600">
                Trade carbon credits with other organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Coins className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Marketplace Coming Soon</h3>
                <p className="text-blue-600 mb-4">
                  A decentralized marketplace for trading blue carbon credits is under development.
                </p>
                <Button variant="outline" className="text-blue-600 border-blue-300">
                  Get Notified
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}