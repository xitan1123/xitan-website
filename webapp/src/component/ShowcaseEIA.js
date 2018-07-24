import React from 'react'

import imageEIAIndex from '../assets/image/eia/index.png'

export default class ShowcaseEIA extends React.Component {
  render() {
    return (
      <div className="row" id="showcase.eia">
        <div className="col-12">
          <h3>建设项目环境影响评价文件在线技术评估系统<hr /></h3>
        </div>

        <div className="col-4">
          <a href={imageEIAIndex} target="_blank">
            <img src={imageEIAIndex} alt="环评系统-首页" className="img-fluid"/>
          </a>
        </div>

        <div className="col-8">
          <p className="lead">用户：环保厅、环保局 环评中心</p>
          <p>
            将环境影响技术评估的工作流程运行于互联网云计算平台，避免建设单位、环评单位繁琐的申报过程，并能随时知晓环评工作的流程进度。
          </p>
          <p>
            环评中心的用户可以分配部门、分配项目负责人等，并能严格执行评估流程。支持暂停项目、退回项目，和项目流程计时器。
          </p>
          <p>
            包含受理项目统计、在审项目统计、办结项目统计、部门项目统计、建设地区项目统计、环评类别项目统计及环评单位项目统计等直观的统计图表。
          </p>
        </div>
      </div>
    )
  }
}