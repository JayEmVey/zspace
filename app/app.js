import React from 'react';
import styles from './style/app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'zzzzzz'};
  }
  render() {
    return (
      <div className="scene">
        <div className="wrap">
            <div className="wall wall-right"></div>
            <div className="wall wall-left"></div>   
            <div className="wall wall-top"></div>
            <div className="wall wall-bottom"></div> 
            <div className="wall wall-back"></div>    
        </div>
        <div className="wrap">
            <div className="wall wall-right"></div>
            <div className="wall wall-left"></div>   
            <div className="wall wall-top"></div>
            <div className="wall wall-bottom"></div>   
            <div className="wall wall-back"></div>    
        </div>
      </div>
    );
  }
}