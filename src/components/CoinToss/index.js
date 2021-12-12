// Write your code here
import './index.css'

const {Component} = require('react/cjs/react.production.min')

class CoinToss extends Component {
  state = {Ishead: true, total: 0, heads: 0}

  tossed = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevObj => ({
        Ishead: true,
        total: prevObj.total + 1,
        heads: prevObj.heads + 1,
      }))
    } else {
      this.setState(prevObj => ({
        Ishead: false,
        total: prevObj.total + 1,
      }))
    }
  }

  render() {
    const {Ishead, total, heads} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {Ishead ? (
            <img
              alt="toss result"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              alt="toss result"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <br />
          <button onClick={this.tossed} className="button">
            Toss Coin
          </button>
          <div className="resultDiv">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {total - heads}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
