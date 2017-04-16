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
        <h3>
          Side Projects & Experience
        </h3>
        <p>My design, product, and marketing portfolio available is available at request. Over the last four years I've worked on a number of projects - from UI and identity, to marketing automation, to building and maintaining full-blown web applications for clients. If for some reason you've come across this site and are interested in what I've been up to, or feel I might be a good fit to help you with whatever you're working on, feel free to send me an <a href="mailto:afphicklin@gmail.com?Subject=Hi%20there%20Archie%20I'm%20interested%20%20in%20your%20portfolio!">email</a>. If you'd just like to just shoot the shit - send me a DM on <a href="https://twitter.com/SupArchie" target="_blank">Twitter 👈</a> and I will respond pretty promptly! Below are just a few things I'm currently working on.
        </p>
        <h3>
        Current Product Development
      </h3>
      <ul>
        <li>
          <a href="http://camkix.com" target="_blank">Camkix</a>
        </li>
      </ul>
          <h3>
            Current Side Projects
          </h3>
          <ul>
            <li>
              <a href="https://www.mailroom.press" target="_blank">Mailroom</a>
            </li>
            <li>
              <a href="https://www.producthunt.com/@suparchie/made" target="_blank">Recent Product Hunt launches</a>
            </li>
          </ul>
          <h3>
            Current Marketing Projects
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
