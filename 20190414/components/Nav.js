import React from 'react'

const Nav = props => (
  <ul className="nav flex-column text-right">
    <li className="nav-item">
      <a
          className={`nav-link ${props.page === 'home' ? 'text-active' : 'text-second'}`}
          href="#/"
      >
        首页
      </a>
    </li>

    <li className="nav-item">
      <a
          className={`nav-link ${props.page === 'consult' ? 'text-active' : 'text-second'}`}
          href="#consult"
      >
        技术咨询
      </a>
    </li>

    <li className="nav-item">
      <a
          className={`nav-link ${props.page === 'technical-service' ? 'text-active' : 'text-second'}`}
          href="#technical-service"
      >
        技术服务
      </a>
    </li>

    <li className="nav-item">
      <a
          className={`nav-link ${props.page === 'hr-service' ? 'text-active' : 'text-second'}`}
          href="#hr-service"
      >
        人才服务
      </a>
    </li>
  </ul>
)

export default Nav
