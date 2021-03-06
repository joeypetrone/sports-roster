import React from 'react';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playersData';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import './TeamComponent.scss';

class TeamComponent extends React.Component {
  state = {
    players: [],
    formOpen: false,
    editPlayer: {},
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

  saveNewPlayer = (newPlayer) => {
    playersData.savePlayer(newPlayer)
      .then(() => {
        this.setState({ formOpen: false });
        this.getInfo();
      })
      .catch((err) => console.error('unable to save new player', err));
  }

  putPlayer = (playerId, updatedPlayer) => {
    playersData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false, editPlayer: {} });
      })
      .catch((err) => console.error('unable to update player', err));
  }

  editAPlayer = (player) => {
    this.getInfo();
    this.setState({ formOpen: false, editPlayer: {} });
    this.setState({ formOpen: true, editPlayer: player });
  }

  render() {
    const { players, formOpen, editPlayer } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer} editAPlayer={this.editAPlayer}/>);

    return (
      <div className="TeamComponent">
        <h1 className="m-3">Nashville SC Roster</h1>
        { formOpen
          ? ''
          : <button className="btn btn-warning mb-4" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus"></i> Player</button>
        }
        { formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer} player={editPlayer} putPlayer={this.putPlayer}/> : ''}
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
