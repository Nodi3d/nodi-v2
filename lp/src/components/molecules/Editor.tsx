import React, { useState } from "react"
import Image from "../atoms/Image"
import Icon from "../atoms/Icon"

const Editor: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const features = [
    {
      label: "Design",
      title: "Node-Based Workflow <br/>— Reinvented for the Web",
      description:
        "Enjoy procedural modeling in the browser.<br/>You can create a model with a feeling of operation like Grasshopper & Dynamo.",
      path: "/videos/editor.mp4",
    },
    {
      label: "AI",
      title: "AI-Accelerated Modeling",
      description: "Let AI Handle the Heavy Lifting of Modeling.",
      path: "/videos/editor.mp4",
    },
    {
      label: "Share",
      title: "Collaborate without Friction",
      description: "Share links to your files to get feedback & collaborate.",
      path: "/videos/editor.mp4",
    },
    {
      label: "Export",
      title: "Ready for Fabrication",
      description: "STL, OBJ, and DXF are supported.",
      path: "/videos/editor.mp4",
    },
  ]

  const upcoming = [
    {
      title: "CAM/CAE Support",
      description: "CAM/CAE Support",
      path: "/videos/editor.mp4",
    },
    {
      title: "BRep and curve/surface modeling",
      description: "CAM/CAE Support",
      path: "/videos/editor.mp4",
    },
    {
      title: "FRep Modeling",
      description: "CAM/CAE Support",
      path: "/videos/editor.mp4",
    },
  ]
  const madeWithNodi = [
    {
      tag: ["SquareGrid", "MD Slider"],
      path: "/images/examples/attractor.png",
      url: "https://v2.nodi3d.com/?example=Attractor",
    },
    {
      tag: ["Loft", "G-Code"],
      path: "/images/examples/loft.png",
      url: "https://v2.nodi3d.com/?example=CircleBasic",
    },
    {
      tag: ["Attractor", "G-Code"],
      path: "/images/examples/attractor.png",
      url: "https://v2.nodi3d.com/?example=Attractor",
    },
    {
      tag: ["Nodi Editor"],
      path: "/images/examples/loft.png",
      url: "https://v2.nodi3d.com/?example=CircleBasic",
    },
    {
      tag: ["Nodi Editor"],
      path: "/images/examples/attractor.png",
      url: "https://v2.nodi3d.com/?example=Attractor",
    },
    {
      tag: ["Nodi Editor"],
      path: "/images/examples/loft.png",
      url: "https://v2.nodi3d.com/?example=CircleBasic",
    },
    {
      tag: ["Nodi Editor"],
      path: "/images/examples/attractor.png",
      url: "https://v2.nodi3d.com/?example=Attractor",
    },
    {
      tag: ["Nodi Editor"],
      path: "/images/examples/loft.png",
      url: "https://v2.nodi3d.com/?example=CircleBasic",
    },
  ]
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0 min-h-[600px]">
      {/* セクション先頭: ロゴとナビゲーション */}
      <div className="text-center">
        <div className="flex items-center gap-2 mb-2 justify-center">
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
      <div className="flex flex-col md:flex-row bg-primary-l w-full items-end md:h-[500px] justify-end relative py-16 md:py-0">
        {/* 左側: テキスト */}
        <div className="md:mr-auto md:w-1/3 flex flex-col items-start justify-center mb-8 md:left-16 md:absolute md:top-1/2 md:-translate-y-1/2">
          <h2
            className="text-xl md:text-2xl font-semibold mb-4"
            dangerouslySetInnerHTML={{
              __html: features[current].title,
            }}></h2>
          <p
            className="mb-2 text-content-m-a"
            dangerouslySetInnerHTML={{
              __html: features[current].description,
            }}></p>
        </div>
        {/* 右側: 動画＋アップカミング機能 */}
        <div className="w-full md:w-2/3">
          <Image
            path={features[current].path}
            alt="Nodi Editor UI Demo"
            className="!rounded-none"
            aspect="16/9"
          />
        </div>
      </div>
      {/* アップカミング機能 */}
      <div className="w-full flex flex-col items-center py-8">
        <div className="text-center text-content-m-a mb-6">
          and more upcoming features
        </div>
        <div className="grid grid-rows-3 gap-2 md:grid-cols-3 md:max-w-2xl">
          {/* CAM/CAE Support */}
          {upcoming.map((feature, index) => (
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
        </div>
      </div>
      <h3
        className="text-2xl font-semibold mb-4"
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
        <div className="flex flex-row items-center gap-2">
          {madeWithNodi.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                path={item.path}
                alt="Nodi Editor UI Demo"
                className="!rounded-none h-48 w-auto"
                aspect="16/9"
              />
              <div className="flex flex-wrap gap-2">
                {item.tag.map((tag, index) => (
                  <span
                    key={index}
                    className="text-content-h text-base font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 1.00) 0%,rgba(255, 255, 255, 0.00) 15.384615957736969%,rgba(255, 255, 255, 0.00) 83.17307829856873%,rgba(255, 255, 255, 1.00) 100%)",
          }}></div>
      </div>
    </section>
  )
}

export default Editor
