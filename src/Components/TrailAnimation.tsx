import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height }, index) => (
        <a.div key={index}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function TrailAnimation() {
  const [open, set] = useState(true)
  return (
    <div onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span>Welcome to the Beginning and End of Time</span>
      </Trail>
    </div>
  )
}