import React, { Fragment } from 'react'
import './Home.css'
import SpeedDials from './SpeedDials'


const Home = ({ setPage }) => (
  <Fragment>
    <div className="name">
      <h1>Tim Burgess</h1>
      <div className="subtitle">
        <div>I build solid React Applications, using things like</div>
        <div>Material-UI / Redux / Electron / GraphQL / Leaflet</div>
      </div>
    </div>
    <SpeedDials />
  </Fragment>
)

export default Home
