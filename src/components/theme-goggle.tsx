import { JSX } from 'react';
import { useTheme } from './theme-provider';
import { Moon, Sun } from 'lucide-react';


 function ThemeToggleMode(): JSX.Element {
    const {theme, setTheme} = useTheme();
    const isDark = theme === "dark";
   return (
     <section onClick={()=>setTheme(isDark? "light" : "dark")} className={`flex items-center cursor-pointer transition-transform duration-500 ${
        isDark ? "rotate-180" : "rotate-0"}`}>

    {isDark ? (
        <Sun className="h-6 w-6 text-white-500 rotate-0 transition-all" />
      ) : (
        <Moon className="h-6 w-6 text-gray-500 rotate-0 transition-all" />
      )}
         <span className="sr-only">Toggle theme</span>
     </section>
   )
 }
 
 export default ThemeToggleMode