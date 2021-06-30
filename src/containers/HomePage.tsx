import React from "react";
import Tab from 'components/tabs/Tab'
import TabContent from 'components/tabs/TabContent'
import ProjectsPage from 'components/github/ProjectsPage'
import NewsPage from 'components/github/NewsPage'

import 'styles/homepage.scss';

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
              <TabContent id="tab1" child={<ProjectsPage />} />
              <TabContent id="tab2" child={<NewsPage />} />
              <TabContent id="tab3" child={<NewsPage />} />
              <TabContent id="tab4" child={<NewsPage />} />
              <TabContent id="tab5" child={<NewsPage />} />
            </div>
          </div>
        </div>
        <footer>
          <p>© l3alr0g 2021 - 2022</p>
        </footer>
      </div>
    );
  }
}

export default HomePage;