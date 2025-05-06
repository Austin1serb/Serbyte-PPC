export type ExactlyFourWords = [string, string, string, string]

export const TextSlider: React.FC<{ words: ExactlyFourWords; height?: number; mobileHeight?: number }> = ({ words, height = 40, mobileHeight = 30 }) => {
  // TODO - see how performant this is
  const styles = { "--word-height": `${height}px`, "--word-height-mobile": `${mobileHeight}px` } as React.CSSProperties
  return (
    <span className="word-container inline-flex w-fit" style={styles}>
      {words.map((word, index) => (
        <span key={index} className="word" style={styles}>
          {word}
        </span>
      ))}
    </span>
  )
}
