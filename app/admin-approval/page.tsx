'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AdminApprovalPage() {
  const [approvalStep, setApprovalStep] = useState<'submitted' | 'reviewing' | 'approved'>('submitted')

  const handleApproveApplication = () => {
    setApprovalStep('reviewing')
    // Simulate processing
    setTimeout(() => {
      setApprovalStep('approved')
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {approvalStep === 'submitted' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Application Submitted for Review</h1>
                <p className="text-lg text-muted-foreground">
                  Your loan application has been received and is now pending admin approval.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-4 items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Admin Review</p>
                        <p className="text-sm text-muted-foreground">Our admin team will verify your application details and M-Pesa card information.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Approval Decision</p>
                        <p className="text-sm text-muted-foreground">We will make a decision on your loan approval within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Fund Transfer</p>
                        <p className="text-sm text-muted-foreground">Upon approval, the loan amount will be transferred to your M-Pesa Global Card.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    <strong>Application ID:</strong> APP-{Math.random().toString(36).substring(2, 11).toUpperCase()}
                  </p>
                  <p>
                    <strong>Status:</strong> <Badge variant="secondary">Pending Review</Badge>
                  </p>
                  <p className="text-muted-foreground">
                    You will receive email and SMS notifications at each stage of the approval process. Do not share your application details with anyone.
                  </p>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button onClick={handleApproveApplication}>
                  Request Admin Review
                </Button>
              </div>
            </motion.div>
          )}

          {approvalStep === 'reviewing' && (
            <motion.div
              className="space-y-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
                  <div className="animate-spin">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground">Reviewing Your Application</h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Our admin team is now reviewing your loan application. This usually takes a few minutes.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                Please wait while we process your request...
              </div>
            </motion.div>
          )}

          {approvalStep === 'approved' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 border-2 border-green-500">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </motion.div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Application Approved!</h1>
                <p className="text-lg text-muted-foreground">
                  Congratulations! Your loan application has been approved by our admin team.
                </p>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">Approval Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Status:</span>
                    <Badge className="bg-green-600">Approved</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Approved Amount:</span>
                    <span className="font-medium">KES 25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-medium">15% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transfer Status:</span>
                    <Badge variant="outline">Processing...</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                  <CardDescription>The funds will arrive in your M-Pesa Global Card shortly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Your approved loan amount is being transferred to your M-Pesa Global Card. You should receive the funds within 15-30 minutes. You will receive a confirmation SMS and email once the transfer is complete.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-foreground mb-2">Loan Repayment Information</p>
                    <p className="text-muted-foreground">Your first payment is due within 30 days. You can view your payment schedule in your dashboard.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
                <Button asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
