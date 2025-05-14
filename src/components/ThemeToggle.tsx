"use client";
import dynamic from 'next/dynamic';
import { ToggleButton } from "@/once-ui/components";
import { useTheme } from "@/once-ui/hooks/useTheme";

const ThemeToggleClient = () => {
    const [theme, toggleTheme] = useTheme();

    // 在主题加载前不渲染任何内容，避免闪烁
    if (theme === null) {
        return null;
    }

    return (
        <ToggleButton
            prefixIcon={theme === 'dark' ? 'dark' : 'light'}
            onClick={toggleTheme}
            aria-label={`切换到${theme === 'dark' ? '浅色' : '深色'}主题`}
            selected
        />
    );
};

// 使用 dynamic 导入，并禁用 SSR
export const ThemeToggle = dynamic(
    () => Promise.resolve(ThemeToggleClient),
    { ssr: false }
);