import React from 'react';

import authData from '../../helpers/data/authData';
import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';

import './TeamComponent.scss';

class TeamComponent extends React.Component {
  state = {
    players: [],
  }

  getInfo = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  removePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => {
        this.getInfo();
      })
      .catch((err) => console.error('unable to delete player', err));
  }

  render() {
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer}/>);

    return (
      <div className="TeamComponent">
        <h1 className="m-3">Nashville SC Roster</h1>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
