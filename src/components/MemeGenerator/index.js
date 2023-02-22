import {Component} from 'react'

import {Cont} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {url: '', top: '', bottom: '', font: '', isClicked: false}

  chImg = event => {
    this.setState({url: event.target.value})
  }

  chTop = event => {
    this.setState({top: event.target.value})
  }

  chBottom = event => {
    this.setState({bottom: event.target.value})
  }

  chFont = event => {
    this.setState({font: event.target.value})
  }

  clicked = () => {
    this.setState({isClicked: true})
  }

  data = () => {
    const {url, top, bottom, font} = this.state
    return (
      <Cont data-testid="meme" background={url} fontSize={font}>
        <h1>{top}</h1>
        <h1>{bottom}</h1>
      </Cont>
    )
  }

  render() {
    const {url, top, bottom, font, isClicked} = this.state
    return (
      <div>
        <form>
          <h1>Meme Generator</h1>
          <label htmlFor="1">Image Url</label>
          <br />
          <input id="1" type="text" value={url} onChange={this.chImg} />
          <br />
          <label htmlFor="2">Top Text</label>
          <br />
          <input id="2" value={top} onChange={this.chTop} />
          <br />
          <label htmlFor="3">Bottom Text</label>
          <br />
          <input id="3" value={bottom} onChange={this.chBottom} />
          <br />
          <label htmlFor="4">Font Size</label>
          <br />
          <select id="4" onChange={this.chFont} value={font}>
            {fontSizesOptionsList.map(each => (
              <option>{each.displayText}</option>
            ))}
          </select>
          <br />
          <button type="submit" onClick={this.clicked}>
            Generate
          </button>
        </form>
        <div>{isClicked ? this.data() : ''}</div>
      </div>
    )
  }
}
export default MemeGenerator
