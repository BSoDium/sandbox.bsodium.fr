import React from "react";

interface

class ProjectsPage extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    this.setState({ data: this.fetchProjects() });
  }

  fetchProjects() {
    return (fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=l3alr0g")
      .then(response => response.json()));
  }

  render() {
    return (
      <div>
        {this.state.data.map((project: Record<string, string>) => {
          console.log(project)
        })}
      </div>
    );
  }
}

export default ProjectsPage;