import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="home" />
        </div>

        <div className="col">
          <PageTitle caption="首页" />
        </div>
      </div>
    )
  }
}

export default Home
