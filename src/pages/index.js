import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>The thoughts...</h1>
      <h4> {data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map( ({node}) => {
          return (
            <div key={node.id}> 
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title} — {node.frontmatter.date} </BlogTitle>
            </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          )
        })
      }
    </div>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          description
          title
          date
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
