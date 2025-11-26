interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {features.map((feature, index) => (
        <div key={index} className="card-modern">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
