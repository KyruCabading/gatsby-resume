import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Section from "../components/Section"
import Header from "../components/Header"
import Fab from "../components/Fab"
import { graphql } from "gatsby"

export default function App(props) {
  const {
    data: {
      site: {
        siteMetadata: { author, description },
      },
      experiences: { edges: experiences = [] },
      education: { edges: education = [] },
    },
  } = props

  return (
    <Container maxWidth="sm">
      <Box my={8} mx={4}>
        <Header title={author} subtitle={description} />
        <Section title="Work Experience" items={experiences} />
        <Section title="Education" items={education} />
      </Box>
      <Fab />
    </Container>
  )
}

export const query = graphql`
  query IndexQuery {
    experiences: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//experience/./" } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            title
          }
        }
      }
    }
    education: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//education/./" } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
