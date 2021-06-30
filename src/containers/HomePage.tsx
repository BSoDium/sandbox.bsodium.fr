import React from "react";
import Tab from '../components/tabs/Tab'
import TabContent from '../components/tabs/TabContent'

class HomePage extends React.Component<{ title: string }> {

  render() {
    return (
      <div className="bg">
        <div className="surface">
          <div className="surface-header">
            <span>{this.props.title}</span>
          </div>
          <div className="surface-body">
            <div className="tab-menu">
              <Tab FrontText="Projects" SideText="News" id="tab1" />
              <Tab FrontText="News" SideText="Changelogs" id="tab2" />
              <Tab FrontText="Experiments" SideText="Electron JS" id="tab3" />
              <Tab FrontText="Hosted" SideText="Raw files" id="tab4" />
              <Tab FrontText="Feedback" SideText="Bug reports" id="tab5" />
            </div>
            <div className="tab-body">
              {/* <TabContent id="tab1" />
              <TabContent id="tab2" />
              <TabContent id="tab3" />
              <TabContent id="tab4" />
              <TabContent id="tab5" /> */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;