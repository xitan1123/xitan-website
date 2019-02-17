import React from 'react'

export const HR = props => (
  <div className="container mt-5">
    <h3>
      <i className="fa fa-fw fa-hashtag"></i>
      人才服务
    </h3>

    <hr />

    <div className="row">
      <div className="col">
        <h4 className="text-center">
          <i className="fa fa-fw fa-ellipsis-h mb-3"></i>
          <br />
          #标题#
        </h4>

        <p className="text-center">说明</p>
      </div>

      <div className="col">
        <h4 className="text-center">
          <i className="fa fa-fw fa-ellipsis-v mb-3"></i>
          <br />
          #标题#
        </h4>

        <p className="text-center">说明</p>
      </div>

      <div className="col">
        <h4 className="text-center">
          <i className="fa fa-fw fa-plus mb-3"></i>
          <br />
          #标题#
        </h4>

        <p className="text-center">说明</p>
      </div>
    </div>

    <blockquote className="blockquote mt-3">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>

    <p>文字</p>
  </div>
)