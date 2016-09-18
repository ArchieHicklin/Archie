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
            Product & Design
          </h1>
          <p>My name is <b>Archie Hicklin</b>. I'm a young designer and front-end developer from London, England currently living in Shenzhen, China. I love building great digital products and helping people design things they're proud of.</p>
          <p>I'm currently working as a <u>Product Designer</u>.</p>
          <p> If you're on mobile - add me on <a href="http://weixin.qq.com/r/CWWBmabE1fuqreL69zAb"><u>WeChat</u></a>.</p>

        </div>
      </DocumentTitle>
    )
  }
}
