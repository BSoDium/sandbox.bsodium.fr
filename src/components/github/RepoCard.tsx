import React from 'react'
import ReactMarkdown from 'react-markdown'
// import rehypeRaw from 'rehype-raw'

interface Props {
  repo: string
  description?: string
  owner: string
  link: string
  language: string
  stars: number
  forks: number
}

interface State {
  readme: string
}

class RepoCard extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      readme: ''
    }
  }

  componentDidMount () {
    const fetchReadme = () => {
      fetch(`https://raw.githubusercontent.com/${this.props.owner}/${this.props.repo}/master/README.md`)
        .then(response => response.text())
        .then(text => {
          this.setState({
            readme: text
          })
        }
        )
    }
    fetchReadme()
  }

  render () {
    return (
      <div className="box">
        <span>{this.props.repo}</span>
        <p>{this.props.description}</p>
        <div className="readme-title">Readme</div>
        <div className="readme">
          <ReactMarkdown
            // rehypePlugins={[rehypeRaw]}
          >
            {this.state.readme}
          </ReactMarkdown>
        </div>
        <div className="info">
          <a href={this.props.link} target="_blank" rel="noreferrer">
            Display on github
          </a>
        </div>
      </div>
    )
  }
}

export default RepoCard
