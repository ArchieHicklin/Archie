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
        <p>Portfolio available at request - feel free to send me an <a href="mailto:afphicklin@gmail.com?Subject=Hi%20there%20Archie%20I'm%20interested%20%20in%20your%20portfolio!">email</a>.
        </p>
        <h3>
        Product Management
      </h3>
      <ul>
        <li>
          <a href="http://camkix.com" target="_blank">Camkix (Current)</a>
        </li>
      </ul>
          <h3>
            Design
          </h3>
          <ul>
            <li>
              <a href="https://www.producthunt.com/tech/meerstand" target="_blank">Meerstand</a>
            </li>
            <li>
              <a href="https://www.amazon.com/s?me=A3KD0OO9H1T8D3" target="_blank">Eco-Fused</a>
              </li>
            <li>
              <a href="https://www.camorama.co" target="_blank">Camorama ($180k Kickstarter)</a>
            </li>
          </ul>
          <h3>
            Marketing
          </h3>
          <ul>
            <li>
              <a href="https://www.trinus3d.com" target="_blank">Trinus 3D Printer ($1.6m Kickstarter)</a>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
