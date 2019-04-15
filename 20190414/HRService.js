import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'

// http://www.geetemp.com/serveintroduction
class HRService extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="hr-service" />
        </div>

        <div className="col">
          <PageTitle caption="人才服务" />

          <div className="row">
            <div className="col-md-4 col-sm-12 mb-5">
              <h3 className="text-center mb-4">
                <i className="fa fa-fw fa-users fa-3x mb-3"></i>
                <br />
                岗位外包
              </h3>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <h3 className="text-center mb-4">
                <i className="fa fa-fw fa-id-card-o fa-3x mb-3"></i>
                <br />
                离岸招聘
              </h3>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <h3 className="text-center mb-4">
                <i className="fa fa-fw fa-terminal fa-3x mb-3"></i>
                <br />
                技术培训
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HRService
