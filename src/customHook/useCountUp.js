import { useState, useEffect } from 'react'

function useCountUp(end, start = 0, duration = 2000) {
  const [startNum, setStartNum] = useState(start)

  useEffect(() => {
    let currentNum = start
    let maxCount = 50
    let stepTime = duration / maxCount
    const countUp = setInterval(() => {
      currentNum += end / 50
      maxCount--
      setStartNum(currentNum)

      if (maxCount === 0) {
        clearInterval(countUp)
      }
    }, stepTime)
  }, [end, start, duration])

  return startNum.toFixed(0)
}

export default useCountUp
