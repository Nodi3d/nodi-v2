import React, { useState } from "react"
import Image from "../atoms/Image"
import Icon from "../atoms/Icon"
import { AnimatePresence, motion } from "framer-motion"

const Editor: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const features = [
    {
      label: "Design",
      title: "Node-Based Workflow <br/>— Reinvented for the Web",
      description:
        "Enjoy procedural modeling in the browser.<br/>You can create a model with a feeling of operation like Grasshopper & Dynamo.",
      path: "/videos/feature-editor.mp4",
      className: "border-[1px] border-primary-l",
    },
    {
      label: "AI",
      title: "AI-Accelerated Modeling",
      description: "Let AI Handle the Heavy Lifting of Modeling.",
      path: "/videos/feature-ai.mp4",
      className: "border-[1px] border-primary-l",
    },
    {
      label: "Share",
      title: "Collaborate without Friction",
      description: "Share links to your files to get feedback & collaborate.",
      path: "/images/feature-collaborate.png",
      className: "",
    },
    {
      label: "Export",
      title: "Ready for Fabrication",
      description: "STL, OBJ, and DXF are supported.",
      path: "/images/feature-export.png",
      className: "",
    },
  ]

  const upcoming = [
    {
      title: "CAM/CAE Support",
      description: "CAM/CAE Support",
      path: "/images/cam-image.png",
    },
    {
      title: "BRep and curve/surface modeling",
      description: "CAM/CAE Support",
      path: "/images/curvo-image.png",
    },
    {
      title: "FRep Modeling",
      description: "CAM/CAE Support",
      path: "/images/frep-image.png",
    },
  ]
  const madeWithNodi = [
    {
      title: "Attractor",
      tag: ["SquareGrid", "MD Slider", "Distance"],
      path: "/images/examples/001.mp4",
      url: "https://v2.nodi3d.com/?example=Attractor",
    },
    {
      title: "CircleBasic",
      tag: ["Loft", "Arc", "Reparametrize"],
      path: "/images/examples/002.mp4",
      url: "https://v2.nodi3d.com/?example=CircleBasic",
    },
    {
      title: "Wave Spring",
      tag: ["Loft", "RotateAround"],
      path: "/images/examples/003.mp4",
      url: "https://v2.nodi3d.com/?example=WaveSpring",
    },
    {
      title: "Revolution",
      tag: ["Revolution", "MD Slider"],
      path: "/images/examples/004.mp4",
      url: "https://v2.nodi3d.com/?example=Revolution",
    },
    {
      title: "GCode",
      tag: ["G-Code"],
      path: "/images/examples/005.png",
      url: "https://v2.nodi3d.com/da2f8c13-ffa9-47f7-aee3-f3dc9973bf15",
    },
    {
      title: "Hyperboloid",
      tag: ["Pipe"],
      path: "/images/examples/006.png",
      url: "https://v2.nodi3d.com/?example=Hyperboloid",
    },
    {
      title: "Rounded Box",
      tag: ["Subgraph", "MeshBoolean"],
      path: "/images/examples/007.mp4",
      url: "https://v2.nodi3d.com/6fc75d9c-3a13-42b3-a7c2-56e313b53092",
    },
  ]
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-32 px-0 md:px-0 min-h-[600px]"
      id="features">
      {/* セクション先頭: ロゴとナビゲーション */}
      <div className="text-center">
        <div className="flex items-center gap-2 md:mb-2 justify-center mb-8">
          <Icon name="nodi" size={24} />
          <span className="text-lg font-semibold text-primary">
            Nodi Editor
          </span>
        </div>
        <h2 className="text-4xl font-semibold mb-4">
          AI Friendly Grasshopper. <br />
          Works on the Web.
        </h2>
        <nav className="flex gap-2 mt-6 justify-center mb-8">
          {features.map((feature, index) => (
            <span
              key={index}
              className={`px-4 py-1 rounded-full text-content-h-a text-base font-semibold cursor-pointer transition ${
                current === index
                  ? "bg-primary-l"
                  : "bg-transparent hover:bg-content-xxl-a"
              }`}
              onClick={() => setCurrent(index)}>
              {feature.label}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex flex-col md:flex-row bg-primary-l w-full items-end md:min-h-[400px] justify-end relative py-8 md:py-0 px-0 md:pb-0">
        <AnimatePresence mode="wait">
          {/* 左側: テキスト */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="text-center w-full md:text-left md:mr-auto md:w-1/3 flex flex-col items-start justify-center mb-8 md:left-16 md:absolute md:top-1/2 md:-translate-y-1/2 z-10">
            <h2
              className="text-xl md:text-2xl font-semibold mb-4 w-full"
              dangerouslySetInnerHTML={{
                __html: features[current].title,
              }}></h2>
            <p
              className="mb-2 text-content-m-a w-full"
              dangerouslySetInnerHTML={{
                __html: features[current].description,
              }}></p>
          </motion.div>
        </AnimatePresence>
        {/* 右側: 動画＋アップカミング機能 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-2/3 relative mt-4 md:mt-8">
            <Image
              path={features[current].path}
              alt="Nodi Editor UI Demo"
              className={`bg-transparent !rounded-none md:!rounded-tl-xl ${features[current].className}`}
              aspect="16/9"
            />
            <img
              src="/images/feature-bg.png"
              alt="Nodi Editor UI Demo"
              className="absolute inset-0 hidden md:block"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* アップカミング機能 */}
      <div className="w-full flex flex-col items-center py-8">
        <div className="text-center text-content-m-a mb-6">
          and more upcoming features
        </div>
        <div className="grid grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-1 md:max-w-2xl">
          {/* CAM/CAE Support */}
          {upcoming.map((feature, index) => (
            <div
              key={index}
              className="group grid grid-cols-[auto_1fr] items-start md:grid-cols-1 gap-4 mb-3">
              <div className="w-24 h-24 border-2 border-primary-l relative flex items-center justify-center md:w-48 md:h-48">
                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-[1px] border-l-[1px] border-primary group-hover:top-[-8px] group-hover:left-[-8px] transition-all" />
                <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-[1px] border-r-[1px] border-primary group-hover:top-[-8px] group-hover:right-[-8px] transition-all" />
                <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-[1px] border-l-[1px] border-primary group-hover:bottom-[-8px] group-hover:left-[-8px] transition-all" />
                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-[1px] border-r-[1px] border-primary group-hover:bottom-[-8px] group-hover:right-[-8px] transition-all" />
                <img
                  src={feature.path}
                  alt=""
                  className="inset-0 group-hover:scale-105 transition-all"
                />
              </div>
              <div className="text-content-h text-base font-medium text-left">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3
        className="text-2xl font-semibold mt-32 mb-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(104, 95, 154, 1.00) 0%,rgba(180, 114, 114, 1.00) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.025em",
        }}>
        # Made With Nodi
      </h3>
      <div className="w-full overflow-x-auto relative">
        <div className="relative flex flex-row items-center gap-2">
          <button
            className="absolute left-4 z-20 button-sq rounded-full bg-[rgba(255,255,255,0.5)] backdrop-blur shadow-md"
            onClick={() => {
              const container = document.querySelector(".carousel-container")
              container?.scrollBy({ left: -300, behavior: "smooth" })
            }}>
            <Icon name="chevron-left" size={24} />
          </button>
          <div className="flex flex-row items-center gap-2 snap-x snap-mandatory overflow-x-auto carousel-container">
            {madeWithNodi.map((item, index) => (
              <a
                key={index}
                className={`flex flex-col items-center flex-shrink-0 snap-center ${
                  index === 0
                    ? "pl-4"
                    : index === madeWithNodi.length - 1
                    ? "pr-4"
                    : ""
                }`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  path={item.path}
                  alt="Nodi Editor UI Demo"
                  className="rounded-lg !w-72 !h-auto"
                  aspect="9/16"
                />
                <div className="flex flex-col gap-2 mt-2 text-left w-full">
                  <p className="text-content-h text-lg font-medium ml-1">
                    {item.title}
                  </p>
                  <div>
                    {item.tag.map((tag, index) => (
                      <span
                        key={index}
                        className="text-content-m-a font-medium bg-content-xxl-a rounded-sm px-2 py-1 mr-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <button
            className="absolute right-4 z-20 button-sq rounded-full bg-[rgba(255,255,255,0.5)] backdrop-blur shadow-md"
            onClick={() => {
              const container = document.querySelector(".carousel-container")
              container?.scrollBy({ left: 300, behavior: "smooth" })
            }}>
            <Icon name="chevron-right" size={24} />
          </button>
        </div>
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 1.00) 0%,rgba(255, 255, 255, 0.00) 15.384615957736969%,rgba(255, 255, 255, 0.00) 83.17307829856873%,rgba(255, 255, 255, 1.00) 100%)",
          }}></div> */}
      </div>
    </section>
  )
}

export default Editor
