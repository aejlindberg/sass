import React from "react"
import "./app.scss"

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <img src="logo.svg" alt="Norwegian logo" />
        </div>
        <div className="hero">
          <div className="heroImage">
            <img src="hero.jpg" alt="airplane" />
          </div>
          <div className="heroBox">
            <div className="tabBoxRow">
              <div className="tabBox-fly">
                <img src="ticket.png" alt="ticket icon" />
                <p>Flyg</p>
              </div>
              <div className="tabBox-fly-hotel">
                <p>Flyg & hotell</p>
              </div>
              <div className="tabBox-rental">
                <p>Hyrbil</p>
              </div>
              <div className="tabBox-hotel">
                <p>Hotell</p>
              </div>
            </div>
            <div className="heroBoxInput">
              <div id="from">
                <span>Flyg från</span>
                <label>
                  <input type="text" name="from" value="Stockholm-Arlanda (ARN)" />
                </label>
              </div>
              <div id="to">
                <span>Flyg till</span>
                <label>
                  <input type="text" name="to" value="Vart vill du resa?" />
                </label>
              </div>
              <div className="inputSuggestion">
                <p>Stockholm-Arlanda?</p>
              </div>
              <div id="submitButton">
                <button type="button">Sök och beställ</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default App
