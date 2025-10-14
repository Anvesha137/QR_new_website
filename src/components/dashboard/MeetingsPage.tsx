import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Calendar, Clock, User, CheckCircle, XCircle, AlertCircle, TrendingUp, Video, Phone, BarChart2, CalendarDays, Award } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Progress } from '../ui/progress';

const upcomingMeetings = [
  {
    id: 'MTG-001',
    client: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    title: 'Product Demo',
    date: 'Oct 13, 2025',
    time: '10:00 AM',
    duration: '30 min',
    type: 'video',
    status: 'confirmed',
    priority: 'high',
  },
  {
    id: 'MTG-002',
    client: 'Michael Chen',
    email: 'mchen@company.com',
    title: 'Technical Consultation',
    date: 'Oct 13, 2025',
    time: '02:00 PM',
    duration: '45 min',
    type: 'video',
    status: 'confirmed',
    priority: 'medium',
  },
  {
    id: 'MTG-003',
    client: 'Emily Davis',
    email: 'emily.d@mail.com',
    title: 'Sales Discussion',
    date: 'Oct 14, 2025',
    time: '11:30 AM',
    duration: '30 min',
    type: 'phone',
    status: 'pending',
    priority: 'high',
  },
  {
    id: 'MTG-004',
    client: 'James Wilson',
    email: 'jwilson@enterprise.net',
    title: 'Follow-up Call',
    date: 'Oct 14, 2025',
    time: '03:00 PM',
    duration: '20 min',
    type: 'phone',
    status: 'confirmed',
    priority: 'low',
  },
  {
    id: 'MTG-005',
    client: 'Lisa Anderson',
    email: 'l.anderson@web.com',
    title: 'Contract Review',
    date: 'Oct 15, 2025',
    time: '09:00 AM',
    duration: '60 min',
    type: 'video',
    status: 'confirmed',
    priority: 'high',
  },
];

const meetingTrendData = [
  { week: 'Week 1', scheduled: 32, completed: 28, cancelled: 4 },
  { week: 'Week 2', scheduled: 38, completed: 34, cancelled: 4 },
  { week: 'Week 3', scheduled: 42, completed: 39, cancelled: 3 },
  { week: 'Week 4', scheduled: 45, completed: 41, cancelled: 4 },
];

const meetingsByTypeData = [
  { type: 'Product Demo', count: 45, color: '#8b5cf6' },
  { type: 'Sales Call', count: 38, color: '#3b82f6' },
  { type: 'Support', count: 28, color: '#10b981' },
  { type: 'Consultation', count: 24, color: '#f59e0b' },
  { type: 'Follow-up', count: 21, color: '#06b6d4' },
];

const meetingOutcomes = [
  { name: 'Converted to Sale', value: 68, color: '#10b981' },
  { name: 'Follow-up Needed', value: 22, color: '#f59e0b' },
  { name: 'No Interest', value: 10, color: '#ef4444' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const variants: Record<string, { className: string; icon: any; label: string }> = {
    confirmed: {
      className: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400',
      icon: CheckCircle,
      label: 'Confirmed',
    },
    pending: {
      className: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400',
      icon: AlertCircle,
      label: 'Pending',
    },
    cancelled: {
      className: 'bg-rose-500/10 text-rose-600 border-rose-500/20 dark:bg-rose-500/20 dark:text-rose-400',
      icon: XCircle,
      label: 'Cancelled',
    },
  };

  const config = variants[status] || variants.confirmed;
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`flex items-center gap-1.5 w-fit ${config.className}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </Badge>
  );
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const colors: Record<string, string> = {
    high: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    medium: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    low: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  };

  return (
    <Badge variant="outline" className={colors[priority]}>
      {priority}
    </Badge>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 border border-border shadow-xl rounded-lg p-3">
        <p className="text-sm mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function MeetingsPage() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Meetings</p>
              <h3 className="text-3xl mt-1">156</h3>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-xs text-emerald-600">+23.1% this month</span>
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
              <p className="text-sm text-muted-foreground">Completed</p>
              <h3 className="text-3xl mt-1">142</h3>
              <div className="mt-2">
                <Progress value={91} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">91% completion rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming (7 days)</p>
              <h3 className="text-3xl mt-1">18</h3>
              <p className="text-xs text-muted-foreground mt-2">Next week's schedule</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 opacity-[0.05] dark:opacity-[0.1]" />
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <h3 className="text-3xl mt-1">68%</h3>
              <p className="text-xs text-muted-foreground mt-2">Meetings to sales</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meeting Trends - 2 columns */}
        <Card className="lg:col-span-2 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-blue-600" />
                  Meeting Activity Trends
                </CardTitle>
                <CardDescription className="mt-1">Weekly meeting breakdown and completion rates</CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                Last 4 weeks
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={meetingTrendData}>
                <defs>
                  <linearGradient id="scheduledGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="scheduled"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Scheduled"
                  dot={{ fill: '#3b82f6', r: 5, strokeWidth: 2, stroke: '#fff' }}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Completed"
                  dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }}
                />
                <Line
                  type="monotone"
                  dataKey="cancelled"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Cancelled"
                  dot={{ fill: '#ef4444', r: 5, strokeWidth: 2, stroke: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Meeting Outcomes Pie */}
        <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-600" />
              Outcomes
            </CardTitle>
            <CardDescription>Meeting conversion results</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={meetingOutcomes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {meetingOutcomes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {meetingOutcomes.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meetings by Type */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            Meeting Categories
          </CardTitle>
          <CardDescription>Distribution by meeting type</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={meetingsByTypeData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis dataKey="type" type="category" stroke="#9ca3af" width={120} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Meetings" radius={[0, 12, 12, 0]}>
                {meetingsByTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Upcoming Meetings Table */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-emerald-600" />
                Upcoming Schedule
              </CardTitle>
              <CardDescription className="mt-1">Next 7 days of scheduled meetings</CardDescription>
            </div>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
              {upcomingMeetings.length} upcoming
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border border-border/50 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <TableHead className="font-semibold">ID</TableHead>
                  <TableHead className="font-semibold">Client</TableHead>
                  <TableHead className="font-semibold">Title</TableHead>
                  <TableHead className="font-semibold">Date & Time</TableHead>
                  <TableHead className="font-semibold">Duration</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Priority</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingMeetings.map((meeting) => (
                  <TableRow key={meeting.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <TableCell className="font-mono text-sm">{meeting.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm">{meeting.client}</p>
                          <p className="text-xs text-muted-foreground">{meeting.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{meeting.title}</span>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-sm">{meeting.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-sm">{meeting.time}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800">{meeting.duration}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`flex items-center gap-1.5 w-fit ${
                        meeting.type === 'video' 
                          ? 'bg-violet-500/10 text-violet-600 border-violet-500/20' 
                          : 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                      }`}>
                        {meeting.type === 'video' ? (
                          <Video className="w-3 h-3" />
                        ) : (
                          <Phone className="w-3 h-3" />
                        )}
                        {meeting.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <PriorityBadge priority={meeting.priority} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={meeting.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
