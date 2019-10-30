import React, { useState } from 'react'
import cx from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

// this is such a simple thing why bring in react-router */
const App = () => {
  const [page, setPageState] = useState('home')

  const setPage = page => () => setPageState(page)

  return (
    <CssBaseline>
      <Header setPage={setPage} />
      <div className={cx({ fixedpage: page !== 'projects' })}>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'projects' && <Projects setPage={setPage} />}
        {page === 'about' && <About setPage={setPage} />}
        {page === 'contact' && <Contact setPage={setPage} />}
      </div>
    </CssBaseline>
  )
}

export default App
