import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer.',
        imgSrc: 'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/313197548_119836264236980_8405795214233168789_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=o3lYWOHnStMQ7kNvgHszw7-&_nc_ht=scontent.flos1-1.fna&oh=00_AYCZUqGZIdvXR2zvkHMK0p2R7Js6giebyLgPDt0Y6DXg1Q&oe=6675E3AC',
        profession: 'Software Engineer',
      },
      shows: false,
      mountedTime: new Date(),
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: Math.floor((new Date() - this.state.mountedTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Profile Toggle App</h1>
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          {shows && (
            <div>
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <img src={person.imgSrc} alt={person.fullName} />
              <p>{person.profession}</p>
            </div>
          )}
          <p>Time since component mounted: {timeElapsed} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
