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
          <p><b>Product & Design</b></p>
          <p>My name is <b>Archie Hicklin</b>. I'm a young designer and front-end developer from London, England currently living in Shenzhen, China. I love building great digital products and helping people design things they're proud of.</p>
          <p> If you'd like to get in touch, please feel free to contact me <a href="http://www.archiehickl.in/contact/"><u>here</u></a>.</p>
      
          <p><b>产品与设计</b></p>
          <p>我叫Archie Hicklin,是一个来自英国伦敦的年轻设计师兼前段技术工程师，目前居住在中国深圳。我擅长开发完善的数码产品和帮助别人设计与实现令他引以为豪的东西。目前的工作是产品设计师。</p>
      <p>如果您正在用手机查看我的网站－那么就可以通过添加<a href="http://weixin.qq.com/r/CWWBmabE1fuqreL69zAb"><u>微信</u></a>来联系我。</p>
        </div>
      </DocumentTitle>
    )
  }
}
