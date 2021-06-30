import React from "react";

import 'styles/tabcontent.scss'

class TabContent extends React.Component<{ id: string; child: React.FunctionComponentElement<any> }> {
  render() {
    return (
      <div className="tab" id={this.props.id} >
        {this.props.child}
      </div>
    );
  }
}

export default TabContent;