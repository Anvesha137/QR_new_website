import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { MessageSquare, User, Clock, CheckCircle, AlertCircle, XCircle, Search, Filter, TrendingUp, Eye, Download } from 'lucide-react';
import { useState } from 'react';
import { Progress } from '../ui/progress';

const conversationsData = [
  {
    id: 'CNV-001',
    user: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    messages: 8,
    duration: '4m 23s',
    status: 'resolved',
    satisfaction: 5,
    topic: 'Product Inquiry',
    timestamp: '2 hours ago',
    quality: 92,
  },
  {
    id: 'CNV-002',
    user: 'Michael Chen',
    email: 'mchen@company.com',
    messages: 12,
    duration: '6m 45s',
    status: 'escalated',
    satisfaction: null,
    topic: 'Technical Support',
    timestamp: '3 hours ago',
    quality: 78,
  },
  {
    id: 'CNV-003',
    user: 'Emily Davis',
    email: 'emily.d@mail.com',
    messages: 5,
    duration: '2m 18s',
    status: 'resolved',
    satisfaction: 4,
    topic: 'Pricing Question',
    timestamp: '5 hours ago',
    quality: 88,
  },
  {
    id: 'CNV-004',
    user: 'James Wilson',
    email: 'jwilson@enterprise.net',
    messages: 15,
    duration: '8m 12s',
    status: 'resolved',
    satisfaction: 5,
    topic: 'Feature Request',
    timestamp: '6 hours ago',
    quality: 95,
  },
  {
    id: 'CNV-005',
    user: 'Lisa Anderson',
    email: 'l.anderson@web.com',
    messages: 3,
    duration: '1m 34s',
    status: 'bounced',
    satisfaction: null,
    topic: 'General Query',
    timestamp: '8 hours ago',
    quality: 45,
  },
  {
    id: 'CNV-006',
    user: 'Robert Martinez',
    email: 'r.martinez@inbox.com',
    messages: 9,
    duration: '5m 06s',
    status: 'resolved',
    satisfaction: 4,
    topic: 'Account Setup',
    timestamp: '10 hours ago',
    quality: 85,
  },
  {
    id: 'CNV-007',
    user: 'Jennifer Taylor',
    email: 'jtaylor@business.io',
    messages: 11,
    duration: '7m 29s',
    status: 'escalated',
    satisfaction: null,
    topic: 'Billing Issue',
    timestamp: '12 hours ago',
    quality: 72,
  },
  {
    id: 'CNV-008',
    user: 'David Brown',
    email: 'dbrown@startup.co',
    messages: 6,
    duration: '3m 41s',
    status: 'resolved',
    satisfaction: 5,
    topic: 'Product Demo',
    timestamp: '14 hours ago',
    quality: 90,
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const variants: Record<string, { className: string; icon: any; label: string }> = {
    resolved: {
      className: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400',
      icon: CheckCircle,
      label: 'Resolved',
    },
    escalated: {
      className: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400',
      icon: AlertCircle,
      label: 'Escalated',
    },
    bounced: {
      className: 'bg-rose-500/10 text-rose-600 border-rose-500/20 dark:bg-rose-500/20 dark:text-rose-400',
      icon: XCircle,
      label: 'Bounced',
    },
  };

  const config = variants[status] || variants.resolved;
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`flex items-center gap-1.5 w-fit ${config.className}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </Badge>
  );
};

const SatisfactionStars = ({ rating }: { rating: number | null }) => {
  if (rating === null) {
    return <span className="text-xs text-muted-foreground">Pending</span>;
  }
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}`}>
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{rating}/5</span>
    </div>
  );
};

const QualityScore = ({ score }: { score: number }) => {
  const getColor = (score: number) => {
    if (score >= 85) return 'text-emerald-600 dark:text-emerald-400';
    if (score >= 70) return 'text-amber-600 dark:text-amber-400';
    return 'text-rose-600 dark:text-rose-400';
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-12">
        <Progress value={score} className="h-1.5" />
      </div>
      <span className={`text-sm ${getColor(score)}`}>{score}%</span>
    </div>
  );
};

export function ConversationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredConversations = conversationsData.filter(conv => {
    const matchesSearch = conv.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || conv.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Conversations</p>
              <h3 className="text-3xl mt-1">1,446</h3>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-xs text-emerald-600">+12.5% vs last week</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Resolved</p>
              <h3 className="text-3xl mt-1">1,247</h3>
              <p className="text-xs text-muted-foreground mt-2">86.2% resolution rate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Escalated</p>
              <h3 className="text-3xl mt-1">156</h3>
              <p className="text-xs text-muted-foreground mt-2">10.8% escalation rate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/30">
                <XCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bounced</p>
              <h3 className="text-3xl mt-1">43</h3>
              <p className="text-xs text-muted-foreground mt-2">3.0% bounce rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversation Table */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-violet-600" />
                Conversation History
              </CardTitle>
              <CardDescription className="mt-1">Track and analyze individual conversation details</CardDescription>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by user, email or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-white dark:bg-slate-900 border-border/50"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-48 bg-white dark:bg-slate-900 border-border/50">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
                <SelectItem value="bounced">Bounced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border border-border/50 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <TableHead className="font-semibold">ID</TableHead>
                  <TableHead className="font-semibold">User</TableHead>
                  <TableHead className="font-semibold">Topic</TableHead>
                  <TableHead className="font-semibold">Messages</TableHead>
                  <TableHead className="font-semibold">Duration</TableHead>
                  <TableHead className="font-semibold">Quality</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Satisfaction</TableHead>
                  <TableHead className="font-semibold">Time</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredConversations.map((conversation) => (
                  <TableRow key={conversation.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <TableCell className="font-mono text-sm">{conversation.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm">{conversation.user}</p>
                          <p className="text-xs text-muted-foreground">{conversation.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800">{conversation.topic}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                        {conversation.messages} msgs
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-sm">{conversation.duration}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <QualityScore score={conversation.quality} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={conversation.status} />
                    </TableCell>
                    <TableCell>
                      <SatisfactionStars rating={conversation.satisfaction} />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {conversation.timestamp}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredConversations.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-sm text-muted-foreground">No conversations found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
