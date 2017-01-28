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
          Freebies!
        </h1>
        <p>My design freebies for January to give away (one month only).
        </p>
        <h3>
        A4 Perspective mockup:
      </h3>
      <ul>
        <li>
          <a href="http://surefile.org/file/B6C94p" target="_blank">Grab yours here.</a>
        </li>
      </ul>
        </div>
      </DocumentTitle>
    )
  }
}
