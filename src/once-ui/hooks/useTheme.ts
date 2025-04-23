"use client"
import { useCallback, useEffect, useState } from "react"
function getSysTheme() {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    }
    return "light"
}

export const useTheme = (): [string, () => void] => {
    const [theme, setTheme] = useState(getSysTheme())

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [theme])

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme)

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light")
        }
        mediaQuery.addEventListener('change', handler)

        return () => mediaQuery.removeEventListener('change', handler)
    }, [theme])

    return [theme, toggleTheme]
}