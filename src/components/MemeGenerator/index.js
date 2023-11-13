import {Component} from 'react'
import {
  MainPage,
  LeftSection,
  Heading,
  Label,
  Form,
  Select,
  TextInput,
  CustomButton,
  RightSection,
  Meme,
  MemeText,
} from './styledComponents'

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
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: parseInt(fontSizesOptionsList[0].displayText),
    displayImage: false,
  }

  onChangeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({fontSize: parseInt(event.target.value)})
  }

  onGenerate = event => {
    event.preventDefault()
    this.setState({displayImage: true})
  }

  render() {
    console.log(this.state)
    const {imgUrl, topText, bottomText, fontSize, displayImage} = this.state

    return (
      <MainPage>
        <LeftSection width="100%">
          <Heading>Meme Generator</Heading>
          <Form>
            <Label htmlFor="imgUrl">Image Url</Label>
            <br />
            <TextInput
              id="imgUrl"
              type="text"
              placeholder="Enter the Image URL"
              onChange={this.onChangeUrl}
              value={imgUrl}
            />
            <br />

            <Label htmlFor="topText">Top Text</Label>
            <br />
            <TextInput
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              value={topText}
            />
            <br />

            <Label htmlFor="bottomText">Bottom Text</Label>
            <br />
            <TextInput
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
              value={bottomText}
            />
            <br />

            <Label htmlFor="select">Font Size</Label>
            <br />
            <Select
              id="select"
              //   defaultValue={fontSizesOptionsList[0].optionId}
              onChange={this.onChangeSelectOption}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId}>{each.displayText}</option>
              ))}
            </Select>
            <br />

            <CustomButton type="submit" onClick={this.onGenerate}>
              Generate
            </CustomButton>
          </Form>
        </LeftSection>
        <RightSection>
          {displayImage && (
            <Meme data-testid="meme" imgUrl={imgUrl}>
              <MemeText fontSize={fontSize}>{topText}</MemeText>
              <MemeText fontSize={fontSize}>{bottomText}</MemeText>
            </Meme>
          )}
        </RightSection>
      </MainPage>
    )
  }
}

export default MemeGenerator
