import React, { useState } from "react"
import Image from "../atoms/Image"
import Icon from "../atoms/Icon"

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install @nodi-modular")
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section className="@container w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f8fbff] to-[#e9f0fa] px-4 py-32 md:px-0">
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-6">
        Model, Collaborate, Integrate
        <br />
        <span className="font-bold">— All in the Browser</span>
      </h1>
      <p className="text-lg text-content-m text-center mb-8">
        Nodi (β) is an online node-based geometry design tool
        <br />— and a Production-Ready standalone CAD Engine
      </p>
      <a
        className="button bg-primary text-white text-lg hover:scale-105 mb-6"
        href="https://app.nodi3d.com/">
        Try Nodi
      </a>
      <div className="mb-2 text-content-m-a text-base">
        or start integrating to your project
      </div>
      <div className="bg-content-h text-white font-mono rounded-md px-12 py-2 text-base mb-12 select-all relative">
        npm install @nodi-modular
        <span onClick={handleCopy}>
          {copied ? (
            <Icon
              name="check"
              size={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer stroke-3"
            />
          ) : (
            <Icon
              name="clipboard"
              size={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer stroke-3"
            />
          )}
        </span>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto">
        <Image
          path="/videos/hero.mp4"
          alt="Nodi UI Screenshot"
          className="!rounded-sm shadow-xl"
        />
      </div>
    </section>
  )
}

export default Hero
