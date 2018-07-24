import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        1123
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'))