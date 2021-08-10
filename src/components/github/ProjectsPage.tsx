import React from 'react'
import RepoCard from './RepoCard'

interface Props {
}

interface State {
  isLoading: boolean;
  data: any;
}

class ProjectsPage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { data: null, isLoading: true }
  }

  componentDidMount () {
    const fetchProjects = () => {
      fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=l3alr0g')
        .then(response => response.json())
        .then(response => {
          this.setState({ data: response, isLoading: false })
        })
    }
    fetchProjects()
  }

  render () {
    return (
      <div>
        {this.state.isLoading
          ? <div>Loading...</div>
          : this.state.data.map((project: Record<string, string>, i: number) => {
            console.log(project)
            return (
              <RepoCard
                repo={project.repo}
                description={project.description}
                owner={project.owner}
                link={project.link}
                key={i}
              />
            )
          })
        }
      </div>
    )
  }
}

export default ProjectsPage
