import React, { Fragment } from 'react'
import './About.css'
import Footer from './Footer'

const About = () => (
  <Fragment>
    <div className="about">
      <p>
        I've been building in the front-end with React since early 2017. I've built product for
        companies that was then sold to larger companies and I've led front-end development teams. I
        have over a decade of web development experience.
      </p>
      <p>
        My knowledge of CSS is encylopedic and I have taught HTML and CSS at university-level for
        computer science students. Virtually all of my work in 2019 has been using hooks for state
        (the new functional React style) and I have built projects with GraphQL and Redux.
      </p>
      <p>
        I live in Dunedin, New Zealand - 4 hours after the west coast and 2 hours before Sydney.
      </p>
    </div>
    <Footer />
  </Fragment>
)

export default About
