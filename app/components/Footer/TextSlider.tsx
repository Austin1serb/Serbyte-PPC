export type ExactlyFourWords = [string, string, string, string]

export const TextSlider: React.FC<{ words: ExactlyFourWords; height?: number }> = ({ words, height = 40 }) => {
  return (
    <span className="inline-flex w-fit" style={{ height: `${height}px` }}>
      {words.map((word, index) => (
        <span key={index} className="word" style={{ "--word-height": `${height}px` } as React.CSSProperties}>
          {word}
        </span>
      ))}
    </span>
  )
}
