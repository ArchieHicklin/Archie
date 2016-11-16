import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'
import 'css/archie.css'

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Seoul - My personal collection of CSS elements for rapid prototyping.</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="assets/css/seoul.css" />
        <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
        {/* Wrapper */}
        <div id="wrapper">
          {/* Header */}
          <header id="header">
            <svg width="50px" viewBox="0 0 413 399" data-reactid={6} style={{marginBottom: 10}}><g id="Page-1" stroke="none" fill="none" data-reactid={7}><g id="Artboard-2" transform="translate(-992.000000, -1119.000000)" fill="#767676" data-reactid={8}><g id="Group" transform="translate(992.000000, 1119.000000)" data-reactid={9}><path d="M2.27373675e-13,351.594059 L84.9712919,399 L164.014354,229.128713 L160.062201,51.3564356 L75.0909091,3.95049505 L77.0669856,175.79703 L2.27373675e-13,351.594059 Z" id="Path-1" data-reactid={10} /><path d="M141,34 L169.942584,51.3564356 L171.91866,207.40099 L245.033493,47.4059406 L326.052632,201.475248 L324.076555,47.4059406 L237.129187,2.3088242e-13 L235.15311,41.480198 L158.086124,4.5193332e-13 L141,34 Z" id="Path-2" data-reactid={11} /><path d="M221.320574,130.366337 L247.009569,67.1584158 L324.076555,221.227723 L177.84689,221.227723 L197.607656,171.846535 L241.08134,171.846535 L221.320574,130.366337 Z" id="Path-3" data-reactid={12} /><path d="M239.105263,231.10396 L326.052632,231.10396 L330.004785,399 L243.057416,351.594059 L239.105263,231.10396 Z" id="Path-4" data-reactid={13} /><path d="M337.909091,246.905941 L339.885167,357.519802 L413,399 L337.909091,246.905941 Z" id="Path-5" data-reactid={14} /><path d="M110.660287,365.420792 L165.990431,248.881188 L169.942584,399 L110.660287,365.420792 Z" id="Path-6" data-reactid={15} /></g></g></g></svg>
            <h1 style={{marginBottom: 5}}>Seoul</h1>
            <p style={{marginBottom: 10}}>My personal collection of CSS elements for rapid prototyping.</p>
            <a href="#" className="button special icon fa-download" style={{bottom: 'auto', marginBottom: 10}}>Download</a>
          </header>
          {/* Main */}
          <div id="main">
            {/* Content */}
            <section id="content" className="main">
              {/* Text */}
              <section>
                <h2>Text</h2>
                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                  This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                  This is <u>underlined</u> and this is code: <code>for (;;) {'{'} ... {'}'}</code>. Finally, <a href="#">this is a link</a>.</p>
                <hr />
                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                <hr />
                <h2>Heading Level 2</h2>
                <h3>Heading Level 3</h3>
                <h4>Heading Level 4</h4>
                <hr />
                <h3>Blockquote</h3>
                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                <h3>Preformatted</h3>
                <pre><code>i = 0;{"\n"}{"\n"}while (!deck.isInOrder()) {"{"}{"\n"}{"    "}print 'Iteration ' + i;{"\n"}{"    "}deck.shuffle();{"\n"}{"    "}i++;{"\n"}{"}"}{"\n"}{"\n"}print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
              </section>
              {/* Lists */}
              <section>
                <h2>Lists</h2>
                <div className="row">
                  <div className="6u 12u$(medium)">
                    <h3>Unordered</h3>
                    <ul>
                      <li>Dolor pulvinar magna etiam.</li>
                      <li>Sagittis sed lorem adipiscing.</li>
                      <li>Felis enim etiam feugiat.</li>
                      <li>Ipsum lorem nullam consequat.</li>
                    </ul>
                    <h3>Alternate</h3>
                    <ul className="alt">
                      <li>Dolor pulvinar magna etiam.</li>
                      <li>Sagittis sed lorem adipiscing.</li>
                      <li>Felis enim etiam feugiat.</li>
                      <li>Ipsum lorem nullam consequat.</li>
                    </ul>
                  </div>
                  <div className="6u$ 12u$(medium)">
                    <h3>Ordered</h3>
                    <ol>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis viverra.</li>
                      <li>Felis enim feugiat.</li>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis lorem.</li>
                      <li>Felis enim et feugiat.</li>
                    </ol>
                    <h3>Icons</h3>
                    <ul className="icons">
                      <li><a href="#" className="icon fa-wechat"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                      <li><a href="#" className="icon fa-google"><span className="label">Dribbble</span></a></li>
                    </ul>
                    <ul className="icons">
                      <li><a href="#" className="icon alt fa-wechat"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                      <li><a href="#" className="icon alt fa-google"><span className="label">Dribbble</span></a></li>
                    </ul>
                  </div>
                </div>
                <h2>Actions</h2>
                <div className="row">
                  <div className="6u 12u$(medium)">
                    <ul className="actions">
                      <li><a href="#" className="button special">Default</a></li>
                      <li><a href="#" className="button">Default</a></li>
                    </ul>
                    <ul className="actions small">
                      <li><a href="#" className="button special small">Small</a></li>
                      <li><a href="#" className="button small">Small</a></li>
                    </ul>
                    <ul className="actions vertical">
                      <li><a href="#" className="button special">Default</a></li>
                      <li><a href="#" className="button">Default</a></li>
                    </ul>
                    <ul className="actions vertical small">
                      <li><a href="#" className="button special small">Small</a></li>
                      <li><a href="#" className="button small">Small</a></li>
                    </ul>
                  </div>
                  <div className="6u 12u$(medium)">
                    <ul className="actions vertical">
                      <li><a href="#" className="button special fit">Default</a></li>
                      <li><a href="#" className="button fit">Default</a></li>
                    </ul>
                    <ul className="actions vertical small">
                      <li><a href="#" className="button special small fit">Small</a></li>
                      <li><a href="#" className="button small fit">Small</a></li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Table */}
              <section>
                <h2>Table</h2>
                <h3>Default</h3>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item One</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Two</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Three</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Four</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Five</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2} />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <h3>Alternate</h3>
                <div className="table-wrapper">
                  <table className="alt">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item One</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Two</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Three</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Four</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Five</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2} />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </section>
              {/* Buttons */}
              <section>
                <h3>Buttons</h3>
                <ul className="actions">
                  <li><a href="#" className="button special">Special</a></li>
                  <li><a href="#" className="button">Default</a></li>
                </ul>
                <ul className="actions">
                  <li><a href="#" className="button big">Big</a></li>
                  <li><a href="#" className="button">Default</a></li>
                  <li><a href="#" className="button small">Small</a></li>
                </ul>
                <ul className="actions fit">
                  <li><a href="#" className="button special fit">Fit</a></li>
                  <li><a href="#" className="button fit">Fit</a></li>
                  <li><a href="#" className="button fit">Fit</a></li>
                </ul>
                <ul className="actions fit small">
                  <li><a href="#" className="button special fit small">Fit + Small</a></li>
                  <li><a href="#" className="button fit small">Fit + Small</a></li>
                  <li><a href="#" className="button fit small">Fit + Small</a></li>
                </ul>
                <ul className="actions">
                  <li><a href="#" className="button special icon fa-download">Icon</a></li>
                  <li><a href="#" className="button icon fa-upload">Icon</a></li>
                  <li><a href="#" className="button icon fa-save">Icon</a></li>
                </ul>
                <ul className="actions">
                  <li><span className="button special disabled">Disabled</span></li>
                  <li><span className="button disabled">Disabled</span></li>
                </ul>
              </section>
              {/* Form */}
              <section>
                <h2>Form</h2>
                <form method="post" action="#">
                  <div className="row uniform">
                    <div className="6u 12u$(xsmall)">
                      <input type="text" name="demo-name" id="demo-name" defaultValue placeholder="Name" />
                    </div>
                    <div className="6u$ 12u$(xsmall)">
                      <input type="email" name="demo-email" id="demo-email" defaultValue placeholder="Email" />
                    </div>
                    <div className="12u$">
                      <div className="select-wrapper">
                        <select name="demo-category" id="demo-category">
                          <option value>- Category -</option>
                          <option value={1}>Manufacturing</option>
                          <option value={1}>Shipping</option>
                          <option value={1}>Administration</option>
                          <option value={1}>Human Resources</option>
                        </select>
                      </div>
                    </div>
                    <div className="4u 12u$(small)">
                      <input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked />
                      <label htmlFor="demo-priority-low">Low</label>
                    </div>
                    <div className="4u 12u$(small)">
                      <input type="radio" id="demo-priority-normal" name="demo-priority" />
                      <label htmlFor="demo-priority-normal">Normal</label>
                    </div>
                    <div className="4u$ 12u$(small)">
                      <input type="radio" id="demo-priority-high" name="demo-priority" />
                      <label htmlFor="demo-priority-high">High</label>
                    </div>
                    <div className="6u 12u$(small)">
                      <input type="checkbox" id="demo-copy" name="demo-copy" />
                      <label htmlFor="demo-copy">Email me a copy</label>
                    </div>
                    <div className="6u$ 12u$(small)">
                      <input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
                      <label htmlFor="demo-human">Not a robot</label>
                    </div>
                    <div className="12u$">
                      <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows={6} defaultValue={""} />
                    </div>
                    <div className="12u$">
                      <ul className="actions">
                        <li><input type="submit" defaultValue="Send Message" className="special" /></li>
                        <li><input type="reset" defaultValue="Reset" /></li>
                      </ul>
                    </div>
                  </div>
                </form>
              </section>
              {/* Image */}
              <section>
                <h2>Image</h2>
                <h3>Fit</h3>
                <div className="box alt">
                  <div className="row uniform">
                    <div className="12u$"><span className="image fit"><img src="images/pic04.jpg" alt /></span></div>
                    <div className="4u"><span className="image fit"><img src="images/pic01.jpg" alt /></span></div>
                    <div className="4u"><span className="image fit"><img src="images/pic02.jpg" alt /></span></div>
                    <div className="4u$"><span className="image fit"><img src="images/pic03.jpg" alt /></span></div>
                    <div className="4u"><span className="image fit"><img src="images/pic03.jpg" alt /></span></div>
                    <div className="4u"><span className="image fit"><img src="images/pic01.jpg" alt /></span></div>
                    <div className="4u$"><span className="image fit"><img src="images/pic02.jpg" alt /></span></div>
                    <div className="4u"><span className="image fit"><img src="images/pic02.jpg" alt /></span></div>
                    <div className="4u"><span className="image fit"><img src="images/pic03.jpg" alt /></span></div>
                    <div className="4u$"><span className="image fit"><img src="images/pic01.jpg" alt /></span></div>
                  </div>
                </div>
                <h3>Left &amp; Right</h3>
                <p><span className="image left"><img src="images/pic05.jpg" alt /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent lorem ipsum dolor sit amet veroeros consequat. Etiam tempus lorem ipsum.</p>
                <p><span className="image right"><img src="images/pic06.jpg" alt /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus..</p>
              </section>
            </section>
          </div>
          {/* Footer */}
        </div>
        {/* Scripts */}
        {/*[if lte IE 8]><![endif]*/}
      </div>
    );
  }
});
