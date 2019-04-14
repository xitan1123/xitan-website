import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Page2 from './Page2'
import Footer from './components/Footer'

const App = () => (
  <HashRouter>
    <div className="container-fluid section-color-1st">
      <h1 className="text-center mt-5">
        #TITLE#
      </h1>

      <div className="mt-5">
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
      </div>

      <Footer />
    </div>
  </HashRouter>
)

export default App
