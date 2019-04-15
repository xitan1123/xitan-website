import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Consult from './Consult'
import TechnicalService from './TechnicalService'
import HRService from './HRService'
import Footer from './components/Footer'

const App = () => (
  <HashRouter>
    <div className="container-fluid section-color-1st">
      <h1 className="text-center mt-5">
        #TITLE#
      </h1>

      <div className="mt-5">
        <Route exact path="/" component={Home} />
        <Route path="/consult" component={Consult} />
        <Route path="/technical-service" component={TechnicalService} />
        <Route path="/hr-service" component={HRService} />
      </div>

      <Footer />
    </div>
  </HashRouter>
)

export default App
