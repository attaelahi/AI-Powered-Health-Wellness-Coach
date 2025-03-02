"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HealthMetrics() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Health Metrics</CardTitle>
          <CardDescription>Track your progress and health trends over time</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="quarter">Past 3 Months</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="activity" className="space-y-4">
          <TabsList>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="sleep">Sleep</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="vitals">Vitals</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-4">
            <div className="h-[300px] rounded-md border p-4 flex items-center justify-center bg-muted/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Activity chart visualization would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Showing steps, active minutes, and calories burned over{" "}
                  {timeRange === "week"
                    ? "the past 7 days"
                    : timeRange === "month"
                      ? "the past month"
                      : timeRange === "quarter"
                        ? "the past 3 months"
                        : "the past year"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,742 steps</div>
                  <p className="text-xs text-muted-foreground">87% of your 10,000 step goal</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42 min/day</div>
                  <p className="text-xs text-muted-foreground">+15% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,450/day</div>
                  <p className="text-xs text-muted-foreground">Based on activity and BMR</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sleep" className="space-y-4">
            <div className="h-[300px] rounded-md border p-4 flex items-center justify-center bg-muted/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Sleep chart visualization would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Showing sleep duration, quality, and patterns over{" "}
                  {timeRange === "week"
                    ? "the past 7 days"
                    : timeRange === "month"
                      ? "the past month"
                      : timeRange === "quarter"
                        ? "the past 3 months"
                        : "the past year"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.2 hours</div>
                  <p className="text-xs text-muted-foreground">90% of your 8-hour goal</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Good</div>
                  <p className="text-xs text-muted-foreground">Based on movement and heart rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Sleep Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">11:30 PM - 6:45 AM</div>
                  <p className="text-xs text-muted-foreground">Consistent pattern detected</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-4">
            <div className="h-[300px] rounded-md border p-4 flex items-center justify-center bg-muted/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Nutrition chart visualization would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Showing calorie intake, macronutrients, and meal timing over{" "}
                  {timeRange === "week"
                    ? "the past 7 days"
                    : timeRange === "month"
                      ? "the past month"
                      : timeRange === "quarter"
                        ? "the past 3 months"
                        : "the past year"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Daily Calories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,850 cal</div>
                  <p className="text-xs text-muted-foreground">85% of your 2,200 cal target</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Macronutrients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">P: 25% C: 45% F: 30%</div>
                  <p className="text-xs text-muted-foreground">Protein, Carbs, Fat distribution</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.1 L/day</div>
                  <p className="text-xs text-muted-foreground">70% of your 3L daily goal</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vitals" className="space-y-4">
            <div className="h-[300px] rounded-md border p-4 flex items-center justify-center bg-muted/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Vitals chart visualization would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Showing heart rate, blood pressure, and other vital signs over{" "}
                  {timeRange === "week"
                    ? "the past 7 days"
                    : timeRange === "month"
                      ? "the past month"
                      : timeRange === "quarter"
                        ? "the past 3 months"
                        : "the past year"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Resting Heart Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68 bpm</div>
                  <p className="text-xs text-muted-foreground">Within healthy range</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">118/78 mmHg</div>
                  <p className="text-xs text-muted-foreground">Normal range</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm font-medium">HRV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42 ms</div>
                  <p className="text-xs text-muted-foreground">Heart Rate Variability</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

