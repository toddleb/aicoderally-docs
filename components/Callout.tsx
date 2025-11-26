interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error'
  title?: string
  children: React.ReactNode
}

const styles = {
  info: 'bg-cyan-50 border-cyan-200 text-cyan-900',
  warning: 'bg-orange-50 border-orange-200 text-orange-900',
  success: 'bg-green-50 border-green-200 text-green-900',
  error: 'bg-red-50 border-red-200 text-red-900',
}

const icons = {
  info: '💡',
  warning: '⚠️',
  success: '✅',
  error: '❌',
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  return (
    <div className={`${styles[type]} border-l-4 rounded-r-lg p-4 my-6`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icons[type]}</span>
        <div className="flex-1">
          {title && <p className="font-bold mb-1">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
