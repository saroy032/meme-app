import React from "react";


class Meme extends React.Component {
constructor(){
super();
this.state ={
topText: "",
bottomText: "",
randomImage: "https://img.mensxp.com/media/content/2022/Apr/2_626a72b717e91.jpeg?w=640&h=475",
allMemesImg: []
}
this.handleChange = this.handleChange.bind(this)
this.chooseRandom = this.chooseRandom.bind(this)
}


componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
                .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemesImg: memes
                })
            })
            
}

getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        
handleChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })
            //console.log(event.target)
     
}
        
chooseRandom(){
            let length = this.state.allMemesImg.length
            let arrayIndex = this.getRandomInt(length - 1)
            //console.log("array length", length)

    this.setState({
                randomImage : this.state.allMemesImg[arrayIndex].url, topText: "", bottomText: ""
            })
}
        
        

render(){
            
    
return(
                
        <div>
                    <div className="meme-form">
                        <input 
                            name="topText"
                            placeholder= "header caption.."
                            value={this.state.topText}
                            onChange= {this.handleChange}
                        />
                        <input 
                            name="bottomText"
                            placeholder= "footer caption.."
                            value={this.state.bottomText}
                            onChange= {this.handleChange}
                        />
                        <button onClick={this.chooseRandom} >Next</button>
                    </div>
                    <div className="meme">
                        <img src={this.state.randomImage} alt=""/>
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
    
                    </div>
        </div>
            )
        }
    }

    export default Meme;