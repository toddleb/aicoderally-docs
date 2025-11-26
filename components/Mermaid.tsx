'use client'

import { useEffect, useRef, useState } from 'react'

interface MermaidProps {
  chart: string
  className?: string
}

export default function Mermaid({ chart, className = '' }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default

        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          themeVariables: {
            primaryColor: '#8b5cf6',
            primaryTextColor: '#fff',
            primaryBorderColor: '#06b6d4',
            lineColor: '#f97316',
            secondaryColor: '#06b6d4',
            tertiaryColor: '#f97316',
          },
        })

        const { svg } = await mermaid.render('mermaid-' + Math.random(), chart)
        setSvg(svg)
      } catch (error) {
        console.error('Mermaid rendering error:', error)
      }
    }

    renderChart()
  }, [chart])

  return (
    <div
      ref={ref}
      className={`my-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
