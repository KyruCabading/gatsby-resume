import React from "react"
import { useSpring, animated } from "react-spring"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import AnimatedCard from "../AnimatedCard"

const SectionItem = props => (
  <AnimatedCard>
    <Box my={14}>
      <Typography variant="h4">{props.title}</Typography>
      <div
        className="bodytext"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Box>
  </AnimatedCard>
)

export default SectionItem
