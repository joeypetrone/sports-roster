import React from 'react';

import authData from '../../helpers/data/authData';
import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';

import './TeamComponent.scss';

class TeamComponent extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  render() {
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player}/>);

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
