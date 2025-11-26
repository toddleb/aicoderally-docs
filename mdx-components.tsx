import Mermaid from './components/Mermaid'
import Card from './components/Card'
import Callout from './components/Callout'
import FeatureGrid from './components/FeatureGrid'

export function useMDXComponents(components: any) {
  return {
    Mermaid,
    Card,
    Callout,
    FeatureGrid,
    ...components,
  }
}
