import React from "react"
import Icon from "../atoms/Icon"
import Image from "../atoms/Image"

const Modular: React.FC = () => {
  return (
    <div className="@container flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:flex-row gap-8 max-w-3xl">
        <div>
          <div className="flex items-center mb-8 text-lg font-semibold text-primary">
            <Icon name="terminal" className="w-8 h-8 mr-2" />
            <span className="">Nodi Modular</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Headless CAD Engine for your next project
          </h3>
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 items-center mb-4">
            <span className="inline-block px-4 py-2 bg-gray-700 rounded text-base font-mono text-white">
              npm install @nodi-modular
            </span>
            {/* TypeScriptアイコン */}
            <Icon name="typescript" size={32} />
            {/* Reactアイコン */}
            <Icon name="react" size={32} />
          </div>
          <p className="text-content-m-a leading-relaxed text-left">
            Nodi modular is available as an npm package, allowing it to be
            integrated into other projects, such as 3D configurator on EC,
            machine operation program etc...{" "}
          </p>

          <a href="#" className="text-primary">
            view docs
          </a>
        </div>
        <Image
          path="/videos/modular.mp4"
          alt="Nodi Modular"
          className="min-w-3/5"
        />
      </div>
    </div>
  )
}

export default Modular
