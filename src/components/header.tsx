import { Link } from "react-router-dom"
import { useTheme } from './theme-provider';
import ThemeToggleMode from './theme-goggle';
import { CitySearch } from "./city-search";





function Header() {
    const {theme}= useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
        <section className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to={"/"}>
            
            <figure>
                <img src={theme==="dark"? "/public/assets/img/logo.png" : "/public/assets/img/pngtree-cloud-weather-logo-image-light.png"} alt="logo" height={'50px'} width={'50px'} />
            </figure>
            </Link>
            {/* <ModeToggle /> */}
            <article className="flex gap-4">
            <CitySearch />
      
            <ThemeToggleMode />
            </article>
            
        </section>
    </header>
  )
}

export default Header