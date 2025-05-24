
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Award, Clock } from 'lucide-react';

interface Activity {
  id: number;
  type: 'completed' | 'started' | 'achievement';
  title: string;
  course: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case 'started':
      return <Play className="w-4 h-4 text-blue-600" />;
    case 'achievement':
      return <Award className="w-4 h-4 text-yellow-600" />;
    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case 'completed':
      return 'bg-green-50 border-green-200';
    case 'started':
      return 'bg-blue-50 border-blue-200';
    case 'achievement':
      return 'bg-yellow-50 border-yellow-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
};

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`p-3 rounded-lg border ${getActivityColor(activity.type)}`}
          >
            <div className="flex items-start gap-3">
              {getActivityIcon(activity.type)}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm leading-tight">
                  {activity.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{activity.course}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
