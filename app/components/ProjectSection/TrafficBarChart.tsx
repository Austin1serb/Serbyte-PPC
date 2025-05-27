import * as m from "motion/react-m"

interface TrafficData {
  label: string
  value: number
  color: string
}

export const TrafficBarChart: React.FC = () => {
  const data: TrafficData[] = [
    {
      label: "Pre-Launch",
      value: 150,
      color: "bg-gradient-to-br from-slate-600 to-slate-900",
    },
    {
      label: "Post-Launch",
      value: 1450,
      color: "bg-gradient-to-br from-slate-500 to-slate-900",
    },
  ]

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="relative h-fit w-full flex items-end justify-between gap-10 rounded-lg px-8 pb-10">
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * 100

        return (
          <div key={index} className="flex flex-col items-center">
            {/* Value Label */}
            <m.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.2,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="mb-2 text-lg font-medium text-slate-700"
            >
              {item.value.toLocaleString()}/mo
            </m.div>

            {/* Animated Bar */}
            <div className="relative w-20 h-66 bg-gray-200 rounded-lg border border-gray-300 shadow-lg">
              <m.div
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight - 5}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`absolute bottom-0 w-full ${item.color} rounded-lg`}
              />
            </div>

            {/* Bar Label */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.2,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="mt-3 text-xs text-slate-600 text-center uppercase text-nowrap"
            >
              {item.label}
            </m.div>
          </div>
        )
      })}
    </div>
  )
}
