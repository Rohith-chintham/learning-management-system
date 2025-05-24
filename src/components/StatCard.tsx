
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50',
  green: 'from-green-500 to-green-600 text-green-600 bg-green-50',
  purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50',
  orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50'
};

const StatCard = ({ title, value, icon: Icon, trend, color }: StatCardProps) => {
  const classes = colorClasses[color];
  
  return (
    <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{trend}</p>
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${classes.split(' ')[0]} ${classes.split(' ')[1]}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
