import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
        <h1>
          Side Projects & Experience
        </h1>
          <h3>
            Design
          </h3>
          <ul>
            <li>
              <Link to={prefixLink('/markdown/')}>Artcreep</Link>
            </li>
            <li>
              <Link to={prefixLink('/react/')}>IPM</Link>
            </li>
            <li>
              <Link to={prefixLink('/coffee-react/')}>Meerstand</Link>
            </li>
            <li>
              <Link to={prefixLink('/toml/')}>Eco-Fused</Link>
            </li>
            <li>
              <Link to={prefixLink('/toml/')}>Leaf Chat</Link>
            </li>
            <li>
              <Link to={prefixLink('/toml/')}>Second Hand</Link>
            </li>
          </ul>
          <h3>
            Marketing
          </h3>
          <ul>
            <li>
              <Link to={prefixLink('/markdown/')}>Camkix</Link>
            </li>
            <li>
              <Link to={prefixLink('/react/')}>Trinus VR ($1.6m Kickstarter)</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
