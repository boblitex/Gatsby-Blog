import React from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby';


const about = () => {
  return (
    <Layout>
      <div>Hello world</div>
      <Link to= '/'> <p>Go back to home page</p></Link>
    </Layout>
  )
}
export default about
