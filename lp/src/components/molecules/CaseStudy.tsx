import React from "react"
import Image from "../atoms/Image"

export const CaseStudy: React.FC = () => {
  const caseStudies = [
    {
      title: "Bento3D",
      description:
        "Bento3D is a web tool where you can generate 3d printable box in seconds",
      path: "/images/bento3d.png",
      url: "https://bento3d.design/",
    },
    {
      title: "Taqaddom Scales Co. Lts",
      description:
        "For Taqaddom Scales, an enterprise-grade shelving systems, we developed a tool that allows users to instantly generate shelving quotes by inputting floor plans directly in-store. The modeling component is powered by Nodi.",
      path: "/videos/tadquom-demo.mp4",
      url: "",
    },
  ]

  return (
    <section
      className="@container/case-study px-4 mb-32 max-w-6xl mx-auto"
      id="case-study">
      <h3 className="text-2xl font-semibold mb-11 text-center">Case Study</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-start">
        {caseStudies.map((study, index) => (
          <a
            key={index}
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center">
            <Image
              path={study.path}
              alt={study.title}
              aspect="9/16"
              className="max-h-64 w-auto rounded-sm mb-4"
            />
            <h4 className="mb-2 font-semibold">{study.title}</h4>
            <p className="text-content-m-a">{study.description}</p>
          </a>
        ))}

        {/* grid2つ分の幅 */}
        <div
          className="min-h-64 w-full border-[1px] border-primary-l relative rounded-lg overflow-hidden flex flex-col items-start justify-center py-8 md:col-span-2"
          style={{
            background:
              "linear-gradient(to left, rgba(22, 78, 151, 0.04), rgba(22, 78, 151, 0.04))",
          }}>
          <div className="w-2/3 pl-10">
            <img
              src="/images/nodi-gradient.svg"
              alt=""
              className="w-[458px] h-[360px] absolute top-1/2 -right-4 -translate-y-1/2"
            />
            <h4 className="text-primary font-semibold text-2xl mb-4">
              We're looking for Partners
            </h4>
            <p className="text-content-h-a">
              We're collaborating with architects, fabricators, and product
              manufacturers to bring Nodi to real-world production. If you're
              interested, reach out to us at{" "}
              <a
                href="mailto:contact@nodi3d.com"
                className="text-primary font-semibold">
                contact@nodi3d.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
