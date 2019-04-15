import React from 'react'

import Nav from './components/Nav'
import PageTitle from './components/PageTitle'

class Consult extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Nav page="consult" />
        </div>

        <div className="col">
          <PageTitle caption="技术咨询" />

          <div className="row">
            <div className="col-md-4 col-sm-12 mb-5">
              <h3 className="text-center mb-4">
                <i className="fa fa-fw fa-desktop fa-3x mb-3"></i>
                <br />
                技术战略与构架设计
              </h3>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <h3 className="text-center mb-4">
                <i className="fa fa-fw fa-desktop fa-3x mb-3"></i>
                <br />
                分析与信息管理
              </h3>

              <ul>
                <li>信息架构与图谱</li>
                <li>信息质量、治理与标准化</li>
                <li>数据迁移/整合引擎</li>
                <li>可视化与数据发现</li>
                <li>虚拟化和云解决方案</li>
                <li>内存技术解决方案</li>
                <li>信号检测与处理、通讯和物联网</li>
                <li>数据生命周期/业务流程和工作流</li>
              </ul>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <h3 className="text-center mb-4">
                <i className="fa fa-fw fa-desktop fa-3x mb-3"></i>
                <br />
                数字化解决方案
              </h3>

              <ul>
                <li>数字化转型</li>
                <li>搭建平台</li>
                <li>可视化和报告</li>
                <li>数据分析</li>
                <li>ID、资产和漏洞管理</li>
                <li>数据保护</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Consult
