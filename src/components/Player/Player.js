import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-3">
        <div className="card mb-4 mx-auto w-75 px-3 pt-3">
          <img className="card-img-top" src={player.imageUrl} alt="Player Card" />
          <div className="card-body pt-3">
            <h5 className="card-title font-weight-bold">{player.name}</h5>
            <p className="card-text">{player.position}</p>
            <button className="btn btn-danger" onClick={this.deletePlayerEvent}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
