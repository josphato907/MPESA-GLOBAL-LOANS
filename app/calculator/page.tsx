'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import Link from 'next/link'

export default function CalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(20000)
  const [interestRate, setInterestRate] = useState(15)
  const [loanTerm, setLoanTerm] = useState(12)

  const calculation = useMemo(() => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm

    // Monthly payment calculation using amortization formula
    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal

    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalPayment,
      totalInterest,
      principal,
    }
  }, [loanAmount, interestRate, loanTerm])

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Loan Calculator</h1>
            <p className="text-lg text-muted-foreground">Calculate your monthly payments and see the total cost of your loan</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator Input */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Parameters</CardTitle>
                <CardDescription>Adjust the values to see how payments change</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Loan Amount */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Loan Amount</Label>
                    <span className="text-sm font-semibold text-primary">KES {loanAmount.toLocaleString()}</span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={5000}
                    max={50000}
                    step={1000}
                    className="w-full"
                  />
                  <Input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Math.min(Math.max(parseInt(e.target.value) || 0, 5000), 50000))}
                    min={5000}
                    max={50000}
                    step={1000}
                  />
                  <p className="text-xs text-muted-foreground">Between KES 5,000 - KES 50,000</p>
                </div>

                {/* Interest Rate */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Annual Interest Rate</Label>
                    <span className="text-sm font-semibold text-primary">{interestRate.toFixed(1)}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={8}
                    max={25}
                    step={0.1}
                    className="w-full"
                  />
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.min(Math.max(parseFloat(e.target.value) || 0, 8), 25))}
                    min={8}
                    max={25}
                    step={0.1}
                  />
                  <p className="text-xs text-muted-foreground">Between 8% - 25% APR</p>
                </div>

                {/* Loan Term */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Loan Term (Months)</Label>
                    <span className="text-sm font-semibold text-primary">{loanTerm} months</span>
                  </div>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={3}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={loanTerm === 3 ? 'default' : 'outline'}
                      onClick={() => setLoanTerm(3)}
                      size="sm"
                    >
                      3 mo
                    </Button>
                    <Button
                      variant={loanTerm === 6 ? 'default' : 'outline'}
                      onClick={() => setLoanTerm(6)}
                      size="sm"
                    >
                      6 mo
                    </Button>
                    <Button
                      variant={loanTerm === 12 ? 'default' : 'outline'}
                      onClick={() => setLoanTerm(12)}
                      size="sm"
                    >
                      12 mo
                    </Button>
                    <Button
                      variant={loanTerm === 24 ? 'default' : 'outline'}
                      onClick={() => setLoanTerm(24)}
                      size="sm"
                    >
                      24 mo
                    </Button>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/50">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Monthly Payment */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                      <div className="text-4xl font-bold text-primary">
                        KES {calculation.monthlyPayment.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>

                    {/* Total Payment */}
                    <div className="border-t border-border pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Amount Paid</p>
                      <div className="text-2xl font-bold text-foreground">
                        KES {calculation.totalPayment.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>

                    {/* Total Interest */}
                    <div className="border-t border-border pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Interest Cost</p>
                      <div className="text-2xl font-bold text-accent">
                        KES {calculation.totalInterest.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Loan Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-border">
                    <span className="text-muted-foreground">Principal Amount</span>
                    <span className="font-semibold">KES {calculation.principal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-border">
                    <span className="text-muted-foreground">Interest Charged</span>
                    <span className="font-semibold">KES {calculation.totalInterest.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}</span>
                  </div>
                  <div className="flex justify-between pt-2 font-bold text-lg">
                    <span>Total Repayment</span>
                    <span className="text-primary">KES {calculation.totalPayment.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Payment Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your loan will be divided into {loanTerm} equal monthly payments. The first payment will be due on the first of the following month.
                  </p>
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
