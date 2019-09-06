import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import AnimatedCard from "../AnimatedCard"

const SectionTitle = props => {
  return (
    <AnimatedCard>
      <Typography variant="overline" color="textSecondary">
        {props.title}
      </Typography>
    </AnimatedCard>
  )
}

export default SectionTitle

SectionTitle.propTypes = {
  title: PropTypes.string,
}
