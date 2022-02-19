import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="" />
    <p>Located in Tulsa, Oklahoma.<br/>
    I find creative and straightforward solutions to problems in how people work with digital systems.<br/>
    Properly engineered solutions are about understanding the scope of the problem.<br/>
    Accuracy in scoping saves cost and increases performance.</p>
    <hr></hr>
    <h4>Current focus:</h4>
    <h5>• Workflow Architecture and Employee Training for small businesses</h5>
    <h5>• UI/UX Design and Web Development</h5>
    <h5>• Data Management and Recovery</h5>
    <h5>• Cryptocurrency Guidance and Security</h5>
    <h5>• General IT and Networking</h5>
    <hr></hr>
    <p><a href="tel:14055820062">405•582•0062</a><br/>
    <a href="mailto:joel@cuthriell.com">joel@cuthriell.com</a></p>
    <StaticImage
      src="../images/jc.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Joel Cuthriell"
      style={{ float: `right` }}
    />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
