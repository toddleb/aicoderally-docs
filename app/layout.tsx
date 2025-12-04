import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AICodeRally Documentation',
  description: 'Official documentation for AICodeRally - AI-native platform for building intelligent applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Modern gradient header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a href="https://aicoderally.com" className="flex items-center gap-2 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-violet-500 to-orange-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-200"></div>
                  <span className="text-xl font-black gradient-text">AICodeRally</span>
                </a>
                <span className="text-gray-400 font-light">|</span>
                <span className="text-sm font-medium text-gray-600">Documentation</span>
              </div>

              <nav className="hidden md:flex gap-2">
                <a href="/" className="nav-link">Home</a>
                <a href="/getting-started" className="nav-link">Getting Started</a>
                <a href="/architecture/unified" className="nav-link">System Architecture</a>
                <a href="/tech-stack" className="nav-link">Tech Stack</a>
                <a href="/modules" className="nav-link">Modules</a>
                <a href="/development" className="nav-link">Development</a>
                <a href="/tools/rally-ai" className="nav-link">Rally AI</a>
                <a href="/franchise" className="nav-link">Franchise</a>
                <a href="/deployment" className="nav-link">Deployment</a>
              </nav>

              <a
                href="https://aicoderally.com"
                className="hidden md:block text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
              >
                Visit Main Site →
              </a>
            </div>
          </div>
        </header>

        {/* Main content with gradient accent */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </main>

        {/* Modern footer */}
        <footer className="mt-24 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 gradient-text">AICodeRally</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI-native platform for building intelligent applications
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/architecture/unified" className="text-gray-600 hover:text-violet-600 transition-colors">System Architecture</a>
                  <a href="/tools/rally-ai" className="text-gray-600 hover:text-violet-600 transition-colors">Rally AI</a>
                  <a href="/development/agent-protocol" className="text-gray-600 hover:text-violet-600 transition-colors">Agent Protocol</a>
                  <a href="/development/prompt-library" className="text-gray-600 hover:text-violet-600 transition-colors">Prompt Library</a>
                  <a href="/design-system" className="text-gray-600 hover:text-violet-600 transition-colors">Design System</a>
                  <a href="/franchise" className="text-gray-600 hover:text-violet-600 transition-colors">Franchise</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Resources</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/integration/ai-gateway" className="text-gray-600 hover:text-violet-600 transition-colors">AI Gateway Guide</a>
                  <a href="/development/prompt-library" className="text-gray-600 hover:text-violet-600 transition-colors">Prompt Library</a>
                  <a href="https://github.com/AICodeRally/aicoderally-stack/blob/master/UNIFIED_ARCHITECTURE.md" className="text-gray-600 hover:text-violet-600 transition-colors">Master Architecture Doc</a>
                  <a href="/architecture/master-context" className="text-gray-600 hover:text-violet-600 transition-colors">Master Context (Repo Map)</a>
                  <a href="https://aicoderally.com" className="text-gray-600 hover:text-violet-600 transition-colors">Main Website</a>
                  <a href="https://github.com/AICodeRally/aicoderally-stack" className="text-gray-600 hover:text-violet-600 transition-colors">GitHub</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Support</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="mailto:support@aicoderally.com" className="text-gray-600 hover:text-violet-600 transition-colors">Contact Support</a>
                  <a href="https://github.com/AICodeRally/aicoderally-stack/issues" className="text-gray-600 hover:text-violet-600 transition-colors">Report Issue</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
              © 2025 AICodeRally. Built with Next.js and MDX.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
