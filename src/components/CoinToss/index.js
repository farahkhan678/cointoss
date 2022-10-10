// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    isTail: 0,
    isHead: 0,
  }

  tossChange = () => {
    const {isHead, isTail} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let isheadCount = isHead
    let istaiCount = isTail
    let toss = ''

    if (tossResult === 0) {
      toss = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      isheadCount += 1
    } else {
      toss = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      istaiCount += 1
    }
    this.setState({
      img: toss,
      isHead: isheadCount,
      isTail: istaiCount,
    })
  }

  render() {
    const {img, isHead, isTail} = this.state
    const total = isHead + isTail

    return (
      <div className="bg-cont">
        <div className="bg-cont-two">
          <h1 className="head"> Coin Toss Game </h1>
          <p className="para"> Heads (or) Tails </p>
          <img className="img" alt="toss result" src={img} />
          <button type="button" className="btn" onClick={this.tossChange}>
            {' '}
            Toss Coin{' '}
          </button>
          <div className="game-score">
            <p className="score">Total: {total} </p>
            <p className="score"> Heads: {isHead} </p>
            <p className="score"> Tails: {isTail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default App
