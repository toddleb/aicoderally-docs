interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
  gradient?: boolean
}

export default function Card({ title, description, children, gradient = false }: CardProps) {
  return (
    <div className={`card-modern ${gradient ? 'gradient-bg' : ''}`}>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  )
}
