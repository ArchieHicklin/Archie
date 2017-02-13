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
          After Empire
        </h1>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486958082/black_x5grjg.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486959755/Loops_wozdbm.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486959738/Structure_yqk812.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486959287/shear_raz3er.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486959692/Font_cwspjb.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486958128/gridded_ysjgrj.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486959687/First_grad_paje9r.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486958147/final_q9x7ld.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486960190/booklet_hppjdr.png'/>
        <img src='http://res.cloudinary.com/dot40qz0k/image/upload/c_scale,w_800/v1486960261/banner_l1b3ye.png'/>
        </div>
      </DocumentTitle>
    )
  }
}
