import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import {
  HelpCircle,
  Users,
  Key,
  Clock,
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Settings,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const HELP_SECTIONS = [
  {
    id: 'share-access',
    title: 'How to Share Access with New Users',
    icon: Share2,
    color: 'text-cyan-400',
    steps: [
      'Navigate to "User Management" from the top menu',
      'Click the "Add User" button',
      'Enter the new user\'s full name',
      'Enter their email address (this will be their username)',
      'Create a secure password for them',
      'Select their role: "Sales Staff" for regular users or "Dealership Admin" for managers',
      'Click "Create User" to save',
      'Share the login credentials with the new user securely',
    ],
  },
  {
    id: 'create-user',
    title: 'Creating User Accounts',
    icon: Users,
    color: 'text-emerald-400',
    steps: [
      'Only Dealership Admins can create new user accounts',
      'Go to "User Management" in the navigation',
      'Click "Add User" button',
      'Fill in all required fields:',
      '  • Full Name: The user\'s display name',
      '  • Email: Their login username',
      '  • Password: A secure password (share with user)',
      '  • Role: Choose their access level',
      'Users can then log in at the login page with these credentials',
    ],
  },
  {
    id: 'alert-thresholds',
    title: 'Adjusting Alert Thresholds',
    icon: Clock,
    color: 'text-amber-400',
    steps: [
      'Go to "Settings" from the gear icon in the navigation',
      'Find the "Key Alert Threshold" section',
      'Enter the number of minutes before a key is considered overdue',
      'Default is 30 minutes - adjust based on your needs:',
      '  • Test drives: 30-60 minutes',
      '  • Extended test drives: 120+ minutes',
      '  • Service loaners: 480+ minutes (8 hours)',
      'Click "Save Settings" to apply changes',
      'Overdue keys will now appear with alerts on the dashboard',
    ],
  },
  {
    id: 'managing-keys',
    title: 'Adding and Managing Keys',
    icon: Key,
    color: 'text-purple-400',
    steps: [
      'Go to "Key Management" from the navigation',
      'To add a new key:',
      '  1. Click "Add Key" button',
      '  2. Enter the Stock Number',
      '  3. Select condition: New or Used',
      '  4. Enter Year, Make, and Model',
      '  5. For auto dealerships, optionally add VIN',
      '  6. Click "Add Key"',
      'To check out a key:',
      '  1. Find the key card and click "Check Out"',
      '  2. Select the checkout reason',
      '  3. For RV service, select the service bay',
      '  4. Add any notes if needed',
      'To return a key:',
      '  1. Find the checked-out key',
      '  2. Click "Return Key"',
      '  3. Add return notes if needed',
    ],
  },
  {
    id: 'sales-tracker',
    title: 'Using the Sales Tracker',
    icon: TrendingUp,
    color: 'text-green-400',
    steps: [
      'Click the green "Sales Tracker" button in the navigation',
      'Set Your Goals:',
      '  1. Click "Set Goal" or "Edit Goal"',
      '  2. Enter your yearly sales target',
      '  3. Optionally set leads, write-ups, and appointment targets',
      'Log Daily Activity:',
      '  1. Click "Log Activity"',
      '  2. Enter your daily numbers:',
      '     • Walk-in, Phone, and Internet leads',
      '     • Write-ups/Quotes given',
      '     • Sales closed',
      '     • Appointments scheduled and shown',
      '  3. Add any notes',
      '  4. Click "Save Activity"',
      'View Progress:',
      '  • Daily, Weekly, and Monthly views available',
      '  • See your goal achievement probability',
      '  • Track your pace vs. target',
      'Admins can view team progress from the Sales Tracker page',
    ],
  },
  {
    id: 'branding',
    title: 'Customizing Your Dealership Branding',
    icon: Settings,
    color: 'text-pink-400',
    steps: [
      'Go to "Settings" from the gear icon',
      'In the "Branding" section:',
      '  • Add your logo URL to display your dealership logo',
      '  • Select brand colors from presets or enter custom hex codes',
      'Click "Save Settings" to apply your branding',
      'Your branding will be reflected throughout the app',
    ],
  },
];

const Help = () => {
  const [expandedSection, setExpandedSection] = useState('share-access');

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6" data-testid="help-page">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Help & Guides
          </h1>
          <p className="text-slate-400 mt-1">
            Learn how to use KeyFlow effectively
          </p>
        </div>

        {/* Quick Tips */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Quick Tips</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Tap the KeyFlow logo <strong>5 times</strong> for owner access</li>
                  <li>• Use the green <strong>Sales Tracker</strong> button for daily tracking</li>
                  <li>• Check the dashboard for <strong>overdue keys</strong> alerts</li>
                  <li>• RV dealerships have <strong>Service Bay</strong> tracking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Sections */}
        <div className="space-y-4">
          {HELP_SECTIONS.map((section) => (
            <Card
              key={section.id}
              className="bg-[#111113] border-[#1f1f23] overflow-hidden"
              data-testid={`help-section-${section.id}`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${section.color}`}>
                    <section.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-white">{section.title}</span>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              {expandedSection === section.id && (
                <CardContent className="pt-0 pb-6 px-6 animate-fade-in">
                  <div className="border-t border-white/10 pt-4">
                    <ol className="space-y-3">
                      {section.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          {step.startsWith('  ') ? (
                            <span className="w-6" />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-slate-400">
                                {section.steps.filter((s, i) => i <= index && !s.startsWith('  ')).length}
                              </span>
                            </div>
                          )}
                          <span className={`text-sm ${step.startsWith('  ') ? 'text-slate-500 ml-2' : 'text-slate-300'}`}>
                            {step.replace(/^\s+/, '')}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="bg-[#111113] border-[#1f1f23]">
          <CardContent className="p-6 text-center">
            <HelpCircle className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Need More Help?</h3>
            <p className="text-sm text-slate-400">
              Contact your system administrator or reach out to KeyFlow support
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Help;
