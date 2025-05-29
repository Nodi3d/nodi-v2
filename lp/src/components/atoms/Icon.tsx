import React, { Suspense, lazy, memo } from "react"

// アイコンコンポーネントのキャッシュ
const iconCache: Record<string, React.ComponentType<any>> = {}

// アイコンを取得する関数（キャッシュがあれば再利用）
const loadIcon = (name: string) => {
  if (!iconCache[name]) {
    iconCache[name] = lazy(() => import(`../../assets/icons/${name}.svg`))
  }
  return iconCache[name]
}

interface IconProps {
  name: string // SVGファイル名 (拡張子なし)
  color?: string // 上書き可能な色
  strokeWidth?: number // 上書き可能な線の太さ
  size?: number // アイコンのサイズ (幅と高さ)
  className?: string // 任意のクラス名
  onClick?: () => void // クリックイベントハンドラー
}

const Icon: React.FC<IconProps> = memo(
  ({ name, size = 24, className = "", onClick }) => {
    // キャッシュからアイコンを取得または新たにロード
    const SvgIcon = loadIcon(name)
    let sizeClass = ""
    if (size == 16) {
      sizeClass = "w-4 h-4"
    } else if (size == 24) {
      sizeClass = "w-6 h-6"
    } else if (size == 32) {
      sizeClass = "w-8 h-8"
    } else if (size == 48) {
      sizeClass = "w-12 h-12"
    } else if (size == 64) {
      sizeClass = "w-16 h-16"
    } else if (size == 96) {
      sizeClass = "w-24 h-24"
    } else if (size == 128) {
    }

    return (
      <Suspense fallback={<div className={`${sizeClass}`} />}>
        <SvgIcon className={`${sizeClass} ${className}`} onClick={onClick} />
      </Suspense>
    )
  }
)

export default Icon
