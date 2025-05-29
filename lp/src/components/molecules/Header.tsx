import React from "react"
import Icon from "../atoms/Icon"

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-10 py-4">
      <div className="flex gap-2">
        <img src="/images/nodi.svg" alt="Nodi Logo" className="h-7 w-auto" />

        <nav className="flex items-center space-x-4 ml-10">
          <a
            href="#features"
            className="text-sm hover:text-blue-600 font-medium">
            Features
          </a>
          <a
            href="#developers"
            className="text-sm hover:text-blue-600 font-medium">
            For Developers
          </a>
          <a href="#case" className="text-sm hover:text-blue-600 font-medium">
            Case Study
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
      </div>

      {/* アイコン & CTA */}
      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="button-sq">
          <Icon name="github" size={24} />
        </a>
        <a
          href="https://github.com/Nodi3d/nodi-v2/wiki/Examples"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Docs"
          className="button-sq">
          <Icon name="docs" size={24} />
        </a>
        <a href="#try" className="button bg-primary text-white">
          Try Nodi for Free
        </a>
      </div>
    </header>
  )
}

export default Header
