'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function EligibilityPage() {
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    employment: '',
    creditScore: '',
  })

  const [result, setResult] = useState<{
    eligible: boolean
    score: number
    message: string
    reasons: string[]
  } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault()
    
    const age = parseInt(formData.age)
    const income = parseInt(formData.income)
    const creditScore = parseInt(formData.creditScore)

    let score = 0
    const reasons = []
    const issues = []

    // Age check (18-65)
    if (age >= 18 && age <= 65) {
      score += 25
      reasons.push('✓ Age is within acceptable range')
    } else {
      issues.push('Age must be between 18 and 65 years')
    }

    // Income check (minimum KES 10,000)
    if (income >= 10000) {
      score += 25
      reasons.push('✓ Monthly income meets minimum requirement')
    } else {
      issues.push('Monthly income must be at least KES 10,000')
    }

    // Employment status
    if (formData.employment === 'employed' || formData.employment === 'business') {
      score += 25
      reasons.push('✓ Employment status is favorable')
    } else {
      issues.push('Employment verification may be required')
    }

    // Credit score (minimum 300)
    if (creditScore >= 300) {
      score += 25
      reasons.push('✓ Credit score is acceptable')
    } else {
      issues.push('Credit score may require additional verification')
    }

    const eligible = issues.length === 0

    setResult({
      eligible,
      score,
      message: eligible
        ? `Congratulations! You appear to be eligible for our loans. Your eligibility score is ${score}/100.`
        : `You may still apply, but additional verification may be required. Your score is ${score}/100.`,
      reasons: eligible ? reasons : issues,
    })
    setChecked(true)
  }

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Check Your Eligibility</h1>
            <p className="text-lg text-muted-foreground">Quickly determine if you qualify for our loans by answering a few questions</p>
          </div>

          {!checked ? (
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Checker</CardTitle>
                <CardDescription>This is a quick assessment and not a final decision</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={checkEligibility} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="25"
                      min="18"
                      max="120"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-muted-foreground">Must be between 18 and 65 years old</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="income">Monthly Income (KES)</Label>
                    <Input
                      id="income"
                      name="income"
                      type="number"
                      placeholder="30000"
                      min="0"
                      step="1000"
                      value={formData.income}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-muted-foreground">Minimum of KES 10,000 per month</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employment">Employment Status</Label>
                    <select
                      id="employment"
                      name="employment"
                      value={formData.employment}
                      onChange={(e) => handleInputChange(e as any)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select status</option>
                      <option value="employed">Employed (Full-time)</option>
                      <option value="business">Self-employed / Business</option>
                      <option value="freelance">Freelancer / Contractor</option>
                      <option value="student">Student</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="creditScore">Credit Score</Label>
                    <Input
                      id="creditScore"
                      name="creditScore"
                      type="number"
                      placeholder="650"
                      min="0"
                      max="1000"
                      value={formData.creditScore}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-muted-foreground">Minimum of 300 required</p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Check Eligibility
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : result && (
            <div className="space-y-6">
              <Card
                className={`border-2 ${
                  result.eligible ? 'border-primary' : 'border-yellow-500'
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                        result.eligible
                          ? 'bg-primary/10'
                          : 'bg-yellow-500/10'
                      }`}
                    >
                      {result.eligible ? (
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h2
                        className={`text-2xl font-bold mb-2 ${
                          result.eligible ? 'text-primary' : 'text-yellow-600'
                        }`}
                      >
                        {result.eligible ? 'You&apos;re Eligible!' : 'Review Required'}
                      </h2>
                      <p className="text-muted-foreground">{result.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Details</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Eligibility Score: <span className="font-bold text-foreground">{result.score}/100</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {result.reasons.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {reason.includes('✓') ? (
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : reason.includes('✗') ? (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-sm">{reason}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setChecked(false)
                    setResult(null)
                  }}
                >
                  Check Again
                </Button>
                <Button asChild>
                  <Link href="/apply">Proceed to Application</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
