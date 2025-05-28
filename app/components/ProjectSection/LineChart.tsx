import * as m from "motion/react-m"

export const LineChart: React.FC = () => {
  // 6 points: 2 per phase (no side padding, scaled Y)
  const points = [
    { x: 10, y: 360 }, // Pre-launch 1 (120 * 3)
    { x: 90, y: 355 }, // Pre-launch 2 (125 * 3)
    // { x: 150, y: 255 }, // Pre-launch 2 (125 * 3)
    { x: 180, y: 180 }, // Launch 1 (30 * 3)
    { x: 270, y: 165 }, // Launch 2 (55 * 3)
    { x: 360, y: 144 }, // Post-launch 1 (48 * 3)
    { x: 440, y: 70 }, // Post-launch 2 (20 * 3)
  ]

  // Create path for line
  const linePath = points.map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")

  // Create path for gradient fill (line + bottom)
  const fillPath = `${linePath} L 440 450 L 10 450 Z`

  return (
    <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
      <svg width="450" height="340" viewBox="0 100 450 300" className="w-full">
        <defs>
          {/* Gradient for fill under line */}
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#62748e" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Gradient fill under line */}
        <m.path
          viewport={{ once: true }}
          d={fillPath}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Main line */}
        <m.path
          viewport={{ once: true }}
          d={linePath}
          fill="none"
          stroke="#62748e"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="group"
        />

        {/* Points */}
        {points.map((point, i) => (
          <m.circle
            viewport={{ once: true }}
            key={i}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#0f172b"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + i * 0.15,
              type: "spring",
              stiffness: 300,
            }}
            className="hover:scale-150 transition-all duration-300"
          />
        ))}

        {/* Phase labels */}
        <text x="70" y="470" textAnchor="middle" className="text-xl fill-slate-600 uppercase ">
          Pre-Launch
        </text>

        <text x="375" y="470" textAnchor="middle" className="text-xl fill-slate-600 uppercase">
          Post-Launch
        </text>
      </svg>
    </m.div>
  )
}
