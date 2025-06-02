import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const percentage = (position / totalHeight) * 100

      setScrollPosition(position)
      setScrollPercentage(percentage)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期値を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    scrollPosition,
    scrollPercentage,
    isScrolled: (threshold: number) => scrollPosition > threshold,
    isScrolledPercentage: (threshold: number) => scrollPercentage > threshold
  }
} 