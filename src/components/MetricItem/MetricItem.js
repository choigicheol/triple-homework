import React from 'react'
import useCountUp from '../../customHook/useCountUp'

function MetricItem({ end, start, duration }) {
  return <span>{useCountUp(end, start, duration)}</span>
}

export default MetricItem
