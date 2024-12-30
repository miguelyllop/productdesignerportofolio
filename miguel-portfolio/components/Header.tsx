'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const isProjectPage = pathname.startsWith('/projects/')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push('/')}
          onMouseEnter={(e) => {
            if (isProjectPage) {
              e.currentTarget.textContent = 'Miguel'
            }
          }}
          onMouseLeave={(e) => {
            if (isProjectPage) {
              e.currentTarget.textContent = 'Project Name'
            }
          }}
        >
          {isProjectPage ? 'Project Name' : 'Miguel'}
        </h1>
        <nav className="flex items-center space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
              <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  )
}
