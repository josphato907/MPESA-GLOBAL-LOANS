'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard, TrendingUp, Calendar, AlertCircle, Download, Bell } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  // Sample dashboard data
  const loanData = {
    loanId: 'LOAN-2024-001234',
    status: 'Active',
    disbursedDate: '2024-01-15',
    amount: 25000,
    amountRemaining: 12500,
    monthlyPayment: 2083,
    interestRate: 15,
    dueDate: '2024-02-15',
    nextPayment: 2083,
    totalPaid: 12500,
  }

  const paymentSchedule = [
    { month: 'Jan 2024', amount: 2083, paid: true },
    { month: 'Feb 2024', amount: 2083, paid: true },
    { month: 'Mar 2024', amount: 2083, paid: true },
    { month: 'Apr 2024', amount: 2083, paid: true },
    { month: 'May 2024', amount: 2083, paid: true },
    { month: 'Jun 2024', amount: 2083, paid: true },
    { month: 'Jul 2024', amount: 2083, paid: false },
    { month: 'Aug 2024', amount: 2083, paid: false },
    { month: 'Sep 2024', amount: 2083, paid: false },
    { month: 'Oct 2024', amount: 2083, paid: false },
    { month: 'Nov 2024', amount: 2083, paid: false },
    { month: 'Dec 2024', amount: 2083, paid: false },
  ]

  const completionPercentage = (loanData.totalPaid / loanData.amount) * 100

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Your Dashboard</h1>
            <p className="text-lg text-muted-foreground">Manage your loans and track payments</p>
          </div>

          {/* Alerts */}
          <Card className="mb-8 border-accent bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Bell className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Payment Reminder</h3>
                  <p className="text-sm text-muted-foreground">Your next payment of KES 2,083 is due on February 15, 2024.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Borrowed</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">KES {loanData.amount.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Loan {loanData.loanId}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Amount Remaining</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">KES {loanData.amountRemaining.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">{(100 - completionPercentage).toFixed(1)}% of loan</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Payment</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">KES {loanData.monthlyPayment.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Due every month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Interest Rate</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{loanData.interestRate}%</div>
                <p className="text-xs text-muted-foreground">Annual APR</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Loan Card */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Loan Progress</CardTitle>
                  <CardDescription>You&apos;ve paid {completionPercentage.toFixed(1)}% of your loan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{completionPercentage.toFixed(1)}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <p className="text-sm text-muted-foreground mb-1">Amount Paid</p>
                      <p className="text-2xl font-bold">KES {loanData.totalPaid.toLocaleString()}</p>
                    </div>
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <p className="text-sm text-muted-foreground mb-1">Amount Remaining</p>
                      <p className="text-2xl font-bold">KES {loanData.amountRemaining.toLocaleString()}</p>
                    </div>
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <p className="text-sm text-muted-foreground mb-1">Completion Date</p>
                      <p className="text-2xl font-bold">Dec 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Schedule</CardTitle>
                  <CardDescription>Your 12-month payment plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {paymentSchedule.map((payment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-3 w-3 rounded-full ${
                              payment.paid ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                          <span className="text-sm font-medium">{payment.month}</span>
                        </div>
                        <span className={`text-sm font-semibold ${
                          payment.paid ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                          KES {payment.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Next Payment */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50">
                <CardHeader>
                  <CardTitle className="text-lg">Next Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount Due</p>
                    <p className="text-3xl font-bold text-primary">KES {loanData.nextPayment.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Due Date</p>
                    <p className="text-lg font-semibold">{loanData.dueDate}</p>
                  </div>
                  <Button className="w-full">Make Payment</Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Statement
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    View Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Request Extension
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Early Repayment
                  </Button>
                </CardContent>
              </Card>

              {/* Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Have questions about your loan? Our support team is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
