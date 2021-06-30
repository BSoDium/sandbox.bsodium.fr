import React from "react";

class Tab extends React.Component<{ FrontText: String; SideText: String; id: string }> {
  render() {
    return (
      <a href={`#${this.props.id}`} >
        <div className="dynbox">
          <div className="front">{this.props.FrontText}</div>
          <div className="side">{this.props.SideText}</div>
        </div>
      </a >
    );
  }
}

export default Tab;