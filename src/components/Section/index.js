import React from "react"
import SectionTitle from "./SectionTitle"
import SectionItem from "./SectionItem"

const Section = props => (
  <>
    <SectionTitle title={props.title} />
    {props.items.map((edge, i) => {
      const {
        html: content,
        frontmatter: { title },
      } = edge.node

      return <SectionItem key={i} title={title} content={content} />
    })}
  </>
)

export default Section
