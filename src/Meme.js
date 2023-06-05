import React from "react";
import Header from "./Header"
import Footer from "./Footer";

class Meme extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "so you're telling me...",
            bottomText: "you brought books instead of food?",
            randomImage: "https://deseret.brightspotcdn.com/dims4/default/6d1557c/2147483647/strip/true/crop/1200x833+0+0/resize/566x393!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FmBTmAnO5Yc7A5_dunG_f4i6Pm98%3D%2F0x0%3A1200x833%2F1200x833%2Ffilters%3Afocal%28600x416%3A601x417%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F17873873%2F1619727.jpg",
            allMemesImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.chooseRandom = this.chooseRandom.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({
                    allMemesImg: memes
                })
            })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    chooseRandom() {
        let length = this.state.allMemesImg.length
        let arrayIndex = this.getRandomInt(length - 1)
        this.setState({
            randomImage: this.state.allMemesImg[arrayIndex].url, topText: "", bottomText: ""
        })
    }

    render() {
        return (
            <div className="App">
                <Header name="Meme App" />
                <div>
                    <div className="meme-form">
                        <input
                            name="topText"
                            placeholder="header caption.."
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input
                            name="bottomText"
                            placeholder="footer caption.."
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.chooseRandom}>Next</button>
                    </div>
                    <div className="meme">
                        <img src={this.state.randomImage} alt="memeImg" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                </div>
                <Footer name="my foot" />
            </div>
        )
    }
}

export default Meme;