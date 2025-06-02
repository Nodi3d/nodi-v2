import React from "react"

type Props = {
  path: string
  alt?: string
  className?: string
  aspect?: string
}

const Image: React.FC<Props> = ({ path, alt = "", className = "", aspect }) => {
  const ext = path.split(".").pop()?.toLowerCase()
  const isVideo = ext === "mp4"
  const isImage = ["png", "jpg", "jpeg", "gif", "webp"].includes(ext || "")
  //4:3以外ならオリジナルが角に合わせる
  const [naturalRatio, setNaturalRatio] = React.useState<number | null>(null)
  const imgRef = React.useRef<HTMLImageElement | null>(null)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  React.useEffect(() => {
    if (isImage && imgRef.current) {
      const img = imgRef.current
      if (img.complete) {
        setNaturalRatio(img.naturalWidth / img.naturalHeight)
      } else {
        img.onload = () => setNaturalRatio(img.naturalWidth / img.naturalHeight)
      }
    } else if (isVideo && videoRef.current) {
      const video = videoRef.current
      if (video.readyState >= 1) {
        setNaturalRatio(video.videoWidth / video.videoHeight)
      } else {
        video.onloadedmetadata = () =>
          setNaturalRatio(video.videoWidth / video.videoHeight)
      }
    } else {
      setNaturalRatio(null)
    }
  }, [path, isImage, isVideo])

  const isDefault43 = !naturalRatio || Math.abs(naturalRatio - 4 / 3) < 0.01
  const aspectClass = aspect
    ? `aspect-[${aspect}]`
    : isDefault43
    ? "aspect-[4/3]"
    : ""

  // naturalRatioからaspect-ratioを算出
  let dynamicAspect = aspect
  if (!aspect && naturalRatio) {
    dynamicAspect = `${naturalRatio}`
  }

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-content-xl-a ${className}`}
      style={dynamicAspect ? { aspectRatio: dynamicAspect } : {}}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={path}
          className="w-full h-full object-cover"
          style={{ aspectRatio: dynamicAspect }}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : isImage ? (
        <img
          ref={imgRef}
          src={path}
          alt={alt}
          className={
            aspectClass
              ? "absolute inset-0 w-full h-full object-cover"
              : isDefault43
              ? "absolute inset-0 w-full h-full object-cover"
              : "w-full h-auto"
          }
          style={dynamicAspect ? { aspectRatio: dynamicAspect } : undefined}
          loading="lazy"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-400">
          Not supported
        </div>
      )}
    </div>
  )
}

export default Image
