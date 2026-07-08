# M-Pesa Global Card Loans Platform

A modern, professional fintech web application for M-Pesa Global Card Loans built with Next.js, React, and Tailwind CSS.

## Overview

This platform provides a complete digital experience for users to apply for micro-loans, check eligibility, calculate payments, and manage their loans through an intuitive dashboard.

## Features

### 🏠 Pages

- **Home** - Hero section with feature highlights, statistics, and call-to-action buttons
- **Apply for Loan** - Multi-step form wizard for loan applications with progress tracking
- **Eligibility Checker** - Interactive tool to assess loan qualification
- **Loan Calculator** - Real-time calculator with customizable loan parameters
- **Dashboard** - Loan management interface showing active loans and payment schedules
- **About** - Company mission, values, team, and impact information
- **Contact** - Support channels and contact information

### 🎨 Design & UX

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **M-Pesa Branding** - Professional color scheme with green (#00A651) primary color
- **Smooth Animations** - Framer Motion animations for engaging interactions
- **Accessibility** - Semantic HTML and ARIA attributes for screen readers
- **Dark Mode** - Full light/dark mode support with adaptive colors
- **Form Validation** - Real-time client-side validation with helpful error messages

### ⚡ Technical Features

- **Next.js 16** - App Router with server and client components
- **React 19** - Latest React with modern hooks and features
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS 4** - Utility-first CSS with semantic design tokens
- **Framer Motion** - Professional animations and transitions
- **shadcn/ui** - High-quality component library with excellent defaults
- **Lucide Icons** - Beautiful, consistent iconography

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/bandocoins88/v0-mpesa-loans-platform.git
cd v0-mpesa-loans-platform

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles and design tokens
│   ├── page.tsx                # Home page
│   ├── apply/
│   │   └── page.tsx            # Loan application form
│   ├── eligibility/
│   │   └── page.tsx            # Eligibility checker
│   ├── calculator/
│   │   └── page.tsx            # Loan calculator
│   ├── dashboard/
│   │   └── page.tsx            # User dashboard
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer component
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       ├── label.tsx
│       └── slider.tsx
├── public/
│   ├── hero-mobile-wallet.png # Hero section image
│   └── team-collaboration.png # Team image
├── package.json
└── tsconfig.json
```

## Design System

### Colors

- **Primary**: M-Pesa Green (#00A651)
- **Accent**: Warm Orange (#D97706)
- **Neutral**: Light Gray/White (#F9FAFB)
- **Text**: Dark Gray (#111827)

### Typography

- **Headings**: Geist Sans Bold
- **Body**: Geist Sans Regular
- **Monospace**: Geist Mono

### Spacing

Uses Tailwind's standard spacing scale (4px base unit) for consistent margins and padding.

## Key Components

### Form Components
- `Input` - Text input field
- `Select` - Dropdown select
- `Textarea` - Multi-line text input
- `Label` - Form field label
- `Slider` - Range input for calculator

### Layout Components
- `Card` - Container for content grouping
- `Header` - Navigation bar
- `Footer` - Footer section

## Deployment

This project is configured for easy deployment to Vercel:

```bash
# Deploy to Vercel
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software. All rights reserved.

## Contact

For support and inquiries:
- Email: support@mpesaloans.com
- Phone: +254 XXX XXX XXX
- Website: www.mpesaloans.com

---

Built with ❤️ using v0 and Next.js
