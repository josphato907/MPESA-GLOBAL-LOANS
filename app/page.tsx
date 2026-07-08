'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle2, TrendingUp, Clock, Shield, Zap, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Fast, Secure Loans at Your Fingertips
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Get instant access to micro-loans with M-Pesa Global Card Loans. Low interest rates, quick approval, and flexible repayment terms tailored to your needs.
                </p>
                <div className="mt-8 flex gap-4 flex-wrap">
                  <Button asChild size="lg">
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/eligibility">Check Eligibility</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">KES 50,000</div>
                  <p className="text-muted-foreground">Get up to KES 50,000 instantly</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose M-Pesa Loans?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experience the future of lending with our innovative platform
              </p>
            </motion.div>
            
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Feature 1 */}
              <motion.div
                className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Instant Approval</h3>
                <p className="text-muted-foreground">
                  Get approved in minutes. Our automated system processes your application instantly without unnecessary delays.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Safe</h3>
                <p className="text-muted-foreground">
                  Bank-level encryption protects your personal and financial information with industry-leading security standards.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Rates</h3>
                <p className="text-muted-foreground">
                  Enjoy industry-leading interest rates starting from 15% APR. No hidden fees or surprise charges.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Terms</h3>
                <p className="text-muted-foreground">
                  Choose repayment terms from 3 to 24 months. Adjust your payment schedule to match your cash flow.
                </p>
              </motion.div>

              {/* Feature 5 */}
              <motion.div
                className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated support team is always available to help you with questions or concerns anytime.
                </p>
              </motion.div>

              {/* Feature 6 */}
              <motion.div
                className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Simple Process</h3>
                <p className="text-muted-foreground">
                  Apply online in 5 minutes. No paperwork, no office visits. Everything is handled digitally.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-primary-foreground/80">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">KES 2B+</div>
                <p className="text-primary-foreground/80">Loans Disbursed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2 Min</div>
                <p className="text-primary-foreground/80">Average Approval</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <p className="text-primary-foreground/80">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-accent/5 p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Your Loan?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied customers who have already improved their financial situation with M-Pesa Loans.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg">
                  <Link href="/apply">Start Your Application</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/calculator">Calculate Your Loan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
