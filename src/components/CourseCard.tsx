
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Clock, Users, Play } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  thumbnail: string;
  category: string;
  duration: string;
  rating: number;
  students: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm overflow-hidden">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-800">{course.category}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button size="sm" className="bg-white/90 hover:bg-white text-gray-800 shadow-lg">
            <Play className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          by {course.instructor}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{course.completedLessons}/{course.totalLessons} lessons</span>
          </div>
          <Progress value={course.progress} className="h-2" />
          <div className="text-sm font-medium text-blue-600">
            {course.progress}% complete
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all">
          {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
