import { useEffect, useState } from "react"

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100)
  }, [progress])
  return (
    <div className="progress-container">
      <div className="bar" role="progressbar" aria-valuenow={progress} aria-valuemax={100} aria-valuemin={0} style={{ transform: `translateX(${animatedProgress - 100}%)` }}>
        {progress}%
      </div>
    </div>
  )
}

export default ProgressBar
