"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Activity, Brain, Send, Utensils } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HealthCoach() {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the AI
      setMessage("")
    }
  }

  return (
    <Tabs defaultValue="chat" className="space-y-4">
      <TabsList className="grid grid-cols-4 w-full">
        <TabsTrigger value="chat">Chat</TabsTrigger>
        <TabsTrigger value="fitness">Fitness Plan</TabsTrigger>
        <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        <TabsTrigger value="wellness">Mental Wellness</TabsTrigger>
      </TabsList>

      <TabsContent value="chat" className="space-y-4">
        <div className="border rounded-md h-[400px] overflow-y-auto p-4 space-y-4">
          <div className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Health Coach" />
              <AvatarFallback>HC</AvatarFallback>
            </Avatar>
            <div className="bg-muted p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                Hello Atta! I'm your health coach. How can I assist you today? I can help with fitness plans, nutrition
                advice, or answer any health-related questions you might have.
              </p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">I've been feeling tired lately despite getting enough sleep. Any suggestions?</p>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Health Coach" />
              <AvatarFallback>HC</AvatarFallback>
            </Avatar>
            <div className="bg-muted p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                I'm sorry to hear you're feeling tired. There could be several reasons for this. Based on your recent
                data, I notice your iron intake has been lower than recommended. This can lead to fatigue even with
                adequate sleep.
              </p>
              <p className="text-sm mt-2">
                I'd suggest increasing iron-rich foods like spinach, lentils, and lean meats in your diet. Also,
                consider these other potential factors:
              </p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Hydration levels - aim for 2-3 liters of water daily</li>
                <li>Stress management - your recent stress scores have been elevated</li>
                <li>Physical activity - consistent moderate exercise can boost energy</li>
              </ul>
              <p className="text-sm mt-2">Would you like me to create a meal plan focusing on energy-boosting foods?</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="fitness" className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Activity className="h-5 w-5 mt-0.5 text-primary" />
              <div className="flex-1">
                <h4 className="font-medium">Your Personalized Fitness Plan</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your goals, fitness level, and health data
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Weekly Schedule</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="border rounded-md p-3">
                        <div className="font-medium">Monday & Thursday</div>
                        <div className="text-sm">Strength Training - Upper Body</div>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>Chest press: 3 sets x 10 reps</li>
                          <li>Shoulder press: 3 sets x 10 reps</li>
                          <li>Rows: 3 sets x 12 reps</li>
                          <li>Bicep curls: 3 sets x 12 reps</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Tuesday & Friday</div>
                        <div className="text-sm">Strength Training - Lower Body</div>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>Squats: 3 sets x 12 reps</li>
                          <li>Lunges: 3 sets x 10 reps per leg</li>
                          <li>Deadlifts: 3 sets x 10 reps</li>
                          <li>Calf raises: 3 sets x 15 reps</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Wednesday</div>
                        <div className="text-sm">Cardio</div>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>30 minutes moderate intensity</li>
                          <li>Options: jogging, cycling, swimming</li>
                          <li>Target heart rate: 120-140 bpm</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Saturday</div>
                        <div className="text-sm">Active Recovery</div>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>Yoga or light stretching</li>
                          <li>20-30 minute walk</li>
                          <li>Focus on mobility and flexibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Progress Tracking</h5>
                    <div className="h-[100px] rounded-md border p-4 flex items-center justify-center bg-muted/20">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Workout progress chart would appear here</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline">Adjust Difficulty</Button>
                    <Button>Start Workout</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="nutrition" className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Utensils className="h-5 w-5 mt-0.5 text-primary" />
              <div className="flex-1">
                <h4 className="font-medium">Nutrition Plan</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Personalized nutrition recommendations based on your goals and preferences
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="border rounded-md p-3">
                      <div className="font-medium">Daily Targets</div>
                      <ul className="text-sm mt-1 space-y-1">
                        <li>Calories: 2,200</li>
                        <li>Protein: 110g (25%)</li>
                        <li>Carbs: 248g (45%)</li>
                        <li>Fat: 73g (30%)</li>
                        <li>Fiber: 30g</li>
                      </ul>
                    </div>

                    <div className="border rounded-md p-3">
                      <div className="font-medium">Focus Areas</div>
                      <ul className="text-sm mt-1 space-y-1">
                        <li>Increase iron intake</li>
                        <li>Reduce added sugars</li>
                        <li>Boost omega-3 fatty acids</li>
                        <li>Maintain adequate hydration</li>
                      </ul>
                    </div>

                    <div className="border rounded-md p-3">
                      <div className="font-medium">Meal Timing</div>
                      <ul className="text-sm mt-1 space-y-1">
                        <li>Breakfast: 7:00-8:00 AM</li>
                        <li>Lunch: 12:00-1:00 PM</li>
                        <li>Snack: 3:00-4:00 PM</li>
                        <li>Dinner: 6:30-7:30 PM</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Sample Meal Plan</h5>
                    <div className="space-y-3">
                      <div className="border rounded-md p-3">
                        <div className="font-medium">Breakfast</div>
                        <p className="text-sm">Spinach and mushroom omelet with whole grain toast</p>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>2 eggs</li>
                          <li>1 cup spinach</li>
                          <li>1/4 cup mushrooms</li>
                          <li>1 slice whole grain bread</li>
                          <li>1 tsp olive oil</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Lunch</div>
                        <p className="text-sm">Quinoa bowl with grilled chicken and vegetables</p>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>4 oz grilled chicken breast</li>
                          <li>1/2 cup cooked quinoa</li>
                          <li>1 cup mixed vegetables</li>
                          <li>1 tbsp olive oil and lemon dressing</li>
                          <li>1/4 avocado</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Dinner</div>
                        <p className="text-sm">Baked salmon with sweet potato and broccoli</p>
                        <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                          <li>5 oz salmon fillet</li>
                          <li>1 medium sweet potato</li>
                          <li>1 cup steamed broccoli</li>
                          <li>1 tbsp olive oil</li>
                          <li>Herbs and spices to taste</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline">Adjust Preferences</Button>
                    <Button>Generate Shopping List</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="wellness" className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Brain className="h-5 w-5 mt-0.5 text-primary" />
              <div className="flex-1">
                <h4 className="font-medium">Mental Wellness</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Tools and techniques to support your mental health and reduce stress
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="border rounded-md p-3">
                      <div className="font-medium">Stress Management</div>
                      <p className="text-sm mt-1">
                        Your recent stress levels have been elevated. Here are some techniques to help:
                      </p>
                      <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                        <li>Deep breathing exercises (5 minutes, twice daily)</li>
                        <li>Progressive muscle relaxation before bed</li>
                        <li>Short meditation breaks during work</li>
                        <li>Nature walks when possible</li>
                      </ul>
                    </div>

                    <div className="border rounded-md p-3">
                      <div className="font-medium">Sleep Optimization</div>
                      <p className="text-sm mt-1">Improving sleep quality can significantly impact mental wellness:</p>
                      <ul className="text-xs text-muted-foreground mt-1 list-disc pl-4">
                        <li>Maintain consistent sleep/wake times</li>
                        <li>Avoid screens 1 hour before bed</li>
                        <li>Keep bedroom cool and dark</li>
                        <li>Try the guided sleep meditation in the app</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Guided Practices</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="border rounded-md p-3">
                        <div className="font-medium">Morning Meditation</div>
                        <p className="text-xs text-muted-foreground">10 minutes</p>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Start
                        </Button>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Stress Relief</div>
                        <p className="text-xs text-muted-foreground">15 minutes</p>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Start
                        </Button>
                      </div>

                      <div className="border rounded-md p-3">
                        <div className="font-medium">Sleep Well</div>
                        <p className="text-xs text-muted-foreground">20 minutes</p>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Mood Tracking</h5>
                    <div className="h-[100px] rounded-md border p-4 flex items-center justify-center bg-muted/20">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Mood tracking chart would appear here</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline">Log Mood</Button>
                    <Button>Talk to Coach</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

