import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
// import DialogContent from '@material-ui/core/DialogContent'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
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
// import src7 from '../img/2019-03-02.png'
// import src8 from '../img/2019-03-06.png'
// import src9 from '../img/2019-03-07.png'
// import src10 from '../img/2019-03-08.png'
// import src11 from '../img/2019-03-09.png'
// import src12 from '../img/2019-03-12.png'
// import src13 from '../img/2019-03-12-18.png'
// import src14 from '../img/2019-03-13.png'
// import src15 from '../img/2019-03-27.png'
// import src16 from '../img/2019-08-01.png'
// import src17 from '../img/2019-01-23.png'
// import src18 from '../img/2019-01-23-07.png'
// import src19 from '../img/2019-01-16.png'
// import src20 from '../img/2019-01-02.png'
// import src21 from '../img/2019-10-15.png'
// import src22 from '../img/2018-11-27.png'
// import src23 from '../img/2018-11-02.png'
// import src24 from '../img/2018-09-06.png'

const title = ['Interactive map within project form']
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
  const [id, setId] = useState(0)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const imgClick = id => {
    console.log('imgclick', id)
    setId(id)
    setOpen(true)
  }

  return (
    <div className="projects">
      <p>Screenshots from the last 12 months</p>
      <div className="container">
        <img src={src1} alt="screenshot" onClick={() => imgClick(1)} />
        <img src={src2} alt="screenshot" onClick={() => imgClick(2)} />
        <img src={src3} alt="screenshot" onClick={() => imgClick(3)} />
        <img src={src4} alt="screenshot" onClick={() => imgClick(4)} />
        <img src={src5} alt="screenshot" onClick={() => imgClick(5)} />
        <img src={src6} alt="screenshot" onClick={() => imgClick(6)} />
        {/*
      <img src={src7} alt="screenshot" />
      <img src={src8} alt="screenshot" />
      <img src={src9} alt="screenshot" />
      <img src={src10} alt="screenshot" />
      <img src={src11} alt="screenshot" />
      <img src={src12} alt="screenshot" />
      <img src={src13} alt="screenshot" />
      <img src={src14} alt="screenshot" />
      <img src={src15} alt="screenshot" />
      <img src={src16} alt="screenshot" />
      <img src={src17} alt="screenshot" />
      <img src={src18} alt="screenshot" />
      <img src={src19} alt="screenshot" />
      <img src={src20} alt="screenshot" />
      <img src={src21} alt="screenshot" />
      <img src={src22} alt="screenshot" />
      <img src={src23} alt="screenshot" />
<img src={src24} alt="screenshot" /> */}
      </div>
      <Footer />
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="inherit">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="subtitle2" className={classes.title}>
              {title[id - 1]}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="dialog-content">
          <img className="dialog-img" src={src1} alt="screenshot" />
        </div>
         { /*
         <div className="dialog-content">
            Foo
          </div>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List> */}
      </Dialog>
    </div>
  )
}

export default Projects
