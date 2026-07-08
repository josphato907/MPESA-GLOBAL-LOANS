# Deployment Guide

Complete guide for deploying the M-Pesa Global Card Loans Platform to production.

## Current Status

- **Project**: v0-project on Vercel
- **Framework**: Next.js 16
- **Status**: Ready for deployment
- **Live URL**: https://v0-project-ozft6nvfh-bandocoins88-1068s-projects.vercel.app

## Deployment Options

### 1. Vercel (Recommended) - Already Set Up

Your project is already deployed on Vercel. Updates happen automatically when you:

1. Push to the connected GitHub repository
2. Or use `vercel deploy --prod`

#### Push Updates to Production:

```bash
# Push to main branch (auto-deploys)
git push origin main

# Or manually deploy to Vercel
vercel deploy --prod
```

#### View Deployments:

```bash
# List recent deployments
vercel list

# View current deployment info
vercel inspect
```

### 2. Deploy to Another Vercel Team

```bash
# If needed, change team scope
vercel deploy --prod --scope=YOUR_TEAM_NAME
```

### 3. Docker Deployment

Build a Docker image for containerized deployment:

```bash
# Build the Next.js app
pnpm build

# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["pnpm", "start"]
EOF

# Build the image
docker build -t v0-mpesa-loans .

# Run locally
docker run -p 3000:3000 v0-mpesa-loans
```

### 4. Deploy to Other Platforms

#### Netlify

```bash
# Build
pnpm build

# Connect to Netlify
# 1. Push to GitHub
# 2. Go to app.netlify.com
# 3. New site from Git
# 4. Select your repository
```

#### AWS Amplify

```bash
# 1. Push to GitHub
# 2. Go to AWS Amplify Console
# 3. Connect repository
# 4. Configure build settings:
#    Build command: pnpm build
#    Start command: pnpm start
```

#### Self-Hosted (VPS/Server)

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Clone repository
git clone https://github.com/YOUR_USERNAME/v0-mpesa-loans-platform.git
cd v0-mpesa-loans-platform

# Install dependencies
pnpm install --frozen-lockfile

# Build
pnpm build

# Start production server
pnpm start

# Use PM2 for process management
npm install -g pm2
pm2 start "pnpm start" --name "mpesa-loans"
pm2 save
pm2 startup
```

## Pre-Deployment Checklist

- [ ] All commits pushed to main branch
- [ ] No uncommitted changes
- [ ] Tests passing (if applicable)
- [ ] Environment variables set (if needed)
- [ ] Sensitive data not hardcoded
- [ ] Production build tested locally: `pnpm build && pnpm start`
- [ ] Asset optimization complete
- [ ] Meta tags and SEO configured
- [ ] Analytics configured
- [ ] Security headers configured

## Environment Variables

Currently no environment variables are required. If you add backend services, create:

### Local Development (.env.local):
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Production (.env.production):
```
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

## Performance Optimization

### Before Deployment:

1. **Build Analysis**:
   ```bash
   pnpm build
   ```

2. **Check Bundle Size**:
   ```bash
   npm install -g bundle-phobia
   # Or use https://nextjs.org/learn/foundations/how-nextjs-works/optimization
   ```

3. **Test Performance**:
   ```bash
   # Local production test
   pnpm build
   pnpm start
   # Test at http://localhost:3000
   ```

### Monitoring:

- Use Vercel Analytics Dashboard
- Monitor Core Web Vitals
- Track error rates and logs
- Set up uptime monitoring

## CDN Configuration

Vercel automatically serves your app through Vercel's global CDN. Images and static assets are cached and served from edge locations worldwide.

For custom CDN:
1. Set custom domain in Vercel Settings
2. Configure DNS records
3. Enable SSL/TLS

## Database (When Needed)

For future backend integration:

### Neon PostgreSQL:
```bash
npm install @neondatabase/serverless
```

### Supabase:
```bash
npm install @supabase/supabase-js
```

## Monitoring & Logging

### Vercel Dashboard:
- Deployments
- Function logs
- Error tracking
- Performance metrics

### External Services:
- Sentry for error tracking
- DataDog for monitoring
- LogRocket for session replay

## Scaling Considerations

Current app requirements:
- **Database**: Not needed (frontend only)
- **Storage**: Not needed initially
- **Rate Limiting**: Not needed initially
- **Caching**: Vercel cache headers configured

As you grow:
1. Add database for user accounts
2. Implement API routes for calculations
3. Add authentication
4. Set up email/SMS notifications

## Rollback Strategy

If issues occur after deployment:

```bash
# View deployment history
vercel list

# Rollback to previous deployment
vercel rollback

# Or redeploy from specific commit
git checkout COMMIT_HASH
vercel deploy --prod
```

## SSL/TLS Certificate

Vercel automatically provides SSL/TLS certificates:
- Auto-renewal enabled
- HTTPS enforced
- Security headers configured

## Continuous Deployment

### GitHub Actions (Optional Setup):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g pnpm
      - run: pnpm install
      - run: pnpm build
      - name: Deploy to Vercel
        uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Post-Deployment

1. Test all pages and features
2. Verify responsive design on mobile devices
3. Check form submissions work correctly
4. Monitor error logs for issues
5. Set up alerts for downtime
6. Collect user feedback

## Support & Troubleshooting

### Common Issues:

**Build fails on Vercel**:
- Check build logs: Settings → Deployments
- Ensure all dependencies in package.json
- Verify environment variables set

**Performance slow**:
- Check image optimization
- Review bundle size
- Enable caching headers

**Static assets not loading**:
- Verify public/ directory files
- Check file paths are correct
- Clear Vercel cache

### Getting Help:

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create an issue in repository

## Backup & Recovery

### Backup Code:

```bash
# Daily automated via GitHub
# Plus local backups:
git clone --mirror https://github.com/YOUR_USERNAME/v0-mpesa-loans-platform.git
```

### Database Backups:

When database is added, enable:
- Automated daily backups
- Point-in-time recovery
- Replication for redundancy

## Security Hardening

### Before Production:

- [ ] Remove debug code/console.logs
- [ ] Enable HSTS headers
- [ ] Set Content-Security-Policy
- [ ] Configure CORS properly
- [ ] Use environment variables for secrets
- [ ] Enable 2FA on GitHub account
- [ ] Review dependencies for vulnerabilities: `npm audit`
- [ ] Set up branch protection rules

## Version Management

### Current Versions:
- Node.js: 18+
- Next.js: 16
- React: 19
- TypeScript: Latest

### Update Strategy:
1. Test updates locally
2. Commit changes
3. Push to development branch
4. Test on staging (if available)
5. Merge to main for production

---

**Ready to deploy?** Follow these steps:

1. Push code to main branch
2. Vercel automatically deploys
3. Monitor deployments dashboard
4. Test production app
5. Share the live URL!

For questions, see GITHUB_PUSH_INSTRUCTIONS.md or README.md
