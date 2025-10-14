import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, RadialBarChart, RadialBar } from 'recharts';
import { TrendingUp, TrendingDown, MessageSquare, Users, Calendar, ThumbsUp, Zap, ArrowUpRight, ArrowDownRight, Activity, Target } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const monthlyLeadsData = [
  { month: 'Jan', leads: 45, target: 40 },
  { month: 'Feb', leads: 52, target: 45 },
  { month: 'Mar', leads: 68, target: 50 },
  { month: 'Apr', leads: 71, target: 60 },
  { month: 'May', leads: 89, target: 70 },
  { month: 'Jun', leads: 95, target: 80 },
  { month: 'Jul', leads: 112, target: 90 },
  { month: 'Aug', leads: 128, target: 100 },
  { month: 'Sep', leads: 145, target: 120 },
  { month: 'Oct', leads: 156, target: 140 },
];

const conversationTrendData = [
  { date: 'Mon', conversations: 145, resolved: 132, avgTime: 3.5 },
  { date: 'Tue', conversations: 168, resolved: 155, avgTime: 3.2 },
  { date: 'Wed', conversations: 192, resolved: 178, avgTime: 3.8 },
  { date: 'Thu', conversations: 156, resolved: 142, avgTime: 3.1 },
  { date: 'Fri', conversations: 203, resolved: 189, avgTime: 3.6 },
  { date: 'Sat', conversations: 134, resolved: 125, avgTime: 2.9 },
  { date: 'Sun', conversations: 98, resolved: 91, avgTime: 2.7 },
];

const performanceData = [
  { name: 'Resolution', value: 86.2, fill: '#10b981' },
  { name: 'Satisfaction', value: 94, fill: '#8b5cf6' },
  { name: 'Response', value: 98, fill: '#3b82f6' },
];

const PremiumStatCard = ({ title, value, change, icon: Icon, trend, gradient, iconBg }: any) => (
  <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.03] dark:opacity-[0.07]`} />
    <CardContent className="p-6 relative">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-1.5">
          {trend === 'up' ? (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20">
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs text-emerald-600 dark:text-emerald-400">{change}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 dark:bg-rose-500/20">
              <ArrowDownRight className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span className="text-xs text-rose-600 dark:text-rose-400">{change}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <h3 className="text-3xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          {value}
        </h3>
        <p className="text-xs text-muted-foreground mt-2">vs previous period</p>
      </div>
    </CardContent>
  </Card>
);

const MetricCard = ({ title, value, subtitle, percentage, color }: any) => (
  <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:shadow-lg transition-all duration-300">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{title}</p>
          <Badge variant="secondary" className="text-xs">Live</Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-end gap-2">
            <h3 className="text-3xl">{value}</h3>
            <p className="text-sm text-muted-foreground pb-1">{subtitle}</p>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Performance</span>
              <span>{percentage}%</span>
            </div>
            <Progress value={percentage} className={`h-2 ${color}`} />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

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

export function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PremiumStatCard
          title="Total Conversations"
          value="1,446"
          change="+12.5%"
          icon={MessageSquare}
          trend="up"
          gradient="from-blue-500 to-cyan-500"
          iconBg="bg-gradient-to-br from-blue-500 to-cyan-500 shadow-blue-500/30"
        />
        <PremiumStatCard
          title="Unique Users"
          value="892"
          change="+8.2%"
          icon={Users}
          trend="up"
          gradient="from-violet-500 to-purple-500"
          iconBg="bg-gradient-to-br from-violet-500 to-purple-500 shadow-violet-500/30"
        />
        <PremiumStatCard
          title="Meetings Scheduled"
          value="156"
          change="+23.1%"
          icon={Calendar}
          trend="up"
          gradient="from-amber-500 to-orange-500"
          iconBg="bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/30"
        />
        <PremiumStatCard
          title="Leads Generated"
          value="245"
          change="+15.7%"
          icon={Zap}
          trend="up"
          gradient="from-emerald-500 to-teal-500"
          iconBg="bg-gradient-to-br from-emerald-500 to-teal-500 shadow-emerald-500/30"
        />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Resolution Rate"
          value="86.2%"
          subtitle="1,247 resolved"
          percentage={86.2}
          color="bg-emerald-500"
        />
        <MetricCard
          title="Customer Satisfaction"
          value="4.7/5"
          subtitle="892 ratings"
          percentage={94}
          color="bg-violet-500"
        />
        <MetricCard
          title="Avg Response Time"
          value="1.2s"
          subtitle="near-instant"
          percentage={98}
          color="bg-blue-500"
        />
        <MetricCard
          title="Escalation Rate"
          value="10.8%"
          subtitle="156 escalated"
          percentage={10.8}
          color="bg-amber-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation Trends - Takes 2 columns */}
        <Card className="lg:col-span-2 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Conversation Analytics
                </CardTitle>
                <CardDescription className="mt-1">Weekly performance and resolution patterns</CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 animate-pulse" />
                Real-time
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={conversationTrendData}>
                <defs>
                  <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="conversations"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorConversations)"
                  name="Total Conversations"
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stroke="#10b981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorResolved)"
                  name="Resolved"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Radial */}
        <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-violet-600" />
              Performance Score
            </CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
                data={performanceData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  label={{ position: 'insideStart', fill: '#fff', fontSize: 12 }}
                  background
                  dataKey="value"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="bottom" />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {performanceData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Leads Chart */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Lead Generation Performance
              </CardTitle>
              <CardDescription className="mt-1">Monthly lead acquisition vs targets</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Total Cumulative</p>
              <h4 className="text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">1,061</h4>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyLeadsData}>
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="target" fill="#e5e7eb" name="Target" radius={[8, 8, 0, 0]} />
              <Bar dataKey="leads" fill="url(#colorLeads)" name="Actual Leads" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/20">
              <p className="text-xs text-muted-foreground mb-1">This Month</p>
              <h4 className="text-xl text-emerald-600 dark:text-emerald-400">156</h4>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-xs text-emerald-600">+11.4%</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20">
              <p className="text-xs text-muted-foreground mb-1">Avg/Month</p>
              <h4 className="text-xl text-blue-600 dark:text-blue-400">106</h4>
              <div className="flex items-center gap-1 mt-1">
                <Activity className="w-3 h-3 text-blue-600" />
                <span className="text-xs text-blue-600">Steady</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 border border-violet-500/20">
              <p className="text-xs text-muted-foreground mb-1">Conversion</p>
              <h4 className="text-xl text-violet-600 dark:text-violet-400">16.9%</h4>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-violet-600" />
                <span className="text-xs text-violet-600">+2.3%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
