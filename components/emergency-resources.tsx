import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, Phone } from "lucide-react"

export default function EmergencyResources() {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
        <div>
          <h3 className="font-medium text-red-900">Emergency Warning Signs</h3>
          <p className="text-sm text-red-700 mt-1">
            Seek immediate medical attention if you experience any of these symptoms:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-red-700">
            <li>• Difficulty breathing or shortness of breath</li>
            <li>• Persistent pain or pressure in the chest</li>
            <li>• New confusion or inability to arouse</li>
            <li>• Bluish lips or face</li>
            <li>• Sudden severe pain</li>
            <li>• Uncontrolled bleeding</li>
            <li>• Severe allergic reaction</li>
            <li>• Sudden severe headache with no known cause</li>
          </ul>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
          <CardDescription>Important phone numbers for medical emergencies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <div className="font-medium">Emergency Services</div>
                <div className="text-sm text-muted-foreground">Police, Fire, Ambulance</div>
              </div>
            </div>
            <Button variant="destructive">Call 911</Button>
          </div>

          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Poison Control Center</div>
                <div className="text-sm text-muted-foreground">For poison emergencies</div>
              </div>
            </div>
            <Button variant="outline">Call 1-800-222-1222</Button>
          </div>

          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Mental Health Crisis Line</div>
                <div className="text-sm text-muted-foreground">24/7 support for mental health crises</div>
              </div>
            </div>
            <Button variant="outline">Call 988</Button>
          </div>

          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Your Primary Doctor</div>
                <div className="text-sm text-muted-foreground">Dr. Sarah Johnson</div>
              </div>
            </div>
            <Button variant="outline">Call Office</Button>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="first-aid">
          <AccordionTrigger>First Aid Guidelines</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div>
              <h4 className="font-medium">Choking</h4>
              <ol className="text-sm space-y-1 mt-1 list-decimal pl-4">
                <li>Stand behind the person and lean them slightly forward</li>
                <li>Give 5 back blows between the shoulder blades with the heel of your hand</li>
                <li>If unsuccessful, give 5 abdominal thrusts (Heimlich maneuver)</li>
                <li>Alternate between 5 back blows and 5 abdominal thrusts until the object is dislodged</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium">Bleeding</h4>
              <ol className="text-sm space-y-1 mt-1 list-decimal pl-4">
                <li>Apply direct pressure to the wound with a clean cloth or bandage</li>
                <li>If blood soaks through, add another layer without removing the first</li>
                <li>If possible, elevate the wound above the heart</li>
                <li>For severe bleeding, apply pressure to the appropriate pressure point</li>
                <li>Secure the dressing with a bandage</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium">Burns</h4>
              <ol className="text-sm space-y-1 mt-1 list-decimal pl-4">
                <li>Cool the burn with cool (not cold) running water for 10-15 minutes</li>
                <li>Do not apply ice directly to the burn</li>
                <li>Cover with a clean, dry bandage or cloth</li>
                <li>Do not apply butter, oil, or ointments to serious burns</li>
                <li>Seek medical attention for severe or extensive burns</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="nearby">
          <AccordionTrigger>Nearby Medical Facilities</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="border rounded-md p-3">
              <div className="font-medium">City General Hospital</div>
              <p className="text-sm">1.2 miles away - Emergency Room Open 24/7</p>
              <p className="text-sm text-muted-foreground">123 Medical Center Dr, City, State</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  Directions
                </Button>
                <Button size="sm">Call</Button>
              </div>
            </div>

            <div className="border rounded-md p-3">
              <div className="font-medium">Neighborhood Urgent Care</div>
              <p className="text-sm">0.8 miles away - Open 8AM-10PM Daily</p>
              <p className="text-sm text-muted-foreground">456 Healthcare Ave, City, State</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  Directions
                </Button>
                <Button size="sm">Call</Button>
              </div>
            </div>

            <div className="border rounded-md p-3">
              <div className="font-medium">Westside Walk-in Clinic</div>
              <p className="text-sm">1.5 miles away - Open 9AM-7PM Weekdays, 10AM-4PM Weekends</p>
              <p className="text-sm text-muted-foreground">789 Medical Blvd, City, State</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  Directions
                </Button>
                <Button size="sm">Call</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="insurance">
          <AccordionTrigger>Insurance Information</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="border rounded-md p-3">
              <div className="font-medium">Your Insurance Provider</div>
              <p className="text-sm">HealthPlus Insurance</p>
              <p className="text-sm text-muted-foreground">Policy #: HP123456789</p>
              <p className="text-sm text-muted-foreground">Group #: 987654</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  View Card
                </Button>
                <Button size="sm">Call Provider</Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium">Emergency Coverage Notes</h4>
              <ul className="text-sm space-y-1 mt-1 list-disc pl-4">
                <li>Your plan covers emergency room visits with a $250 copay</li>
                <li>Urgent care visits have a $50 copay</li>
                <li>Out-of-network emergency care is covered at in-network rates</li>
                <li>Ambulance services are covered with a $100 copay</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

