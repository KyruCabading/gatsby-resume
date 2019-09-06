import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import AnimatedCard from "./AnimatedCard"

//
const Header = props => (
  <AnimatedCard>
    <Box my={8}>
      <Typography variant="h3" component="h1" gutterBottom>
        {props.title}
      </Typography>
      <Typography gutterBottom>
        2 years professional working experience with React on production-level
        projects.
      </Typography>
      <Typography gutterBottom>
        I've primarily worked on a <strong>React, NextJS, GraphQL</strong> stack
        on the frontend fully building out a <strong>chat application</strong>{" "}
        for customer support, <strong>interactive charts and graphs</strong> for
        realtime high-frequency crypto ticker data, and a{" "}
        <strong>social network platform</strong>.
      </Typography>
    </Box>
  </AnimatedCard>
)

export default Header
