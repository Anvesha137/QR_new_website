import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area } from 'recharts';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { MessageSquare, Users, AlertTriangle, ThumbsUp, Clock, TrendingUp, Target, Zap, Activity, ArrowUpRight, BarChart3 } from 'lucide-react';

const messagesPerSessionData = [
  { range: '1-3', count: 234, percentage: 18.1 },
  { range: '4-6', count: 412, percentage: 31.9 },
  { range: '7-10', count: 356, percentage: 27.6 },
  { range: '11-15', count: 189, percentage: 14.6 },
  { range: '16+', count: 98, percentage: 7.6 },
];

const responseTimeData = [
  { hour: '00:00', avgTime: 0.8, requests: 45 },
  { hour: '04:00', avgTime: 0.7, requests: 23 },
  { hour: '08:00', avgTime: 1.2, requests: 123 },
  { hour: '12:00', avgTime: 1.5, requests: 198 },
  { hour: '16:00', avgTime: 1.8, requests: 234 },
  { hour: '20:00', avgTime: 1.3, requests: 167 },
];

const visitorData = [
  { day: 'Mon', unique: 342, total: 456, engagement: 74.9 },
  { day: 'Tue', unique: 389, total: 523, engagement: 74.4 },
  { day: 'Wed', unique: 421, total: 587, engagement: 71.7 },
  { day: 'Thu', unique: 367, total: 498, engagement: 73.7 },
  { day: 'Fri', unique: 445, total: 612, engagement: 72.7 },
  { day: 'Sat', unique: 298, total: 401, engagement: 74.3 },
  { day: 'Sun', unique: 234, total: 321, engagement: 72.9 },
];

const hourlyActivityData = [
  { hour: '12 AM', activity: 12 },
  { hour: '3 AM', activity: 5 },
  { hour: '6 AM', activity: 18 },
  { hour: '9 AM', activity: 65 },
  { hour: '12 PM', activity: 98 },
  { hour: '3 PM', activity: 112 },
  { hour: '6 PM', activity: 87 },
  { hour: '9 PM', activity: 56 },
];

