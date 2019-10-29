import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import Footer from './Footer'
import './Projects.css'

import src1 from '../img/2019-02-08.png'
import src2 from '../img/2019-02-12.png'
import src3 from '../img/2019-02-19.png'
import src4 from '../img/2019-02-19-16.png'
import src5 from '../img/2019-02-20.png'
import src6 from '../img/2019-02-22.png'
import src7 from '../img/2019-03-02.png'
import src8 from '../img/2019-10-19.png'
import src9 from '../img/2019-03-06.png'
import src10 from '../img/2019-03-07.png'
import src11 from '../img/2019-03-08.png'
import src12 from '../img/2019-10-20.png'
import src13 from '../img/2019-03-09.png'
import src14 from '../img/2019-03-12.png'
import src15 from '../img/2019-03-12-18.png'
import src16 from '../img/2019-03-13.png'
import src17 from '../img/2019-03-27.png'
import src18 from '../img/2019-08-01.png'
import src19 from '../img/2019-01-23b.png'
import src20 from '../img/2019-01-23-07.png'
import src21 from '../img/2019-01-16.png'
import src22 from '../img/2019-01-02.png'
import src23 from '../img/2019-10-15.png'
import src24 from '../img/2018-11-27.png'
import src25 from '../img/2018-09-06.png'

const SCREENSHOTS = [
  {
    src: src1,
    title: 'Interactive map within project form',
  },
  {
    src: src2,
    title: 'Layout and flow for login, new account signup and password reset',
  },
  {
    src: src3,
    title: 'Project overview with editable map and subsections',
  },
  {
    src: src4,
    title: 'Project document and image management',
  },
  {
    src: src5,
    title: 'Infinite list with multivalue filtered search',
  },
  {
    src: src6,
    title: 'Stepped multi-page data capture',
  },
  {
    src: src7,
    title: 'Project stage data capture with taggable funding',
  },
  {
    src: src8,
    title: 'Landing page for geocoding service',
  },
  {
    src: src9,
    title: 'Map list view with popup links',
  },
  {
    src: src10,
    title: 'In-map project geoedit with auto-routing',
  },
  {
    src: src11,
    title: 'Multiple Sub-projects detail capture',
  },
  {
    src: src12,
    title: 'Riemann API events monitor',
  },
  {
    src: src13,
    title: 'Road project works segment structuring',
  },
  {
    src: src14,
    title: 'In form state management via dialogs',
  },
  {
    src: src15,
    title: 'Custom word search/multiselect for vast options',
  },
  {
    src: src16,
    title: 'Geographic overview with drill-down',
  },
  {
    src: src17,
    title: 'Form capture with strategy tagging',
  },
  {
    src: src18,
    title: 'List filter with type search/multiselect',
  },
  {
    src: src19,
    title: 'Treeview in drawer and tabled selection result',
  },
  {
    src: src20,
    title: 'Dynamic SVG in Leaflet map',
  },
  {
    src: src21,
    title: 'Slide-in drawer with selection details',
  },
  {
    src: src22,
    title: '3D field render and point description',
  },
  {
    src: src23,
    title: 'Data overlay on Leaflet with sliding legend',
  },
  {
    src: src24,
    title: 'Satellite pass availability for area selection',
  },
  {
    src: src25,
    title: 'Shopify plugin (React with Shopify Polaris components)',
  },
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />
})

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Projects = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [id, setId] = useState(1)

  const handleClose = () => {
    setOpen(false)
  }

  const imgClick = id => {
    setId(id)
    setOpen(true)
  }

  return (
    <div className="projects">
      <p>Screenshots from the last 12 months</p>
      <div className="container">
        {SCREENSHOTS.map((shot, index) => (
          <img key={shot.title} src={shot.src} alt="screenshot" onClick={() => imgClick(index)} />
        ))}
      </div>
      <Footer />
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="inherit">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <div className={classes.title}>{SCREENSHOTS[id].title}</div>
          </Toolbar>
        </AppBar>
        <div className="dialog-content">
          <img className="dialog-img" src={SCREENSHOTS[id].src} alt="screenshot" />
        </div>
      </Dialog>
    </div>
  )
}

export default Projects
