import React from "react"

const Tip = props => {
  const { direction } = props
  const size = props.size || 24
  const isPortrait = direction === "up" || direction === "down"
  const mainLength = size
  const crossLength = size * 2
  const points =
    direction === "up"
      ? `0,${mainLength} ${mainLength},0, ${crossLength},${mainLength}`
      : direction === "down"
        ? `0,0 ${mainLength},${mainLength}, ${crossLength},0`
        : direction === "left"
          ? `${mainLength},0 0,${mainLength}, ${mainLength},${crossLength}`
          : `0,0 ${mainLength},${mainLength}, 0,${crossLength}`

  const marginDir = {
    'up': 'margin-bottom',
    'down': 'margin-top',
    'left': 'margin-right',
    'right': 'margin-left'
  }[direction]

  const svgProps = {
    className: "Popover-tip",
    width: isPortrait ? crossLength : mainLength,
    height: isPortrait ? mainLength: crossLength,
    style: {
      [marginDir]: '-1px'
    }
  }

  return (
    <svg {...svgProps}>
      <polygon className="Popover-tipShape" points={points} />
      <polyline className="Popover-tipStroke" points={points} />
    </svg>
  )
}

export default Tip
