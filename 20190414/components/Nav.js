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
          className={`nav-link ${props.page === 'page2' ? 'text-active' : 'text-second'}`}
          href="#page2"
      >
        页2
      </a>
    </li>
    <li className="nav-item">
      <a
          className={`nav-link ${props.page === 'page3' ? 'text-active' : 'text-second'}`}
          href="#"
      >
        页3
      </a>
    </li>
  </ul>
)

export default Nav
