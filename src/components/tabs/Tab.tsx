import React from 'react'

import 'styles/tab.scss'

type TabProps = {
  FrontText: String;
  SideText: String;
  id: string
}

class Tab extends React.Component<TabProps> {
  render () {
    return (
      <a href={`#${this.props.id}`} >
        <div className="dynbox">
          <div className="front">{this.props.FrontText}</div>
          <div className="side">{this.props.SideText}</div>
        </div>
      </a >
    )
  }
}

export default Tab
