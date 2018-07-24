import React from 'react'

import imageDarchIndex from '../assets/image/darch/index.png'

export default class ShowcaseDigitalArchive extends React.Component {
  render() {
    return (
      <div className="row" id="showcase.digital-archive">
        <div className="col-12">
          <h3>数字化档案<hr /></h3>
        </div>

        <div className="col-4">
          <a href={imageDarchIndex} target="_blank">
            <img src={imageDarchIndex} alt="数字化档案-首页" className="img-fluid" />
          </a>
        </div>

        <div className="col-8">
          <p className="lead">用户：人力资源和社会保障局</p>
          <p>
            该系统解决了纸质档案老化损坏的问题，通过高拍仪将纸质档案转化为数字化档案，
            并利用了信息化技术，可以实时检索下属不同档案库内的所有档案信息及档案内容。
          </p>
          <p>
            附带有扫描档案的<span className="text-primary">工作量统计图表</span>等其它利于分析总结工作成果的功能。
          </p>
          <p>
            同时还包括为方便普通市民在触摸屏上查看个人档案信息的<span className="text-primary">触摸屏查询终端</span>模块（需要<span className="text-danger">身份证读卡器</span>）。
          </p>
        </div>
      </div>
    )
  }
}