import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {console.log(data)}
    <h1>Welcome to Bobby's blog</h1>
    {data.allMarkdownRemark.edges.map(edge => (
      <div key = {edge.node.id} style ={{borderBottom: "3px solid"}}>
        <Link to = {edge.node.fields.slug} style ={{textDecoration:"none", textDecorationColor:"black"}}>
        <h3>{edge.node.frontmatter.Title}</h3>
        <h4> {edge.node.frontmatter.date} </h4>
        <p> {edge.node.excerpt} </p>
        </Link>
        
      </div>
    ))}
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        excerpt
        id
        fields {
          slug
        }
        frontmatter {
          Title
          date
        }
      }
    }
    totalCount
  }
}
`