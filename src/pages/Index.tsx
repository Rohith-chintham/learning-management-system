
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Users, Award, Calendar, Clock, Play, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import StatCard from '@/components/StatCard';
import RecentActivity from '@/components/RecentActivity';

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Development",
      duration: "8 weeks",
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: "UI/UX Design Principles",
      instructor: "Michael Chen",
      progress: 45,
      totalLessons: 16,
      completedLessons: 7,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      category: "Design",
      duration: "6 weeks",
      rating: 4.9,
      students: 980
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Dr. Emily Rodriguez",
      progress: 20,
      totalLessons: 32,
      completedLessons: 6,
      thumbnail: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
      category: "Data Science",
      duration: "12 weeks",
      rating: 4.7,
      students: 750
    }
  ];

  const upcomingAssignments = [
    {
      id: 1,
      title: "React Hooks Project",
      course: "Advanced React Development",
      dueDate: "2024-05-28",
      status: "pending"
    },
    {
      id: 2,
      title: "Wireframe Design",
      course: "UI/UX Design Principles",
      dueDate: "2024-05-30",
      status: "pending"
    },
    {
      id: 3,
      title: "Data Analysis Report",
      course: "Data Science Fundamentals",
      dueDate: "2024-06-02",
      status: "pending"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "completed",
      title: "Completed 'Component Lifecycle' lesson",
      course: "Advanced React Development",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "started",
      title: "Started 'Color Theory' module",
      course: "UI/UX Design Principles",
      time: "1 day ago"
    },
    {
      id: 3,
      type: "achievement",
      title: "Earned 'Quick Learner' badge",
      course: "General",
      time: "2 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600 text-lg">Continue your learning journey</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Courses Enrolled"
                value="3"
                icon={BookOpen}
                trend="+1 this month"
                color="blue"
              />
              <StatCard
                title="Lessons Completed"
                value="31"
                icon={CheckCircle}
                trend="+8 this week"
                color="green"
              />
              <StatCard
                title="Study Hours"
                value="47"
                icon={Clock}
                trend="+12 this week"
                color="purple"
              />
              <StatCard
                title="Achievements"
                value="12"
                icon={Award}
                trend="+2 this month"
                color="orange"
              />
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Current Courses */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Continue Learning
                    </CardTitle>
                    <CardDescription>
                      Pick up where you left off
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg border hover:shadow-md transition-all">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{course.completedLessons}/{course.totalLessons} lessons</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Continue
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Recent Activity */}
                <RecentActivity activities={recentActivities} />

                {/* Upcoming Assignments */}
                <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      Upcoming Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingAssignments.map((assignment) => (
                      <div key={assignment.id} className="p-3 bg-white rounded-lg border">
                        <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.course}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-orange-600 font-medium">
                            Due {new Date(assignment.dueDate).toLocaleDateString()}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {assignment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                <p className="text-gray-600">Manage and access your enrolled courses</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Browse Catalog
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
              <p className="text-gray-600">Track your assignments and deadlines</p>
            </div>
            
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-all">
                      <div>
                        <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">{assignment.course}</p>
                        <p className="text-sm text-orange-600 font-medium">
                          Due {new Date(assignment.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{assignment.status}</Badge>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Learning Progress</h2>
              <p className="text-gray-600">Track your achievements and milestones</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{course.title}</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-3" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <div>
                      <h4 className="font-medium">Quick Learner</h4>
                      <p className="text-sm text-gray-600">Completed 5 lessons in one day</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <Star className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Perfect Score</h4>
                      <p className="text-sm text-gray-600">Scored 100% on React Quiz</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-medium">Course Completer</h4>
                      <p className="text-sm text-gray-600">Finished JavaScript Basics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
