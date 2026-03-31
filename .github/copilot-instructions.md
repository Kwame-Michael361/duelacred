# DuelaCred Landing Page - Development Guide

This is a Next.js landing page project for DuelaCred, configured for deployment on Vercel.

## Project Overview
- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel + GitHub
- **Node Version**: 18+

## Quick Start
```bash
npm run dev  # Start development server at http://localhost:3000
npm run build  # Build for production
npm start  # Run production server
npm run lint  # Run ESLint
```

## File Structure
```
src/
  ├── app/
  │   ├── layout.tsx      # Root layout
  │   ├── page.tsx        # Landing page
  │   └── globals.css     # Global styles
  ├── components/         # Reusable components
  └── lib/               # Utility functions
public/                  # Static assets
```

## Development Workflow
1. Make changes in `src/` folder
2. Run `npm run dev` to test locally
3. Commit and push to GitHub
4. Vercel automatically deploys on push
