import React from "react"
import Icon from "../atoms/Icon"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import { AnimatePresence, motion } from "framer-motion"

const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const isBgWhite = isScrolled(window.innerHeight * 0.5) || isMenuOpen

  const menus = [
    { name: "Features", href: "#features" },
    { name: "For Developers", href: "#for-developers" },
    { name: "Case Study", href: "#case-study" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <AnimatePresence>
      <motion.header
        layout
        className={`fixed top-3 inset-x-3 grid grid-cols-[1fr_auto] items-center p-2 z-50 transition-colors duration-200 rounded-[24px] ${
          isBgWhite ? "bg-white shadow-md" : "bg-transparent"
        }`}>
        <motion.div className="flex gap-1 items-center" layout>
          <button
            className="button-sq rounded-full block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon name={isMenuOpen ? "close" : "hamburger"} size={24} />
          </button>
          <img src="/images/nodi.svg" alt="Nodi Logo" className="h-9 w-auto" />

          <nav className="items-center space-x-4 ml-10 hidden md:flex">
            {/* Desktop menu */}
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="text-sm hover:text-primary font-medium">
                {menu.name}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* アイコン & CTA */}
        <motion.div className="flex items-center space-x-2 ml-auto" layout>
          <a
            href="https://github.com/Nodi3d/nodi-v2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="button-sq hidden md:block">
            <Icon name="github" size={24} />
          </a>
          <a
            href="https://github.com/Nodi3d/nodi-v2/wiki/Examples"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Docs"
            className="button-sq hidden md:block">
            <Icon name="docs" size={24} />
          </a>
          <a href="#try" className="button bg-primary text-white">
            <span className="hidden md:inline">Try Nodi for Free</span>
            <span className="md:hidden">Try Nodi</span>
          </a>
        </motion.div>
        {isMenuOpen && (
          <motion.nav className="pl-4" layout>
            {menus.map((menu, index) => (
              <motion.a
                key={menu.name}
                href={menu.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block text-lg py-2 hover:text-primary font-medium">
                {menu.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </motion.header>
    </AnimatePresence>
  )
}

export default Header
