import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import StackOverflowIcon from '../icons/StackOverflowIcon'
import './Footer.css'

const Footer = () => (
  <footer>
    <IconButton target="_blank" href="https://www.github.com/timburgess">
      <GitHubIcon />
    </IconButton>
    <IconButton target="_blank" href="https://stackoverflow.com/users/127660/timbo?tab=profile">
      <StackOverflowIcon />
    </IconButton>
    <IconButton target="_blank" href="https://www.linkedin.com/in/tim-burgess/">
      <LinkedInIcon />
    </IconButton>
  </footer>
)

export default Footer
