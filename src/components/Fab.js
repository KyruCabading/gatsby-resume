import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { capitalize } from "@material-ui/core/utils"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import CodeIcon from "@material-ui/icons/Code"
import EmailIcon from "@material-ui/icons/Email"
import LinkIcon from "@material-ui/icons/Link"

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}))

const actions = [
  { icon: <CodeIcon />, name: "View Code", href: "" },
  {
    icon: <EmailIcon />,
    name: "Email",
    href: "mailto:kyrusri@gmail.com",
  },
  {
    icon: <LinkIcon />,
    name: "View Website",
    href: "http://kyrucabading.github.io",
  },
]

export default function SpeedDials() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<SpeedDialIcon />}
      onBlur={handleClose}
      onClose={handleClose}
      onFocus={handleOpen}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      open={open}
      direction="up"
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={
            <a
              href={action.href}
              target="_blank"
              rel="noopener norefferer"
              style={{ color: "inherit" }}
            >
              {action.icon}
            </a>
          }
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}
