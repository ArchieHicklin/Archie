import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/archie.css'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
      <div id="wrapper">

        <!-- Header -->
          <header id="header">
            <svg width="50px" viewBox="0 0 413 399" data-reactid="6" style="
    margin-bottom: 10px;
"><g id="Page-1" stroke="none" fill="none" data-reactid="7"><g id="Artboard-2" transform="translate(-992.000000, -1119.000000)" fill="#767676" data-reactid="8"><g id="Group" transform="translate(992.000000, 1119.000000)" data-reactid="9"><path d="M2.27373675e-13,351.594059 L84.9712919,399 L164.014354,229.128713 L160.062201,51.3564356 L75.0909091,3.95049505 L77.0669856,175.79703 L2.27373675e-13,351.594059 Z" id="Path-1" data-reactid="10"></path><path d="M141,34 L169.942584,51.3564356 L171.91866,207.40099 L245.033493,47.4059406 L326.052632,201.475248 L324.076555,47.4059406 L237.129187,2.3088242e-13 L235.15311,41.480198 L158.086124,4.5193332e-13 L141,34 Z" id="Path-2" data-reactid="11"></path><path d="M221.320574,130.366337 L247.009569,67.1584158 L324.076555,221.227723 L177.84689,221.227723 L197.607656,171.846535 L241.08134,171.846535 L221.320574,130.366337 Z" id="Path-3" data-reactid="12"></path><path d="M239.105263,231.10396 L326.052632,231.10396 L330.004785,399 L243.057416,351.594059 L239.105263,231.10396 Z" id="Path-4" data-reactid="13"></path><path d="M337.909091,246.905941 L339.885167,357.519802 L413,399 L337.909091,246.905941 Z" id="Path-5" data-reactid="14"></path><path d="M110.660287,365.420792 L165.990431,248.881188 L169.942584,399 L110.660287,365.420792 Z" id="Path-6" data-reactid="15"></path></g></g></g></svg>

<h1 style="
    margin-bottom: 5px;
">Seoul</h1>
            <p style="
    margin-bottom: 10px;
">My personal collection of CSS elements for rapid prototyping.</p>

<a href="#" class="button special icon fa-download" style="
    bottom: auto;
    margin-bottom: 10px;
