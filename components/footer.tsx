'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              M-Pesa Global Card Loans provides fast, secure, and flexible micro-lending solutions for businesses and individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-muted-foreground hover:text-primary transition-colors">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +254 (0) 700 000 000
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@mpesaloans.com" className="hover:text-primary transition-colors">
                  support@mpesaloans.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 M-Pesa Global Card Loans. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.29 20v-7.1H5.5v-3.07h2.79V7.07c0-2.7 1.65-4.18 4.07-4.18 1.16 0 2.16.09 2.45.13v2.84h-1.68c-1.32 0-1.58.63-1.58 1.55V9.9h3.16l-.41 3.07h-2.75V20" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.593 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.337 16.337H13.97v-3.771c0-.9-.02-2.054-1.252-2.054-1.253 0-1.445.98-1.445 1.993v3.832H8.916v-7.764h2.279v1.06h.031c.317-.602 1.092-1.237 2.247-1.237 2.401 0 2.847 1.58 2.847 3.637v4.304zM5.337 13.433c-.689 0-1.246-.558-1.246-1.243 0-.686.557-1.243 1.246-1.243.69 0 1.247.557 1.247 1.243 0 .685-.557 1.243-1.247 1.243zm.768-9.368c.727 0 1.316-.59 1.316-1.317 0-.727-.589-1.316-1.316-1.316-.726 0-1.316.589-1.316 1.316 0 .727.59 1.317 1.316 1.317zm7.722 9.368h-.255V9.003c0-1.273-.427-2.282-1.788-2.282-1.537 0-1.92 1.12-1.92 2.282v4.427H8.77V5.669h2.227v1.06h.032c.385-.718 1.243-1.437 2.557-1.437 2.735 0 3.238 1.799 3.238 4.143v4.304z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
