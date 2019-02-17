import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar'
import ShowcaseDigitalArchive from './component/Showcase.Digital-Archive'
import ShowcaseEIA from './component/ShowcaseEIA'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <ShowcaseDigitalArchive />

          <br/>
          <br/>
          <br/>

          <ShowcaseEIA />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))