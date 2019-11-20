import React, { Component } from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import AnimatedGradient from "./components/AnimatedGradient";

class App extends Component {
  render() {
    return (
      <div>
        <Parallax
          pages={2}
          scrolling={true}
          vertical
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0} speed={0.5}>
            <AnimatedGradient />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <h1>LOL</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}
export default App;
