import { useState, useEffect } from "react"

export const useDarkMode = () => {
    const [theme, setTheme ] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light": "dark";
    useEffect(()=>{
   const root = window.document.documentElement;
   root.classList.remove(colorTheme)
   root.classList.add(theme);
   localStorage.setItem("Theme", theme);
    },[theme, colorTheme])


    return { colorTheme, setTheme }
}