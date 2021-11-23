import React, { Component } from 'react';

import Particles from "react-tsparticles";

import Navigation from './component/Navigation/Navigation.component';
import Logo from './component/Logo/Logo.component';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.component';
import Rank from './component/Rank/Rank.component';

import './App.css';


const particlesOptions = {
  fpsLimit: 0,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
       
      },
    },
  },
  particles: {
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 1300,
      },
      value: 80,
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

  
  render() {
   

    return (
      <div className="App">
        <Particles
          className='particles'
          id="tsparticles"
          options={particlesOptions}
    />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* 
      
        <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
