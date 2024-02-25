import * as React from "react"

import snapblocks from "snapblocks"

const SnapBlocks = ({
  blockStyle,
  languages,
  inline,
  wrap,
  wrapSize,
  zebraColoring,
  children,
  ...props
}) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    let options = {
        wrap: true,
        zebraColoring: true,
    }
    if (blockStyle !== undefined) options.style = blockStyle
    if (languages !== undefined) options.languages = languages
    if (inline !== undefined) options.inline = inline
    if (wrap !== undefined) options.wrap = wrap
    if (wrapSize !== undefined) options.wrapSize = wrapSize
    if (zebraColoring !== undefined) options.zebraColoring = zebraColoring

    console.log('options', options)


    const doc = snapblocks.parse(children, options)
    const svg = snapblocks.render(doc, options)

    ref.current.innerHTML = ""
    ref.current.appendChild(svg)
  }, [blockStyle, languages, children])

  return <div ref={ref} {...props} />
}

export default SnapBlocks
