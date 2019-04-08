import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
  componentDidMount() {
    console.info(1)
    let fullPage = new fullpage('#fullpage', {
      v2compatible: true,
      anchors: ['firstPage', 'secondPage', '3rdPage'],
      sectionColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
      scrollBar: true
    })
  }

  render() {
    return (
      <div id="fullpage">
        <div id="section0" className="section">
          <div className="slide">Slide 1</div>
          <div className="slide">Slide 1</div>
          <div className="slide">Slide 1</div>
          <div className="slide">Slide 1</div>
        </div>

        <div id="section1" className="section">111</div>
        <div id="section2" className="section">222</div>
        <div id="section3" className="section">333</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
)
