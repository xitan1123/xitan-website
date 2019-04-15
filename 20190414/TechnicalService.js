import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'

// http://www.os-easy.com/portal/page/index/id/39.html
class TechnicalService extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="technical-service" />
        </div>

        <div className="col">
          <PageTitle caption="技术服务" />
        </div>
      </div>
    )
  }
}

export default TechnicalService
