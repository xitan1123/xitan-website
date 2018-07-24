import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container"></div>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'))