">Download</a>

          </header>

        <!-- Main -->
          <div id="main">

            <!-- Content -->
              <section id="content" class="main">

                <!-- Text -->
                  <section>
                    <h2>Text</h2>
                    <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                    This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                    This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.</p>
                    <hr>
                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    <hr>
                    <h2>Heading Level 2</h2>
                    <h3>Heading Level 3</h3>
                    <h4>Heading Level 4</h4>
                    <hr>
                    <h3>Blockquote</h3>
                    <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                    <h3>Preformatted</h3>
                    <pre><code>i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
                  </section>

                <!-- Lists -->
                  <section>
                    <h2>Lists</h2>
                    <div class="row">
                      <div class="6u 12u$(medium)">
                        <h3>Unordered</h3>
                        <ul>
                          <li>Dolor pulvinar magna etiam.</li>
                          <li>Sagittis sed lorem adipiscing.</li>
                          <li>Felis enim etiam feugiat.</li>
                          <li>Ipsum lorem nullam consequat.</li>
                        </ul>
                        <h3>Alternate</h3>
                        <ul class="alt">
                          <li>Dolor pulvinar magna etiam.</li>
                          <li>Sagittis sed lorem adipiscing.</li>
                          <li>Felis enim etiam feugiat.</li>
                          <li>Ipsum lorem nullam consequat.</li>
                        </ul>
                      </div>
                      <div class="6u$ 12u$(medium)">
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
                        <ul class="icons">
                          <li><a href="#" class="icon fa-wechat"><span class="label">Twitter</span></a></li>
                          <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                          <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                          <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
                          <li><a href="#" class="icon fa-google"><span class="label">Dribbble</span></a></li>
                        </ul>
                        <ul class="icons">
                          <li><a href="#" class="icon alt fa-wechat"><span class="label">Twitter</span></a></li>
                          <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
                          <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
                          <li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
                          <li><a href="#" class="icon alt fa-google"><span class="label">Dribbble</span></a></li>
                        </ul>
                      </div>
                    </div>
                    <h2>Actions</h2>
                    <div class="row">
                      <div class="6u 12u$(medium)">
                        <ul class="actions">
                          <li><a href="#" class="button special">Default</a></li>
                          <li><a href="#" class="button">Default</a></li>
                        </ul>
                        <ul class="actions small">
                          <li><a href="#" class="button special small">Small</a></li>
                          <li><a href="#" class="button small">Small</a></li>
                        </ul>
                        <ul class="actions vertical">
                          <li><a href="#" class="button special">Default</a></li>
                          <li><a href="#" class="button">Default</a></li>
                        </ul>
                        <ul class="actions vertical small">
                          <li><a href="#" class="button special small">Small</a></li>
                          <li><a href="#" class="button small">Small</a></li>
                        </ul>
                      </div>
                      <div class="6u 12u$(medium)">
                        <ul class="actions vertical">
                          <li><a href="#" class="button special fit">Default</a></li>
                          <li><a href="#" class="button fit">Default</a></li>
                        </ul>
                        <ul class="actions vertical small">
                          <li><a href="#" class="button special small fit">Small</a></li>
                          <li><a href="#" class="button small fit">Small</a></li>
                        </ul>
                      </div>
                    </div>
                  </section>

                <!-- Table -->
                  <section>
                    <h2>Table</h2>
                    <h3>Default</h3>
                    <div class="table-wrapper">
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
                            <td colspan="2"></td>
                            <td>100.00</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <h3>Alternate</h3>
                    <div class="table-wrapper">
                      <table class="alt">
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
                            <td colspan="2"></td>
                            <td>100.00</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>

                <!-- Buttons -->
                  <section>
                    <h3>Buttons</h3>
                    <ul class="actions">
                      <li><a href="#" class="button special">Special</a></li>
                      <li><a href="#" class="button">Default</a></li>
                    </ul>
                    <ul class="actions">
                      <li><a href="#" class="button big">Big</a></li>
                      <li><a href="#" class="button">Default</a></li>
                      <li><a href="#" class="button small">Small</a></li>
                    </ul>
                    <ul class="actions fit">
                      <li><a href="#" class="button special fit">Fit</a></li>
                      <li><a href="#" class="button fit">Fit</a></li>
                      <li><a href="#" class="button fit">Fit</a></li>
                    </ul>
                    <ul class="actions fit small">
                      <li><a href="#" class="button special fit small">Fit + Small</a></li>
                      <li><a href="#" class="button fit small">Fit + Small</a></li>
                      <li><a href="#" class="button fit small">Fit + Small</a></li>
                    </ul>
                    <ul class="actions">
                      <li><a href="#" class="button special icon fa-download">Icon</a></li>
                      <li><a href="#" class="button icon fa-upload">Icon</a></li>
                      <li><a href="#" class="button icon fa-save">Icon</a></li>
                    </ul>
                    <ul class="actions">
                      <li><span class="button special disabled">Disabled</span></li>
                      <li><span class="button disabled">Disabled</span></li>
                    </ul>
                  </section>

                <!-- Form -->
                  <section>
                    <h2>Form</h2>
                    <form method="post" action="#">
                      <div class="row uniform">
                        <div class="6u 12u$(xsmall)">
                          <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name">
                        </div>
                        <div class="6u$ 12u$(xsmall)">
                          <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email">
                        </div>
                        <div class="12u$">
                          <div class="select-wrapper">
                            <select name="demo-category" id="demo-category">
                              <option value="">- Category -</option>
                              <option value="1">Manufacturing</option>
                              <option value="1">Shipping</option>
                              <option value="1">Administration</option>
                              <option value="1">Human Resources</option>
                            </select>
                          </div>
                        </div>
                        <div class="4u 12u$(small)">
                          <input type="radio" id="demo-priority-low" name="demo-priority" checked="">
                          <label for="demo-priority-low">Low</label>
                        </div>
                        <div class="4u 12u$(small)">
                          <input type="radio" id="demo-priority-normal" name="demo-priority">
                          <label for="demo-priority-normal">Normal</label>
                        </div>
                        <div class="4u$ 12u$(small)">
                          <input type="radio" id="demo-priority-high" name="demo-priority">
                          <label for="demo-priority-high">High</label>
                        </div>
                        <div class="6u 12u$(small)">
                          <input type="checkbox" id="demo-copy" name="demo-copy">
                          <label for="demo-copy">Email me a copy</label>
                        </div>
                        <div class="6u$ 12u$(small)">
                          <input type="checkbox" id="demo-human" name="demo-human" checked="">
                          <label for="demo-human">Not a robot</label>
                        </div>
                        <div class="12u$">
                          <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                        </div>
                        <div class="12u$">
                          <ul class="actions">
                            <li><input type="submit" value="Send Message" class="special"></li>
                            <li><input type="reset" value="Reset"></li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </section>

                <!-- Image -->
                  <section>
                    <h2>Image</h2>
                    <h3>Fit</h3>
                    <div class="box alt">
                      <div class="row uniform">
                        <div class="12u$"><span class="image fit"><img src="images/pic04.jpg" alt=""></span></div>
                        <div class="4u"><span class="image fit"><img src="images/pic01.jpg" alt=""></span></div>
                        <div class="4u"><span class="image fit"><img src="images/pic02.jpg" alt=""></span></div>
                        <div class="4u$"><span class="image fit"><img src="images/pic03.jpg" alt=""></span></div>
                        <div class="4u"><span class="image fit"><img src="images/pic03.jpg" alt=""></span></div>
                        <div class="4u"><span class="image fit"><img src="images/pic01.jpg" alt=""></span></div>
                        <div class="4u$"><span class="image fit"><img src="images/pic02.jpg" alt=""></span></div>
                        <div class="4u"><span class="image fit"><img src="images/pic02.jpg" alt=""></span></div>
                        <div class="4u"><span class="image fit"><img src="images/pic03.jpg" alt=""></span></div>
                        <div class="4u$"><span class="image fit"><img src="images/pic01.jpg" alt=""></span></div>
                      </div>
                    </div>
                    <h3>Left &amp; Right</h3>
                    <p><span class="image left"><img src="images/pic05.jpg" alt=""></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent lorem ipsum dolor sit amet veroeros consequat. Etiam tempus lorem ipsum.</p>
                    <p><span class="image right"><img src="images/pic06.jpg" alt=""></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus..</p>
                  </section>

              </section>

          </div>
      </DocumentTitle>
    )
  }
}
