type BrandLogoProps = {
  size?: number
  textSize?: string
  light?: boolean
}

export function BrandLogo({ size = 48, textSize = 'text-2xl', light = false }: BrandLogoProps) {
  const color = light ? '#ffffff' : '#ffffff'
  const nodes = [
    [50, 10], [82, 28], [90, 58], [72, 84], [50, 90],
    [28, 84], [10, 58], [18, 28], [50, 50], [50, 30],
    [70, 40], [70, 65], [30, 65], [30, 40],
  ]
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
    [8,9],[8,10],[8,11],[8,12],[8,13],
    [0,9],[1,10],[2,10],[3,11],[4,11],[5,12],[6,12],[7,13],
    [9,13],[9,10],[10,11],[11,12],[12,13],
  ]

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 100 100">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={color}
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 8 ? 5 : 3.5} fill={color} />
        ))}
      </svg>
      <span className={`font-serif-logo ${textSize} tracking-tight`} style={{ color }}>
        herdata
      </span>
    </div>
  )
}
