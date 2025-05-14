"use client"
import { useCallback, useEffect, useState } from "react"

export const useTheme = (): [string | null, () => void] => {
    const [theme, setTheme] = useState<string | null>(null);

    // 只在客户端初始化主题
    useEffect(() => {
        // 尝试从 localStorage 获取保存的主题
        const savedTheme = window.localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            return;
        }

        // 如果没有保存的主题，则使用系统主题
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(isDark ? "dark" : "light");
    }, []);

    const toggleTheme = useCallback(() => {
        if (!theme) return;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
    }, [theme]);

    useEffect(() => {
        if (!theme) return;

        const root = document.documentElement;
        root.setAttribute('data-theme', theme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            // 只有当没有保存的主题时才跟随系统主题
            if (!window.localStorage.getItem('theme')) {
                setTheme(e.matches ? "dark" : "light");
            }
        };
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, [theme]);

    return [theme, toggleTheme];
}