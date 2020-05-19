import React from 'react';
import './App.scss';
import TeamComponent from '../components/TeamComponent/TeamComponent';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h2 className="mt-3">Sports Roster</h2>
        <Auth />
        <TeamComponent />
      </div>
    );
  }
}

export default App;