const MetricRow = ({ label, value, percentage, trend, color }: any) => (
  <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50 hover:border-border transition-all duration-300 group">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-sm">{label}</p>
        {trend && (
          <Badge variant={trend > 0 ? 'default' : 'destructive'} className="text-xs px-2 py-0">
            <ArrowUpRight className={`w-3 h-3 mr-0.5 ${trend < 0 ? 'rotate-90' : ''}`} />
            {Math.abs(trend)}%
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-3">
        <Progress value={percentage} className="h-2.5 flex-1" style={{ 
          ['--progress-background' as any]: color 
        }} />
        <span className="text-sm w-14 text-right group-hover:scale-110 transition-transform">{percentage}%</span>
      </div>
    </div>
    <div className="ml-6 text-right">
      <p className="text-2xl">{value}</p>
    </div>
  </div>
);

const DetailCard = ({ icon: Icon, title, value, subtitle, gradient, iconColor }: any) => (
  <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.05] dark:opacity-[0.1]`} />
    <CardContent className="p-6 relative">
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-2xl ${iconColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-1">
            {value}
          </h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
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

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Detailed Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DetailCard
          icon={MessageSquare}
          title="Avg Messages/Session"
          value="7.2"
          subtitle="↑ 5.8% from last week"
          gradient="from-blue-500 to-cyan-500"
          iconColor="bg-gradient-to-br from-blue-500 to-cyan-500 shadow-blue-500/30"
        />
        <DetailCard
          icon={Clock}
          title="Avg Duration"
          value="3m 42s"
          subtitle="Within target range"
          gradient="from-violet-500 to-purple-500"
          iconColor="bg-gradient-to-br from-violet-500 to-purple-500 shadow-violet-500/30"
        />
        <DetailCard
          icon={AlertTriangle}
          title="Bounce Rate"
          value="8.4%"
          subtitle="↓ 2.1% improvement"
          gradient="from-amber-500 to-orange-500"
          iconColor="bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/30"
        />
        <DetailCard
          icon={Target}
          title="Fallback Rate"
          value="5.2%"
          subtitle="Misunderstanding rate"
          gradient="from-rose-500 to-red-500"
          iconColor="bg-gradient-to-br from-rose-500 to-red-500 shadow-rose-500/30"
        />
      </div>

      {/* Performance Metrics */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-violet-600" />
                Performance Breakdown
              </CardTitle>
              <CardDescription className="mt-1">Detailed metrics and success rates</CardDescription>
            </div>
            <Badge variant="outline" className="bg-violet-500/10 text-violet-600 border-violet-500/20">
              <Activity className="w-3 h-3 mr-1" />
              Updated 2m ago
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <MetricRow
              label="Resolution Rate (Containment)"
              value="1,247"
              percentage={86.2}
              trend={3.2}
              color="#10b981"
            />
            <MetricRow
              label="Escalation Rate (Human Handoff)"
              value="156"
              percentage={10.8}
              trend={-1.5}
              color="#f59e0b"
            />
            <MetricRow
              label="Fallback Rate (Misunderstanding)"
              value="75"
              percentage={5.2}
              trend={-2.1}
              color="#ef4444"
            />
            <MetricRow
              label="Customer Satisfaction (CSAT)"
              value="4.7/5"
              percentage={94}
              trend={1.8}
              color="#8b5cf6"
            />
            <MetricRow
              label="Bounce Rate"
              value="122"
              percentage={8.4}
              trend={-2.1}
              color="#06b6d4"
            />
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Messages per Session */}
        <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              Engagement Distribution
            </CardTitle>
            <CardDescription>Messages per session breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={messagesPerSessionData}>
                <defs>
                  <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
                <XAxis dataKey="range" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="url(#sessionGradient)" name="Sessions" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-5 gap-2 mt-4">
              {messagesPerSessionData.map((item, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-xs text-muted-foreground">{item.range}</p>
                  <p className="text-sm mt-1">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              Response Performance
            </CardTitle>
            <CardDescription>Average response time throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={responseTimeData}>
                <defs>
                  <linearGradient id="timeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis yAxisId="left" stroke="#9ca3af" label={{ value: 'seconds', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="requests"
                  fill="url(#timeGradient)"
                  stroke="none"
                  name="Requests"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="avgTime"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Avg Time (s)"
                  dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Visitor Analytics */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Visitor Analytics
              </CardTitle>
              <CardDescription className="mt-1">Unique vs total visitors with engagement rates</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={visitorData}>
              <defs>
                <linearGradient id="uniqueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="left" dataKey="unique" fill="url(#uniqueGradient)" name="Unique Visitors" radius={[12, 12, 0, 0]} />
              <Bar yAxisId="left" dataKey="total" fill="url(#totalGradient)" name="Total Visitors" radius={[12, 12, 0, 0]} />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="engagement"
                stroke="#f59e0b"
                strokeWidth={3}
                name="Engagement %"
                dot={{ fill: '#f59e0b', r: 5, strokeWidth: 2, stroke: '#fff' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 border border-violet-500/20">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-violet-600" />
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
              </div>
              <h4 className="text-2xl text-violet-600 dark:text-violet-400">2,496</h4>
              <p className="text-xs text-muted-foreground mt-1">This week</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 border border-cyan-500/20">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-cyan-600" />
                <p className="text-sm text-muted-foreground">Total Visitors</p>
              </div>
              <h4 className="text-2xl text-cyan-600 dark:text-cyan-400">3,398</h4>
              <p className="text-xs text-muted-foreground mt-1">This week</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-amber-600" />
                <p className="text-sm text-muted-foreground">Avg Engagement</p>
              </div>
              <h4 className="text-2xl text-amber-600 dark:text-amber-400">73.5%</h4>
              <p className="text-xs text-muted-foreground mt-1">Weekly average</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
