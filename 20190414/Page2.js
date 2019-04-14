import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'

class Page2 extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#334455'
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="page2" />
        </div>

        <div className="col">
          <PageTitle caption="Page 2" />
        </div>
      </div>
    )
  }
}

export default Page2