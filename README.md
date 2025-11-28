# AICodeRally Documentation

Official documentation site for AICodeRally - built with Next.js 15 and MDX.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (localhost:3005)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
aicoderally-docs/
├── app/
│   ├── page.mdx                  # Homepage
│   ├── getting-started/          # Installation guide
│   ├── platform/                 # Architecture docs
│   ├── deployment/               # Deployment guide
│   ├── layout.tsx                # Root layout with navigation
│   └── globals.css               # Global styles
├── mdx-components.tsx            # MDX component configuration
├── next.config.mjs               # Next.js config with MDX support
└── package.json
```

## 🎨 Tech Stack

- **Next.js 15** - React framework with App Router
- **MDX** - Markdown with JSX support for rich documentation
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety
- **Vercel** - Deployment platform

## 📝 Writing Documentation

Documentation pages are written in MDX format (`.mdx` files). MDX allows you to use JSX components within Markdown:

```mdx
# My Documentation Page

This is regular markdown content.

<CustomComponent prop="value" />

## More markdown here
```

## 🌐 Deployment to Vercel

### First-Time Setup

1. **Create GitHub repository**:
   ```bash
   gh repo create aicoderally-docs --public --source=. --remote=origin
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import `aicoderally-docs` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure custom domain**:
   - In Vercel project settings → Domains
   - Add domain: `docs.aicoderally.com`
   - Update DNS (already configured in IONOS):
     - Type: `CNAME`
     - Name: `docs`
     - Value: `cname.vercel-dns.com`

### Subsequent Deployments

Vercel automatically deploys on every push to `main` branch. No manual steps needed.

## 📚 Documentation Pages

- **Homepage** (`/`) - Overview of AICodeRally platform
- **Getting Started** (`/getting-started`) - Installation and setup guide
- **Platform** (`/platform`) - Architecture and tech stack
- **Deployment** (`/deployment`) - Production deployment guide

## 🔧 Development

The docs site runs on port 3005 to avoid conflicts with other AICodeRally services:
- Studio: 3000
- Edge: 3001
- Summit: 3002
- Docs: 3005

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - React libraries
- `@mdx-js/loader` & `@mdx-js/react` - MDX support
- `@next/mdx` - Next.js MDX integration
- `lucide-react` - Icon library
- `tailwindcss` - CSS framework

### Development
- `typescript` - Type checking
- `eslint` - Code linting
- `prettier` - Code formatting

## 🤝 Contributing

To add new documentation:

1. Create new `.mdx` file in `app/` directory
2. Add navigation link in `app/layout.tsx`
3. Write content using MDX format
4. Test locally with `pnpm dev`
5. Commit and push to deploy

## 📄 License

Part of the AICodeRally platform.

---

**Repository:** `AICodeRally/aicoderally-docs` (transferred from toddleb 2025-11-28)

<!-- Test auto-deploy -->
<!-- Test auto-deploy after fix -->
