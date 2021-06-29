import React from "react";

class Tab extends React.Component<{ FrontText: String; SideText: String; href: string }> {
  render() {
    return (
      <a href={this.props.href}>
        <div className="dynbox">
          <div className="front">{this.props.FrontText}</div>
          <div className="side">{this.props.SideText}</div>
        </div>
      </a>
    );
  }
}

export default Tab;