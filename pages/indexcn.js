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
          <p>我的名字是 <b>Archie Hicklin</b>. 我是来自英国伦敦的年轻设计师和前端开发人员目前居住在中国深圳. I love building great digital products and helping people design things they're proud of.</p>
          <p>I'm currently working as a <a href="https://www.upwork.com/freelancers/~0150adea0a398630c1"><u>freelance</u></a> Product Designer. Aside from that, I founded <a href="http://artcreep.com"><u>Artcreep</u></a> and live, work and design from Loft42.</p>
          <p> If you're on mobile - add me on <a href="http://weixin.qq.com/r/CWWBmabE1fuqreL69zAb"><u>WeChat</u></a>.</p>
          <ul>
            <li>
              <Link to={prefixLink('/markdown/')}>Markdown</Link>
            </li>
            <li>
              <Link to={prefixLink('/react/')}>JSX (React components)</Link>
            </li>
            <li>
              <Link to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link>
            </li>
            <li>
              <Link to={prefixLink('/toml/')}>TOML</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
