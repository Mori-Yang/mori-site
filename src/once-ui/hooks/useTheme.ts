"use client"
import { useCallback, useEffect, useState } from "react"

export const useTheme = (): [string, () => void] => {
    const sysTheme = matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    const [theme, setTheme] = useState(sysTheme)

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
    }, [theme])

    return [theme, toggleTheme]
}