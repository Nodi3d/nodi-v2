import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 flex justify-between border-t-[1px] border-primary-l px-4 md:px-10">
      <img src="/images/nodi.svg" alt="Nodi" className="w-auto h-10" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <ul>
          <li>
            <a href="/#features" className="text-content-h-a">
              Features
            </a>
          </li>
          <li>
            <a href="/#for-developers" className="text-content-h-a">
              For Deveopers
            </a>
          </li>
          <li>
            <a href="/#case-study" className="text-content-h-a">
              Case Study
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/Nodi3d/nodi-v2/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-content-h-a">
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nodi3d/nodi-v2/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-content-h-a">
              Discussions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
