import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'

class Consult extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#6499a7'
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="consult" />
        </div>

        <div className="col">
          <PageTitle caption="技术咨询" />
        </div>
      </div>
    )
  }
}

export default Consult
