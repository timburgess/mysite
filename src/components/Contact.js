import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Contact.css'
// import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  multilineField: {
    marginTop: 0,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  button: {
    margin: theme.spacing(1),
    width: 300,
    marginTop: '1rem',
  },
}))

const Contact = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    email: '',
    project: '',
  })
  const [showForm, setShowForm] = useState(true)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = () => {
    console.log('values', values)
    setShowForm(false)
  }

  return (
    <Fragment>
      <div className="contact">
        <form className="contact-form" noValidate autoComplete="off">
          {showForm ? (
            <Fragment>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
              <div className="multilineLabel">About Your Project</div>
              <TextField
                id="project"
                multiline
                rows="6"
                value={values.project}
                onChange={handleChange('project')}
                className={classes.multilineField}
                margin="normal"
              />
              <Button variant="contained" className={classes.button} onClick={handleSubmit} color="primary">
                Submit
              </Button>
            </Fragment>
          ) : (
            <div className="contact-msg">Thanks for your message. I'll be in touch.</div>
          )}
        </form>
        <div className="contact-details">
          <div>Contact</div>
          <div>NZ 022-580-4656</div>
          <div>Aust 0448-793-972</div>
        </div>
      </div>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default Contact
