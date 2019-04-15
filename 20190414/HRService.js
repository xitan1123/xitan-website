import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'

class HRService extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#334455'
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="hr-service" />
        </div>

        <div className="col">
          <PageTitle caption="人才服务" />
        </div>
      </div>
    )
  }
}

export default HRService
