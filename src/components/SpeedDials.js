import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import GitHubIcon from '@material-ui/icons/GitHub'
import StackOverflowIcon from '../icons/StackOverflowIcon'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles(theme => ({
  root: {
    height: '4rem',
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
}))

const actions = [
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    handle() {
      window.location.href = 'https://www.linkedin.com/in/tim-burgess/'
    },
  },
  {
    icon: <StackOverflowIcon />,
    name: 'Stack Overflow',
    handle() {
      window.location.href = 'https://stackoverflow.com/users/127660/timbo?tab=profile'
    },
  },
  {
    icon: <GitHubIcon />,
    name: 'GitHub',
    handle() {
      window.location.href = 'https://github.com/timburgess'
    },
  },
]

const SpeedDials = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
        FabProps={{ color: 'inherit' }}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.handle}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

export default SpeedDials
