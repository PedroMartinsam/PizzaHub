import Link from 'next/link'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  icon?: ReactNode
}

export function Button({ children, href, onClick, variant = 'primary', className, icon }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D62828]/20'
  const variants = {
    primary: 'bg-[#D62828] text-white shadow-[0_10px_30px_-12px_rgba(214,40,40,0.45)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-12px_rgba(214,40,40,0.55)]',
    secondary: 'border border-[#D62828]/30 bg-white text-[#D62828] hover:bg-[#FFF7ED]',
    ghost: 'bg-transparent text-slate-600 hover:text-[#D62828]',
  }

  const content = (
    <span className={clsx(base, variants[variant], className)}>
      {children}
      {icon ? <span>{icon}</span> : null}
    </span>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  )
}
