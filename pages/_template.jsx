import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: 120,
          }}
          style={{
            background: '#fff',
            borderBottom: '1px solid #dbdbdb',
          }}
        >
          <Container
            style={{
              maxWidth: 570,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
            <svg width="50px" viewBox="0 0 413 399">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard-2" transform="translate(-992.000000, -1119.000000)" fill="#FF5A5F">
                        <g id="Group" transform="translate(992.000000, 1119.000000)">
                            <path d="M2.27373675e-13,351.594059 L84.9712919,399 L164.014354,229.128713 L160.062201,51.3564356 L75.0909091,3.95049505 L77.0669856,175.79703 L2.27373675e-13,351.594059 Z" id="Path-1"></path>
                            <path d="M141,34 L169.942584,51.3564356 L171.91866,207.40099 L245.033493,47.4059406 L326.052632,201.475248 L324.076555,47.4059406 L237.129187,2.3088242e-13 L235.15311,41.480198 L158.086124,4.5193332e-13 L141,34 Z" id="Path-2"></path>
                            <path d="M221.320574,130.366337 L247.009569,67.1584158 L324.076555,221.227723 L177.84689,221.227723 L197.607656,171.846535 L241.08134,171.846535 L221.320574,130.366337 Z" id="Path-3"></path>
                            <path d="M239.105263,231.10396 L326.052632,231.10396 L330.004785,399 L243.057416,351.594059 L239.105263,231.10396 Z" id="Path-4"></path>
                            <path d="M337.909091,246.905941 L339.885167,357.519802 L413,399 L337.909091,246.905941 Z" id="Path-5"></path>
                            <path d="M110.660287,365.420792 L165.990431,248.881188 L169.942584,399 L110.660287,365.420792 Z" id="Path-6"></path>
                        </g>
                    </g>
                </g>
            </svg>
            </Link>
            <Link
              to={prefixLink('/contact/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                float: 'right',
                position: 'relative',
                top: '50%',
                transform: 'translateY(50%)',
                color: '#565a5c',
              }}
            >
              Contact
            </Link>
            <Link
              to={prefixLink('/portfolio/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                float: 'right',
                paddingRight: '30px',
                position: 'relative',
                top: '50%',
                transform: 'translateY(50%)',
                color: '#565a5c',
              }}
            >
              Portfolio
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 570,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
        <Container
          style={{
            maxWidth: 570,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 15,
            borderTop: '1px',
            borderBottom: '0px',
            borderLeft: '0px',
            borderRight: '0px',
            borderColor: '#f0f0f0',
            borderStyle: 'solid',
            color: '#82888a',
            marginTop: '5px',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >

          © 2016 Archie Hicklin – <a href="https://github.com/ArchieHicklin/Archie" target="_blank">Source</a>.
          <p><b>PS:</b> If you want to you can sign up to my <a href="http://twitter.us14.list-manage.com/subscribe?u=5fc314faba3f423b41b009ff4&id=8b221197e7" target="_blank"><u>mailing list</u></a>. 🎈</p>

        </Container>
      </div>
    )
  },
})
