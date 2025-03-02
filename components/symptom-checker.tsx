"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, ArrowRight, CheckCircle2, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SymptomChecker() {
  const [step, setStep] = useState(1)
  const [primarySymptom, setPrimarySymptom] = useState("")
  const [duration, setDuration] = useState("")
  const [severity, setSeverity] = useState("")
  const [additionalSymptoms, setAdditionalSymptoms] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleAdditionalSymptomToggle = (symptom: string) => {
    setAdditionalSymptoms(
      additionalSymptoms.includes(symptom)
        ? additionalSymptoms.filter((s) => s !== symptom)
        : [...additionalSymptoms, symptom],
    )
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <Alert variant="default" className="bg-amber-50 text-amber-800 border-amber-200">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Health Notice</AlertTitle>
          <AlertDescription>
            This assessment is for informational purposes only and does not constitute medical advice. Always consult
            with a healthcare professional for proper diagnosis and treatment.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Symptom Assessment Results</h3>

          <Card className="border-blue-100">
            <CardContent className="pt-6 pb-4">
              <div className="flex items-start gap-4">
                <Info className="h-5 w-5 mt-0.5 text-blue-500" />
                <div>
                  <h4 className="font-medium text-blue-700">Possible Conditions</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on your reported symptoms, these conditions may be relevant:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Common Cold</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                        High Confidence
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Seasonal Allergies</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800">
                        Medium Confidence
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Sinus Infection</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800">
                        Medium Confidence
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500" />
                <div>
                  <h4 className="font-medium">Recommended Actions</h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>Rest and stay hydrated</li>
                    <li>Over-the-counter decongestants may provide relief</li>
                    <li>Monitor your temperature for fever</li>
                    <li>If symptoms worsen or persist beyond 7 days, consult a healthcare provider</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardContent className="pt-6 pb-4">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-5 w-5 mt-0.5 text-red-500" />
                <div>
                  <h4 className="font-medium text-red-700">When to Seek Medical Care</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Contact a healthcare provider immediately if you experience:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>Difficulty breathing or shortness of breath</li>
                    <li>High fever (above 102°F/39°C) that doesn't respond to medication</li>
                    <li>Severe headache or facial pain</li>
                    <li>Symptoms that significantly worsen or don't improve with home care</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setShowResults(false)
              setStep(1)
              setPrimarySymptom("")
              setDuration("")
              setSeverity("")
              setAdditionalSymptoms([])
            }}
          >
            Start New Assessment
          </Button>
          <Button>Save Results</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm font-medium">
        <span>Step {step} of 4</span>
        <span>{step * 25}% Complete</span>
      </div>
      <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
        <div className="bg-primary h-full transition-all duration-300 ease-in-out" style={{ width: `${step * 25}%` }} />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primary-symptom">What is your main symptom?</Label>
            <Input
              id="primary-symptom"
              placeholder="e.g., headache, cough, fever"
              value={primarySymptom}
              onChange={(e) => setPrimarySymptom(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptom-description">Describe your symptom in more detail</Label>
            <Textarea
              id="symptom-description"
              placeholder="Provide details about how it feels, when it occurs, etc."
              rows={4}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>How long have you been experiencing this symptom?</Label>
            <RadioGroup value={duration} onValueChange={setDuration}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="less-than-day" id="less-than-day" />
                <Label htmlFor="less-than-day">Less than a day</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-2-days" id="1-2-days" />
                <Label htmlFor="1-2-days">1-2 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-7-days" id="3-7-days" />
                <Label htmlFor="3-7-days">3-7 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-2-weeks" id="1-2-weeks" />
                <Label htmlFor="1-2-weeks">1-2 weeks</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="more-than-2-weeks" id="more-than-2-weeks" />
                <Label htmlFor="more-than-2-weeks">More than 2 weeks</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>How severe is this symptom?</Label>
            <RadioGroup value={severity} onValueChange={setSeverity}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mild" id="mild" />
                <Label htmlFor="mild">Mild - Noticeable but doesn't affect daily activities</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate">Moderate - Somewhat affects daily activities</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="severe" id="severe" />
                <Label htmlFor="severe">Severe - Significantly affects daily activities</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="very-severe" id="very-severe" />
                <Label htmlFor="very-severe">Very Severe - Cannot perform daily activities</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Do you have any of these additional symptoms?</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Fever",
                "Fatigue",
                "Headache",
                "Sore throat",
                "Cough",
                "Runny nose",
                "Muscle aches",
                "Nausea",
                "Dizziness",
                "Shortness of breath",
              ].map((symptom) => (
                <div key={symptom} className="flex items-center space-x-2">
                  <Checkbox
                    id={symptom.toLowerCase().replace(/\s+/g, "-")}
                    checked={additionalSymptoms.includes(symptom)}
                    onCheckedChange={() => handleAdditionalSymptomToggle(symptom)}
                  />
                  <Label htmlFor={symptom.toLowerCase().replace(/\s+/g, "-")}>{symptom}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="other-symptoms">Any other symptoms not listed above?</Label>
            <Textarea id="other-symptoms" placeholder="Describe any other symptoms you're experiencing" rows={3} />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Do you have any pre-existing medical conditions?</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Diabetes",
                "High blood pressure",
                "Heart disease",
                "Asthma",
                "Allergies",
                "Thyroid disorder",
                "Autoimmune condition",
                "Cancer",
                "Kidney disease",
                "Liver disease",
              ].map((condition) => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox id={condition.toLowerCase().replace(/\s+/g, "-")} />
                  <Label htmlFor={condition.toLowerCase().replace(/\s+/g, "-")}>{condition}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medications">Are you currently taking any medications?</Label>
            <Textarea id="medications" placeholder="List any medications you're currently taking" rows={3} />
          </div>

          <Alert variant="default" className="bg-blue-50 text-blue-800 border-blue-200">
            <Info className="h-4 w-4" />
            <AlertTitle>Privacy Notice</AlertTitle>
            <AlertDescription>
              Your health information is kept private and secure. We use it only to provide you with the most accurate
              assessment.
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handleBack} disabled={step === 1}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={step === 1 && !primarySymptom}>
          {step < 4 ? "Next" : "Get Assessment"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

