import React from "react"
import Icon from "../atoms/Icon"
import Image from "../atoms/Image"

const Modular: React.FC = () => {
  const why = [
    {
      title: "Supports BRep and curve/surface modeling",
      description: "CAM/CAE Support",
      path: "/videos/editor.mp4",
    },
    {
      title: "Zero-Copy Data Sharing with WebAssembly",
      description: "CAM/CAE Support",
      path: "/videos/editor.mp4",
    },
    {
      title: "Developing a CAD Kernel",
      description: "CAM/CAE Support",
      path: "/videos/editor.mp4",
    },
  ]
  return (
    <section
      className="@container flex flex-col items-center justify-center md:px-16 px-4 py-32 max-w-6xl mx-auto"
      id="for-developers">
      <div className="flex flex-col items-center md:flex-row gap-8 mb-8 w-full text-left md:text-left">
        <div>
          <div className="flex items-center mb-4 text-lg font-semibold text-primary w-full justify-start md:justify-start">
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
        </div>
        <Image
          path="/videos/modular.mp4"
          alt="Nodi Modular"
          className="min-w-3/5 rounded-lg"
        />
      </div>
      {/* <h3 className="text-xl font-semibold mb-8">Why Nodi Modular</h3>
      <div className="grid grid-rows-3 gap-2 md:grid-cols-3 md:max-w-2xl">
        {why.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr] items-center md:flex-row gap-4">
            <div className="w-18 h-18 border-2 border-primary-l relative flex items-center justify-center mb-3">
              <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-primary " />
              <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-2 border-r-2 border-primary " />
              <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-2 border-l-2 border-primary " />
              <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-primary " />
              <img src={feature.path} alt="" className="inset-0" />
            </div>
            <div className="text-content-h text-base font-medium text-left">
              {feature.title}
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default Modular
