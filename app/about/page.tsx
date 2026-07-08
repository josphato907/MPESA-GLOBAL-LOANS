import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Users, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              About M-Pesa Global Card Loans
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re revolutionizing lending in Africa by making fast, secure, and affordable loans accessible to everyone.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At M-Pesa Global Card Loans, we believe that everyone deserves access to affordable credit. Our mission is to provide fast, transparent, and secure lending solutions that empower individuals and businesses to achieve their financial goals.
                </p>
                <p className="text-lg text-muted-foreground">
                  We leverage cutting-edge technology and financial innovation to eliminate barriers to credit access and build a more inclusive financial ecosystem across Africa and beyond.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">Financial Freedom</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid gap-8 md:grid-cols-4">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No hidden fees. Clear terms. We believe in honest communication with our customers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your success is our success. We&apos;re committed to exceeding your expectations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We serve everyone. Credit access should not be limited by geography or background.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We continuously improve our technology to provide the best experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                M-Pesa Global Card Loans was founded in 2022 with a vision to democratize access to credit in East Africa. Our founders recognized that millions of individuals and small businesses were being left behind by traditional banking systems that relied on outdated criteria and lengthy approval processes.
              </p>
              <p>
                Starting as a small fintech team in Nairobi, we developed innovative technology that could assess creditworthiness beyond traditional metrics. By leveraging alternative data and machine learning, we could approve loans in minutes instead of weeks.
              </p>
              <p>
                Today, we&apos;ve grown to serve over 50,000 customers across Kenya, Uganda, Tanzania, and Rwanda. We&apos;ve disbursed over KES 2 billion in loans, transforming lives and enabling entrepreneurship in communities across the region.
              </p>
              <p>
                Our success is built on the trust of our customers. We remain committed to our core mission: making credit accessible, affordable, and empowering.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: 'Sarah Kimani', role: 'CEO & Founder', bio: 'Former Goldman Sachs analyst with 15 years of fintech experience' },
                { name: 'James Omondi', role: 'CTO & Founder', bio: 'MIT-trained software engineer specializing in AI and machine learning' },
                { name: 'Grace Mwangi', role: 'CFO', bio: 'Finance expert with experience in emerging market fintech' },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-primary-foreground/80">Active Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">KES 2B+</div>
                <p className="text-primary-foreground/80">Loans Disbursed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <p className="text-primary-foreground/80">Countries</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2024</div>
                <p className="text-primary-foreground/80">Serving Since</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
