// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render(){
    return(
    <div className = "spaceship" >
      <h1>{this.props.name}</h1>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <small>Colors:{this.props.colors.join(',')}</small>
    </div>
  );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
}

// ReactDom.render(
//   <Spaceship
//   name="Romans Spaceship"
//   />,
//   document.getElementById('root')
// )












// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
