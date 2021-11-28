import React, { Component } from 'react';

import Particles from "react-tsparticles";
import Clarifai from 'clarifai';

import Navigation from './component/Navigation/Navigation.component';
import FaceRecognition from './component/FaceRecognition/FaceRecognition.component';
import Logo from './component/Logo/Logo.component';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.component';
import Rank from './component/Rank/Rank.component';
import Register from './component/register/register.component';

import './App.css';
import Signin from './component/signin/signin.component';


const app = new Clarifai.App({
  apiKey: "e2c4aa7c6993409eb64ada33e7b14f9b"
});




const particlesOptions = {
  particles: {
    links: {
      enable: true,
      opacity: 0.2,
      width: 0.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      straight: false,
    },
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 1300,
      }
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 6,
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input_image');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }


  displayFaceBox = (box) => {
    this.setState({box: box})
  }


  onInputChange = (e) => {
  this.setState({input: e.target.value})
  }
  

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }



  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;

    return (
      <div className="App">
        <Particles
          className='particles'
          options={particlesOptions}
    />

        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home'
            ?<div>
              <Logo />
              <Rank />
               <ImageLinkForm
                 onButtonSubmit={this.onButtonSubmit}
                 onInputChange={this.onInputChange}
               />
                <FaceRecognition box={box} imageUrl={imageUrl} />
                </div>
            : (

              route === 'signin'
                ? <Signin onRouteChange={this.onRouteChange} />
                :<Register onRouteChange={this.onRouteChange} />
            )
        }
        </div>
        
    );
  }
}

export default App;
