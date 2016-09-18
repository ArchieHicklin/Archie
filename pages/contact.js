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
            Contact me
          </h1>
          <p> If you're in China - add me on <a href="http://weixin.qq.com/r/CWWBmabE1fuqreL69zAb"><u>WeChat</u></a>.</p>
          <p>Otherwise, here are some other cool ways you can contact me:</p>
          <ul>
          <li>
            <a href="mailto:afphicklin@gmail.com?Subject=Hi%20there%20Archie">Email 👌</a>
          </li>
            <li>
              <a href="https://twitter.com/SupArchie" target="_blank">Twitter 👈</a>
            </li>
            </ul>
                    <p>I also have a <a href="http://twitter.us14.list-manage.com/subscribe?u=5fc314faba3f423b41b009ff4&id=8b221197e7"><u>mailing list</u></a> that you can sign up to.</p>
        </div>
      </DocumentTitle>
    )
  }
}
