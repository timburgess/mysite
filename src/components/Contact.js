import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
// import { makeStyles } from '@material-ui/core/styles'
import './Contact.css'

const widgetStyle = {
  top: 'var(--header-height)',
}

const Contact = () => (
  <div className="contact">
    <ReactTypeformEmbed style={widgetStyle} url="https://timburgess.typeform.com/to/BpW289" />
    {/* <div className="contact-details">
          <div>Contact</div>
          <div>NZ 022-580-4656</div>
          <div>Aust 0448-793-972</div>
        </div> */}
  </div>
)

export default Contact
