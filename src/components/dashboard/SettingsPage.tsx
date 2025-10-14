import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Settings2, User, Globe, Save, Shield, Bell } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Profile Settings */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" defaultValue="John Doe" className="bg-white dark:bg-slate-900" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" defaultValue="john.doe@acme.com" className="bg-white dark:bg-slate-900" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Your Company Inc." defaultValue="Acme Corporation" className="bg-white dark:bg-slate-900" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="admin">
                <SelectTrigger id="role" className="bg-white dark:bg-slate-900">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* General Preferences */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Settings2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle>General Preferences</CardTitle>
              <CardDescription>Customize your dashboard experience</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="utc">
                <SelectTrigger id="timezone" className="bg-white dark:bg-slate-900">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                  <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                  <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                  <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                  <SelectItem value="ist">IST (Indian Standard Time)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language" className="bg-white dark:bg-slate-900">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              Display Settings
            </h4>
            
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
              <div className="space-y-1">
                <Label>Dark Mode</Label>
                <p className="text-sm text-muted-foreground">Enable dark theme for the dashboard</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
              <div className="space-y-1">
                <Label>Compact View</Label>
                <p className="text-sm text-muted-foreground">Reduce spacing for more content on screen</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
              <div className="space-y-1">
                <Label>Show Animations</Label>
                <p className="text-sm text-muted-foreground">Enable smooth transitions and effects</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
            <div className="space-y-1">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
            <div className="space-y-1">
              <Label>Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Show browser notifications</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
            <div className="space-y-1">
              <Label>Sound Alerts</Label>
              <p className="text-sm text-muted-foreground">Play sound for important events</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
            <div className="space-y-1">
              <Label>Weekly Reports</Label>
              <p className="text-sm text-muted-foreground">Receive weekly performance summaries</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" placeholder="••••••••" className="bg-white dark:bg-slate-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" placeholder="••••••••" className="bg-white dark:bg-slate-900" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" className="bg-white dark:bg-slate-900" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/20 dark:to-transparent border border-emerald-500/20">
              <div className="space-y-1">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
              <div className="space-y-1">
                <Label>Session Timeout</Label>
                <p className="text-sm text-muted-foreground">Auto logout after 30 minutes of inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-border/50">
        <div>
          <h4 className="text-sm">Ready to save your changes?</h4>
          <p className="text-xs text-muted-foreground mt-1">Your settings will be applied immediately</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Cancel</Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Save className="w-4 h-4" />
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
