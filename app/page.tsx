import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Brain, FileText, Heart, LineChart, MessageSquare, ShieldAlert, Utensils } from "lucide-react"
import HealthMetrics from "@/components/health-metrics"
import SymptomChecker from "@/components/symptom-checker"
import HealthCoach from "@/components/health-coach"
import EmergencyResources from "@/components/emergency-resources"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HealthCompanion</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost">Settings</Button>
            </Link>
            <Button>Get Help</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome back, Atta
          </h1>
          <p className="text-muted-foreground">
            Your personal health assistant is here to help. How are you feeling today?
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="grid grid-cols-4 md:w-[600px] bg-gradient-to-r from-primary/20 to-secondary/20 p-1">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="symptoms"
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              Symptom Checker
            </TabsTrigger>
            <TabsTrigger
              value="coaching"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Health Coach
            </TabsTrigger>
            <TabsTrigger
              value="emergency"
              className="data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground"
            >
              Emergency
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
                  <Activity className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,249</div>
                  <p className="text-xs text-muted-foreground">+12% from yesterday</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-secondary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
                  <LineChart className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.2 hrs</div>
                  <p className="text-xs text-muted-foreground">Good sleep efficiency</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                  <Heart className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68 bpm</div>
                  <p className="text-xs text-muted-foreground">Resting rate (avg)</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Nutrition</CardTitle>
                  <Utensils className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,850 cal</div>
                  <p className="text-xs text-muted-foreground">350 cal remaining today</p>
                </CardContent>
              </Card>
            </div>

            <HealthMetrics />

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Insights</CardTitle>
                  <CardDescription>Personalized health observations based on your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Brain className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <h4 className="font-medium">Stress Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Your heart rate variability suggests elevated stress levels. Consider trying the guided
                        meditation exercises in your wellness plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Activity className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <h4 className="font-medium">Activity Pattern</h4>
                      <p className="text-sm text-muted-foreground">
                        You've been consistently meeting your step goals on weekdays but falling short on weekends. Try
                        scheduling weekend activities.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Insights
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Plan</CardTitle>
                  <CardDescription>Your personalized health recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Utensils className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <h4 className="font-medium">Nutrition Goal</h4>
                      <p className="text-sm text-muted-foreground">
                        Increase protein intake to 25% of daily calories to support your fitness goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Activity className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <h4 className="font-medium">Workout</h4>
                      <p className="text-sm text-muted-foreground">
                        30-minute strength training focusing on upper body, followed by 15 minutes of stretching.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Guided Workout</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="symptoms" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Symptom Assessment</CardTitle>
                <CardDescription>Analyze your symptoms and get evidence-based guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <SymptomChecker />
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <p className="text-sm text-muted-foreground">
                  <ShieldAlert className="h-4 w-4 inline mr-1" />
                  This tool is for informational purposes only and does not provide medical advice, diagnosis, or
                  treatment.
                </p>
                <p className="text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 inline mr-1" />
                  Information sources: Mayo Clinic, CDC, WHO, and peer-reviewed medical journals.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="coaching" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Health Coaching</CardTitle>
                <CardDescription>Get personalized guidance and support for your health goals</CardDescription>
              </CardHeader>
              <CardContent>
                <HealthCoach />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  Your coaching sessions are private and secure. All recommendations are based on evidence-based
                  practices.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-4">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50 text-red-900">
                <CardTitle>Emergency Resources</CardTitle>
                <CardDescription className="text-red-700">Immediate help for urgent medical situations</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <EmergencyResources />
              </CardContent>
              <CardFooter className="bg-red-50 text-red-900">
                <p className="text-sm">
                  <ShieldAlert className="h-4 w-4 inline mr-1" />
                  If you are experiencing a medical emergency, call emergency services (911 in the US) immediately.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-medium">HealthCompanion</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            This application is for informational purposes only and does not provide medical advice. Always consult with
            qualified healthcare providers for medical concerns.
          </p>
        </div>
      </footer>
    </div>
  )
}

