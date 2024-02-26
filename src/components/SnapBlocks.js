import * as React from "react"

class SnapBlocks extends React.Component {
  constructor(props) {
    super(props)
  
    this.snapblocks = null
    this.isBrowser = typeof window != 'undefined'
    this.blockRef = React.createRef(null)
  }

  async importSnapblocks() {
    console.log('import')
    const snapblocks = await import('snapblocks')
    return snapblocks.default
  }

  async renderBlocks() {
    const snapblocks = await this.importSnapblocks()

    let options = {
      wrap: true,
      zebraColoring: true,
    }
    if (this.props.blockStyle !== undefined) options.style = blockStyle
    if (this.props.languages !== undefined) options.languages = languages
    if (this.props.inline !== undefined) options.inline = inline
    if (this.props.wrap !== undefined) options.wrap = wrap
    if (this.props.wrapSize !== undefined) options.wrapSize = wrapSize
    if (this.props.zebraColoring !== undefined) options.zebraColoring = zebraColoring

    const doc = snapblocks.parse(this.props.children, options)
    const svg = snapblocks.render(doc, options)

    const node = this.blockRef.current
    if (node == null) {
      return
    }
    node.innerHTML = ""
    node.appendChild(svg)
  }

  componentDidMount() {
    console.log('update')
    if (this.isBrowser) {
      console.log('isBrowser', this.isBrowser)
      this.renderBlocks()
    }
  }

  render() {
    return <div ref={this.blockRef} {...this.props}></div>
  }
}

export default SnapBlocks
