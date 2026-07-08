'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { number: 1, title: 'Personal Details', description: 'Your basic information' },
  { number: 2, title: 'Loan Details', description: 'Loan amount and term' },
  { number: 3, title: 'M-Pesa Card Details', description: 'Receive loan to your card' },
  { number: 4, title: 'Review & Submit', description: 'Review and submit' },
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanAmount: '',
    loanTerm: '',
    purpose: '',
    mpesaCardNumber: '',
    mpesaCardName: '',
    mpesaCardExpiry: '',
    mpesaCVV: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target

    // Format card number with spaces (16 digits)
    if (name === 'mpesaCardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
      value = value.slice(0, 19) // Max length: 16 digits + 3 spaces
    }

    // Format expiry date (MM/YY)
    if (name === 'mpesaCardExpiry') {
      value = value.replace(/\D/g, '').slice(0, 4)
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2)
      }
    }

    // Only allow numbers for CVV (3-4 digits)
    if (name === 'mpesaCVV') {
      value = value.replace(/\D/g, '').slice(0, 4)
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const isStepComplete = () => {
    if (currentStep === 0) {
      return formData.firstName && formData.lastName && formData.email && formData.phone
    }
    if (currentStep === 1) {
      return formData.loanAmount && formData.loanTerm && formData.purpose
    }
    if (currentStep === 2) {
      return formData.mpesaCardNumber.replace(/\s/g, '').length === 16 &&
             formData.mpesaCardName &&
             formData.mpesaCardExpiry.length === 5 &&
             formData.mpesaCVV.length >= 3
    }
    return true
  }

  const handleNext = () => {
    if (isStepComplete() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for applying! Your loan application has been submitted successfully. The funds will be transferred to your M-Pesa Global Card within 24 hours. You&apos;ll receive updates via email and SMS.
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 text-left mb-8">
                <h3 className="font-semibold text-foreground mb-4">Application Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount:</span>
                    <span className="font-medium">KES {formData.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Term:</span>
                    <span className="font-medium">{formData.loanTerm} months</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2 mt-2">
                    <span className="text-muted-foreground">Receiving to:</span>
                    <span className="font-medium">●●●● ●●●● ●●●● {formData.mpesaCardNumber.slice(-4)}</span>
                  </div>
                </div>
              </div>
              <Button asChild size="lg">
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
      <>
        <Header />
        <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-foreground mb-2">Apply for a Loan</h1>
              <p className="text-lg text-muted-foreground">Complete the form below to apply for your M-Pesa Global Card Loan</p>
            </motion.div>

          {/* Progress Steps */}
          <div className="mb-8 flex gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-all ${
                    index <= currentStep
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {index < currentStep ? <CheckCircle2 className="h-5 w-5" /> : step.number}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      index < currentStep ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <CardDescription>{steps[currentStep].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount">Loan Amount (KES)</Label>
                      <Input
                        id="loanAmount"
                        name="loanAmount"
                        type="number"
                        placeholder="10000"
                        min="5000"
                        max="50000"
                        step="1000"
                        value={formData.loanAmount}
                        onChange={handleInputChange}
                        required
                      />
                      <p className="text-xs text-muted-foreground">Between KES 5,000 and KES 50,000</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loanTerm">Loan Term (Months)</Label>
                      <Select value={formData.loanTerm} onValueChange={(value) => handleSelectChange('loanTerm', value)}>
                        <SelectTrigger id="loanTerm">
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 months</SelectItem>
                          <SelectItem value="6">6 months</SelectItem>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="18">18 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Loan Purpose</Label>
                      <Textarea
                        id="purpose"
                        name="purpose"
                        placeholder="What will you use the loan for?"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 mb-4">
                      <p className="text-sm text-foreground font-medium mb-2">M-Pesa Global Card Details</p>
                      <p className="text-xs text-muted-foreground">
                        Enter your M-Pesa Global Card details. The loan amount will be transferred directly to your card account.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="mpesaCardNumber">Card Number *</Label>
                        <Input
                          id="mpesaCardNumber"
                          name="mpesaCardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.mpesaCardNumber}
                          onChange={handleInputChange}
                          required
                          inputMode="numeric"
                        />
                        <p className="text-xs text-muted-foreground">16-digit card number</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mpesaCardName">Full Name *</Label>
                        <Input
                          id="mpesaCardName"
                          name="mpesaCardName"
                          placeholder="John Doe"
                          value={formData.mpesaCardName}
                          onChange={handleInputChange}
                          required
                        />
                        <p className="text-xs text-muted-foreground">As shown on card</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="mpesaCardExpiry">Expiry Date (MM/YY) *</Label>
                        <Input
                          id="mpesaCardExpiry"
                          name="mpesaCardExpiry"
                          placeholder="12/25"
                          value={formData.mpesaCardExpiry}
                          onChange={handleInputChange}
                          required
                          inputMode="numeric"
                        />
                        <p className="text-xs text-muted-foreground">Month/Year format</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mpesaCVV">CVV *</Label>
                        <Input
                          id="mpesaCVV"
                          name="mpesaCVV"
                          placeholder="123"
                          value={formData.mpesaCVV}
                          onChange={handleInputChange}
                          required
                          type="password"
                          inputMode="numeric"
                        />
                        <p className="text-xs text-muted-foreground">3-4 digit security code</p>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <p className="text-xs text-muted-foreground">
                        🔒 Your card details are encrypted and secure. We never store your CVV.
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
                      <h3 className="font-semibold text-foreground">Review Your Application</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-muted-foreground">Name:</span>
                          <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-muted-foreground">Loan Amount:</span>
                          <span className="font-medium">KES {formData.loanAmount}</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-muted-foreground">Loan Term:</span>
                          <span className="font-medium">{formData.loanTerm} months</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="text-muted-foreground">M-Pesa Card:</span>
                          <span className="font-medium">●●●● ●●●● ●●●● {formData.mpesaCardNumber.slice(-4)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Cardholder:</span>
                          <span className="font-medium">{formData.mpesaCardName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <p className="text-sm text-foreground">
                        By submitting this application, you agree to our terms and conditions. We will review your application and contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-4 justify-between pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    Previous
                  </Button>
                  {currentStep < steps.length - 1 ? (
                    <Button type="button" onClick={handleNext} disabled={!isStepComplete()}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" disabled={!isStepComplete()}>
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
