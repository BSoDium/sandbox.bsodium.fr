import React from "react";
import Tab from '../components/Tab'
import TabContent from '../components/TabContent'

class HomePage extends React.Component<{ title: string }> {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="bg">
        <div className="surface">
          <div className="surface-header">
            <span>{this.props.title}</span>
          </div>
          <div className="surface-body">
            <div className="tab-menu">
              {/* dynamicaly generated */}
            </div>
            <div className="tab-body">
              {/* dynamicaly generated */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;